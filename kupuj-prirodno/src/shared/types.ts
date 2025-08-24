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

export type ProductsInStore = ProductByCategory[]

export type ProductByCategory = {
    category: CategorySummaryItem,
    products:ProductSummaryItem[]
}

export type ProductSummaryItem = {
    id:string,
    categoryId:string,
    coverImage:string,
    name:string,
    description:string
    price:string
}