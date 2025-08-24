import type { CategorySummary, StoreSummary } from "./types";

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

export {
    getLocalStoreCategories,
    getLocalStores
};