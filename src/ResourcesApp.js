import React from 'react';

import NavMenu from './components/NavMenu';
import ResourcesMenu from './components/ResourcesMenu';
import ResourcesContainer from './components/ResourcesContainer';
import Footer from './components/Footer';

const ResourcesApp = () => {
    return (
        <>  
            {/* nav menu n banner */}
            <NavMenu />

            {/* resources menu */}
            <ResourcesMenu />

            {/* resources container */}
            <ResourcesContainer />

            {/* footer */}
            <Footer />
        </>
    )
};

export default ResourcesApp
