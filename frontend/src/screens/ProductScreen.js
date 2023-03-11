import './ProductScreen.css'

const ProductScreen = () => {
    return ( <
        div className = 'productscreen' >
        <
        div className = 'productscreen_left' >
        <
        div className = 'left__image' >
        <
        img src = "https://media.istockphoto.com/id/185262648/photo/red-apple-with-leaf-isolated-on-white-background.jpg?b=1&s=170667a&w=0&k=20&c=wbm2rjFuYpgQewyfKF2bGMrxTReYgwoKXMC7BRdXC54="
        alt = 'product name' / >
        <
        /div> <
        div className = 'left__info' >
        <
        p className = 'left__name' > Apple < /p> <
        p className = 'left__name' > Price: Rs 100 < /p> <
        p > Description: Oganic Apple < /p> < /
        div > < / div > <
        div className = 'productscreen__right' >

        <
        div className = 'right__info' >
        <
        /div> <
        p >
        Price: < span > Rs 100 < /span></p >
        <
        p >
        Status: < span > In Stock < /span> <
        p >
        Qty <
        select >
        <
        option value = "1" > 1 < /option> <
        option value = "2" > 2 < /option> <
        option value = "3" > 3 < /option> <
        option value = "4" > 4 < /option> < /
        select > < /p > <
        p >
        <
        button type = 'button' > Add to Carts < /button></p >
        <
        /p> </
        div > < /
        div >
    )
}

export default ProductScreen