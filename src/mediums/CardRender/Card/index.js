import React from 'react';

import {
    CardWrapper,
    CardTextWrapper,
    CardH3Title,
    CardIMG,
    CardRecommendText,
    CardText
} from './styles';

const Card = (props) => {
    return (
        <CardWrapper>
            <CardTextWrapper>
                <CardH3Title h3Color="lightblue">
                    {props.title}
                </CardH3Title>
                <CardText>
                    {props.cardText}
                </CardText>
                <CardRecommendText>
                    Recommended for:
                </CardRecommendText>
                <CardText>
                    {props.cardRecommend}
                </CardText>
            </CardTextWrapper>
            <CardIMG src={props.cardPicture} />
        </CardWrapper>
    );
}

export default Card;