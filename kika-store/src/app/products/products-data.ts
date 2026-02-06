export const PRODUCTS = [
  { id: 1, name: 'Strawberry Fantasy Cake', description: 'A whimsical layered cake with strawberry cream and candy decorations', price: 350, image: 'images/pngegg (1).png', stock: 5, rating: 4 },
  { id: 2, name: 'Happy Birthday Fondant Cake', description: 'Colorful fondant-covered three-tier birthday cake', price: 500, image: 'images/pngegg (2).png', stock: 3, rating: 5 },
  { id: 3, name: 'Cupcake Tower Cake', description: 'Elegant pastel three-tier cake topped with a cherry cupcake', price: 650, image: 'images/pngegg (3).png', stock: 0, rating: 5 },
  { id: 4, name: 'Black Forest Cake', description: 'Classic chocolate cake with whipped cream and cherries', price: 280, image: 'images/pngegg (4).png', stock: 8, rating: 4 },
  { id: 5, name: 'Ice Cream Birthday Cake', description: 'Layered ice cream and sponge cake with sprinkles', price: 320, image: 'images/pngegg (5).png', stock: 0, rating: 3 },
  { id: 6, name: 'Berry Chocolate Mousse Cake', description: 'Rich chocolate mousse cake topped with fresh berries', price: 420, image: 'images/pngegg (6).png', stock: 4, rating: 5 },
  { id: 7, name: 'Red Berry Cheesecake', description: 'Creamy cheesecake with a red berry glaze and mixed berries', price: 380, image: 'images/pngegg (7).png', stock: 6, rating: 4 },
  { id: 8, name: 'Macaron Drip Cake', description: 'Chocolate drip cake decorated with macarons and meringues', price: 550, image: 'images/pngegg (8).png', stock: 2, rating: 5 },
  { id: 9, name: 'Maltesers Chocolate Cake', description: 'Double chocolate cake topped with Maltesers balls', price: 300, image: 'images/pngegg (9).png', stock: 0, rating: 4 },
  { id: 10, name: 'Chocolate Strawberry Ganache Cake', description: 'Smooth chocolate ganache cake garnished with fresh strawberries', price: 340, image: 'images/pngegg (10).png', stock: 7, rating: 4 },
];
export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  stock: number;
  rating?: number;
}