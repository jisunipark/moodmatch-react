import * as S from './style';
import { H1 } from '../Headings/style';
import landingImage from '../../assets/landing-image.png';

export default function LandingMain() {
  return (
    <S.Wrapper>
      <H1>Discover Your Perfect City Match</H1>
      <S.Image src={landingImage} />
    </S.Wrapper>
  );
}
