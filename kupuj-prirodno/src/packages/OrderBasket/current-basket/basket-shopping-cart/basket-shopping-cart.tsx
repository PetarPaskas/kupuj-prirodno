import BasketShoppingCartItem from "./basket-shopping-cart-item/basket-shopping-cart-item";

interface BasketShoppingCartProps{

}

const BasketShoppingCart = ({}:BasketShoppingCartProps)=>{ 

    return <div className="order_basket__shopping_cart">
        <BasketShoppingCartItem/>
    </div>
}

export default BasketShoppingCart;