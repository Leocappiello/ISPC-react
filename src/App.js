import './App.css';
import Combobox from './components/combobox/Combobox';
import Datapicker from './components/datapicker/Datapicker';
import Input from './components/input/Input';

function App() {
 

  return (
    <div className="App">
      <Datapicker date="2022-01-02"/>
      <Combobox/>
      <Input/>
    </div>
  );
}

export default App;
