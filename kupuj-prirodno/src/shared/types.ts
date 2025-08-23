export type StoreCategoryType = {
    categoryName:string,
    items:StoreCategoryItemType[],
    order:number
}

export type StoreCategoryItemType = {
    id:string,
    iconLink:string,
    name:string
}