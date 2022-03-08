import { RiGithubLine } from 'react-icons/ri';

const Project = ({
  project: { name, ghLink, preview, stacks, description },
  even,
}) => {
  return (
    <div className={`mb-14 lg:flex ${even && 'lg:flex-row-reverse'}`}>
      <div className="text-xl font-bold text-center mb-4 visible lg:invisible lg:absolute flex items-center justify-center">
        <h3>{name}</h3>{' '}
        <a href={ghLink} target="_blank" rel="noreferrer">
          <RiGithubLine className="text-blue w-[28px]" />
        </a>{' '}
      </div>
      <div className="mb-3">
        <div
          className={`w-full lg:w-[450px] xl:w-[600px] 2xl:w-[800px] relative before:bg-blue before:-bottom-2 before:w-full before:h-full before:absolute ${
            even ? '-left-1 before:-right-2' : '-right-1 before:-left-2'
          }`}
        >
          <img
            src={preview}
            alt="project preview"
            className="relative z-10 border"
          />
        </div>
        <div
          className={`bg-light w-full h-px absolute ${
            even ? '-ml-1 left-0' : 'ml-1'
          }`}
        ></div>
      </div>
      <div
        className={`lg:flex lg:flex-col lg:justify-around ${
          even ? 'lg:mr-4' : 'lg:ml-4'
        }`}
      >
        <div>
          <div
            className={`text-2xl xl:text-4xl font-bold flex items-center xl:gap-2 mb-1 absolute invisible lg:visible lg:relative ${
              even ? 'text-left justify-start' : 'text-right justify-end'
            }`}
          >
            {even && <h3>{name}</h3>}
            <a href={ghLink} target="_blank" rel="noreferrer">
              <RiGithubLine className="text-blue hover:text-dark-blue transition-colors w-[32px]" />
            </a>
            {!even && <h3>{name}</h3>}
          </div>
          <div
            className={`text-dark text-[10px] sm:text-xs xl:text-sm text-center mb-4  ${
              even ? 'lg:text-left' : 'lg:text-right'
            }`}
          >
            {stacks.map((stack) => (
              <p className="stack inline" key={stack}>
                {stack}
                <span className="mx-1">•</span>
              </p>
            ))}
          </div>
        </div>
        <div className="mb-5 mx-4">
          <div
            className={`w-full relative before:bg-blue before:rounded-xl before:w-full before:h-full before:absolute before:-bottom-1 ${
              even ? '-right-0.5 before:-left-1' : '-left-0.5 before:-right-1'
            }`}
          >
            <p className="bg-bg rounded-xl border border-blue text-xs md:text-sm 2xl:text-base py-2 px-3 relative z-10">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
