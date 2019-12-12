import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/sass/aboutcards.scss';
import icon from '../assets/img/git.svg';

class AboutProfile extends React.Component{
  
    state = {
        cards : [   {
                        name: 'Juan',
                        job: 'CEO & Founder',
                        details: 'The mind behind Epileptric',
                        git: 'https://github.com/JcSnake',
                        pic: 'https://dummyimage.com/300x150/000/fff.png'
                    },
                    {
                        name: 'Julio',
                        job: 'Front-End Developer',
                        details: 'The man behind the code',
                        git: 'https://github.com/Yulz22',
                        pic: 'https://dummyimage.com/300x150/000/fff.png'
                    },
                    {
                        name: 'Len',
                        job: 'Front-End Developer',
                        details: 'The woman behind the code',
                        git: 'https://github.com/lenserrano',
                        pic: 'https://dummyimage.com/300x150/000/fff.png'
                    }
        ]

    };

    render(){
        const { cards } = this.state;
        return(
            <>
                <div className="card-container">
                    {
                        cards.map((card)=>{
                            const{ name, job, details, git, pic } = card;
                            return(
                                <div className="card-profile">
                                    <img src={pic} alt="profile-pic"/>
                                    <h3>{name}</h3>
                                    <p className="title">{job}</p>
                                    <p>{details}</p>
                                    <a href={git}><img className = "git" src={icon} alt="github"/></a>
                                    <p><button><Link to="/" className="url">Contact</Link></button></p>
                                </div>
                            );
                        })
                    }
                </div>
            </>
        )
    }

}

export default AboutProfile;