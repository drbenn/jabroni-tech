import './hero.css';

const Hero = () => {
  return (
    <main id="hero" className="w-full flex justify-center mt-24 mb-72 cursor-default select-none">
      <section className="relative z-30 flex flex-col w-fit">
        <div className="leading-none text-[22vw] sm:text-[7rem] md:text-[10rem] lg:text-[12rem] 
        font-semibold flex flex-row justify-center mt-64">
          JABRONI
        </div>
        <div className="leading-none text-2xl md:text-4xl font-light flex justify-end translate-y-[-0.25rem] md:translate-y-[-0.75rem] translate-x-[-0.5rem]">
          tech
        </div>
        <div className='mt-10 text-xl sm:text-2xl font-medium text-indigo-100 glow-text'>
        For Jabronis. By Jabronis.
        </div>

      </section>
      <div className='absolute left-0 sm:left-[15vw] overflow-hidden' style={{ top: '2rem'}}>
        <div className='absolute z-20 gradient-background overflow-hidden w-[30rem] h-[42rem]'></div>
        <div className='relative z-10'>
          <img 
            src="https://utfs.io/f/853a6e36-1b3d-4778-bd7f-651a425d01c7-c9hink.webp"
            alt="a purple jabroni" 
            style={{ width: '30rem', height: '42rem' }}
            className=''
          />
        </div>
      </div>


    </main>
  )
}

export default Hero;