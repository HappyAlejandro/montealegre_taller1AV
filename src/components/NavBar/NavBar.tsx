import React, { Component } from 'react';
import { observer } from 'mobx-react';
import '../NavBar/NavBar.css';
import store from '../../stores/store';
import DepartmentsMenu from '../DepartmentsMenu/DepartmentsMenu';

const NavBar = () => {
    if(!store.departments) return <p>Cargando...</p>;

    return <nav className='navBar'>
        <h1 className='herpo'>HERPO</h1>
        <DepartmentsMenu   />
    </nav>;
}


export default observer(NavBar);