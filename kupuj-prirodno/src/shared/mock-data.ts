import type { CategorySummary } from "./types";

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

export {
    getLocalStoreCategories
};