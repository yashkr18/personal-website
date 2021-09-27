import React from 'react';
// import Skills from '../Components/Skills';

import { MainLayout} from '../styles/Layouts';
import Resume from '../Components/Resume';
import SkillSection from '../Components/SkillSection';

function ResumePage() { 
    return (
        <MainLayout>
            <SkillSection />
            <Resume />
        </MainLayout>
    )
}

export default ResumePage
