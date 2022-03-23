import { useState } from 'react';
import * as C from './components/exports';

const App = () => {
  const [showingNav, setShowingNav] = useState(true);
  const [showingMenu, setShowingMenu] = useState(false);

  return (
    <>
      <C.Navbar
        show={!!showingNav}
        showMenu={!!showingMenu}
        setShowingMenu={setShowingMenu}
      />
      <C.Content showNav={setShowingNav} showMenu={setShowingMenu}>
        <C.Home />
        <C.Skills />
        <C.Projects />
        <C.Socials />
        <C.Footer />
      </C.Content>
    </>
  );
};

export default App;
