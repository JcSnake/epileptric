import React from 'react';

import '../assets/sass/aboutcards.scss';
import icon from '../assets/img/git.svg';
import len from '../assets/img/len.jpg'

class AboutProfile extends React.Component{
  
    state = {
        cards : [   {
                        name: 'Juan',
                        job: 'CEO & Fundador',
                        details: 'La mente maestra detrás Epileptric',
                        git: 'https://github.com/JcSnake',
                        pic: 'https://dummyimage.com/300x150/000/fff.png'
                    },
                    {
                        name: 'Julio',
                        job: 'Desarrollador Front-End',
                        details: 'El hombre detrás del código',
                        git: 'https://github.com/Yulz22',
                        pic: 'https://dummyimage.com/300x150/000/fff.png'
                    },
                    {
                        name: 'Len',
                        job: 'Desarrollador Front-End',
                        details: 'La mujer detrás del código',
                        git: 'https://github.com/lenserrano',
                        pic: len
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
                                    <img src={pic} alt="profile-pic" className="pic"/>
                                    <h3>{name}</h3>
                                    <p className="title">{job}</p>
                                    <p>{details}</p>
                                    <a href={git}><img className = "git" src={icon} alt="github"/></a>
                                    <p><button><a href="#" className="url">Contacto</a></button></p>
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