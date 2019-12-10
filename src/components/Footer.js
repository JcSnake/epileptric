import React from 'react';

class Footer extends React.Component{
    render(){
        return(
            <section id="footer">
                <div class="container-footer">
                    <div class="about">
                        <button id="about">About</button>
                        <ul id="li-a">
                            <li>Item 1</li>
                            <li>Item 2</li>
                            <li>Item 3</li>
                        </ul>
                    </div>
                    <div class="questions">
                        <button id="questions">Questions</button>
                        <ul id="li-q">
                            <li>Item 1</li>
                            <li>Item 2</li>
                            <li>Item 3</li>
                        </ul>
                    </div>
                    <div class="contact">
                        <button id="contact">Contact</button>
                        <ul id="li-c">
                            <li>Item 1</li>
                            <li>Item 2</li>
                            <li>Item 3</li>
                        </ul>
                    </div>
                    <div class="comments">
                        <button id="comments">Comments</button>
                        <ul id="li-co">
                            <li>Item 1</li>
                            <li>Item 2</li>
                            <li>Item 3</li>
                        </ul>
                    </div>
                </div>
                <div class="copy">
                    © 2019 Epileptrik Inc. All rights reserved.
                </div>
            </section>
        );
    }
}

export default Footer;