import classNames from 'classnames';

const SplashAnimation = () => {
  return (
    <main id="splash-animation" className="splash-duration absolute top-0 left-0 z-50 w-screen h-screen flex justify-center">
      <section className="flex flex-col w-fit">
        {
          [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26].map( (item, index) => {
            // Define your condition
            const isEven = index % 2 === 0;

            // Conditionally set the class name
            const itemClassName = classNames('h-10 w-screen flex items-center justify-center text-white', {
                'bg-zinc-800': !isEven,
                'bg-purple-900': isEven,
            });
            return (
              // <div key={index} className="bg-blue-500 h-40 w-screen flex items-center justify-center text-white">
              //   {item}
              // </div>
              <div key={index} className={itemClassName}>
              {item}
            </div>
            )
          })
        }
        {/* <div className="leading-none text-[22vw] sm:text-[9rem] md:text-[11rem] font-semibold flex flex-row justify-center">
          JABRONI
        </div>
        <div className="leading-none text-4xl sm:text-4xl font-semibold flex justify-end">
          tech
        </div> */}
      </section>
    </main>
  )
}

export default SplashAnimation;