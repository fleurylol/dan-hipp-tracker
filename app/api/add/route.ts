import { cardSchema } from '@/lib/schemas/cardSchema';
import prisma from '@/prisma/client';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = cardSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  const { name, img } = body;
  const newCard = await prisma.card.create({
    data: {
      name: name,
      img: img,
    },
  });
  return NextResponse.json(newCard, { status: 201 });
}
