import React from 'react'
import { Link } from 'react-router-dom';

const title = "About Siddharth Enterprise";
const desc="We are dedicated to bringing the finest edible oils from leading brands directly to your kitchen. With an extensive selection of high-quality oils, including olive, sunflower, coconut, and more, we ensure that every bottle meets the highest standards of purity and taste.";

const addressList = [
    {
        iconName: 'icofont-google-map',
        text: ' Solapur, Maharashtra.',
    },
    {
        iconName: 'icofont-phone',
        text: ' 9422459510',
    },
    {
        iconName: 'icofont-envelope',
        text: ' siddharthenterprise@gmail.com',
    },
]

const Footer = () => {
  return <footer className='style-2'>
     <div className="footer-top dark-view p-4">
        <div className="p-2 m-2">
            <div className="row row-cols-xl-2 row-cols-sm-2 row-cols-1 justify-content-center">
                <div className="col">
                    <div className="footer-item our-address">
                        <div className="footer-inner">
                            <div className="footer-content">
                                <div className="title">
                                    <h4>{title}</h4>
                                </div>
                                <div className="content">
                                    <p>
                                        {desc}
                                    </p>
                                    {/* <ul className='lab-ul office-address'>
                                        {
                                            addressList.map((val, i) => (
                                                <li key={i}>
                                                    <i className={val.iconName}>{val.text}</i>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                     */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="px-4 footer-item our-address">
                        <div className="px-4 footer-inner">
                            <div className="px-4 footer-content">
                                {/* <div className="title">
                                    <h4>{title}</h4>
                                </div> */}
                                <div className="content">
                                    {/* <p>
                                        {desc}
                                    </p> */}
                                    <ul className='lab-ul office-address'>
                                        {
                                            addressList.map((val, i) => (
                                                <li key={i}>
                                                    <i className={val.iconName}>{val.text}</i>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
     </div>

     {/* footer bottom */}
     <div className="footer-bottom">
        <div className="container">
            <div className="section-wrapper">
                <p>&copy; 2024
                    <Link to="/">Siddharth Enterprise</Link>Designed by <a href='/' target="_blank">xyz</a>
                </p>
            </div>
        </div>
     </div>
  </footer>
}

export default Footer