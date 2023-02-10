import React from 'react';
import { SignUp } from './auth';
import {useStore} from './store/store';
import { shallow } from 'zustand/shallow';
import { HomePage } from './homePage';
import './App.css';

const selector = (state: {
  userName: any; signedIn: any; setSignedIn: any; currentPage: any; setCurrentPage: any; 
}) => ({
  userName: state.userName,
  signedIn: state.signedIn,
  setSignedIn : state.setSignedIn,
  currentPage: state.currentPage,
  setCurrentPage: state.setCurrentPage,
});

export const Controller = () => {
  const { userName, currentPage } = useStore(selector, shallow);
  switch (currentPage) {
    case 'signUp':
      return <SignUp />;
    case 'home':
      return <HomePage />;
    default:
      return <div>404</div>;
  }
};

function App() {
  return (
    <>
      <Controller />
    </>
  );
}

export default App;
