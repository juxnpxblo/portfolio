import cursor from '../assets/cursor.png';

const Home = ({ content: { picture, button } }) => {
  return (
    <section
      id="home"
      className="section min-h-full flex justify-between items-center gap-8"
    >
      <div>
        <p className="md:text-xl mb-2 lg:mb-4">
          Hi <span className="wave inline-block w-min">👋</span>, my name is
        </p>
        <p className="text-2xl lg:text-4xl xl:text-5xl font-bold lg:mb-1 xl:mb-2">
          Juan Pablo Carrilho
        </p>
        <p className="text-dark text-2xl lg:text-4xl xl:text-5xl font-extralight mb-4 xl:mb-6">
          {`<Web Developer />`}
        </p>
        <p className="md:text-xl max-w-3xl mb-8 xl:mb-10">
          I'm a self-taught Web Developer based in Brazil, currently open to job
          opportunities 🔥. Feel free to get in touch.
        </p>
        <a
          href={button.link}
          target="_blank"
          rel="noreferrer"
          className="bg-dark-blue border hover:bg-blue transition-colors rounded-md w-max py-4 px-5"
        >
          {button.text}
        </a>
      </div>

      <div className="invisible md:visible absolute md:relative w-60 lg:w-80 2xl:w-[400px] front-layer-blue before:bg-blue before:border-r-2 before:border-t-2 before:border-light before:w-full before:h-full before:absolute before:left-[10%] before:bottom-[8%] before:z-0">
        <img
          src={picture.src}
          alt={picture.alt}
          className="relative border-b-2 border-l-2 border-light"
        />
      </div>

      <div className="absolute bottom-0 left-[45%] -rotate-12 slide-up z-10 ">
        <img src={cursor} alt="" width="50px" />
      </div>
    </section>
  );
};

export default Home;
