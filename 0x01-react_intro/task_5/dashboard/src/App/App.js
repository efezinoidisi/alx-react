import { getFooterCopy, getFullYear } from '../utils/utils';
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
        <label htmlFor='email'>
          Email
          <input type='email' id='email' name='email' />
        </label>

        <label htmlFor='password'>
          Password
          <input type='password' name='password' id='password' />
        </label>
        <button type='submit'>OK</button>
      </div>

      <div className='App-footer'>
        <p>{`Copyright ${currentYear} - ${footer}`}</p>
      </div>
    </div>
  );
}

export default App;
