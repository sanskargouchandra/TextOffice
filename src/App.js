import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextBox from './components/TextBox';

function App() {
  return (
  <>
<Navbar title="TextOffices" aboutText="About Us"/>

<div className='container my-3'>

<TextBox heading = "Enter the text to analyze" />
</div>

  </>
  );
}

export default App;
