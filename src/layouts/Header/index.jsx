import Searchbar from 'components/Searchbar';
import './index.scss';

const Header = () => {
  return (
    <div className="header bg-header flex flex-row justify-between items-center">
      <img
        src="assets/images/logo.png"
        alt="Savant Logo"
        className="logo ml-10"
      />
      <Searchbar />
      <div className="nav-links flex flex-row text-base text-white font-semibold">
        <div>DISCOVER</div>
        <div>CREATE</div>
        <div>ANALYTICS</div>
        <div>LEARN</div>
      </div>
      <img
        src="assets/images/setting-icon.svg"
        alt="Setting"
        className="setting-icon"
      />
      <div className="user-logo flex flex-row items-center">
        <img
          src="assets/images/avatar.svg"
          alt="Avatar"
          className="user-avatar"
        />
        <div className="user-info">
          <p className="font-semibold text-sm">savant.eth</p>
          <p className="text-xs">Total Assets: 3.45 ETH</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
