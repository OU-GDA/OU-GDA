import type { NextPage } from 'next';
import Header from '../public/components/Header';

import HeaderImage from '../public/images/placeholder.jpg';

const Home: NextPage = () => {
  return (
    <>
      <Header src={HeaderImage} fadeColor='#0F1113' overlay={<>Hello World!</>}/>
    </>
  );
}

export default Home;
