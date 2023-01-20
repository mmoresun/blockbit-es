import styled from 'styled-components'
import { Link } from 'gatsby'

const StyledHeaderLink = styled(Link)`
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    border: none;
    font-size: 16px;
    text-decoration: none;
    color: rgb(255, 255, 255);
    line-height: 30px;
    cursor: pointer;
    padding-bottom: 1px;    
`;

export default StyledHeaderLink;