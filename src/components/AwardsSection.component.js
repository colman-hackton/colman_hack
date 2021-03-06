import styled from 'styled-components';
import {
  FlexWrapper,
  BigHeadLine,
  MediumHeadLine,
  SplitLogo,
} from '../utils/constants/styledComponentsGlobal.constant';
import split from '../assets/dots.png';

function AwardsSection() {
  return (
    <FlexWrapper
      flexDirection='column'
      height='80vh'
      backgroundColor='gray'
    >
      <BigHeadLine color='black'> Awards </BigHeadLine>
      <AwardWrapper height='auto'>
        <MediumHeadLine color='blue'>7,000₪</MediumHeadLine>
        <SplitLogo height='4rem' src={split} />
        <BigHeadLine color='pink'> 1 </BigHeadLine>
      </AwardWrapper>
      <AwardWrapper height='auto'>
        <MediumHeadLine color='blue'>4,000₪</MediumHeadLine>
        <SplitLogo height='4rem' src={split} />
        <BigHeadLine color='pink'> 2 </BigHeadLine>
      </AwardWrapper>
      <AwardWrapper height='auto'>
        <MediumHeadLine color='blue'>2,000₪</MediumHeadLine>
        <SplitLogo height='4rem' src={split} />
        <BigHeadLine color='pink'> 3 </BigHeadLine>
      </AwardWrapper>
    </FlexWrapper>
  );
}

const AwardWrapper = styled(FlexWrapper)`
  margin: 3rem;
`;

export default AwardsSection;
