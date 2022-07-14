import type { NextPage } from 'next';

// Constant Links
const HomeLink: string = '/';
const CommitteesLink: string = '/committees';
const WorkLink: string = '/work';

const NavBar = () => {
  return (
    <div className='nav-bar'>
        <a className='nav-link' href={HomeLink}>Home</a>
        <a className='nav-link' href={CommitteesLink}>Committees</a>
        <a className='nav-link' href={WorkLink}>Work</a>
    </div>
  );
}

export default NavBar;
