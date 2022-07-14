import type { NextPage } from 'next';
import Link from 'next/link';

const NavBar = () => {
  return (
    <>
        <Link href={'/'} >Home</Link>
        <Link href={'/committees'}>Committees</Link>
        <Link href={'/work'}>Work</Link>
    </>
  );
}

export default NavBar;
