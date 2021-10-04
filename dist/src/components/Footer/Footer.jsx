import React from 'react'
import './footer.scss'
import facebook from '../../components/assets/social/facebook-white.svg';
import twitter from '../../components/assets/social/twitter-white.svg';
import instagram from '../../components/assets/social/instagram-white.svg';
import appStore from '../../components/assets/store/app-store.svg';
import playStore from '../../components/assets/store/play-store.svg';
import windowsStore from '../../components/assets/store/windows-store.svg';



const Footer = () => {
    return (
        <div className='container-footer'>
            <div className='footer'>
                <div className="footer__pages">
                    <ul>
                        <li>
                            <a href='http://localhost:3000/'>Home</a>
                        </li>
                        <li>
                                <span>| </span><a href="http://localhost:3000/">Terms and Conditions</a>
                        </li>
                        <li>
                                <span>| </span><a href="http://localhost:3000/">Privacy Policy</a>
                        </li>
                        <li>
                                <span>| </span><a href="http://localhost:3000/">Collection Statement</a>
                        </li>
                        <li>
                                <span>| </span><a href="http://localhost:3000/">Help</a>
                        </li>
                        <li>
                                <span>| </span><a href="http://localhost:3000/">Manage Account</a>
                        </li>
                    </ul>
                </div>
                <div className="footer__copyright">
                    <p>Copyright © 2016 DEMO Streaming. All Rights Reserved.</p>
                </div>
                <div className="footer__endBox">
                    <div className="footer__endBox-social">
                        <div>
                            <img src={facebook} alt='facebook' />
                        </div>
                        <div>
                            <img src={twitter} alt='twitter'/>
                        </div>
                        <div>
                            <img src={instagram} alt='instagram'/>
                        </div>
                    </div>
                    <div className="footer__endBox-apps">
                        <div>
                            <img src={appStore} alt='appStore'/>
                        </div>
                        <div>
                            <img src={playStore} alt='playStore'/>
                        </div>
                        <div>
                            <img src={windowsStore} alt='windows'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
