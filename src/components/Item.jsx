import '../App.css';
import {Set} from '../context/Counter.jsx';
function Item(props){
    const cart=Set();
    console.log('cart',cart)
    return(
        <div className="colorprops">
            <h3>Item:{props.name}</h3>
            <h3>Price: rs {props.price}</h3>
            <button onClick={()=>cart.setitems([...cart.items,{name:props.name,price:props.price}])}>add to cart</button>
        </div>
    )
}
export default Item;