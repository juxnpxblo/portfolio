import HOME from '../constants/HOME';
import cursor from '../assets/cursor.png';

const Home = () => {
  const { name, subtitle, description } = HOME.text;
  const { src: imgSrc, alt: imgAlt } = HOME.image;
  const { link: btnLink, text: btnText } = HOME.button;

  return (
    <section
      id="home"
      className="section min-h-full flex justify-between items-center gap-20"
    >
      <div>
        <p className="md:text-xl mb-2 lg:mb-4 home-1 transition-all">
          Olá <span className="wave inline-block w-min">👋</span>, eu me chamo
        </p>
        <p className="text-2xl lg:text-4xl xl:text-5xl font-bold lg:mb-1 xl:mb-2 home-2 transition-all">
          {name}
        </p>
        <p className="text-dark text-2xl lg:text-4xl xl:text-5xl font-extralight mb-4 xl:mb-6 home-3 transition-all">
          {subtitle}
        </p>
        <p className="md:text-xl max-w-3xl mb-8 xl:mb-10 home-4">
          {description}
        </p>
        <div className="home-5 transition-all">
          <a
            href={btnLink}
            target="_blank"
            rel="noreferrer"
            className="bg-blue border hover:bg-dark-blue rounded-md w-max py-4 px-5 transition-colors"
          >
            {btnText}
          </a>
        </div>
      </div>

      <div className="invisible md:visible absolute md:relative w-60 lg:w-80 2xl:w-[400px] front-layer-blue before:bg-blue before:border-r-2 before:border-t-2 before:border-light before:w-full before:h-full before:absolute before:left-[10%] before:bottom-[8%] before:z-0 hover:before:left-[2px] hover:before:bottom-[2px] before:transition-all slide-left transition-all">
        <img
          src={imgSrc}
          alt={imgAlt}
          className="relative border-b-2 border-l-2 border-light"
        />
      </div>

      <div className="absolute bottom-0 left-[45%] -rotate-12 slide-up z-10">
        <div className="transition-all fade-in-2">
          <img src={cursor} alt="" width="50px" />
        </div>
      </div>
    </section>
  );
};

export default Home;
