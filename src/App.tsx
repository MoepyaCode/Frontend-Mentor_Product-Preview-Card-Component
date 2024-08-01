import React from 'react'
import { assets } from './assets'
import { Container, Main, Wrapper } from './components'


export default function App() {
  const [width, setWidth] = React.useState(window.innerWidth)

  function screenTypeImage() {
    return width > 640 ? assets.desktop : assets.mobile
  }

  React.useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <Main className='bg-cream px-[16px] py-[28px] flex min-w-full sm:grid sm:place-items-center'>
      
      <Container className='bg-white rounded-xl overflow-hidden flex flex-col sm:flex-row flex-nowrap sm:max-w-[600px] sm:max-h-[400px]'>
        <img className='sm:w-[50%]' src={screenTypeImage()} />

        <Wrapper className='relative p-[24px] sm:p-[32px] flex-grow-[1] flex flex-col flex-nowrap justify-between gap-4 sm:gap-0'>
          <h2 className='font-montserrat text-aurometal-saurus tracking-[5px] text-[12px]'>PERFUME</h2>

          <h1 className='font-fraunces font-bold text-gunmetal text-[32px] leading-[1]'>Gabrielle Essence Eau De Parfum</h1>

          <p className='font-montserrat text-aurometal-saurus text-[14px] '>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>

          <div className='flex flex-nowrap justify-start items-center gap-[19px]'>
            <span className='font-fraunces font-bold text-[32px] text-deep-aquamarine-default'>$149.99</span>
            <span className='line-through text-aurometal-saurus font-medium font-montserrat text-[13px]'>$169.99</span>
          </div>

          <button className='flex flex-row flex-nowrap justify-center items-center min-h-[48px] bg-deep-aquamarine-default hover:bg-deep-aquamarine-hover transition-colors duration-300 rounded-xl gap-2'>
            <img src={assets.icon} alt="cart icon" />
            <span className='font-montserrat font-bold text-white'>Add to cart</span>
          </button>
        </Wrapper>
      </Container>

    </Main>
  )
}
