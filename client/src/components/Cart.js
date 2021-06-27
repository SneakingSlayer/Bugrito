import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import Header from '../components/partials/Header'
import './components.css'
import { FaTrash } from 'react-icons/fa';
export default function Cart() {
    const jwt = localStorage.getItem('jwt')
    const [items, setItems]  = useState([])
    const [count, setCount] = useState()
    const history = useHistory()
   
    function removeItemCart(id){
        const updatedCart = items.filter((item) => item._id !== id)
        setItems(updatedCart)
        setCount(updatedCart.length)
       
    }

    

    const grandTotal = items.reduce((total, currentVal) =>
       
        total = total + parseInt(currentVal.itemTprice), 0
    )

    
    
    const populateCart = items.map((item) =>
        <tr  className="cart-item" keys={item._id}>
            <td className="d-flex-row align-items-center">
                <img className="cart-img" src={require(`../assets/images/items/${item.thumb}`).default}></img>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.itemName}</span>
            </td>
            <td>₱ {item.itemPrice}</td>
            <td>{item.itemQty}</td>
            <td>₱ {parseInt(item.itemPrice) * parseInt(item.itemQty)}</td>
            <td>
                <form>
                    <button className="delete-btn" onClick={(e) =>{e.preventDefault(); removeItemCart(item._id); removeItem(item._id)} } type="submit"><FaTrash/></button>
                </form>
            </td>
        </tr>


 
    );
    const header = { 
        'Content-type': 'application/json',
        'auth-token': jwt
    }

   function removeItem(id){
        


        const itemInfo ={
           _id: id
        }


        console.log(itemInfo)
        axios.post('http://localhost:5000/api/user/removeItem', itemInfo, {
            headers: header
        })
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
        
    }
   
    useEffect(() => {
        
        const req = axios.get('http://localhost:5000/api/user/cartItems', {
            headers: header
        })
        .then((res) => {
         const cartItems = res.data
         setItems(cartItems)
        })
        .catch((err) => {
           // history.push('/Login')
            console.log(err)
        })
    }, [])

    

    return (
        <div>   
            <Header cartcount={count}/>
                   
            <div className="container justify-center cart-area">
                
                <div className="row">
                

                    <table className="w-100">
                        <tr className="tr">
                            <th align="left">Product</th>
                            <th align="left">Unit Price</th>
                            <th align="left">Quantity</th>
                            <th align="left">Total Price</th>
                            <th align="left">Actions</th>
                        </tr>
                        
                        {populateCart}
                        
                    
                    </table>
                    <div className="check-group col w-100 d-flex-row justify-end align-items-center">
                        <div className="d-flex-col">
                            <span className="gt">Grand Total</span>
                            <span className="item-price"> ₱ {grandTotal}.00</span>
                        </div>
                        
                        <button className="checkout-btn">Check Out</button>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}
