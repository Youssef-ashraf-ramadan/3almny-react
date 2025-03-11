import ReactDOM from 'react-dom/client'
import './index.css'
import './i18n/i18n.js'
import { Provider } from 'react-redux';
import store from './redux/app/store.js';
import App from './App.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <App />
</Provider>,
)
