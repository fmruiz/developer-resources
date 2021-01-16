import React from 'react';

import ProgrammingCards from './ProgrammingCards';
import UxCards from './UxCards';
import YoutubeCards from './YoutubeCards';
import TwitchCards from './TwitchCards';

const ResourcesContainer = () => {
    return (
        <>
            {/* Programming Languages */}
            <ProgrammingCards />

            {/* UX/UI Design */}
            <UxCards />

            {/* youtube channels cards */}
            <YoutubeCards />

            {/* twitch channels cards */}
            <TwitchCards />
        </>
    )
}

export default ResourcesContainer
