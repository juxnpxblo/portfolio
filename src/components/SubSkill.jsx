import classNames from 'classnames';

const SubSkill = ({ name, Icon, offset }) => {
  const className = classNames(
    `text-dark hover:text-light transition-colors absolute before:bg-darker before:w-full before:h-[70%] before:absolute before:left-1 before:top-2 ${
      Icon && 'flex items-center justify-center'
    }`,
    offset.x,
    offset.y
  );

  return (
    <div className={className}>
      {Icon && <Icon className="absolute bottom-7" size={26} />}
      <h4 className="font-light relative z-10">{name}</h4>
    </div>
  );
};

export default SubSkill;
