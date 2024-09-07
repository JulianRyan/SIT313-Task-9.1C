import Header from './routes/Header.jsx'
import Home from './routes/Home.jsx'
import LoginAccount from './routes/LoginAccount.jsx'
import CreateAccount from './routes/CreateAccount.jsx'
import 'semantic-ui-css/semantic.min.css'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Header />}>
        <Route path='login' element={<LoginAccount />} />
        <Route path='signup' element={<CreateAccount />} />
      </Route>
    </Routes>
  );
}

export default App;
