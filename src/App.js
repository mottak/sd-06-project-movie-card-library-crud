import React from "react";
import Provider from "./Context/Provider";
import { Routes } from "./components";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./Context/themeContext";
// import './style.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider>
        <Routes />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
