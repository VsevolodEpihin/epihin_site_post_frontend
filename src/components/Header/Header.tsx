import logo from '../../image/logo.png';

import styles from './Header.module.css';

const Header = () => {
  return(
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img
            src={logo}
            alt="logo"
            width={60}
          />
        </div>
        <nav className={styles.nav}>
          <span>Login In</span>
          <span>/</span>
          <span>Create Profile</span>
        </nav>
      </header>
    </>
  );
};

export default Header;
