import React, {useState, useEffect} from 'react';
import Item from '../components/Item'
import Header from '../components/partials/Header'
import Footer from '../components/partials/Footer'
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import { getOneItem } from '../redux/actions/itemActions';
import {useSelector, useDispatch} from 'react-redux'
export default function ItemPage(props) {
const id = props.match.params.prodno
const history = useHistory()
const [status, setStatus] = useState(true)
const dispatch = useDispatch()
const items = useSelector(state => state.item_detail) 
const item = items.item
function setItem(){
    if(Object.keys(item).length === 0 && item.constructor === Object){
        return loading()
    }
    else{
        if(item === 404){
            return <span>Sorry, we couldn't find what you're looking for.</span>
        }
        return <Item thumb={item.thumb} desc={item.description} title={item.title} price={item.price} prodno={item.prodno}/>     
    }
}

useEffect(() => {
    dispatch(getOneItem(id))
}, [])

if(id === ''){
    history.push('/')
}

function loading(){
    return(
        <div className="container justify-center align-items-center">
            <div className="loadingio-spinner-rolling-m0kkotwichc">
                <div className="ldio-fjjt8eyoem">
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}
    return (
        <div>
            <Header/>
            {
            status? setItem(): <span>{loading()}</span>
            }
            <Footer/>
        </div>
    )
}
