import { Container,Button } from "@mui/material";
import { useEffect } from 'react';


function App() {
  document.title= "React Material UI - Home";
useEffect(() => {

}, []);

  return (
    <Container
    maxWidth="xl"
    sx={{
      background: "#fff",
    }}
    >
      {
        /*
        Appbar
        Banner
        Promotions
        title
        Products
        footer
        searchbox
        appdrawer

        */
      }
      <Button variant="contained">test</Button>

    </Container>

  );
}

export default App;
