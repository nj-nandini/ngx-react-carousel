export interface ItemData {
  id: number;
  name: string;
  price: number;
  image: any;
  category: string;
}
export interface CarouselData {
  items: ItemData[];
  active: number;
}
