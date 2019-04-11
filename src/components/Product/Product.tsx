import React, { Component } from 'react';
import store from '../../stores/store';




class Products extends Component{

constructor(props: {}){
    super(props);
    store.getProducts();
}


      render(){
        return <div className="productos">{
                    store.products && store.products.map((pro)=>{
                        return <div className='Products_Contenedor' key={pro.product_id}>
                                  <img  className='imagen' src={'https://backendapi.turing.com/images/products/'+pro.thumbnail} alt=""/>
                                <h3> {pro.name} </h3>
                                <div> <strong> Price:</strong>{pro.price} </div>
                                <p className='descrip'>{pro.description}</p>
                             
                                
                            </div>
                    })
                }
      </div>
    }
}

export default Products;