import Item from './components/Item.jsx'
import Cart from './components/Cart.jsx'
function App(){
    return(
        <div>
            <Item name="icecream" price={35}/>
            <Item name="milk" price={33}/>
            <Item name="toffee" price={1}/>
            <Cart />
        </div>
    )
}
export default App;