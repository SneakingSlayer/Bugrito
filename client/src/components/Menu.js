import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom';
import { FaHotjar} from 'react-icons/fa';
import axios from 'axios'
export default function Menu(props) {
    const [prods, setProds] = useState([])
    
    useEffect(() => {

      const getProduct = axios.get('http://localhost:5000/api/user/allProducts')
      .then((res) => {
        setProds(res.data)

      })
      .catch((err) =>{
        console.log(err)
      })
      
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
          <div className="card">
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
        
        <div className="container d-flex-col align-items-center">
          <div className="pd-0 container justify-center ">
            <div className="row">
            <h1 className="sec-title mt-4">All Bugritos</h1>
            </div>
            
          </div>
            

            <div className="card-row">
              
                {populateItems}
            </div>
       
        </div>
    )
}
