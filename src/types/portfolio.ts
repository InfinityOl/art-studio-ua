export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  uid: string;
  email: string;
  isAdmin: boolean;
}