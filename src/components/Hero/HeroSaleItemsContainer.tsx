import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
const HeroSaleItemsContainer = ({ children }: Props) => {
  return <div className='w-1/2 flex flex-col gap-4 '>{children}</div>;
};

export default HeroSaleItemsContainer;
