import React, { Component } from 'react';
import store from '../../stores/store';
import { observer } from 'mobx-react';
import '../Filters/Filters';
import DepartmentsMenu from '../DepartmentsMenu/DepartmentsMenu';

@observer
class Filters extends Component{

    constructor(props: {}){
        super(props);

        store.getCategories();
    }

    render(){
        return <div className='filtros'>
            <p>{store.pageTitle}</p>
            <h3>{store.departments ? 'Departments' : 'Loading Departments...'}</h3>
            <DepartmentsMenu />

            {store.currentDept != null && <h3 className='categorias'>{store.categories ? 'Categories' : 'Loading Categories...'}</h3>}
            {store.categories && store.categories.map(( cat ) => {
                if(cat.department_id != store.currentDept) return null;
                return <button key={cat.category_id} 
                    onClick={() => {
                        store.setCategory(cat.category_id);
                    }}
                    style={{ background: store.currentCat == cat.category_id ? 'gray' : 'white' }}>
                    {cat.name}
                </button>;
            })}
        </div>
    }
}

export default Filters;