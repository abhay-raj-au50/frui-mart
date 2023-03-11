import "./Product.css";
import { Link } from "react-router-dom"

const Product = () => {

    return ( < >
        <
        div className = "product" >
        <
        img src = "https://media.istockphoto.com/id/185262648/photo/red-apple-with-leaf-isolated-on-white-background.jpg?b=1&s=170667a&w=0&k=20&c=wbm2rjFuYpgQewyfKF2bGMrxTReYgwoKXMC7BRdXC54="
        alt = "product__name" / >
        <
        div className = "product__info" >
        <
        p className = "info__name" > Apple < /p> <p className = "info__description" >
        Organic Apple < /p> <
        p className = "info__price" > Rs 100 < /p>

        <
        Link to = { `/product/${1111}` }
        className = "info__button" > View <
        /Link> </
        div >
        <
        /div>  <
        div className = "product" >
        <
        img src = "https://images.unsplash.com/photo-1528825871115-3581a5387919?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFuYW5hfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"

        alt = "product__name" / >
        <
        div className = "product__info" >
        <
        p className = "info__name" > Bananas < /p> <p className = "info__description" >
        Organic Banana < /p> <
        p className = "info__price" > Rs 100 per Dozen < /p>

        <
        Link to = { `/product/${1111}` }
        className = "info__button" > View <
        /Link> </
        div >
        <
        /div>   <
        div className = "product" >
        <
        img src = "https://media.istockphoto.com/id/185263471/photo/pineapple.jpg?b=1&s=170667a&w=0&k=20&c=oQU_fnPzKSqD2ava9O5hOzz9WoTjgYyKxvA93yk1U5A="

        alt = "product__name" / >
        <
        div className = "product__info" >
        <
        p className = "info__name" > Pine Apple < /p> <p className = "info__description" >
        Organic Pince Apple < /p> <
        p className = "info__price" > Rs 80 < /p>

        <
        Link to = { `/product/${1111}` }
        className = "info__button" > View <
        /Link> </
        div >
        <
        /div>  <
        div className = "product" >
        <
        img src = "https://images.unsplash.com/photo-1596363505729-4190a9506133?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhcGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"

        alt = "product__name" / >
        <
        div className = "product__info" >
        <
        p className = "info__name" > Grpaes < /p> <p className = "info__description" >
        Organic Grapes < /p> <
        p className = "info__price" > Rs 250 / box < /p>

        <
        Link to = { `/product/${1111}` }
        className = "info__button" > View <
        /Link> </
        div >
        <
        /div> <
        div className = "product" >
        <
        img src = "https://images.unsplash.com/photo-1553279768-865429fa0078?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8TWFuZ298ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
        alt = "product__name" / >
        <
        div className = "product__info" >
        <
        p className = "info__name" > Mango < /p> <p className = "info__description" >
        Organic Mango < /p> <
        p className = "info__price" > Rs 500 / box < /p>

        <
        Link to = { `/product/${1111}` }
        className = "info__button" > View <
        /Link> </
        div >
        <
        /div>  <
        div className = "product" >
        <
        img src = "https://media.istockphoto.com/id/104638864/photo/halved-and-whole-papaya-fruits-on-white-background.jpg?b=1&s=170667a&w=0&k=20&c=7A6FqN2yDjMcYCb_833klMSojujesgL-p-yaATcCN44="
        alt = "product__name" / >
        <
        div className = "product__info" >
        <
        p className = "info__name" > Papaya < /p> <p className = "info__description" >
        Organic Papaya < /p> <
        p className = "info__price" > Rs 50 < /p>

        <
        Link to = { `/product/${1111}` }
        className = "info__button" > View <
        /Link> </
        div >
        <
        /div> <
        / >

    )
};

export default Product;