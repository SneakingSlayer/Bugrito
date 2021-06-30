import React, {useState, useEffect} from 'react'
import Header from './partials/Header';
import Footer from './partials/Footer'
import axios from 'axios';
import {useParams} from 'react-router-dom'
import {FaPlus, FaMinus, FaCheckCircle } from 'react-icons/fa';
import {Container, Row, Col, Table, DropdownButton} from 'react-bootstrap'
export default function Item(props) {

    
   // const {title,desc,price,thumb,prodno} = (props.location && props.location.state) || {};c
    const [count, setCount] = useState(1);
    const [cartcount, setCartcount] = useState()
    const [total, setTotal] = useState();

    const uID = localStorage.getItem('_id')
    const jwt = localStorage.getItem('jwt')
    const dynPrice = parseInt(props.price) * count
 
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
            itemName: props.title,
            itemQty: count,
            itemPrice: props.price,
            itemTprice: total,
            thumb: props.thumb,
            prodno: props.prodno
        }
       

        try{
            await axios.post('/api/user/cart', addItem, {
                headers: header
            });
            fetchCount();

        }
        catch(e){
            console.log(e)

        }
    }

    function fetchCount(){
        const req = axios.get('/api/user/cartItems', {
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
        <Container>
            <Row>
                <Col lg={8}>
                    <img className="item-img" src={require(`../assets/images/items/${props.thumb}`).default}></img>
                </Col>
                <Col className="d-flex align-items-center" lg={4}>
                    <div>
                        <h2 className="sec-title">{props.title}</h2>
                        <p className="description">{props.desc}</p>
                        <h1 className="sec-title">₱ {dynPrice}</h1>
                        <button className="description btn-qty" onClick={subQty}><FaMinus/></button>
                        <input className="description qty-inp text-center" value={count} min="1" />
                        <button className="description btn-qty" onClick={() => setCount(count+1)}><FaPlus/></button>
                        <form onSubmit={addToCart}>
                            <button className="btn add-btn" type="submit">Add to Cart</button>
                        </form>
                    </div>
                </Col>
            </Row>

        </Container>
           {/** <div className="container justify-center">
                <div className="row align-items-center">
                    <div>
                        <img className="item-img" src={require(`../assets/images/items/${props.thumb}`).default}></img>
                    </div>
                    <div className="check-sec">
                        
                        <h2 className="sec-title">{props.title}</h2>
                        <p className="description">{props.desc}</p>
                        <h1 className="sec-title">₱ {dynPrice}</h1>
                        <button className="description btn-qty" onClick={subQty}><FaMinus/></button>
                        <input className="description qty-inp text-center" value={count} min="1" />
                        <button className="description btn-qty" onClick={() => setCount(count+1)}><FaPlus/></button>
                        
                        <form onSubmit={addToCart}>
                            <button className="btn add-btn" type="submit">Add to Cart</button>
                        </form>
                        
                    </div>
                </div>
                
            </div>*/}
        </div>
    )
}
