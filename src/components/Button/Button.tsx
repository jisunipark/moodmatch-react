import * as S from './style';

interface Props {
  children: string;
  width: 'short' | 'long';
}

export default function Button({ children, width }: Props) {
  return (
    <S.Button type="button" width={width}>
      {children}
    </S.Button>
  );
}
