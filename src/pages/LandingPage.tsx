import Gnb from '../components/Gnb/Gnb';
import LandingMain from '../components/LandingMain/LandingMain';
import { Page } from '../styles/page';

export default function LandingPage() {
  return (
    <Page>
      <Gnb />
      <LandingMain />
    </Page>
  );
}
