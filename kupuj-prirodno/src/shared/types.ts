export type CategorySummary = {
    categoryName:string,
    items:CategorySummaryItem[],
    order:number
}

export type CategorySummaryItem = {
    id:string,
    iconLink:string,
    name:string
}