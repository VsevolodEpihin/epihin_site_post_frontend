import styles from './HeaderPage.module.css';
import logo from '../../image/logo.png';

const HeaderPage = () => {
  return(
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          {<img
            src={logo}
            alt="logo"
            width={60}
          />}
        </div>
        <nav className={styles.nav}>
          <a href="##">Login In</a>
          <span>/</span>
          <a href="##">Create Profile</a>
        </nav>
      </header>
    </>
  );
};

export default HeaderPage;
