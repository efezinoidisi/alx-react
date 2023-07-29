import { getFooterCopy, getFullYear } from './utils';
import './App.css';

function App() {
  const currentYear = getFullYear();
  const footer = getFooterCopy(true);
  return (
    <div className='App'>
      <div className='App-header'>
        <h1>School dashboard</h1>
      </div>
      <div className='App-body'>
        <p>Login to access the full dashboard</p>
      </div>

      <div className='App-footer'>
        <p>{`Copyright ${currentYear} - ${footer}`}</p>
      </div>
    </div>
  );
}

export default App;
