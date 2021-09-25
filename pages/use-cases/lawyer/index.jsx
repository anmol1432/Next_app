import React, { useState, useEffect } from "react";
import Head from 'next/head'
import Navbar from "../../../Components/Navbar";
import Fotter from "../../../Components/Fotter/index";
import Midesection, { MidSectionBtn } from "../../../Components/Midsection/index";


export default function Lawyer() {
    return (
        <>
            <Head>
                <title>Protonn: All-in-One Solution for Independent Professionals</title>
                <meta name="description" content="Proton" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />

            <Midesection
                textOnRight={false}
                vedioSrc={"https://prod.protonncdn.com/demo/features/presence-in-5-minutes.mp4"}
                videoBgColor={'#f2f4ff'}
                heading={'Create your presence in under 5 minutes'}
                paragraph={"Create and share your public profile.Leverage the power of video to showcase your services. Offer customized packages. All-in-one-solution at your fingertips."}
            />

            <MidSectionBtn />
            <Midesection
                textOnRight={true}
                vedioSrc={"https://prod.protonncdn.com/demo/features/engaging-videos.mp4"}
                videoBgColor={'#fdf0d9'}
                heading={'Attract new clients through engaging videos'}
                paragraph={"Use Protonn’s Magic Mode to interact with PDFs, documents, and images in your videos. Edit with ease. Post to social media in one click to attract new clients."}
            />
            <Midesection
                textOnRight={false}
                vedioSrc={"https://prod.protonncdn.com/demo/features/scheduling.mp4"}
                videoBgColor={'#cfede0'}
                heading={'Provide hassle-free scheduling for clients'}
                paragraph={"Connect your calendar. Open up slots. No more back-and-forth phone calls or emails. Scheduling simplified."}
            />
            <Midesection
                textOnRight={true}
                vedioSrc={"https://prod.protonncdn.com/demo/features/create-invoice.mp4"}
                videoBgColor={'#ffdde2'}
                heading={'Manage your payments easily'}
                paragraph={"Don’t chase clients for payments. Get paid faster with easy and secure options. Accept money through Credit Card, Apple Pay, Google Pay, Venmo, and Zelle on your page. Invoices generated automatically."}
            />
            <Midesection
                textOnRight={false}
                vedioSrc={"https://prod.protonncdn.com/demo/features/payments.mp4"}
                videoBgColor={'#f2f1f2'}
                heading={'Track revenue and client analytics'}
                paragraph={"Watch your sales grow. Analyze your business. Understand your customers. One single dashboard to manage it all."}
            />
            <Fotter />
        </>
    )
}
