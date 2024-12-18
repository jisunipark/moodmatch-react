import LogoIcon from '../../Icons/LogoIcon';
import * as S from './style';

export default function Logo() {
  return (
    <S.Wrapper>
      <LogoIcon />
      <S.LogoText>MoodMatch</S.LogoText>
    </S.Wrapper>
  );
}
