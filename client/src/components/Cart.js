import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import Header from './partials/Header'
import './components.css'
import {Container, Row, Col, Table, DropdownButton} from 'react-bootstrap'
import { FaTrash } from 'react-icons/fa';
export default function Cart() {
    const jwt = localStorage.getItem('jwt')
    const [items, setItems]  = useState([])
    const [count, setCount] = useState()
    const history = useHistory()

    const devFee = 50;

    function loading(){
        return(
            <div className="container justify-center align-items-center">
                <div className="loadingio-spinner-rolling-m0kkotwichc">
                    <div class="ldio-fjjt8eyoem">
                        <div>
    
                        </div>
                    </div>
                </div>
            </div>
        )
    }
   
    function removeItemCart(id){
        const updatedCart = items.filter((item) => item._id !== id)
        setItems(updatedCart)
        setCount(updatedCart.length)
       
    }

    console.log(items)

    const subTotal = items.reduce((total, currentVal) =>
       
        total = total + (parseInt(currentVal.itemTprice) * parseInt(currentVal.itemQty)), 0
    )

    const grandTotal = subTotal + devFee

    
    
    const populateCart = items.map((item) =>
        <tr  className="cart-item" keys={item._id}>
            <td className="d-flex-row align-items-center">
                <img className="cart-img" src={require(`../assets/images/items/${item.thumb}`).default}></img>
                <div className="d-flex-col cart-item-info">
                    <span className="item-st">{item.itemName}</span>
                    {/**@768px*/}
                    <p className="item-muted ref-stat">Ref: {item.prodno}</p>
                    <p className="item-muted price-stat">₱ {item.itemPrice}</p>
                </div>
            </td>
            {/**@768px*/}
            <td className="price-stat-td"><span className="item-st ">₱ {item.itemPrice}</span></td>
            <td><span className="item-st">{item.itemQty}</span></td>
            <td className="price-stat-td"><span className="item-st">₱ {parseInt(item.itemPrice) * parseInt(item.itemQty)}</span></td>
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
        axios.post('/api/user/removeItem', itemInfo, {
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
        
        const req = axios.get('/api/user/cartItems', {
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

        <>
        <Header cartcount={count}/>
        <Container>
            
            <Row >
                <Col lg={8} xs={12} >
                    <h1 className="sec-title">Shopping Cart</h1>
                    <Table borderless responsive >
                        <tr className="tr">
                            <th className="item-muted" align="left">Product</th>
                            {/**@768px*/}
                            <th className="item-muted price-stat-th" align="left">Price</th>
                            <th className="item-muted" align="left">Qty.</th>
                            <th className="item-muted price-stat-th"   align="left">Total</th>
                            <th className="item-muted" align="left"></th>
                        </tr>
                        {populateCart}
                    </Table>
                </Col>
                <Col lg={4} xs={12}>
                    <h1 className="sec-title ">Summary</h1>
                    <div className="d-flex justify-content-between mb-2">
                        <span className="item-muted">Subtotal</span><span className="item-muted">₱ {subTotal}.00</span>
                    </div>
                    
                    <div className="d-flex justify-content-between mb-4">
                        <span className="item-muted">Delivery Fee</span><span className="item-muted ">₱ {devFee}.00</span>
                    </div>
                    <div className="d-flex justify-content-between mb-4">
                        <span className="item-ft">Grand Total</span><span className="item-ft">₱ {grandTotal }.00</span>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                        <button className="checkout-btn">Check Out</button>
                    </div>
                  {/** <div className="check-group col w-100 d-flex-row justify-end align-items-center">
                        <div className="d-flex-col">
                            <span className="gt">Grand Total</span>
                            <span className="item-price"> ₱ {grandTotal}.00</span>
                        </div>
                                
                        <button className="checkout-btn">Check Out</button>
                    </div>*/} 
               
                </Col>
                    
    
                
            </Row>

                

        </Container>
        
        </>
        /**<div>   
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
            
        </div>*/
    )
}
