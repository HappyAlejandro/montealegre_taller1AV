import React, { Component } from 'react';
import Filters from '../Filters/Filters';
import Product from '../Product/Product';
import store from '../../stores/store';
import '../Store/Store.css'

store.getProducts();

class Store extends Component{
   

    render(){
        return <div className='tienda'>
      

            <Filters />


        <Product />
       


})}
         

            
        </div>
    }
}

export default Store;