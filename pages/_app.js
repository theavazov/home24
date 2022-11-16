import "../styles/globals.css";
import "animate.css";
import LoginModalProvider from "../contexts/LoginContext";
import UserProvider from "../contexts/UserContext";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <LoginModalProvider>
        <Component {...pageProps} />
      </LoginModalProvider>
    </UserProvider>
  );
}

export default MyApp;
