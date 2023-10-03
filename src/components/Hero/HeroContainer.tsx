import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
const HeroContainer = ({ children }: Props) => {
  return (
    <div className='flex flex-col md:flex-row md:gap-4 xl:max-h-[622px]'>
      {children}
    </div>
  );
};

export default HeroContainer;
