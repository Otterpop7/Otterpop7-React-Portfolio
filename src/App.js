import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import { useState } from 'react';


function App() {
    const [selectedPage, setSelectedPage] = useState(0);
  return (
    <>
    <Navbar setPage={setSelectedPage}/>
    <Header page={selectedPage}/>
    </>
  );
}

export default App;
