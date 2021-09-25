import React from 'react'
import Image from "next/image";
import styles from './midSection.module.css'


const Midesection = ({ textOnRight, heading, paragraph, videoBgColor, vedioSrc }) => {
    return (
        <>
            <div className={textOnRight ? 'lg:flex-row w-full flex lg:mb-20 mb-24   flex-col  lg:flex-row-reverse ' : 'lg:flex-row w-full flex lg:mb-20 mb-24  flex-col'} id={styles.mainDiv} >
                <div className={`flex flex-col  lg:gap-y-4 gap-y-3 justify-center  lg:w-3/6 w-6/6 lg:pl-36 lg:text-left text-center items-center`}>
                    <h1 className={`lg:text-6xl text-4xl lg:w-9/12 w-11/12  font-bold body-font `} id={styles.heading}>
                        {heading}
                    </h1>
                    <p className={`text-gray-700 font-semibold text-xl lg:w-9/12 w-11/12 text-lg body-font  `}>
                        {paragraph}
                    </p>
                </div>
                <div className={textOnRight ? ` lg:w-3/6 w-5/6 h-2/5 lg:h-full block m-auto rounded-r-3xl flex lg:justify-end justify-center` : ` lg:w-3/6 w-5/6 h-2/5 lg:h-full block m-auto rounded-l-3xl flex lg:justify-start justify-center`} style={{ backgroundColor: `${videoBgColor}` }}>
                    <video autoPlay loop className={`rounded-3xl   ${styles.Video} `} >
                        {/* <source src="https://prod.protonncdn.com/demo/features/presence-in-5-minutes.webm"  type="video/webm" /> */}
                        <source src={`${vedioSrc}`} type="video/mp4" />
                    </video>
                </div>
            </div>
        </>
    )
}

const MidSectionBtn = ({ textOnRight, heading, paragraph, imgBgColor, imgSrc }) => {
    return (
        <>
            <div className={textOnRight ? 'lg:flex-row w-full flex lg:mb-20 mb-24   flex-col  lg:flex-row-reverse ' : 'lg:flex-row w-full flex lg:mb-20 mb-24  flex-col'} id={styles.mainDiv} >
                <div className={`flex flex-col  lg:gap-y-4 gap-y-3 justify-center  lg:w-3/6 w-6/6 lg:pl-36 lg:text-left text-center items-center`}>
                    <h1 className={`lg:text-6xl text-4xl lg:w-9/12 w-11/12  font-bold body-font `} id={styles.heading}>
                        {heading}
                    </h1>
                    <p className={`text-gray-700 font-semibold text-xl lg:w-9/12 w-11/12 text-lg body-font  `}>
                        {paragraph}
                    </p>

                </div>
                <div className={textOnRight ? ` lg:w-3/6 w-5/6 h-2/5 lg:h-full block m-auto rounded-r-3xl flex lg:justify-end justify-center` : ` lg:w-3/6 w-5/6 h-2/5 lg:h-full block m-auto rounded-l-3xl flex lg:justify-start justify-center`} style={{ backgroundColor: `${imgBgColor}` }}>
                    <Image
                        src="https://www.protonn.com/_websiteAssets/img/lawyer/lawyer-main-image.png"
                        alt="Brand img"
                        width={200}
                        height={300}
                    />
                </div>
            </div>
        </>
    )
}



export { MidSectionBtn };
export default Midesection;
