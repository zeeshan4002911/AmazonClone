interface ICarousel {
  id: number;
  src: string;
  alt: string;
}
interface IProduct {
  id: number;
  name: string;
  img: string;
  description: string;
  discount: number;
  star: number;
  ratings: number;
  answers: number;
  price: number;
  actual_price: number;
  qty?: number;
}

export { ICarousel, IProduct };
