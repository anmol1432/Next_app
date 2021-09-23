import React, { useState, useEffect } from "react";
import Head from 'next/head'
import Navbar from "../Components/Navbar/index";
import Fotter from "../Components/Fotter/index";
import { Form, Input, Button, Checkbox, Select } from 'antd';
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
    console.log('Failed:', errorInfo);
  };

// qwertyuiop
  const select = (
    <Select
      showSearch
      showArrow={false}
      className=""
      style={{ width: 120 }}
      placeholder='Select'
      defaultValue={<p className="text-black font-semibold"> {dialCode.country} </p>}
      optionFilterProp="children"
      onChange={(v, o) => {
        console.log("value : ", v, " : ", o)
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
        <title>Home page</title>
        <meta name="description" content="Proton" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-col flex-wrap lg:py-4  -mb-10 lg:w-1/2 lg:pl-36 pl-14 lg:text-left text-cente">
            <span className="lg:text-6xl text-4xl font-bold body-font ">
              Everything you
            </span>
            <span className="lg:text-6xl text-4xl font-bold body-font lg:py-4 py-2">
              need to grow
            </span>
            <span className="lg:text-6xl text-4xl font-bold body-font ">
              your business.
            </span>
            <p className="text-gray-500 text-base pt-8">
              Protonn is an all-in-one solution to empower independent  <br />
              professionals. Start your business in under 5 minutes. <br /> Attract new clients with interactive video.
              Manage your operations with ease.
            </p>
            <div className="w-4/6 p-8 rounded-2xl">
              <Form
                form={form}
                name="basic"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                onValuesChange={(val, all_Val) => {
                  all_Val.Phone == '' ?? setDialCode({ 'dialCode': '','country': '' })
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
                <div className="flex text-gray-500 font-semi-bold">

                </div>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: 'mandatory',
                    },
                  ]}
                >
                  <Input placeholder="Enter your email address" bordered={false} className={styles.input} />
                </Form.Item>

                <button className="bg-indigo-600  px-8 py-3 mb-4 font-base text-white inline-flex items-center space-x-2 rounded-xl text-lg ">
                  <span>Get Started With Protonn Today</span>
                </button>
                <p className=" text-gray-500 font-base">
                  By clicking "Send Link" you agree to ourTerms of
                  <br />
                  <span className=" text-indigo-500"> Service and Privacy</span> Policy
                </p>
              </Form>
            </div>
          </div>
          <div className="lg:w-1/2 mb-10 lg:mb-0 rounded-lg overflow-hidden w-full text-center ">
            <img alt="feature" className={`object-cover object-center lg:h-6/6  w-full ${styles.secfirstimg}`} src="https://www.protonn.com/_websiteAssets/img/home/main_image_v2.png" />
          </div>
        </div>
      </section>
      <Fotter className="" />
    </>
  )
}
