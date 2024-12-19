import { useState } from 'react';
import * as S from './style';

interface Props {
  children: string;
}

export default function Option({ children }: Props) {
  const [selected, setSelected] = useState(false);

  return (
    <S.Wrapper type="button" selected={selected} onClick={() => setSelected(!selected)}>
      {children}
    </S.Wrapper>
  );
}
