
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './components/common/GlobalStyles.styles';
import { UserContextProvider } from './contexts/userContext';

import { AppRoutes } from './routes/AppRoutes';

function App() {


  return (
    <BrowserRouter>
      <GlobalStyle />
      <UserContextProvider>
      <AppRoutes />
      </UserContextProvider>
    </BrowserRouter>
  )
}

export default App
