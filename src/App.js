/** @format */

import { ThemeProvider } from "styled-components";
import Login from "./pages/Login";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Theme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      {/* <div>in progress...</div> */}
      <Login />
    </ThemeProvider>
  );
}

export default App;
