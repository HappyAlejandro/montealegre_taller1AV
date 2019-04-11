import { observable, autorun, toJS, configure, action, computed } from 'mobx';

import api from '../utils/api';

export type product = {name: string, product_id: number, description: string, price: number, discounted_price: number | null, image: string, image2: string, thumbnail: string}[];

export type depsArray = { name: string, department_id: number }[];
export type catsArray = { name: string, category_id: number, department_id: number }[];
export type produArray={name: string, product_id: number,   discounted_price: number, description: string, thumbnail: string, price: number}[];

class Store {

    @observable departments: depsArray|null = null;
    @observable loadingDeps: boolean = false;

    @observable categories: catsArray|null|false = null;

    @observable currentDept: number|null = null;
    @observable currentCat: number|null = null;
    
    @observable products: produArray| null=null;
    @observable loadingProdu: boolean = false;
    @observable product: number|null = null;

    @computed get pageTitle(){
        var dep = this.departments && this.departments.find(e => e.department_id == this.currentDept);
        var cat = this.categories && this.categories.find(e => e.category_id == this.currentCat);

        var res = `${dep ? dep.name : ''} ${cat ? ' - ' + cat.name : ''}`;
        return res;
    }

    @action getDepartments(){
        if(this.loadingDeps || this.departments) return;

        var depsLocal = localStorage.getItem('departments');
        var depsLocalTime = localStorage.getItem('departments_time');
        if(depsLocal && depsLocalTime && 
            Date.now() - parseInt(depsLocalTime) < 7 * 24 * 60 * 60 * 1000 ) {
            this.departments = JSON.parse(depsLocal);
            return;
        }

        this.loadingDeps = true;
        var callback = (result: depsArray) => {            
            localStorage.setItem('departments', JSON.stringify(toJS(result)));
            localStorage.setItem('departments_time', Date.now() + '');

            this.departments = result;
            this.loadingDeps = false;
        }
        api.getDepartments(callback);
    }


    @action getProducts(){
        if (this.loadingProdu|| this.products) return;

        var productsLocal = localStorage.getItem('products');
        var productsLocalTime = localStorage.getItem('products-time');

        if (productsLocal && productsLocalTime && Date.now() - parseInt(productsLocalTime) < 24 * 60 * 60 * 1000) {
            this.products = JSON.parse(productsLocal);
            return;
        }

        var callback = (result: produArray) => {
            localStorage.setItem('products', JSON.stringify(toJS(result)));
            localStorage.setItem('products-time', Date.now() + '');

            this.products = result;
            this.loadingProdu = false;
        }
        api.getProducts(callback);
    }

    @action setDepartment(id: number){
        this.currentDept = id;
        this.currentCat = null;
    }

    @action getCategories(){
        if(this.categories != null) return;

        this.categories = false;
        api.getCategories((result: catsArray) => {
            this.categories = result;
        });
    }

    @action setCategory(id: number){
        this.currentCat = id;
    }
}

const store = new Store();

export default store;