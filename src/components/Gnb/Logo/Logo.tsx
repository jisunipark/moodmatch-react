import { Link } from 'react-router-dom';
import LogoIcon from '../../Icons/LogoIcon';
import * as S from './style';

export default function Logo() {
  return (
    <Link to="/">
      <S.Wrapper>
        <LogoIcon />
        <S.LogoText>MoodMatch</S.LogoText>
      </S.Wrapper>
    </Link>
  );
}
