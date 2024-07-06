import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/textform';
import About from './components/About';
import react, { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type) => {
    setAlert({
      msg : message,
      type:type 
    })
    setTimeout(() => {
      setAlert(null)
    },1500
    )
  }
  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');
  }
  const togglemode = (cls) => {
    removeBodyClasses();
    //console.log(cls);
    document.body.classList.add('bg-'+ cls);
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
     // showAlert('Dark mode has been enabled', 'success');
     // document.title='TextUtils-Dark'
    }
   else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      //showAlert('Light mode has been enabled', 'success');
      //document.title='TextUtils-Light'
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} togglemode={togglemode} />
      <Alert alert={alert} mode={mode} />
      <div className="container my-3">
        <Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
      </div>
    </>
  );
}

export default App;
