import Header from '/src/components/header/Header.jsx';
import { Outlet } from 'react-router';

export const Root = () => {
  return (
    <>
      <Header />  
      <Outlet />
    </>
  );
}

