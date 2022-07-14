import type { NextPage } from 'next';

import Image from 'next/image';
import Header from '../public/components/Header';

import HeaderImage from '../public/images/placeholder.jpg';
import Logo from '../public/images/gdaLogo.png';

const DiscordLink: string = 'https://discord.gg/z4fZ8UXa';
const NewsletterLink: string = '';

const Home: NextPage = () => {
  return (
    <>
      <Header src={HeaderImage} fadeColor={'#0F1113'} overlay={
        <>
          <div>
            <h2>The University of Oklahoma&apos;s</h2>
            <h1>Game Developer&apos;s Association</h1>
            <h2>─────────────────────</h2>
            <p>Join us on our&nbsp;
              <a href={DiscordLink}>Discord Server</a>
            </p>
            <p>Or sign up for our&nbsp;
              <a href={NewsletterLink}>Newsletter</a>
            </p>
          </div>
        </>
      }/>
    </>
  );
}

export default Home;
