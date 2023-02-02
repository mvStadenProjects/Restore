export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  picture: string;
  //Question mark makes property optional
  type?: string;
  brand: string;
  quantity?: number;
}
