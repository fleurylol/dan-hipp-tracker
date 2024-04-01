import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import { Plus } from 'lucide-react';


import React from 'react';
import NewCardForm from './NewCardForm';

const AddCard = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Plus />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-stone-100">Add A Card</SheetTitle>
          <SheetDescription>
            <NewCardForm />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default AddCard;
