import { DetailsContext } from "../context/DetailsContext";
import React, { useContext } from "react";

const MainHome = () => {
  const { connectWallet, account, handleChange, handleSubmit, isLoading } =
    useContext(DetailsContext);
  return (
    <div className="self-stretch flex items-center justify-center py-[100px] px-[30px]">
      <div className="w-full flex-1 flex items-center justify-between max-w-[1440px] sm:flex-col sm:gap-[20px]">
        <div className="w-full max-w-[600px] flex flex-col items-start justify-center gap-[50px]">
          <div className="flex flex-col items-start justify-center gap-[25px]">
            <div className="text-29xl">
              Send and Receive Eth easily on Cryptico
            </div>
            <div className="text-5xl">
              Explore the crypto world. Send Eth across the globe easily on
              Cryptico.
            </div>
          </div>
          {!account ? (
            <button className="cursor-pointer py-[15px] px-5 bg-[transparent] rounded-lg items-center justify-center border-[1px] border-solid border-darkslategray-100 text-lg font-inter text-text-color text-center hover:bg-hover" onClick={connectWallet}>
              Connect Wallet
            </button>
          ) : null}
        </div>
        <div className="flex-1 rounded-6xl [background:linear-gradient(70.2deg,_rgba(8,_46,_5,_0.25),_rgba(5,_20,_46,_0.25))] flex flex-col items-center justify-center py-[25px] px-[30px] box-border gap-[25px] max-w-[500px]">
          <div className="w-full flex flex-col items-center justify-center gap-[20px]">
            {account && <p>Account Number: {account}</p>}
            <input
              className="font-inter text-lg bg-[transparent] self-stretch rounded flex flex-col items-center justify-center p-2.5 border-[1px] border-solid border-gainsboro-200 text-text-color"
              type="text"
              name="receiverAddress"
              placeholder="Receiver's Address"
              onChange={(e) => handleChange(e)}
            />
            <input
              className="font-inter text-lg bg-[transparent] self-stretch rounded flex flex-col items-center justify-center p-2.5 border-[1px] border-solid border-gainsboro-200 text-text-color"
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.0001"
              onChange={(e) => handleChange(e)}
            />
            <input
              className="font-inter text-lg bg-[transparent] self-stretch rounded flex flex-col items-center justify-center p-2.5 border-[1px] border-solid border-gainsboro-200 text-text-color"
              type="text"
              name="message"
              placeholder="Enter your Message"
              onChange={(e) => handleChange(e)}
            />
          </div>
          {isLoading ? (
            <div className="text-5xl">Loading please wait...</div>
          ) : (
            <button className="cursor-pointer py-[15px] px-5 bg-[transparent] rounded-lg items-center justify-center border-[1px] border-solid border-darkslategray-100 text-lg font-inter text-text-color text-center hover:bg-hover" onClick={handleSubmit}>
              Send Eth
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainHome;
