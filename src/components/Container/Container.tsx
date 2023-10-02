import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
const Container = ({ children }: Props) => {
  return (
    <div className='container mx-auto overflow-hidden py-4 px-4 md:px-12 lg:px-20 xl:px-28'>
      {children}
    </div>
  );
};

export default Container;
