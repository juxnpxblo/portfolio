import { useState, useRef } from 'react';

const Content = ({ showNav, showMenu, children }) => {
  const [scrollTop, setScrollTop] = useState(0);

  const ref = useRef(null);

  const onScroll = () => {
    showMenu(false);

    if (ref.current.scrollTop < scrollTop) showNav(true);
    else showNav(false);

    setScrollTop(
      ref.current.scrollTop >= 0 ? ref.current.scrollTop : scrollTop
    );
  };

  return (
    <div
      ref={ref}
      onScroll={onScroll}
      className="bg-bg relative flex flex-col w-full h-full max-w-[1920px] overflow-y-scroll overflow-x-hidden scroll-smooth"
    >
      {children}
    </div>
  );
};

export default Content;
