import type { NextPage } from 'next';
import Header from '../public/components/Header';

import HeaderImage from '../public/images/placeholder.jpg';

const Committees: NextPage = () => {
  return (
    <>
      <Header src={HeaderImage} alt='Header' fadeColor='#0F1113'/>
    </>
  );
}

export default Committees;
