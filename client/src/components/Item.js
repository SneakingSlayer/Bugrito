import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {FaPlus, FaMinus, FaCheckCircle } from 'react-icons/fa';
import {Container, Row, Col, Table, DropdownButton} from 'react-bootstrap'

import {useSelector, useDispatch} from 'react-redux'

import { addToCart } from '../redux/actions/cartActions';
export default function Item(props) {
    const history = useHistory()
    const [count, setCount] = useState(1);
    const [cartcount, setCartcount] = useState()
    const [total, setTotal] = useState();
    const uID = localStorage.getItem('_id')
    const jwt = localStorage.getItem('jwt')
    const dynPrice = parseInt(props.price) * count
    const dispatch = useDispatch()
    const item = useSelector(state => state.cart)
    const itemdetail = useSelector(state => state.item_detail)
 
   useEffect(() =>{
        setTotal(dynPrice)
   })
   
    async function addClicked(e){
        e.preventDefault();
        if(!jwt){
            return history.push('/Login')
        }
        const item = {
            userID: uID,
            itemName: props.title,
            itemQty: count,
            itemPrice: props.price,
            itemTprice: total,
            thumb: props.thumb,
            prodno: props.prodno
        }
       dispatch(addToCart(item)) 
    }

    function subQty(){
        setCount(count-1)
        if( count < 1 || count === 1){
            setCount(1)
        }
    }
    return (
        <>
         
        <Container>
            <Row>
                <Col lg={8}>
                    <img className="item-img" src={require(`../assets/images/items/${props.thumb}`).default}></img>
                </Col>
                <Col className="d-flex align-items-center" lg={4}>
                    <div className="item-info-card">
                        <h2 className="sec-title">{props.title}</h2>
                        <p className="description">{props.desc}</p>
                        <h1 className="sec-title">₱ {dynPrice}</h1>
                        <button className="description btn-qty" onClick={subQty}><FaMinus/></button>
                        <input className="description qty-inp text-center" value={count} min="1" />
                        <button className="description btn-qty" onClick={() => setCount(count+1)}><FaPlus/></button>
                        <form className="add-to-cart-btn" onSubmit={addClicked}>
                            <button className="btn add-btn" type="submit">Add to Cart</button>
                        </form>
                    </div>
                </Col>
            </Row>

        </Container>
        </>
    )
}
