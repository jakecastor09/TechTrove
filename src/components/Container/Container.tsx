import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
const Container = ({ children }: Props) => {
  return (
    <div className='container mx-auto overflow-hidden py-4 px-4 md:px-12 md:py-8 lg:px-20 lg:py-12  xl:px-28'>
      {children}
    </div>
  );
};

export default Container;
