import type { CategorySummary, ProductsInStore, ProductSummaryItem, StoreSummary, StoreSummaryItem } from "./types";

const getLocalStoreCategories = (): CategorySummary[]=>{
    return [
    {
       categoryName:'Most popular',
       order: 1,
       items:[
        {
            id:'boboce_1',
            iconLink:'',
            name:'Zamrznute bobice'
        },
        {
            id:'boboce_2',
            iconLink:'',
            name:'Odmrznute bobice'
        }
       ] 
    },
    {
       categoryName:'Sve ostalo',
       order: 1,
       items:[
        {
            id:'boboce_1',
            iconLink:'',
            name:'Zamrznute bobice'
        },
        {
            id:'boboce_2',
            iconLink:'',
            name:'Odmrznute bobice'
        },
        {
            id:'boboce_3',
            iconLink:'',
            name:'Zamrznute bobice'
        },
        {
            id:'boboce_4',
            iconLink:'',
            name:'Odmrznute bobice'
        },
        {
            id:'boboce_5',
            iconLink:'',
            name:'Zamrznute bobice'
        },
        {
            id:'boboce_6',
            iconLink:'',
            name:'Odmrznute bobice'
        }
       ] 
    }
];
}


const getLocalStores: ()=>StoreSummary = ()=>({
    items:[
        {
            id:'store_1',
            coverImage:'./src/assets/img/fruit.png',
            title:'Rakic 1',
            shortDescription:'kratak opis'
        },
        {
            id:'store_2',
            coverImage:'./src/assets/img/fruit.png',
            title:'Rakic 2',
            shortDescription:'kratak opis'
        },
        {
            id:'store_3',
            coverImage:'./src/assets/img/fruit.png',
            title:'Rakic 3',
            shortDescription:'kratak opis'
        },
                {
            id:'store_4',
            coverImage:'./src/assets/img/fruit.png',
            title:'Rakic 4',
            shortDescription:'kratak opis'
        }
    ]
});

const getLocarStoreProductsByCategories: ()=>ProductsInStore = ()=>{
    return [
        {
            category:{
                id:'cat_1',
                iconLink:'',
                name:'Bobice'
            },
            products:[{
                id:'bobice_1',
                categoryId:'cat_1',
                coverImage:'./src/assets/img/fruit.png',
                name:'Maline',
                description:'Moje drage maline',
                price:'800 rsd/kg'
            }]
        },
        {
            category:{
                id:'cat_2',
                iconLink:'',
                name:'Meso'
            },
            products:[{
                id:'meso_1',
                categoryId:'cat_2',
                coverImage:'./src/assets/img/fruit.png',
                name:'Mleveno svinjsko',
                description:'Moje drago mleveno meso',
                price:'1000 rsd/kg'
            },
            {
                id:'meso_2',
                categoryId:'cat_2',
                coverImage:'./src/assets/img/fruit.png',
                name:'Mleveno telece',
                description:'Moje drago telece meso',
                price:'1500 rsd/kg'
            }]
        }
    ]
}

export {
    getLocalStoreCategories,
    getLocalStores,

    getLocarStoreProductsByCategories
};