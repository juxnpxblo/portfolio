import classNames from 'classnames';
import NAVBAR_ITEMS from '../constants/NAVBAR_ITEMS';

const Navbar = ({ show }) => {
  return (
    <nav
      className={`bg-bg transition-transform duration-300 fixed top-0 w-full max-w-[1920px] mx-auto z-20 ${
        !show && '-translate-y-20'
      } `}
    >
      <div className="flex items-center justify-center pt-5 pb-2 sm:pb-3.5 px-4 sm:px-8">
        <ul className="flex">
          {NAVBAR_ITEMS.map(({ text, to }, i) => {
            const className = classNames(
              `nav-item transition-all`,
              `navbar-${i + 1}`
            );
            return (
              <li className={className} key={to}>
                <a href={to} className="hover:text-dark transition-colors">
                  {text}
                </a>
                <span className="mx-4 select-none text-dark">•</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="bg-dark h-px w-full mx-auto"></div>
    </nav>
  );
};

export default Navbar;
