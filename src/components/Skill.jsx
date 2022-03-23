const Skill = ({ children, icon, name, odd }) => {
  return (
    <div
      className={`w-full ${
        odd && 'lg:h-[400px] lg:flex lg:flex-col lg:justify-end'
      }`}
    >
      <div className="w-[130px] mx-auto relative">
        <img
          src={icon}
          alt=""
          className="transition-all duration-1000 hover:grayscale"
        />
        <h3 className="text-lg font-medium text-center mt-1.5">{name}</h3>
        {children}
      </div>
    </div>
  );
};

export default Skill;
