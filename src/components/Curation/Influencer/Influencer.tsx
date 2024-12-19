import * as S from './style';

export default function Influencer() {
  return (
    <S.Wrapper>
      <S.Image />
      <S.Info>
        <S.Name>Haruto Takahashi</S.Name>
        <S.UserName>@haruto_t</S.UserName>
      </S.Info>
      <S.Button>Follow</S.Button>
    </S.Wrapper>
  );
}
