import BottomFixedContainer from './BottomFixedContainer';
import Email from './Email';
import SOCIALS from '../constants/SOCIALS';

const Socials = () => {
  return (
    <div className="fade-in">
      <BottomFixedContainer additionalClasses="left-[3%]">
        {SOCIALS.map(({ link, Icon }) => {
          return (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              key={link}
              className="hover:-translate-y-1 transition-all duration-300"
            >
              <Icon size={38} />
            </a>
          );
        })}
        <div className="px-line-y-dark transition-all"></div>
      </BottomFixedContainer>
      <Email />
    </div>
  );
};

export default Socials;
