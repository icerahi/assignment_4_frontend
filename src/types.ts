export interface IBook {
  _id: string;
  title: string;
  genre: string;
  author: string;
  isbn: string;
  description: string;
  copies: number;
  available: boolean;
}

export interface IBorrowSummary {
  totalQuantity: number;
  book: {
    title: string;
    isbn: string;
  };
}
