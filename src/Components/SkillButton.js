import React from 'react'
import styled from 'styled-components'

function SkillButton({skill}) {
    return (
        <SkillButtonStyled>
            {skill}
        </SkillButtonStyled>
    )
}

const SkillButtonStyled = styled.button`
    color:white;
    background-color: var(--primary-color);
    font-size:1.4rem;
    font-weight:500;
    text-transform:uppercase;
    border:none;
    padding:0.3rem 0.4rem;
    border-radius: 9%;
`;

export default SkillButton
