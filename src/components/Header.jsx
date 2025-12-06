import { useContext } from "react";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import logoImg from "../assets/logo.jpg";
import UserProgressContext from "../store/UserProgressContext";
import { FaShoppingCart } from "react-icons/fa";
export default function Header() {
  const CartCtx = useContext(CartContext);
  const UserProgressCtx = useContext(UserProgressContext);
  const totalCartItems = CartCtx.items.reduce((totalNumberOfITems, item) => {
    return totalNumberOfITems + item.quantity;
  }, 0);

  function handleShowCart() {
    UserProgressCtx.showCart();
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A restaurant" />
        <h1>Zaika Express</h1>
      </div>

      <nav>
        <Button onClick={handleShowCart}>
          <FaShoppingCart color="black" size={25} />
          Cart <sup>{totalCartItems > 0 && `(${totalCartItems})`}</sup>
        </Button>
      </nav>
    </header>
  );
}
