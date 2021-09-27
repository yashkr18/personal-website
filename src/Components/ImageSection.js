import React from 'react'
import styled from 'styled-components';
import about_profile from '../img/about_profile.jpg';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={about_profile} alt=""/>
            </div>
            <div className="right-content">
                <h4>Hello My name is <span>Yash Kumar</span></h4>
                <p className="paragraph">
                    I am an aspiring and passionate Frontend Web Developer using web technologies to build amazing products and solving
                    problems for different niches and industries using the power of technology.
                </p>
                <p className="paragraph">
                    I would love to hear from you. Whether it's a project ,job opportunity or just a chat. Feel free to contact me.
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality </p>
                        <p>Languages </p>
                        <p>Location</p>
                    </div>
                    <div className="info">
                        <p>: Yash Kumar</p>
                        <p>: 23</p>
                        <p>: Indian </p>
                        <p>: English </p>
                        <p>: Bangalore, India</p>
                    </div>
                </div>
                <PrimaryButton title={'Download Cv'} />
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }

    .left-content{
        width: 100%;
        img{
            width: 90%;
            /* object-fit: cover; */
            height:75%;
            
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;
