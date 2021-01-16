import React from 'react';

import xagustin93 from '../img/twitch-img/ttv-1.jpeg';
import velasCode from '../img/twitch-img/ttv-2.jpeg';
import iDevelopThings from '../img/twitch-img/ttv-3.jpeg';

const TwitchCards = () => {
    return (
        <>
            <div className="twitch-container">
                <h2 className="text-center">Twitch Channels for Devs</h2>

                <div className="d-flex mt-4">
                    <div class="card shadow mx-4">
                        <a href="https://www.twitch.tv/xagustin93" target="_blank"><img class="card-img-top" src={ xagustin93 } alt="modern-Javascript"/></a>
                        <div class="card-body text-center">
                            <h4 class="card-title">xagustin93</h4>
                            <p class="card-text">
                            Desarrollador de aplicaciones multiplataforma y E-Commerce con más 
                            de 5 años en el mundo del desarrollo de aplicaciones de todo tipo.
                            </p>
                        </div>
                    </div>

                    <div class="card shadow mx-4">
                        <a href="https://www.twitch.tv/velas_code" target="_blank"><img class="card-img-top" src={ velasCode } alt="utilitiesJS"/></a>   
                        <div class="card-body text-center">
                            <h4 class="card-title">Velas_code</h4>
                            <p class="card-text">
                            Front end developer que hace proyectos y aprende en el camino.
                            </p>
                        </div>
                    </div>

                    <div class="card shadow mx-4"> 
                        <a href="https://www.twitch.tv/idevelopthings" target="_blank"><img class="card-img-top" src={ iDevelopThings } alt="eloquentJS"/></a>  
                        <div class="card-body text-center">
                            <h4 class="card-title">iDevelopThings</h4>
                            <p class="card-text">
                            Fullstack web developer, I stream my job, client work and 
                            personal projects. I love interacting with the community 
                            and getting to know other developers.
                            </p>
                        </div>
                    </div>    
                </div>
            </div>
        </>
    )
}

export default TwitchCards
