import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ethers } from 'ethers';

import { addWalletInfo } from 'slices/walletSlice';

import Searchbar from 'components/Searchbar';
import './index.scss';

const Header = () => {
  const [walletData, setData] = useState({ address: '', balance: null });
  const { address, balance } = useSelector(
    (state) => state.walletInfo.walletData,
  );
  const dispatch = useDispatch();

  const getbalance = async (address) => {
    const reponse = await window.ethereum.request({
      method: 'eth_getBalance',
      params: [address, 'latest'],
    });

    const balance = parseFloat(ethers.utils.formatEther(reponse)).toPrecision(
      3,
    );

    const payload = {
      balance,
      address,
    };

    dispatch(addWalletInfo(payload));

    setData({
      balance,
    });
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

  useEffect(() => {
    walletConnect();
  }, []);

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
          <p className="font-semibold text-sm">{address}</p>
          <p className="text-xs">Total Assets: {balance} ETH</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
