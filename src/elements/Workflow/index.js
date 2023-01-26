import React from 'react';
import {
    WorkflowWrapper,
    WorkflowContentWrapper,
    WorkflowTextWrapper
} from './styles';

import CardRender from '../../mediums/CardRender';
import H2 from '../../smalls/H2';

const Workflow = () => {
    return (
        <WorkflowWrapper>
            <WorkflowContentWrapper>
                <H2 h2Color="blue" underline="center">
                    How we work with you
                </H2>
                <WorkflowTextWrapper>
                    Our goal is to provide maximum flexibility when cooperating with you
                </WorkflowTextWrapper>
            </WorkflowContentWrapper>
            <CardRender />
        </WorkflowWrapper>
    );
}

export default Workflow;
