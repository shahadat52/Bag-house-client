import ComingSoon from "../../components/ComingSoon";
import { useAppSelector } from "../../redux/hooks";

const Cart = () => {
    const cartItems = useAppSelector((state) => state.auth.cart.items);
    console.log(cartItems);
    return (
        <div>
            <ComingSoon />
        </div>
    );
};

export default Cart;