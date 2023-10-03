import iphoneImg2 from '../../assets/iphone-sm.png';
import iphoneImg from '../../assets/iphone-min.png';
const HeroTrending = () => {
  return (
    <div className='bg-black py-4 relative md:w-1/2'>
      <img src={iphoneImg2} alt='' className='mx-auto md:hidden' />
      <img src={iphoneImg} alt='' className='mx-auto hidden md:block' />
      <div className='absolute left-5 top-10 text-white md:top-24'>
        <p className='uppercase  text-xs tracking-widest'>Trending</p>
        <h1 className='font-bold text-2xl w-48 md:w-2/3 md:leading-normal md:text-4xl'>
          New IPhone Release
        </h1>
        <p className='max-w-xs text-xs w-28 leading-relaxed mt-2 xl:w-2/3 xl:text-sm xl:leading-loose'>
          Celebrate September with a new Iphone 15 pro max
        </p>
        <button className='uppercase py-3 px-4 bg-green text-xs mt-2 xl:mt-4'>
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default HeroTrending;
