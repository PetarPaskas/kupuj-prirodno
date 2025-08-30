import SideDrawerModal from "../../shared/side-drawer-modal/side-drawer-modal"
import CurrentBasket from "./current-basket/current-basket"

interface OrderBasketProps{

}

const OrderBasket = ({}:OrderBasketProps)=>{
    return <SideDrawerModal title="Orders">
            <div className="order_basket content_center">
            {true && <CurrentBasket />}
            </div>
        </SideDrawerModal>
}

export default OrderBasket