import { IProduct } from '../models';

interface ProductProps {
  product: IProduct;
}

export function Product({ product }: ProductProps) {
  return (
    <div className='border py-2 px-4 flex flex-col items-center mb-2'>
      <img src={product.image} alt={product.title} className='w-1/6' />
      <p>{product.title}</p>
      <p className='font-bold'> {product.price}</p>
      {/* <p>{product.description}</p> */}
    </div>
  );
}
