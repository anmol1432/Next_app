import React from 'react'
import { FacebookOutlined, InstagramOutlined, TwitterOutlined, LinkedinOutlined } from '@ant-design/icons';

const Fotter = () => {
    return (
        <>
            <footer className="text-gray-600 body-font bg-gradient-to-br from-blue-500 to-indigo-800 pt-8 overflow-hidden" style={{ height: '60vh' }}>
                <div className="w-full px-5  flex md:items-center lg:items-start lg:px-28 md:flex-row md:flex-nowrap flex-wrap ">
                    <div className="flex flex-wrap w-full">
                        <div className="flex w-6/12 flex-col justify-between gap-y-4 items-start ">
                            <img src="https://www.protonn.com/_websiteAssets/img/navigation/logo-redesigned-white.svg" width={200} height={120} />
                            <p className="text-lg text-white ">
                                Protonn does everything you need to <br />  start and grow your business.
                            </p>
                            <div className="flex gap-x-4  ">
                                <FacebookOutlined className="bg-white text-2xl" />
                                <InstagramOutlined className="bg-white text-2xl" />
                                <TwitterOutlined className="bg-white text-2xl" />
                                <LinkedinOutlined className="bg-white text-2xl " />
                            </div>
                        </div>
                        <div className="flex w-6/12 items-start justify-around pt-4 flex-wrap ">
                            <div className="flex flex-col">
                                <h1 className="text-white text-2xl">Resources</h1>
                                <ul className="flex flex-col gap-y-2">
                                    <li className="text-white font-bold text-lg">
                                        Teams
                                    </li>
                                    <li className="text-white font-bold text-lg">
                                        Career
                                    </li>
                                    <li className="text-white font-bold text-lg">
                                        Contact
                                    </li>
                                </ul>
                            </div>
                            <div className="flex flex-col">
                                <h1 className="text-white text-2xl">Company</h1>
                                <ul className="flex flex-col gap-y-2">
                                    <li className="text-white font-bold text-lg">
                                        Blog
                                    </li>
                                    <li className="text-white font-bold text-lg">
                                        FAQ
                                    </li>
                                    <li className="text-white font-bold text-lg">
                                        Help & Support
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <hr className="w-full bg-white my-14" />
                        <div className=" flex px-10 justify-between w-full">
                            <p className="text-white font-medium">© 2021 PROTONN. All Rights Reserved.</p>
                            <span className="text-white font-medium flex ">
                                <p>Terms of Use</p>
                                <p className="px-2">.</p>
                                <p>Privacy Policy</p>
                            </span>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Fotter
