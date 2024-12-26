import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css'

import { SmallHeader } from './components/SmallHeader';
import { DefaultHeader } from './components/DefaultHeader';
import { ProfileHeader } from './components/ProfileHeader';

import { Home } from './components/pages/Home';
import { Catalog } from './components/pages/Catalog';

import { Footer } from './components/Footer';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);

root.render(
  <React.Fragment>
    <DefaultHeader />
    <Home />
    <Footer />
  </React.Fragment>
);

// if (!localStorage.getItem('status')) {
//   localStorage.setItem('status', 'guest');
//   root.render(
//     <React.Fragment>
      
//     </React.Fragment>
//   );
// } else if (localStorage.getItem('status') === 'guest') {
//   root.render(
//     <React.Fragment>
      
//     </React.Fragment>
//   );
// } else if (localStorage.getItem('status') === 'user') {
//   root.render(
//     <React.Fragment>
      
//     </React.Fragment>
//   );
// } else {
//   console.log(`Error!\nstatus: ${localStorage.getItem('status')}`);
// }