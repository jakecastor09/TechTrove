import { CiLocationOn } from 'react-icons/ci';
import { BsPerson } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';
const Heading = () => {
  return (
    <header>
      <div className='text-white text-xs bg-black flex items-center p-4 space-x-2 md:px-12 lg:px-20 xl:px-28'>
        <CiLocationOn /> <span>123 Main Street Nueva Ecija</span>
      </div>
      <nav className='p-4 flex justify-between border-b md:px-12 lg:px-20 xl:px-28'>
        <div className='text-black font-bold text-lg cursor-pointer md:text-2xl lg:text-3xl xl:text-4xl'>
          TechTrove
        </div>
        <div className='flex divide-x-2 items-center'>
          <div className='px-2 flex items-center space-x-2 text-xs uppercase cursor-pointer'>
            <span className='text-black'>Sign In</span>
            <div>
              <BsPerson size='16px' />
            </div>
          </div>
          <div className='pl-2 relative cursor-pointer'>
            <div className='w-1 h-1 rounded-full bg-green absolute -top-1 right-0 '></div>
            <AiOutlineShoppingCart />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Heading;
