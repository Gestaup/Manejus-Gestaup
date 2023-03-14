import {BrowserRouter} from 'react-router-dom'
import RoutesApp from './routes';

import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import AuthProvider from './contexts/auth'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const colors = {
  manejus:{
    gardian: 'linear-gradient(rgb(150, 169, 247),transparent)',
    azul: '#104665',
    verde: '#11a34b',
    cinza: '#c6c6c6',
    preto: '#000',
    branco: '#fff',
    clara:'#f2f2f2',
    red: '#ff0000'
  },
}

const theme = extendTheme({colors})

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <AuthProvider>
            <ToastContainer autoClose={3000}/>
            <RoutesApp/>
        </AuthProvider>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
