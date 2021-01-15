import React from 'react';

import javascript from '../img/javascript.png';
import ux from '../img/ux.png';
import youtube from '../img/youtube.png';
import twitch from '../img/twitch.png'

const ResourcesMenu = () => {
    return (
        <>
            <div className="container shadow resources-menu">
                <div className="d-flex justify-content-around">
                    <div className="javascript pt-5">
                        <div className="d-flex align-items-center justify-content-center">
                            <img className="resources-logo shadow" src={ javascript } />
                            <h3 className="ml-3">Programming Languages</h3>
                        </div>
                        <p className="mt-3 text-center">
                            There are a ton of Resources & Tools out there that promise <br/>
                            they can teach you <strong>"how to code"</strong> - but what does that mean<br/>
                            exactly if you're a tech newbie, and what if you're not sure <br/>
                            you're ready to invest in a formal course?
                        </p>
                    </div>

                    <div className="design pt-5">
                        <div className="d-flex align-items-center justify-content-center">
                            <img className="resources-logo shadow" src={ ux } />
                            <h3 className="ml-3">User Experience / User Design</h3>
                        </div>
                        <p className="mt-3 text-center">
                        Constantly updated online <strong>UI/UX</strong> design tools/resources library for<br/> 
                        Designers, helping you to create better design with less time.
                        </p>
                    </div>
                    
                </div>

                <div className="d-flex justify-content-around">
                    <div className="youtube pt-5">
                        <div className="d-flex align-items-center justify-content-center">
                            <img className="resources-logo shadow" src={ youtube } />
                            <h3 className="ml-3">YouTube Channels for Devs</h3>
                        </div>
                        <p className="mt-3 text-center">
                            <strong>Top YouTube Channels</strong> for Developers of all Levels. <br/>
                            Amongst the tribe of infinite learners, self-taught programmers,<br/>
                            digital nomads, there are few tools better than YouTube. <br/>
                        </p>
                    </div>

                    <div className="twitch pt-5">
                        <div className="d-flex align-items-center justify-content-center">
                            <img className="resources-logo shadow" src={ twitch } />
                            <h3 className="ml-3">Streaming Channels for Devs</h3>
                        </div>
                        <p className="mt-3 text-center">
                        <strong>Streaming Channels</strong> for Developers of all Levels. <br/>
                        Watch the best Software Development channels and <br/>streamers that are live on <strong>Twitch!</strong>
                        </p>
                    </div>
                    
                </div>
            </div>
        </>
    )
};

export default ResourcesMenu;
