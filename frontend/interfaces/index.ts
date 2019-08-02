// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';

export type User = {
  id: number;
  name: string;
};

export type BankNote = {
  id: string;
  date: string;
  price: number;
  description: string;
  balance: Boolean;
};

export interface Columns {
  [key: string]: string[];
}

export interface BankNotes {
  [key: string]: BankNote;
}

export interface ModifyObject {
  bankNotes: BankNotes;
  totals: number[];
  columns: Columns;
  titles: string[];
  bankNote: BankNote;
}
