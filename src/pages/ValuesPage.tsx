import Gnb from '../components/Gnb/Gnb';
import Selection from '../components/Selection/Selection';
import { Page } from '../styles/page';

export default function ValuesPage() {
  return (
    <Page>
      <Gnb />
      <Selection page="values" />
    </Page>
  );
}
