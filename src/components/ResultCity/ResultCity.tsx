import * as S from './style';
import { H2 } from '../Headings/style';
import TokyoImg from '../../assets/tokyo.png';

export default function ResultCity() {
  return (
    <S.Wrapper>
      <H2>
        The city that matches your mood is <span>Tokyo</span>.
      </H2>
      <S.Image src={TokyoImg} />
    </S.Wrapper>
  );
}
