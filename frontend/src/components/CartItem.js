import './CartItem.css'
import { Link } from "react-router-dom";

const CartItem = () => {
    return ( <
        div className = 'cartitem' >
        <
        div className = 'cartitem__image' >
        <
        img src = "https://media.istockphoto.com/id/185262648/photo/red-apple-with-leaf-isolated-on-white-background.jpg?b=1&s=170667a&w=0&k=20&c=wbm2rjFuYpgQewyfKF2bGMrxTReYgwoKXMC7BRdXC54="
        alt = 'product name' / >

        <
        /div>

        <
        Link to = { `/product/${111}` }
        className = "cartitem__name" >
        <
        p > Apple < /p> < /
        Link > <
        p className = 'cartitem__price' > Rs 100 < /p> <
        select className = 'cartitem__select' >
        <
        option value = "1" > 1 < /option> <
        option value = "2" > 2 < /option> <
        option value = "3" > 3 < /option> <
        option value = "4" > 4 < /option> < /
        select >

        <
        button className = 'cartitem__deleteBtn' >
        <
        i className = 'fas fa-trash' > < /i></button >


        <
        /div>
    )
}

export default CartItem