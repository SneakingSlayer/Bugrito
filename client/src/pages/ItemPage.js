import React, {useState, useEffect} from 'react';
import Item from '../components/Item'
import Header from '../components/partials/Header'
import Footer from '../components/partials/Footer'
import { useHistory } from 'react-router-dom';
import axios from 'axios'
export default function ItemPage(props) {
//////////////////////////////////////////////////INITIAL
const id = props.match.params.prodno
const [status, setStatus] = useState(false)

const [item, setItem] = useState({})

console.log(status, item)
const queryString = {
    prodno: id
}
useEffect(() => {
    //console.log(id)
axios.post('/api/user/getProduct', queryString)
.then(res=>{
   // console.log(res.data)
    const data = res.data
    setItem(data)
    setStatus(true)

})
.catch(err =>{

    setStatus(false)
    console.log(err)
})

//////////////



}, [])

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

/////////////////////////////////////////////////////////////////////////////////////////



    return (
        <div>
            {
            status? <Item thumb={item.thumb} desc={item.description} title={item.title} price={item.price} prodno={item.prodno}/>: <span>{loading()}</span>
            }
          
            <Footer/>
        </div>
    )
}
