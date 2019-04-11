import React, { Component } from 'react';
import { observer } from 'mobx-react';

import store from '../../stores/store';

const DepartmentsMenu = () => {
    var handleClick = (id: number) => {
        store.setDepartment(id);
    }
 {/* className={store.currentDept === dep.department_id ? 'active' : ''}*/}
    return <div className='menu'>
        {store.departments && store.departments.map(( dep ) => {
            return <a  key={dep.department_id} 
                onClick={() => {
                    handleClick(dep.department_id);
                }}
                style={{
                    color: store.currentDept === dep.department_id ? 'white' : 'gray',
                }}
              className='departamentos'>
                {dep.name}
            </a>;
        })}
    </div>;
}


export default observer(DepartmentsMenu);