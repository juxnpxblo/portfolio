import { useState } from 'react';

import * as C from './components/exports';
import * as consts from './constants/exports';

const App = () => {
  const [showingNav, setShowingNav] = useState(true);
  const [showingMenu, setShowingMenu] = useState(false);

  return (
    <>
      <C.Navbar
        show={!!showingNav}
        showMenu={!!showingMenu}
        setShowingMenu={setShowingMenu}
        items={consts.NAV_ITEMS}
      />
      <C.Content showNav={setShowingNav} showMenu={setShowingMenu}>
        <C.Home content={consts.HOME} />
        <C.Skills content={consts.SKILLS} />
        <C.Projects content={consts.PROJECTS} />
        <C.Socials list={consts.SOCIALS} />
        <div className="invisible sm:visible fixed bottom-0 right-[3%] z-10 flex flex-col w-min items-center gap-2">
          <span className="absolute rotate-90 pr-[330px]">
            juanpablocarrilho@hotmail.com
          </span>
          <div className="bg-dark w-px h-[100px]"></div>
        </div>
        <C.Footer content={consts.FOOTER} />
      </C.Content>
    </>
  );
};

export default App;
