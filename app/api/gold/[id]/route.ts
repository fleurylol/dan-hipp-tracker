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
  card.gold = !card.gold;
  return NextResponse.json(
    await prisma.card.update({
      where: { id: card.id },
      data: { gold: card.gold },
    })
  );
}
