import { AiOutlineArrowRight } from 'react-icons/ai';
import watch2 from '../../assets/watch-min-2.png';
import watch from '../../assets/watch-min.png';
const HeroPromo = () => {
  return (
    <div className='w-1/2 bg-lightGray flex flex-col items-center justify-center'>
      <div className='text-center flex flex-col items-center px-4 space-y-2'>
        <h1 className='text-green uppercase text-xs'>Promo</h1>
        <p className='text-black text-xs uppercase font-bold xl:text-xl'>
          {' '}
          Smart Fitness Tracker Watch
        </p>
        <button className='flex items-center text-sm font-bold xl:text-md'>
          Shop Now
          <span className='ml-2'>
            <AiOutlineArrowRight color='green' />
          </span>
        </button>
      </div>
      <img src={watch} alt='' className='mx-auto xl:hidden' />
      <img src={watch2} alt='' className='mx-auto hidden xl:block' />
    </div>
  );
};

export default HeroPromo;
