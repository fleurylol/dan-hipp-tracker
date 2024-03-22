import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/prisma/client';

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  //auth check
  const card = await prisma.card.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  if (!card) {
    return NextResponse.json({ error: 'Card not found' }, { status: 404 });
  }
  card.collected = !card.collected;
  return NextResponse.json(
    await prisma.card.update({
      where: { id: card.id },
      data: { collected: card.collected },
    })
  );
}
