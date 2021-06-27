import React from 'react'
import ProductCard from '../components/ProductCard';
import Header from '../components/partials/Header'
import Hero from '../components/Hero'
import Footer from '../components/partials/Footer'
export default function Home() {
    return (
        <>
            <Header/>
            <Hero/>
            <ProductCard/>
            <Footer/>
       </>
    )
}
