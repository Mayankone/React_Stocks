
import './App.css';
import Nav from './components/nav';
import About from './pages/about';
import { Routes, Route } from 'react-router-dom';

function App() {

  const stocks = [
    {name: "Apple Inc.", symbol: "AAPL", lastPrice: 140.64, change: -0.280000000000001, high: 141.74, low: 140.35, open: 141.5},
    {name: "Microsoft Corporation", symbol: "MSFT", lastPrice: 64.98, change: 0.109999999999999, high: 65.45, low: 64.76, open: 65.12},
    {name: "Alphabet Inc.", symbol: "GOOGL", lastPrice: 835.14, change: -4.50999999999999, high: 844, low: 829.1, open: 842},
    {name: "Facebook, Inc.", symbol: "FB", lastPrice: 140.34, change: 0.810000000000002, high: 141.0244, low: 139.76, open: 140.08},
    {name: "Oracle Corporation", symbol: "ORCL", lastPrice: 44.65, change: -0.300000000000004, high: 45.09, low: 44.575, open: 44.91},
    {name: "Intel Corporation", symbol: "INTL", lastPrice: 36.16, change: -0.370000000000005, high: 36.78, low: 36.125, open: 36.58}
  ]
  return (
    <div className='App'>
      
      <Nav />
      <Routes>
        <Route path='/about' element={<About />}/>
      </Routes>

      <p id='title'>NAMES</p>
      <ol id='list'>
      <hr />
      <li>{stocks[0].name}</li>
      <li>{stocks[1].name}</li>
      <li>{stocks[2].name}</li>
      <li>{stocks[3].name}</li>
      <li>{stocks[4].name}</li>
      <li>{stocks[5].name}</li>
      </ol> 

      <ol id='list2'>
      <li>PRICES</li>
      <li>{stocks[0].lastPrice}</li>
      <li>{stocks[1].lastPrice}</li>
      <li>{stocks[2].lastPrice}</li>
      <li>{stocks[3].lastPrice}</li>
      <li>{stocks[4].lastPrice}</li>
      <li>{stocks[5].lastPrice}</li>
      </ol>

      <p id='title2'>HIGH</p>
      <ol id='list3'>
      <li>{stocks[0].high}</li>
      <li>{stocks[1].high}</li>
      <li>{stocks[2].high}</li>
      <li>{stocks[3].high}</li>
      <li>{stocks[4].high}</li>
      <li>{stocks[5].high}</li>
      </ol>

      <p id='title3'>LOW</p>
      <ol id='list4'>
      <li>{stocks[0].low}</li>
      <li>{stocks[1].low}</li>
      <li>{stocks[2].low}</li>
      <li>{stocks[3].low}</li>
      <li>{stocks[4].low}</li>
      <li>{stocks[5].low}</li>
      </ol>
    </div>
  );
}

export default App;
