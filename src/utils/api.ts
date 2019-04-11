import { depsArray, catsArray, produArray } from '../stores/store';

const apiRoot = 'https://backendapi.turing.com';
const imagesRoot = 'https://backendapi.turing.com/images/products/';

function getDepartments(callback: (result: depsArray) => void){
    fetch(`${apiRoot}/departments`)
        .then(( rawInfo ) => {
            return rawInfo.json();
        })
        .then(( departments ) => {
            callback(departments);
        });
}

function getCategories(callback: (result: catsArray) => void){
    fetch(`${apiRoot}/categories`)
        .then(( rawInfo ) => {
            return rawInfo.json();
        })
        .then(( categories ) => {
            callback(categories.rows);
        });
}

function getProducts(callback: (result: produArray)=> void ){
    fetch(`${apiRoot}/products`)
    .then((rawInfo)=>{
            return rawInfo.json();
    })
    .then(( products ) => {
        callback(products.rows);
    });
}

export default {
    getDepartments,
    getCategories,
    getProducts,
};