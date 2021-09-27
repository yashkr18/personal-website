import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'sep:2020 - Present'} 
                        title={'Web Developer'}
                        subTitle={'Learnovate Eccomerce'}
                        text={'Made web pages for customer using team collaboration.'}
                    />
                    <ResumeItem 
                        year={'2019- 2020'} 
                        title={'Web Developer'}
                        subTitle={'Freelancer'}
                        text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. '} 
                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'2018 - 2022'} 
                        title={'Computer Science Degree (B.E)'}
                        subTitle={'Nitte Meenakshi Intitutte of Technology'}
                        text={' '} 
                    />
                    <ResumeItem 
                        year={'2016 - 2017'} 
                        title={'High School Education (CBSE)'}
                        subTitle={'Delhi Public School'}
                        text={' '} 
                    />
                    <ResumeItem 
                        year={'2014 - 2015'} 
                        title={'Primary Education (CBSE)'}
                        subTitle={'Bright Career School'}
                        text={' '} 
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume
