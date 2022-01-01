import React from 'react';


function Footer() {
    return (
        <div className="footer-wrapper">
            <div class="footer-text-container">
                <div class="footer-links">
                    <a href="https://github.com/" target="_blank">GitHub</a>
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" target="_blank">YouTube</a>
                    <a href="https://www.frontendmentor.io/" target="_blank">FrontendChallange</a>
                    <a href="https://restcountries.com/" target="_blank">REST countries API</a>
                </div>
                <div class="footer-text">
                    <h5>About REST Countries API challenge</h5>
                    <p>REST Countries API with color theme switcher challenge hub. Your challenge is to integrate with the REST Countries V2 API to pull country data and display it like in the designs.You can use any JavaScript framework/library on the front-end such as React or Vue. You also have complete control over which packages you use to do things like make HTTP requests or style your project.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;