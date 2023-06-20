

import { IconContext } from 'react-icons/lib';


export const Pricing = () =>{
    return (
        <IconContext.Provider value={{ color: '#a9b3c1', size: '1rem' }}>
            <PricingSection id="price">
                <PricingWrapper>
                    <Heading>Pick Your Best Option</Heading>

                    <TextWrapper
                        mb="1.4rem"
                        weight="600"
                        size="1.2rem"
                        color="white"
                        align="center"
                    >
                        Choose the perfect plan that fits your needs and start creating,
                        maintaining, and storing your data with Bolot today.
                    </TextWrapper>
                    <PricingContainer>
                        {pricingData.map((card, index) => (
                            <PricingCard key={index}>
                                <PricingCardInfo>
                                    <StyledTitle>{card.title}</StyledTitle>
                                    <Icon>{card.price}</Icon>
                                    <PricingCardText>{card.numAcc}</PricingCardText>
                                    <PricingCardFeatures>
                                        {card.features.map((feature, index) => (
                                            <PricingCardFeature key={index}>
                                                {feature}
                                            </PricingCardFeature>
                                        ))}
                                    </PricingCardFeatures>
                                    <Button>Get Started</Button>
                                </PricingCardInfo>
                            </PricingCard>
                        ))}
                    </PricingContainer>
                </PricingWrapper>
            </PricingSection>
        </IconContext.Provider>
    );
}

import styled from 'styled-components';
import {pricingData} from "@/data/PricingData";
import {Icon, StyledTitle} from "@/pages/Education";

export const PricingSection = styled.div`
	padding: 160px 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background: var(--bg-color);
`;

export const PricingWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 auto;

	@media screen and (max-width: 960px) {
		margin: 0 30px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;

export const PricingContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-flow: wrap;
	> div {
		margin: 0.7rem;
	}

	@media screen and (max-width: 768px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		> div {
			width: 90%;
		}
	}
`;

export const PricingCard = styled.div`
	&:hover {
		transform: scale(1.06);
		transition: all 0.3s ease-out;
	}
`;

export const PricingCardInfo = styled.div`
	background: transparent;
	box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
	width: 280px;
	text-decoration: none;
	border-radius: 4px;
	height: 100%;

	display: flex;
	flex-direction: column;
	padding: 24px;
	color: var(--text-color);
	margin: auto;
	> button {
		margin-top: auto;

		&:hover {
			color: black;
			background: white;
			transition: background 0.3s ease;
		}
	}

	@media screen and (max-width: 768px) {
		width: 90%;

		&:hover {
			transform: none;
		}
	}
`;

// export const PricingCardPlan = styled.h3`
// 	margin-bottom: 5px;
// 	font-size: 2rem;
// `;
//
// export const PricingCardCost = styled.h4`
// 	font-size: 1.2rem;
// `;

export const PricingCardText = styled.p`
	font-size: 1.1rem;
	margin: 0.4rem 0 1.3rem;
	color: #a9b3c1;
`;

export const PricingCardFeatures = styled.ul`
	margin: 16px 0 32px;
	list-style: none;
	display: flex;
	flex-direction: column;
	color: #a9b3c1;

`;

export const PricingCardFeature = styled.li`
	margin-bottom: 1rem;
	display: flex;
	//font-size: 0.94rem;
  font-size: 1.5rem;
  letter-spacing: .1rem;
  padding-top: .5rem;

	&:before {
		content: '🎧';
		margin-right: 0.4rem;
	}
`;

const Heading = styled.h2`
	font-size: clamp(1.3rem, 13vw, 3.1rem);
	margin: ${({ margin }) => (margin ? margin : '')};
	margin-bottom: ${({ mb }) => (mb ? mb : '')};
	margin-top: ${({ mt }) => (mt ? mt : '')};
	color: ${({ inverse }) => (inverse ? '$403ae3' : '#fff')};
	letter-spacing: 0.4rem;
	line-height: 1.06;
	text-align: center;
	width: ${({ width }) => (width ? width : '100%')};
`;

const TextWrapper = styled.span`
	
`;

const Button = styled.button`
	background: none;
	white-space: nowrap;
	padding: 10px 20px;
	color: var(--text-color);
	outline: none;
	border: .2rem solid var(--main-color) ;
  border-radius: .8rem;
  font-size: 1.8rem;
  letter-spacing: .1rem;
	cursor: pointer;
	overflow: hidden;
	position: relative;

	&:before {
		background: var(--main-color);
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: -1;
		transition: all 0.6s ease;
		width: 100%;
		height: 0%;
		transform: translate(-50%, -50%) rotate(45deg);
	}

	&:hover:before {
		height: 500%;
	}

	&:hover {
		color: black;
	}
`;