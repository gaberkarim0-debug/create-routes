import { createRoot } from 'react-dom/client'
import './index.css'
import Mainstore from './Stores/Mainstore.jsx'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <App/>
    </BrowserRouter>
)
