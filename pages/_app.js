/* eslint-disable react/prop-types */
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import NavBar from '../components/nav/NavBar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [token, setTokenState] = useState(null);
  const router = useRouter();

  useEffect(() => {
    setTokenState(localStorage.getItem('auth_token', '') || '');
  }, []);

  useEffect(() => {
    if (!['/login', '/register'].includes(router.route) && token !== null) {
      if (!token) {
        router.push('/login');
      }
    }
  }, [router, token]);

  const setToken = (newToken) => {
    localStorage.setItem('auth_token', newToken);
    setTokenState(newToken);
  };

  const newPageProps = { ...pageProps, token, setToken };

  if (token === null) {
    return 'Loading...';
  }

  return (
    <>
      <NavBar token={token} setToken={setToken} />
      <Component {...newPageProps} />
    </>
  );
}

export default MyApp;
