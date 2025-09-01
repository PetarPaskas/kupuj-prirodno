import { useState } from "react"
import SideDrawerModal from "../../shared/side-drawer-modal/side-drawer-modal"
import BasketHistory from "./basket-history/basket-history"
import CurrentBasket from "./current-basket/current-basket"
import SelectBasket from "./select-basket/select-basket"
import SelectBasketOption from "./select-basket/select-basket-option/select-basket-option"

interface OrderBasketProps{

}

const OrderBasket = ({}:OrderBasketProps)=>{
    const [isShowingHistoryBasket, setShowingHistoryBasket] = useState<boolean>(false);
    const isShowingCurrentBasket = !isShowingHistoryBasket;
    
    const clickShowHistoryBasketOption = ()=>{
        setShowingHistoryBasket(true);
    }
    const clickShowingCurrentBasket = ()=>{
        setShowingHistoryBasket(false);
    }
    return <SideDrawerModal title="Orders">
            <div className="order_basket content_center">
                <div className="order_basket__header">
                    <SelectBasket>
                        <SelectBasketOption 
                            active={isShowingCurrentBasket} 
                            onClick={clickShowingCurrentBasket}>
                                Shopping Cart
                        </SelectBasketOption>
                        <SelectBasketOption 
                            active={isShowingHistoryBasket} 
                            onClick={clickShowHistoryBasketOption}>
                                Order Again
                        </SelectBasketOption>
                    </SelectBasket>
                </div>

                <div className="order_basket__body">
                    {isShowingHistoryBasket && <BasketHistory />}
                    {isShowingCurrentBasket && <CurrentBasket />}
                </div>
            </div>
        </SideDrawerModal>
}

export default OrderBasket