import React from 'react'
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import GithubIcon from '@material-ui/icons/GitHub';
import { LinkedIn } from '@material-ui/icons';
import Particle from '../Components/Particle';
import Typed from 'react-typed';

function HomePage() {
    return (
        <HomePageStyled>
            <div className="particle-con">
                <Particle />
            </div>
            <div className="typography">
                <h1>Hi, I'm 
                    <div>
                        <Typed
                            strings={['Yash Kumar']}
                            typeSpeed={70}
                        />
                    </div>
                </h1>
                <p>
                    Hey!, welcome to my portfolio website. Feel free to snoop thrrough it.
                </p>
                <div className="icons">
                    <a href="https://www.google.com" className="icon i-linkedin">
                        <LinkedIn />
                    </a>
                    <a href="https://www.google.com" className="icon i-github">
                        <GithubIcon />
                    </a>
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
   
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }

            .i-github{
                &:hover{
                    border: 2px solid white;
                    color: white;
                }
            }
            .i-linkedin{
                &:hover{
                    border: 2px solid #0077b5;
                    color: #0077b5;
                }
            }
        }
    }
`;

export default HomePage;
