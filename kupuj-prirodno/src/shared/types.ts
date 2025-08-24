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

export type StoreSummary = {
    items:StoreSummaryItem[]
}

export type StoreSummaryItem = {
    id:string,
    coverImage:string,
    title:string,
    shortDescription:string
}