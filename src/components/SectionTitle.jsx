const SectionTitle = ({ title }) => {
  return (
    <div className="relative w-max">
      <div className="before:bg-blue before:w-full before:h-[60%] before:absolute before:left-[4%] before:top-[50%]">
        <h2 className="font-semibold text-3xl lg:text-4xl xl:text-5xl relative z-10">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default SectionTitle;
