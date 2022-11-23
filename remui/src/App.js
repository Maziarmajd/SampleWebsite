import { Container,Button } from "@mui/material";
import { useEffect } from 'react';
import { ThemeProvider } from "@mui/system";
import theme from "./styles/theme";
import Appbar from "./components/appbar";
import Banner from "./components/banner";


function App() {
  document.title= "React Material UI - Home";
useEffect(() => {

}, []);

  return (
    <ThemeProvider theme={theme}>
    <Container
    maxWidth="xl"
    sx={{
      background: "#fff",
    }}
    >
      <Appbar />
      <Banner />
       {
        /*
        Promotions
        title
        Products
        footer
        searchbox
        appdrawer

        */
      }


    </Container>
    </ThemeProvider>

  );
}

export default App;
