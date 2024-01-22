// react imports
import { Suspense } from 'react';

// local imports
import ScrollToTop from 'helpers/ScrollToTop';
import GlobalStyles from 'styles/globals';

import PrivateOutlet from 'helpers/PrivateOutlet';
import PublicOutlet from 'helpers/PublicOutlet';

import Home from 'pages/Home';
import { Route, Routes } from 'react-router-dom';
import Login from 'pages/auth/Login';

function App() {
  return (
    <Suspense fallback=''>
      <ScrollToTop />
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route element={<PrivateOutlet />} path='/dashboard'></Route>

        {/* temporarily */}
        <Route element={<PublicOutlet />}>
          <Route path='/login' element={<Login />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
