import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layouts';
import SkillButton from './SkillButton';
import Title from './Title';

function SkillSection() {
    return (
        <SkillSectionStyled>
            <Title title={'My Skills'} span={'my skills'} />
            <InnerLayout>
                <div className="skills">
                    <SkillButton skill="html5"/>
                    <SkillButton skill="css"/>
                    <SkillButton skill="react js"/>
                    <SkillButton skill="Javascript"/>
                    <SkillButton skill="c++"/>
                    <SkillButton skill="c"/>
                    <SkillButton skill="python"/>
                    <SkillButton skill="redux"/>                   
                </div>
            </InnerLayout>
        </SkillSectionStyled>               
        )
}

const SkillSectionStyled = styled.section`

    .skills{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(2, 1fr);
        }
    }

`;

export default SkillSection
