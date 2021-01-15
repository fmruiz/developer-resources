import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

import banner from '../img/development.jpg'

const NavMenu = () => {
    // nav links icons
    const github = <FontAwesomeIcon icon={ faGithub } />
    const instagram = <FontAwesomeIcon icon={ faInstagram } />
    const twitter = <FontAwesomeIcon icon={ faTwitter } />

    return (
        <>
            <div className="container-fluid nav-menu p-0 m-0">
                <div className="links d-flex justify-content-end mt-2">
                    <a className="mr-5 github" href="#">{ github }</a>
                    <a className="mr-5 instagram" href="#">{ instagram }</a>
                    <a className="mr-5 twitter" href="#">{ twitter }</a>
                </div>

                <div className="title">
                    <h1>Developer<br/>Resources</h1>
                    <span>Hi, do you need any resources for your development?</span><br/>
                    {/* <button className="btn mt-3 p-2">Let's go</button> */}
                </div>

                <img className="img-fluid fixed-top shadow banner" src={ banner }/>
            </div>
        </>
    )
}

export default NavMenu
