
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './components/common/GlobalStyles.styles';
import { AppRoutes } from './routes/AppRoutes';

function App() {


  return (
    <BrowserRouter>
      <GlobalStyle />
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
