import * as S from './style';
import BrandCard from './BrandCard/BrandCard';
import { H4, H6 } from '../Headings/style';
import ValueBox from './ValueBox/ValueBox';
import Influencer from './Influencer/Influencer';

export default function Curation() {
  return (
    <S.Wrapper>
      <H4>Curated Recommendations</H4>
      <S.Section>
        <H6>Fashion Brands</H6>
        <S.Cards>
          <BrandCard />
          <BrandCard />
          <BrandCard />
        </S.Cards>
      </S.Section>
      <S.Section>
        <H6>Key Value</H6>
        <ValueBox />
      </S.Section>
      <S.Section>
        <H6>Influencers</H6>
        <S.Influencers>
          <Influencer />
          <Influencer />
          <Influencer />
        </S.Influencers>
      </S.Section>
    </S.Wrapper>
  );
}
