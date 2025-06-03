export interface Order {
  id: number;
  customer: string;
  items: string[];
  status: 'pending' | 'completed';
}
