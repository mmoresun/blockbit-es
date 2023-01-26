import styled from "styled-components";
import { device } from "../../utils/media-queries";

const StyledParagraph = styled.p`

font-size: 16px;

line-height: 150%;
line-height: ${props => props.type === "intro" && '120%'};
line-height: ${props => props.type === "techno" && '120%'};

margin: 0;
margin: ${props => props.type === 'banner' && '48px 0px 60px'};
margin: ${props => props.type === 'workflow' && '80px 0 0 0'};
margin: ${props => props.type === 'collab' && '16px 0 0 0'};
margin: ${props => props.type === 'techno' && '16px 0 0 0'};

/* margin: 16px 0 0 0;
margin: ${props => props.type === 'banner' && '48px 0px 60px'};
margin: ${props => props.type === 'workflow' && '80px 0 0 0'};
margin: ${props => props.type === 'intro' && '0'};
margin: ${props => props.type === 'techno' && '0'}; */

max-width: ${props => props.type === 'workflow' && '400px'}; 
max-width: ${props => props.type === 'intro' && '608px'}; 

@media ${device.tablet} {
    margin ${props => props.type === 'techno' ? '16px 0 0 0' : '0'};
}

@media ${device.mobile} {
    margin: ${props => props.type === 'banner' && '24px 0px 80px'};
    max-width: ${props => props.type === 'banner' && '215px'};
    font-size: ${props => props.type === "techno" && '13px'};    
    margin ${props => props.type === 'techno' ? '8px 0 0 0' : '0'};
}

color: red; // Paragraph text will be red if user forgot to set the type
color: ${props => props.type === 'banner' && 'rgb(255, 255, 255)'};
color: ${props => props.type === 'intro' && 'rgb(255, 255, 255)'};
color: ${props => props.type === 'attribute' && 'rgb(110, 119, 140)'};
color: ${props => props.type === 'techno' && 'rgb(41, 130, 226)'};
color: ${props => props.type === 'collab' && 'rgb(110, 119, 140)'};

text-align: ${props => props.type === 'workflow ' && 'center'};
`;

export default StyledParagraph;