import Button from '../Button/Button';
import { H3 } from '../Headings/style';
import * as S from './style';

export default function GetStarted() {
  return (
    <S.Wrapper>
      <H3>Get Started with MoodMatch</H3>
      <S.Text>Select your traits and find your ideal city</S.Text>
      <Button width="short">Get Started</Button>
    </S.Wrapper>
  );
}
