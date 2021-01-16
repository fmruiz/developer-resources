import React from 'react';

import holaMundo from '../img/youtube-img/yt-1.jpeg';
import freeCodeCamp from '../img/youtube-img/yt-2.jpeg';
import cleverCode from '../img/youtube-img/yt-3.jpeg';

const YoutubeCards = () => {
    return (
        <>
            <div className="youtube-container">
                <h2 className="text-center">Youtube Channels for Devs</h2>

                <div className="d-flex mt-4">
                    <div class="card shadow mx-4">
                        <a href="https://www.youtube.com/c/HolaMundoDev/videos" target="_blank"><img class="card-img-top" src={ holaMundo } alt="modern-Javascript"/></a>
                        <div class="card-body text-center">
                            <h4 class="card-title">Hola Mundo</h4>
                            <p class="card-text">
                            Consejos, ejercicios, opiniones, pruebas
                            de desarrollo y guias para desarrolladores.
                            </p>
                        </div>
                    </div>

                    <div class="card shadow mx-4">
                        <a href="https://www.youtube.com/c/Freecodecamp/videos" target="_blank"><img class="card-img-top" src={ freeCodeCamp } alt="utilitiesJS"/></a>   
                        <div class="card-body text-center">
                            <h4 class="card-title">FreeCodeCamp.org</h4>
                            <p class="card-text">
                            Learn to code at home. Build projects. 
                            Earn certifications. Since 2014, more than 40000 freeCodeCamp.org 
                            graduates have gotten jobs at tech companies.
                            </p>
                        </div>
                    </div>

                    <div class="card shadow mx-4"> 
                        <a href="https://www.youtube.com/c/CleverProgrammer/videos" target="_blank"><img class="card-img-top" src={ cleverCode } alt="eloquentJS"/></a>  
                        <div class="card-body text-center">
                            <h4 class="card-title">Clever Programmer</h4>
                            <p class="card-text">
                            You can find awesome programming lessons here! Also, 
                            expect programming tips and tricks that will take your 
                            coding skills to the next level.
                            </p>
                        </div>
                    </div>    
                </div>
            </div>
        </>
    )
}

export default YoutubeCards
