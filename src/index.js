import { render } from "react-dom";
import App from "./components/App";
import { AuthContextProvider } from "./store/auth-context";

render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>,
  document.getElementById("root")
);
