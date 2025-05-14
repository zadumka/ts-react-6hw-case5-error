import Link from 'next/link';
import css from './Header.module.css';

export default function Header() {
  return (
    <div className={css.header}>
      <Link href="/" aria-label="Home">
        NoteHub
      </Link>

      <ul className={css.navigation}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/notes">Notes</Link>
        </li>
      </ul>
    </div>
  );
}
