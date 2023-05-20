
import cart from './assets/cart.svg'

const CartWidget = () => {

    return(
        <div class="d-flex flex-row bd-highlight gap-1">
            <img src={cart} img-fluid alt="cart-widget" />
            <div class="d-flex align-items-end">9</div>
        </div>
    )
}
export default CartWidget