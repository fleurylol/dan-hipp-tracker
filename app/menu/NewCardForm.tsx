import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React from 'react';

const NewCardForm = () => {
  return (
    <>
      <form className="space-y-3">
        <Input />
        <Input />
        <Button>Add</Button>
      </form>
    </>
  );
};

export default NewCardForm;
