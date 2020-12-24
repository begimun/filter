import Header from './components/header/index';
import Form from './components/form/index';

import React from './react';
import Header from './components/header/index';
import SideBar from './components/sidebar';
import Manage from './pages/manage/index';



function App() {
  React.useEffect(() => {

  }, [])
  return (
    <div className="App">
      <Header items= {['Home','About','Contact','Products','Buy']}/>
      <Form/>
      <Sidebar/>
      <Manage/>
      


    </div>
  );
}

export default App;
