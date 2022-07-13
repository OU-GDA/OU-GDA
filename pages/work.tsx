import type { NextPage } from 'next';
import Header from '../public/components/Header';

import HeaderImage from '../public/images/placeholder.jpg';

const Work: NextPage = () => {
  return (
    <>
      <Header src={HeaderImage} alt='Header'/>
    </>
  );
}

export default Work;
