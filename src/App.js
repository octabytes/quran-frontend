import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";

import TopBar from "./components/TopBar";
import AyahList from "./components/AyahList";
import Footer from "./components/Footer";

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TopBar />
      <AyahList />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
