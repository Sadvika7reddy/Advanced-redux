import classes from './CartButton.module.css';
import { useDispatch,useSelector } from 'react-redux';
import { cartAction } from '../../store/Cart';
const CartButton = (props) => {
  const dispatch=useDispatch();
  const totalQuantity=useSelector(state=>state.display.totalQuantity)
  const toggleHandler=()=>{
    dispatch(cartAction.toggle())
  }
  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
