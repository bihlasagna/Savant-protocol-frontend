import './index.scss';

const Footer = () => {
  return (
    <footer className="flex flex-row items-center">
      <img src="assets/images/logo.png" alt="Savant Logo" />
      <div className="content">
        <div className="title font-bold text-5xl">SAVANT</div>
        <div className="desc">@ 2022 SAVANT, INC</div>
      </div>
    </footer>
  );
};

export default Footer;
