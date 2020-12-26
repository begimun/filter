
import React from 'react';
import Header from './components/header/index';
import Manage from './pages/manage/index';
import Form from './components/form/index';
import axios from 'axios';


function App() {
  React.useEffect(() => {
    return axios.get()

  }, [])
  return (
    <div className="App">
      <Header items= {['Home','About','Contact','Products','Buy']}/>
      <Form/>
      {/* <Sidebar/> */}
      <Manage/>
      


    </div>
  );
}

export default App;
