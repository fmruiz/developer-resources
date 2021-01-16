import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

    const github = <FontAwesomeIcon icon={ faGithub } />

    return (
        <footer className="container-fluid py-2">
            <p className="text-center p-0 m-0">{ github }</p>
        </footer>
    )
}

export default Footer
