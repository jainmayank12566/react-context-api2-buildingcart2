import {Set} from '../context/Counter.jsx';
function Cart(){
    const cart=Set();
    const total=cart.items.reduce((a,b)=>{
        return a+b.price;
    },0)
    return(
        <div>
            <h1>cart</h1>
            {cart?cart.items.map((val)=><li>{val.name}- ${val.price}</li>):<p>nodata</p>}
            <p>total:${total}</p>
        </div>
    )
}
export default Cart;