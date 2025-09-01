import BasketHistoryItem from "./basket-history-item/basket-history-item";

interface BasketHistoryProps{

}

const BasketHistory = ({}:BasketHistoryProps)=>{
    return <div className="order_basket__history_cart">
        <BasketHistoryItem/>
    </div>
}

export default BasketHistory;