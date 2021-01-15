import React from 'react';

import NavMenu from './components/NavMenu';
import ResourcesMenu from './components/ResourcesMenu';

const ResourcesApp = () => {
    return (
        <>  
            {/* nav menu n banner */}
            <NavMenu />

            {/* resources menu */}
            <ResourcesMenu />
        </>
    )
};

export default ResourcesApp
