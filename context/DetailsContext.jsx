import React, { createContext, useEffect, useState } from "react";
import { ethers } from "ethers";
export const DetailsContext = createContext();
import { contractAddress, contractABI } from "../utils/Contract";
import { toast } from 'react-toastify';


const DetailsProvider = ({ children }) => {
  const [account, setAccount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [Data, setData] = useState({
    receiverAddress: "",
    amount: "",
    message: "",
  });

  const getContract = () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const transactionContract = new ethers.Contract(
      contractAddress,
      contractABI,
      signer
    );
    return transactionContract;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!Data.receiverAddress || !Data.amount || !Data.message) {
      toast.error('Please fill all the fields!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }

    if (!account) {
      toast.error('Please connect your wallet!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }

    if (!window.ethereum) {
      toast.error('Please Install Metamask!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }

    try {
      const { receiverAddress, amount, message } = Data;
      const transactionContract = getContract();

      const parsedAmount = ethers.utils.parseEther(amount);
      await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: account,
            to: receiverAddress,
            value: parsedAmount._hex,
            allowUnlimitedContractSize: true,
          },
        ],
      });

      const transactionHash = await transactionContract.sendEth(
        receiverAddress,
        parsedAmount,
        message
      );

      setIsLoading(true);
      await transactionHash.wait();
      setIsLoading(false);
      toast.success('Your transaction has been completed!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

    } catch (err) {
      console.log(err);
    }
  };

  const getTransactionHistory = async () => {
    try {
      if (!window.ethereum) {
        toast.error('Please Install Metamask!', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
          return;
      }

      const transactionContract = getContract();
      const transactions = await transactionContract.getTransactions();

      setTransactions(transactions);
    } catch (err) {
      console.log(err);
    }
  };

  const checkIfWalletIsconnected = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });

      if (accounts.length > 0) setAccount(accounts[0]);

      getTransactionHistory();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    checkIfWalletIsconnected();
  }, []);

  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        toast.error('Please Install Metamask!', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
          return;
      }
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setAccount(accounts[0]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <DetailsContext.Provider
      value={{
        connectWallet,
        account,
        handleChange,
        handleSubmit,
        isLoading,
        transactions,
      }}
    >
      {children}
    </DetailsContext.Provider>
  );
};

export default DetailsProvider;
