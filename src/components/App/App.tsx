import React, { Component } from 'react';
import './App.css';
import NavBar from '../NavBar/NavBar';
import Store from '../Store/Store';


import api from '../../utils/api';
import store from '../../stores/store';
import { observer } from 'mobx-react';
import Product from '../Product/Product';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {

  constructor(props: {}){
    super(props);

    store.getDepartments();
  
  }

  
  render() {
    
    

    return (
      <BrowserRouter>
      <div className="App">
      {/*
 <h1>{ store.pageTitle }</h1>
      */} 
      
        <NavBar />

        <Store />

</div>
</BrowserRouter>
        
  
    );
  }
}

export default observer(App);