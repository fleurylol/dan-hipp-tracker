import { z } from 'zod';

export const cardSchema = z.object({
  name: z.string().min(1, 'A Name is required'),
  img: z.string().min(1, 'An image URL is required'),
});
