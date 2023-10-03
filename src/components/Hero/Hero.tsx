import headset from '../../assets/headset-min.png';
import monitor from '../../assets/monitor-min.png';
import speaker from '../../assets/speaker-min.png';
import Container from '../Container/Container';
import HeroSaleItem from './HeroSaleItem';
import HeroSaleItemsContainer from './HeroSaleItemsContainer';
import HeroPromo from './HeroPromo';
import HeroTrending from './HeroTrending';
import HeroContainer from './HeroContainer';

const Hero = () => {
  return (
    <section id='hero'>
      <Container>
        <HeroContainer>
          <HeroTrending />
          <div className='flex  gap-4 mt-8 md:w-1/2 md:mt-0'>
            <HeroPromo />
            <HeroSaleItemsContainer>
              <HeroSaleItem
                image={headset}
                name={'Gaming Headset'}
                price={30.0}
              />
              <HeroSaleItem
                image={speaker}
                name={'Waterproof Speaker'}
                price={30.0}
              />
              <HeroSaleItem image={monitor} name={'LCD Monitor'} price={30.0} />
            </HeroSaleItemsContainer>
          </div>
        </HeroContainer>
      </Container>
    </section>
  );
};

export default Hero;
