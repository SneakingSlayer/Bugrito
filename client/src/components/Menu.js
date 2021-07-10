import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom';
import { FaHotjar} from 'react-icons/fa';
import axios from 'axios'
import {Container, Row, Col} from 'react-bootstrap'
import { getItems } from '../redux/actions/itemActions';
import {useSelector, useDispatch} from 'react-redux'
export default function Menu(props) {
    const dispatch = useDispatch()
    const items = useSelector(state => state.item) 
    const prods = items.items
    
    useEffect(() => {
      dispatch(getItems())
    }, [])

    const populateItems = prods.map((item) => 
      <Link className="link"
      to={{
        pathname: `/Item/${item.prodno}`,
        state: {
          title: item.title,
          desc: item.description,
          price: item.price,
          size: item.size,
          thumb: item.thumb,
          prodno: item.prodno
        }
      }}
      >
          <div className="la-card">
              <div className="w-100 justify-center">
                <img className="img-fluid" src={require(`../assets/images/items/${item.thumb}`).default}/>
              </div>
              <div className="d-flex-row justify-space-between align-items-center mt-4">
                <p className="item-title">{item.title}</p>
                <p className="item-price">₱ {item.price}</p>
              </div>          
          </div>
        </Link>
    );
    
    return (
      <>
      <div className="container d-flex-col align-items-center prod-card">
          <div className="pd-0 container justify-center ">
            <div className="row">
            <h1 className="sec-title mt-4">All Bugritos</h1>
            </div>
          </div>
            <div className="card-row">
              
                {populateItems}
            </div>
       
        </div>
         </>
    )
}
