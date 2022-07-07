import { useState, useEffect } from 'react';
import { ethers } from 'ethers';

import Searchbar from 'components/Searchbar';
import './index.scss';

const Header = () => {
  const [walletData, setData] = useState({ address: '', balance: null });

  const getbalance = async (address) => {
    const balance = await window.ethereum.request({
      method: 'eth_getBalance',
      params: [address, 'latest'],
    });
    setData({ balance: ethers.utils.formatEther(balance) });
  };

  const accountChangeHandler = (account) => {
    setData({
      address: account,
    });
    getbalance(account);
  };

  const walletConnect = async () => {
    if (window.ethereum) {
      const [res] = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      accountChangeHandler(res);
    } else {
      alert('install metamask extension!!');
    }
  };

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
      <div
        className="user-logo flex flex-row items-center"
        onClick={walletConnect}
      >
        <img
          src="assets/images/avatar.svg"
          alt="Avatar"
          className="user-avatar"
        />
        <div className="user-info">
          <p className="font-semibold text-sm">{walletData.address}</p>
          <p className="text-xs">Total Assets: {walletData.balance} ETH</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
