import './App.css';
import MainLeft from './main/MainLeft/MainLeft';
import MainRight from './main/MainRight/MainRight';
import Topbar from './topbar/Topbar';

function App() {
  return (
    <div className="App">
      <Topbar />
      <div style={{display:'flex',justifyContent:'space-between'}}>
      <MainLeft />
      <MainRight />
      </div>
    </div>
  );
}

export default App;
