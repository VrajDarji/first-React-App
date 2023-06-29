import Links from "./pageLinks";
import Slinks from "./socialLinks";

const Footer = () => {
  return (
    <footer className="section footer">
      <Links parentClass="footer-links" itemClass="footer-link" />
      <Slinks parentClass="footer-icons" itemClass="footer-icon" />
      <p className="copyright">
        Copyright &copy; Backroads Travel Tours Company All Right Reserved
      </p>
      <br />
      <p>
        Made by:Vraj Darji &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Concept by:John
        Smilga
      </p>
    </footer>
  );
};

export default Footer;
