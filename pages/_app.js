import "../styles/globals.css";
import "animate.css";
import LoginModalProvider from "../contexts/LoginContext";
import UserProvider from "../contexts/UserContext";
import { useRouter } from "next/router";
import { useEffect } from "react";

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
