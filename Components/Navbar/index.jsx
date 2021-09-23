import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from "next/link";
import { CaretDownOutlined, CaretUpOutlined, MenuOutlined } from '@ant-design/icons';
import { Menu, Dropdown } from 'antd';
import styles from '../../styles/navbar.module.css'

const Navbar = () => {
    const router = useRouter()
    const [dropDownVisible, setdropDownVisible] = useState()
    const [resources, setresources] = useState()
    const links = ["Lawyer", "Nutritonist", "Coach", "Therapist", "Designer", "Sales Proffesional"]

    const menu = (
        <Menu className={styles.dropdown}>
            {links.map((item, index) => {
                return (<>
                    <Menu.Item style={{ padding: '15px 0px' }} key={index.toString()}>
                        <Link href="/" >
                            <li key={index.toString()} className=" font-medium space-x-2  rounded-full  " style={{ fontSize: '1.2rem' }}>  {item} </li>
                        </Link>
                    </Menu.Item>
                </>)
            })}
        </Menu>
    );

    const resource = (
        <Menu className={styles.dropdown}>
            {links.map((item, index) => {
                return (<>
                    <Menu.Item style={{ padding: '15px 0px' }} key={index.toString()}>
                        <Link href="/" >
                            <li key={index.toString()} className=" font-medium space-x-2  rounded-full  " style={{ fontSize: '1.2rem' }}>  {item} </li>
                        </Link>
                    </Menu.Item>
                </>)
            })}
        </Menu>
    );

    return (
        <>
            <nav className={styles.nav} id='navbar'>
                <div className={styles.main}>
                    <div className="flex items-center  w-6/12">
                        <Link href="/" >
                            <Image
                                src="https://www.protonn.com/_websiteAssets/img/navigation/logo-redesigned-blue.svg"
                                alt="Brand img"
                                width={165}
                                height={90}
                            />
                        </Link>
                        <ul className="flex  lg:ml-8 gap-8 w-5/6">
                            <Link href="/product" >
                                <li
                                    // height={100}
                                    className={router.pathname == "/product" ? "text-indigo-600 border-b-2 border-indigo-700 py-4 px-2 font-semibold text-xl" : "text-gray-900 font-semibold text-xl"}>
                                    Product
                                </li>
                            </Link>
                            <Dropdown arrow overlay={menu} placement="bottomCenter" trigger={['click']} onVisibleChange={(visible) => setdropDownVisible(visible)}>
                                <span className={`${dropDownVisible ? "text-indigo-600" : "text-gray-900"}  px-2 font-semibold text-xl  flex items-center`}>
                                    Use Cases
                                    {dropDownVisible ? <CaretDownOutlined className="text-sm ml-3 mt-2" /> : <CaretUpOutlined className="text-sm ml-3 mt-2" />}
                                </span>
                            </Dropdown>
                        </ul>
                    </div>
                    <div className="flex w-6/12 items-center " style={{ paddingBottom: '0px' }} >
                        <ul className="flex items-center lg:ml-8  w-5/6 justify-end" style={{ paddingBottom: '0px' }} >
                            <Dropdown arrow overlay={resource} placement="bottomCenter" trigger={['click']} onVisibleChange={(visible) => setresources(visible)}>
                                <span className={`${resources ? "text-indigo-600" : "text-gray-900"}  px-2 font-semibold text-xl flex items-center`}>
                                    Resources
                                    {resources ? <CaretDownOutlined className="text-sm ml-3 mt-2" /> : <CaretUpOutlined className="text-sm ml-3 mt-2" />}
                                </span>
                            </Dropdown>
                            <button className="bg-indigo-600 ml-8 px-6 py-3 font-semibold text-white inline-flex items-center space-x-2 rounded-3xl text-xl ">
                                <span>Get Started</span>
                            </button>
                        </ul>
                    </div>
                </div>

                {/* responsive part */}
                <div className={styles.menubtn}>
                    <Link href="/" >
                        <Image
                            src="https://www.protonn.com/_websiteAssets/img/navigation/logo-redesigned-blue.svg"
                            alt="Brand img"
                            width={130}
                            height={50}
                        />
                    </Link>

                    <div className="text-2xl" onClick={() => {
                        if (document.getElementById('navbar').offsetHeight > 578) {
                            document.getElementById('navbar').style.height = '10vh'
                        }
                        else {
                            document.getElementById('navbar').style.height = '90vh'
                        }
                        return ""
                    }}>
                        <MenuOutlined className="ml-8" />
                    </div>
                </div>
                <div className="flex flex-col text-center" id="navbarBody">

                </div>
            </nav>
        </>
    )
}

export default Navbar
