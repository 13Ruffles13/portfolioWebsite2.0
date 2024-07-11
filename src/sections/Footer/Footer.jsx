import styles from "./FooterStyles.module.scss";

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; 2024 Rafael Alvarado. <br />
        All rights reserved.
      </p>
    </section>
  );
}

export default Footer;
