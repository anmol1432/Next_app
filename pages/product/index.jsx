import React from 'react'
import Head from 'next/head'
import Navbar from "../../Components/Navbar/index";


const Product = () => {
    return (
        <>
            <div>
                <Head>
                    <title>Product page</title>
                    <meta name="description" content="Proton" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Navbar />
            
            </div>
        </>
    )
}

export default Product
