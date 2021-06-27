import React, {useState, useEffect} from 'react'
import Header from './partials/Header';
import Footer from './partials/Footer'
import axios from 'axios';
import {} from 'react-router-dom'
import {FaPlus, FaMinus, FaCheckCircle } from 'react-icons/fa';

export default function Item(props) {
    const {title,desc,price,thumb,prodno} = (props.location && props.location.state) || {};
    const [count, setCount] = useState(1);
    const [cartcount, setCartcount] = useState()
    const [total, setTotal] = useState();
    const [modal, setModal] = useState(true)
    console.log(cartcount)
    const uID = localStorage.getItem('_id')
    const jwt = localStorage.getItem('jwt')
    const dynPrice = parseInt(price) * count
    
   // const history = useHistory();
   useEffect(() =>{
       setTotal(dynPrice)
        fetchCount()
       
   })
    
    const header = {
        'Content-type': 'application/json',
        'auth-token': jwt
    }
    async function addToCart(e){
        e.preventDefault();

        
        const addItem = {
            userID: uID,
            itemName: title,
            itemQty: count,
            itemPrice: price,
            itemTprice: total,
            thumb: thumb,
            prodno: prodno
        }
       

        try{
            await axios.post('http://localhost:5000/api/user/cart', addItem, {
                headers: header
            });
            fetchCount();

        }
        catch(e){
            console.log(e)

        }
    }

    function fetchCount(){
        const req = axios.get('http://localhost:5000/api/user/cartItems', {
            headers: header
        })
        .then((res) => {
         const cartItems = res.data
         setCartcount(cartItems.length)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    function subQty(){
        setCount(count-1)
        if( count < 1 || count === 1){
            setCount(1)
        }
    }

    
    return (
        <div>
         <Header cartcount={cartcount}/>

            <div className="container justify-center">
                <div className="row align-items-center">
                    <div>
                        <img className="item-img" src={require(`../assets/images/items/${thumb}`).default}></img>
                    </div>
                    <div className="check-sec">
                        
                        <h2 className="sec-title">{title}</h2>
                        <p className="description">{desc}</p>
                        <h1 className="sec-title">₱ {dynPrice}</h1>
                        <button className="description btn-qty" onClick={subQty}><FaMinus/></button>
                        <input className="description qty-inp text-center" value={count} min="1" />
                        <button className="description btn-qty" onClick={() => setCount(count+1)}><FaPlus/></button>
                        
                        <form onSubmit={addToCart}>
                            <button className="btn add-btn" type="submit">Add to Cart</button>
                        </form>
                        
                    </div>
                </div>
                
            </div>
        
            <Footer/>
        </div>
    )
}
