import * as S from './style';
import Button from '../Button/Button';
import { H5 } from '../Headings/style';
import { PAGE_OPTIONS } from './data';
import { Link } from 'react-router-dom';
import Option from './Option/Option';

interface Props {
  page: 'personality' | 'values' | 'preferences';
}

export default function Selection({ page }: Props) {
  return (
    <S.Wrapper>
      <S.TextWrapper>
        <H5>{PAGE_OPTIONS[page].question}</H5>
        <S.Direction>{PAGE_OPTIONS[page].direction}</S.Direction>
      </S.TextWrapper>
      <S.OptionWrapper>
        {PAGE_OPTIONS[page].list.map((p) => (
          <Option key={p}>{p}</Option>
        ))}
      </S.OptionWrapper>
      <Link to={`/${PAGE_OPTIONS[page].next}`}>
        <Button width="long">Next</Button>
      </Link>
      <S.SkipButton>Skip</S.SkipButton>
    </S.Wrapper>
  );
}
