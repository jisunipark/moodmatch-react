import * as S from './style';
import Button from '../Button/Button';
import { H5 } from '../Headings/style';
import { PAGE_OPTIONS } from './data';

interface Props {
  page: 'personality' | 'values' | 'preferences';
}

export default function Selection({ page }: Props) {
  return (
    <S.Wrapper>
      <H5>
        Select up to 5 traits that
        <br />
        describe you best:
      </H5>
      <S.OptionWrapper>
        {PAGE_OPTIONS[page].map((p) => (
          <S.Option type="button" clicked={false}>
            {p}
          </S.Option>
        ))}
      </S.OptionWrapper>
      <Button width="long">Next</Button>
      <S.SkipButton>Skip</S.SkipButton>
    </S.Wrapper>
  );
}
