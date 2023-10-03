interface Props {
  image: string;
  name: string;
  price: number;
}

const HeroSaleItem = ({ image, name, price }: Props) => {
  return (
    <div className='bg-lightGray p-4 relative h-1/2'>
      <div className='absolute text-black mt-2'>
        <h1 className='font-bold text-black text-xs w-12 uppercase xl:text-[16px] xl:leading-snug'>
          {name}
        </h1>
        <p className='text-[8px] mt-2 xl:text-[12px]'>From ${price}</p>
      </div>
      <img src={image} alt='' className='mx-auto ' />
    </div>
  );
};

export default HeroSaleItem;
