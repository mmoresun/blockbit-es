import React from 'react';
import { projectsData } from '../../data/projects-data';

import {
    OurProjectWrapper,
    OurProjectContentWrapper,
    OurProjectTitleWrapper,
    OurProjectListWrapper,
    TopProjectButton,
    BottomProjectButton,
    ProjectIMG,
    ProjectTitle
} from './styles';
import H2 from '../../smalls/H2';
import A from '../../smalls/A';
import Paragraph from '../../smalls/Paragraph';

const OurProjects = () => {
    return (
        <OurProjectWrapper>
            <OurProjectContentWrapper>
                <OurProjectTitleWrapper>
                    <H2 h2Color="blue" underline="left">Our Projects</H2>
                    <TopProjectButton type="collabButton">More</TopProjectButton>
                </OurProjectTitleWrapper>
                <OurProjectListWrapper>
                    {projectsData.map(project => {
                        return (

                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <A href={project.projectURL}><ProjectIMG src={project.projectPic} aria-label={project.projectTitle} /></A>
                                <A href={project.projectURL}><ProjectTitle>{project.projectTitle}</ProjectTitle></A>
                                <A href={project.projectURL}><Paragraph type="projects">{project.projectText}</Paragraph></A>
                            </div>

                        )
                    })}
                </OurProjectListWrapper>
                <BottomProjectButton>More</BottomProjectButton>
            </OurProjectContentWrapper>
        </OurProjectWrapper >
    );
}

export default OurProjects;
