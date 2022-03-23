import classNames from 'classnames';

const BottomFixedContainer = ({ children, additionalClasses }) => {
  const className = classNames(
    additionalClasses,
    'invisible sm:visible fixed bottom-0 z-10 flex flex-col w-min items-center gap-2'
  );
  return <div className={className}>{children}</div>;
};

export default BottomFixedContainer;
