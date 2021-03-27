// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <img src="/images/list.svg"/>
//       </header>
//     </div>
//   );
// }

// export default App;

import './App.css';
import Main from './Main';
import Features from './Features';
import Footer from './Footer';
import Reason from './Reason';

function App() {
  return (
    <div>
      {/* <Header/> */}
      <Main/>
      <Features/>
      <Reason/>
      <Footer/>
    </div>

  );
}

export default App;
