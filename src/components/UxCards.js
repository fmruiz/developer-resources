import React from 'react';

import behance from '../img/ux-img/ux-1.jpeg';
import colorMaterial from '../img/ux-img/ux-2.jpeg';
import googleFonts from '../img/ux-img/ux-3.jpeg';

const UxCards = () => {
    return (
        <>
            <div className="ux-container">
                <h2 className="text-center">User Interface / User Experience</h2>

                <div className="d-flex mt-4">
                    <div class="card shadow mx-4">
                        <a href="https://www.behance.net/" target="_blank"><img class="card-img-top" src={ behance } alt="modern-Javascript"/></a>
                        <div class="card-body text-center">
                            <h4 class="card-title">Behance</h4>
                            <p class="card-text">
                            Showcase and discover the latest work 
                            from top online portfolios by creative professionals
                            across industries
                            </p>
                        </div>
                    </div>

                    <div class="card shadow mx-4">
                        <a href="https://material.io/resources/color/" target="_blank"><img class="card-img-top" src={ colorMaterial } alt="utilitiesJS"/></a>   
                        <div class="card-body text-center">
                            <h4 class="card-title">Color Tool - Material Design</h4>
                            <p class="card-text">
                            Create and share color palettes for your UI, and
                            measure to accessibility of any color
                            combination.
                            </p>
                        </div>
                    </div>

                    <div class="card shadow mx-4"> 
                        <a href="https://fonts.google.com/" target="_blank"><img class="card-img-top" src={ googleFonts } alt="eloquentJS"/></a>  
                        <div class="card-body text-center">
                            <h4 class="card-title">Google Fonts</h4>
                            <p class="card-text">
                            Making the web more beautiful, fast, and open through
                            great typography.
                            </p>
                        </div>
                    </div>    
                </div>
            </div>
        </>
    )
}

export default UxCards
