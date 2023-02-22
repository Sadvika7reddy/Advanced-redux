import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { cartAction } from './store/Cart';
import { Fragment } from 'react';
import Notification from './components/UI/Notification';
let initial=true;
function App() {
 const isVisible= useSelector(state=>state.ui.cartisVisible)
 const cart=useSelector(state=>state.display)
 const notification=useSelector(state=>state.ui.notification)
 const dispatch=useDispatch();

 useEffect(()=>{
  const eventHandler= async()=>{
    let response=await fetch("https://add-movies-c908f-default-rtdb.firebaseio.com/cart.json",{
      method:'PUT',
      body:JSON.stringify(cart)
     })
   if(!response.ok)
   {
    dispatch(cartAction.responses({
      status:"error",
      message:"error occures",
      title:"sending failed"
    }))
   }
   if(initial){
    initial=false
    return;
   }
   dispatch(cartAction.responses({
    status:"success",
    message:"succes",
    title:"request send"
   }))

  }
  eventHandler();
}
 ,[cart,dispatch])

  return (
    <Fragment>
      {notification&&<Notification status={notification.status}
      title={notification.title}
      message={notification.message}/>}
    <Layout>
      {isVisible&&<Cart />}
      <Products />
    </Layout>
    </Fragment>
  );
}

export default App;
