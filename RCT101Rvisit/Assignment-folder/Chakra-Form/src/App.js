import { Container } from '@chakra-ui/react'
import './App.css';

import ChakraForm from './Components/ChakraForm';

function App() {
  return (
    <div className="App">
      <Container maxW="xl">
         <ChakraForm/>
      </Container>
    </div>
  );
}

export default App;
