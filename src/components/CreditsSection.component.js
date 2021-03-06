import styled from 'styled-components';
import {
  FlexWrapper,
  MediumHeadLine,
  SmallHeadLine,
} from '../utils/constants/styledComponentsGlobal.constant';
import { organizers } from '../utils/constants/credits.constant';
import linkedIn from '../assets/linkedIn-logo.png';
import facebookLogo from '../assets/facebook-logo.png';
import tbdImage from '../assets/TBD.png';

const TBD = [
  {
    name: 'TBD',
    image: tbdImage,
    facebookLink: '#',
    linkedInLink: '#',
  },
  {
    name: 'TBD',
    image: tbdImage,
    facebookLink: '#',
    linkedInLink: '#',
  },
  {
    name: 'TBD',
    image: tbdImage,
    facebookLink: '#',
    linkedInLink: '#',
  },
];

function CreditHeadLine({ text }) {
  return (
    <FlexWrapper width='auto' height='auto' margin='0 0 5rem'>
      <CustomHeadline color='pink'>{text}</CustomHeadline>
    </FlexWrapper>
  );
}

function CreditItem({
  linkedInLink = '#',
  facebookLink = '#',
  name = 'Full Name',
  image = 'https://image.shutterstock.com/image-illustration/male-default-avatar-profile-gray-260nw-582509287.jpg',
}) {
  return (
    <FlexWrapper width='auto' height='auto' flexDirection='column'>
      <ItemImage src={image} />
      <SmallHeadLine color='blue'> {name} </SmallHeadLine>
      <FlexWrapper>
        <a href={facebookLink}>
          <SocialLogo src={facebookLogo} />
        </a>
        <a href={linkedInLink}>
          <SocialLogo src={linkedIn} />
        </a>
      </FlexWrapper>
    </FlexWrapper>
  );
}

function CreditsSection() {
  return (
    <FlexWrapper height='auto' backgroundColor='gray'>
      <InnerWrapper flexDirection='column' alignItems='flex-start'>
        <CreditHeadLine text='Organizers' />
        <ItemsWrapper height='auto' justifyContent='flex-end'>
          {organizers.map(({ linkedInLink, facebookLink, name, image }) => (
            <CreditItem
              linkedInLink={linkedInLink}
              facebookLink={facebookLink}
              name={name}
              image={image}
            />
          ))}
        </ItemsWrapper>
        {/* <CreditHeadLine text='Mentors' />
        <ItemsWrapper height='auto' justifyContent='flex-end'>
          {TBD.map(({ linkedInLink, facebookLink, name, image }) => (
            <CreditItem
              linkedInLink={linkedInLink}
              facebookLink={facebookLink}
              name={name}
              image={image}
            />
          ))}
        </ItemsWrapper>
        <CreditHeadLine text='Judges' />
        <ItemsWrapper height='auto' justifyContent='flex-end'>
          {TBD.map(({ linkedInLink, facebookLink, name, image }) => (
            <CreditItem
              linkedInLink={linkedInLink}
              facebookLink={facebookLink}
              name={name}
              image={image}
            />
          ))}
        </ItemsWrapper> */}
      </InnerWrapper>
    </FlexWrapper>
  );
}

const InnerWrapper = styled(FlexWrapper)`
  width: 80vw;
  margin: 5rem;
`;

const ItemsWrapper = styled(FlexWrapper)`
  flex-wrap: wrap;
  gap: 4rem;
`;

const CustomHeadline = styled(MediumHeadLine)`
  margin-right: 5rem;
`;

const ItemImage = styled.img`
  border-radius: 2rem;
  margin: 1rem 0;
  height: 21rem;
  width: 22rem;
`;

const SocialLogo = styled.img`
  border-radius: 0.5rem;
  margin: 1rem;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }
`;

export default CreditsSection;
