import React from 'react';

import modernJS from '../img/javascript-img/1.jpeg';
import utilitiesJS from '../img/javascript-img/2.jpeg';
import eloquentJS from '../img/javascript-img/3.jpeg';

const ProgrammingCards = () => {
    return (
        <>
            <div className="programming-container">
                <h2 className="text-center">Javascript Development</h2>

                <div className="d-flex mt-4">
                    <div class="card shadow mx-4">
                        <a href="https://javascript.info/" target="_blank"><img class="card-img-top" src={ modernJS } alt="modern-Javascript"/></a>
                        <div class="card-body text-center">
                            <h4 class="card-title">Javascript Tutorial</h4>
                            <p class="card-text">
                            From the basics to advanced 
                            topics with simple, but detailed explanations.
                            </p>
                        </div>
                    </div>

                    <div class="card shadow mx-4">
                        <a href="https://1loc.dev/" target="_blank"><img class="card-img-top" src={ utilitiesJS } alt="utilitiesJS"/></a>   
                        <div class="card-body text-center">
                            <h4 class="card-title">1loc</h4>
                            <p class="card-text">
                            220 Favorite JavaScript Utilities
                            in single line of code! No more!
                            </p>
                        </div>
                    </div>

                    <div class="card shadow mx-4"> 
                        <a href="https://eloquentjavascript.net/" target="_blank"><img class="card-img-top" src={ eloquentJS } alt="eloquentJS"/></a>  
                        <div class="card-body text-center">
                            <h4 class="card-title">Eloquent Javascript</h4>
                            <p class="card-text">
                            This is a book about JavaScript, programming, 
                            and the wonders of the digital.
                            </p>
                        </div>
                    </div>    
                </div>
            </div>
        </>
    )
}

export default ProgrammingCards
