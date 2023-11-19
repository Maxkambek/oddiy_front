import { BrowserRouter } from "react-router-dom";
import Routers from "./Routers/Routers";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <>
      <ChakraProvider>
        <BrowserRouter>
          <Routers />
        </BrowserRouter>
      </ChakraProvider>
    </>
  );
}

export default App;
