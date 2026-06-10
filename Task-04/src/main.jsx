import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserContext from './context/UserContext.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginContext from './context/LoginContext.jsx';

createRoot(document.getElementById('root')).render(
      <BrowserRouter>
      <LoginContext>    
      <UserContext>
          <App />
      </UserContext>
      </LoginContext>
      </BrowserRouter>
)
