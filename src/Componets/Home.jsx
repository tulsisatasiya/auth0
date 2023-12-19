import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Home = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <>
      <div>
        {isAuthenticated ? (
          <>
            <button onClick={() => logout({ returnTo: window.location.origin })}>
              LogOut
            </button>
            <h2>Welcome to the website</h2>
          </>
        ) : (
          <>
            <button onClick={() => loginWithRedirect()}>LogIn</button>
            {/* <h2>You are not logged in</h2> */}
          </>
        )}
      </div>
    </>
  );
};

export default Home;
