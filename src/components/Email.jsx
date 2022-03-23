import { useState } from 'react';
import EMAIL from '../constants/EMAIL';
import { BottomFixedContainer } from './exports';
import { MdContentCopy, MdCheck } from 'react-icons/md';

const Email = () => {
  const [switchedIcon, setSwitchedIcon] = useState(false);
  const Icon = switchedIcon ? MdCheck : MdContentCopy;

  const copyEmailToClipboard = () => {
    setSwitchedIcon(true);
    setTimeout(() => setSwitchedIcon(false), 3000);
    navigator.clipboard.writeText(EMAIL);
  };

  return (
    <div onClick={copyEmailToClipboard}>
      <BottomFixedContainer additionalClasses="right-[3%] group cursor-pointer">
        <Icon
          size={22}
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        />
        <span className="writing-y-lr">{EMAIL}</span>
        <div className="px-line-y-dark"></div>
      </BottomFixedContainer>
    </div>
  );
};

export default Email;
