import React from 'react';

import ProgrammingCards from './ProgrammingCards';
import UxCards from './UxCards';

const ResourcesContainer = () => {
    return (
        <>
            {/* Programming Languages */}
            <ProgrammingCards />

            {/* UX/UI Design */}
            <UxCards />
        </>
    )
}

export default ResourcesContainer
