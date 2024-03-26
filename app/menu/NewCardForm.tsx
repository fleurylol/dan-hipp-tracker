'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cardSchema } from '@/lib/schemas/cardSchema';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
import axios from 'axios';
import ErrorMessage from '@/components/ErrorMessage';
import Spinner from '@/components/Spinner';

type CardFormData = z.infer<typeof cardSchema>;

const NewCardForm = () => {
  const [error, setError] = useState('');
  const [isSumbitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CardFormData>({
    resolver: zodResolver(cardSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    setSubmitting(true);
    try {
      await axios.post('api/add', data);
    } catch (error) {
      setSubmitting(false);
    }
  });
  return (
    <>
      <form className="space-y-3" onSubmit={onSubmit}>
        <Input placeholder="Name" {...register('name')} />
        <ErrorMessage>{errors.name?.message}</ErrorMessage>
        <Input placeholder="Image Url" {...register('img')} />
        <ErrorMessage>{errors.img?.message}</ErrorMessage>
        <Button type="submit" disabled={isSumbitting}>
          Add{''}
          {isSumbitting && <Spinner />}
        </Button>
      </form>
    </>
  );
};

export default NewCardForm;
