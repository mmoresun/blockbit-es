import React from 'react';

import { reviewData } from '../../data/review-data';

import MyCarousel from '../../mediums/MyCarousel';
import {
    ReviewWrapper,
    ReviewContentWrapper,
    ReviewIMG,
    ReviewAuthorWrapper,
    ReviewText,
    ReviewSlideWrapper,
    ReviewAuthorText,
    ReviewCompanyText
} from './styles';

const Reviews = () => {
    return (
        <ReviewWrapper>
            <MyCarousel
                showStatus={false}
                showArrows={false}
                showThumbs={false}
                autoPlay
                swipeable
                infiniteLoop
                interval="5000"
                transitionTime="400"            
            >
                {reviewData.map(review => {
                    return (
                        <ReviewSlideWrapper key={review.id}>
                            <ReviewContentWrapper>
                                <ReviewIMG src={review.reviewPic} alt="" />
                                <ReviewText>{review.text}</ReviewText>
                                <ReviewAuthorWrapper>
                                    <ReviewAuthorText>{review.author}</ReviewAuthorText>
                                    <ReviewCompanyText>{review.company}</ReviewCompanyText>
                                </ReviewAuthorWrapper>
                            </ReviewContentWrapper>
                        </ReviewSlideWrapper>
                    )
                })}
            </MyCarousel>
        </ReviewWrapper >
    );
}

export default Reviews;
