import { Page } from '../styles/page';
import ResultCity from '../components/ResultCity/ResultCity';
import Curation from '../components/Curation/Curation';
import Gnb from '../components/Gnb/Gnb';

export default function ResultsPage() {
  return (
    <Page>
      <Gnb />
      <ResultCity />
      <Curation />
    </Page>
  );
}
