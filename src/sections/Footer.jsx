const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="icon">
          <img src="/images/linkedin.png" alt="social icon" />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © 2025 Koen De Groot. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
