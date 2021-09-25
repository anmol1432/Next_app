import React, { useState, useEffect } from "react";
import Head from 'next/head'
import Navbar from "../Components/Navbar/index";
import Fotter from "../Components/Fotter/index";
import Midesection from "../Components/Midsection/index";
import { Form, Input, Select } from 'antd';
import { dials } from "../utils/dial.js";
import styles from '../styles/Home.module.css'


export default function Home() {
  const { Option } = Select;
  const [form] = Form.useForm();
  const [dialCode, setDialCode] = useState({
    'dialCode': '+91',
    'country': 'India'
  })

  useEffect(() => {
    form.setFieldsValue({
      Phone: dialCode.dialCode
    })
  }, [dialCode])

  const onFinish = (values) => {
    console.log('Success:', values);
  }

  const onFinishFailed = (errorInfo) => {
    console.log("Failed", errorInfo);
  };

  const select = (
    <Select
      showSearch
      showArrow={false}
      style={{ width: 120 }}
      placeholder='Select'
      defaultValue={<p className="text-black font-semibold"> {dialCode.country} </p>}
      optionFilterProp="children"
      onChange={(v, o) => {
        setDialCode({ 'dialCode': v, 'country': o.children.props.children })
      }}
    >
      {dials.map((items, index) => {
        return (
          <Option value={items.dial_code} key={index} label={items.code} className="text-black">
            <p className="text-black font-semibold">{items.name}</p>
          </Option>
        )
      })}
    </Select>
  );

  return (
    <>
      <Head>
        <title>Protonn: All-in-One Solution for Independent Professionals</title>
        <meta name="description" content="Proton" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <section className="text-gray-600 body-font">
        <div className="w-full lg:px-5  lg:text-left flex flex-wrap text-center pt-40">
          <div className="flex flex-col flex-wrap lg:py-4 lg:items-start items-center lg:w-1/2 lg:pl-36  lg:text-left text-center px-6 w-full">
            <h1 className="lg:text-6xl text-4xl font-bold body-font ">
              Everything you
              need to grow
              your business.
            </h1>
            <p className="text-gray-500 text-base lg:py-2">
              Protonn is an all-in-one solution to empower independent  <br />
              professionals. Start your business in under 5 minutes. <br /> Attract new clients with interactive video.
              Manage your operations with ease.
            </p>
            <div className="rounded-2xl lg:w-4/6  pt-4 w-5/6 p-0">
              <Form
                form={form}
                name="basic"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                onValuesChange={(val, all_Val) => {
                  all_Val.Phone == '' ?? setDialCode({ 'dialCode': '', 'country': '' })
                  console.log("qwerty : ", all_Val)
                }}
                autoComplete="off"
              >
                <Form.Item
                  name="Phone"
                  rules={[
                    {
                      required: true,
                      message: 'mandatory',
                    },
                  ]}
                >
                  <Input addonBefore={select} bordered={false} className={`${styles.input} `} />
                </Form.Item>

                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: 'mandatory',
                    },
                  ]}
                >
                  <Input placeholder="Enter your email address" bordered={false} className={`${styles.input} `} />
                </Form.Item>

                <button className="bg-indigo-600  px-8 py-3 mb-4 font-base text-white inline-flex items-center space-x-2 rounded-xl text-lg">
                  <span>Get Started With Protonn Today</span>
                </button>
                <p className=" text-gray-500 font-base">
                  By clicking Send Link you agree to ourTerms of
                  <br />
                  <span className=" text-indigo-500"> Service and Privacy</span>
                  Policy
                </p>
              </Form>
            </div>
          </div>
          <div className="lg:w-1/2 lg:mb-0 rounded-lg overflow-hidden w-full text-center lg:rounded-l-full lg:m-0 mt-8" style={{ backgroundColor: '#f2f4ff' }}>
            <img alt="feature" className={`object-cover object-center lg:h-6/6  w-full ${styles.secfirstimg}`}
              src="https://www.protonn.com/_websiteAssets/img/home/main_image_v2.png" />
          </div>
        </div>
      </section>
      <section className={`w-full lg:h-2/4 h-3/4 lg:my-32 my-16 `} >
        <video className={`block m-auto lg:w-2/4 w-full h-2/4 ${styles.vedioSection}`} controls>
          <source src="https://prod.protonncdn.com/demo/__compressed__protonn_explainer.mp4" type="video/mp4" />
          <source src="movie.ogg" type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </section>        
      <Midesection
        textOnRight={false}
        vedioSrc={"https://prod.protonncdn.com/demo/features/presence-in-5-minutes.mp4"}
        videoBgColor={'#f2f4ff'}
        heading={'Create your presence in under 5 minutes'}
        paragraph={"Create and share your public profile.Leverage the power of video to showcase your services. Offer customized packages. All-in-one-solution at your fingertips."}
      />
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
