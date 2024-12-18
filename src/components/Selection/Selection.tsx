import Button from '../Button/Button';
import { H5 } from '../Headings/style';
import * as S from './style';

export default function Selection() {
  return (
    <S.Wrapper>
      <H5>
        Select up to 5 traits that
        <br />
        describe you best:
      </H5>
      <S.Trait type="button">Genorous</S.Trait>
      <Button width="long">Next</Button>
      <S.SkipButton>Skip</S.SkipButton>
    </S.Wrapper>
  );
}
