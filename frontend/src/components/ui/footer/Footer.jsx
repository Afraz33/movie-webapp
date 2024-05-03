import footerStyles from "./Footer.module.css";
function Footer() {
  return (
    <footer className={footerStyles.footerContainer}>
      <p className={footerStyles.footerText}>Movie-Webapp@Cowlar</p>
      <p>Made By Afraz</p>
    </footer>
  );
}

export default Footer;
