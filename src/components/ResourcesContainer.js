import React from 'react';

import ProgrammingCards from './ProgrammingCards';
import UxCards from './UxCards';
import YoutubeCards from './YoutubeCards';

const ResourcesContainer = () => {
    return (
        <>
            {/* Programming Languages */}
            <ProgrammingCards />

            {/* UX/UI Design */}
            <UxCards />

            {/* youtube channels cards */}
            <YoutubeCards />
        </>
    )
}

export default ResourcesContainer
