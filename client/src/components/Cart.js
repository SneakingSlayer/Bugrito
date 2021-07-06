import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import './components.css'
import {Container, Row, Col, Table, DropdownButton} from 'react-bootstrap'
import { FaTrash } from 'react-icons/fa';


import { useSelector, useDispatch } from 'react-redux'; 
import {getCartItems, deleteItem} from '../redux/actions/cartActions'

export default function Cart() {
    const devFee = 50;
    const dispatch = useDispatch()
    const itemsredux = useSelector(state => state.cart)
    const items = itemsredux.items
    useEffect(() => {
        dispatch(getCartItems())
        }, [])
   function removeItem(id){
        const itemInfo ={
           _id: id
        }
        dispatch(deleteItem(itemInfo))
    }
   
    function setSummary(){
        if(Object.keys(items).length === 0 && items.constructor === Object){
            return loading()
        }
        else{
            const subTotal = items.reduce((total, currentVal) => total = total + (parseInt(currentVal.itemTprice) * parseInt(currentVal.itemQty)), 0)
            const grandTotal = subTotal + devFee
            return {subTotal, grandTotal}
        }
    }

    function setPopulation(){
        if(Object.keys(items).length === 0 && items.constructor === Object){
            return loading()
        }
        else{
            const populateCart = items.map((item) =>
        <tr  className="cart-item" keys={item._id}>
            <Link className="link"
                to={{
                pathname: `/Item/${item.prodno}`
                 }}
            >
            <td className="d-flex-row align-items-center">
                <img className="cart-img" src={require(`../assets/images/items/${item.thumb}`).default}></img>
                <div className="d-flex-col cart-item-info">
                    <span className="item-st">{item.itemName}</span>
                    {/**@768px*/}
                    <p className="item-muted ref-stat">Ref: {item.prodno}</p>
                    <p className="item-muted price-stat">₱ {item.itemPrice}</p>
                </div>
                
            </td>
            </Link>
            {/**@768px*/}
            <td className="price-stat-td"><span className="item-st ">₱ {item.itemPrice}</span></td>
            <td><span className="item-st">{item.itemQty}</span></td>
            <td className="price-stat-td"><span className="item-st">₱ {parseInt(item.itemPrice) * parseInt(item.itemQty)}</span></td>
            <td>
                <form onSubmit={(e) => {e.preventDefault(); removeItem(item._id)}}>
                    <button className="delete-btn" /**onClick={(e) =>{e.preventDefault(); removeItemCart(item._id); removeItem(item._id)}*/ type="submit"><FaTrash/></button>
                </form>
            </td>
        </tr>
    );
            return populateCart
        }
    }

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
    
    
    return (
        <>
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
                        {setPopulation()}
                    </Table>
                </Col>
                <Col lg={4} xs={12} className="item-info-card">
                    <h1 className="sec-title ">Summary</h1>
                    <div className="d-flex justify-content-between mb-2">
                        <span className="item-muted">Subtotal</span><span className="item-muted">₱ {setSummary().subTotal}.00</span>
                    </div>
                    
                    <div className="d-flex justify-content-between mb-4">
                        <span className="item-muted">Delivery Fee</span><span className="item-muted ">₱ {devFee}.00</span>
                    </div>
                    <div className="d-flex justify-content-between mb-4">
                        <span className="item-ft">Grand Total</span><span className="item-ft">₱ {setSummary().grandTotal}.00</span>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                        <button className="checkout-btn">Check Out</button>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    )
}
