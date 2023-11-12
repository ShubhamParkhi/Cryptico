import React, { useContext } from "react";
import { DetailsContext } from "../context/DetailsContext";

const TransactionHome = () => {
  const { transactions } = useContext(DetailsContext);

  const makeItShort = (str) => {
    return str.slice(0, 6) + "..." + str.slice(str.length - 4, str.length);
  };

  return (
    <div className="self-stretch [background:radial-gradient(50%_50%_at_50%_50%,_#010409,_rgba(1,_4,_9,_0))] flex flex-col items-center justify-center py-[75px] px-[30px] gap-[25px] sm:py-[25px]">
      <div className="text-29xl">
        Transactions
      </div>
      <div className="w-full rounded-6xl [background:linear-gradient(0.03deg,_rgba(8,_46,_5,_0.13),_rgba(3,_12,_28,_0.5)_65.77%)] shadow-[0px_0px_100px_rgba(255,_255,_255,_0.05)] flex flex-col items-start justify-between gap-[20px] py-[50px] px-[30px] box-border max-w-[1440px] text-lg">
        <div className="w-full flex-1 flex items-start justify-center gap-[20px] flex-row sm:flex-col">
          <div className="flex-1 rounded flex flex-col items-center justify-center p-2.5 border-[1px] border-solid border-gainsboro-200">
            Sender’s Adderess
          </div>
          <div className="flex-1 rounded flex flex-col items-center justify-start p-2.5 border-[1px] border-solid border-gainsboro-200">
            Reciever’s Adderess
          </div>
          <div className="flex-1 rounded flex flex-col items-center justify-start p-2.5 border-[1px] border-solid border-gainsboro-200">
            Message
          </div>
          <div className="flex-1 rounded flex flex-col items-center justify-start p-2.5 border-[1px] border-solid border-gainsboro-200">
            Amount
          </div>
          <div className="flex-1 rounded flex flex-col items-center justify-start p-2.5 border-[1px] border-solid border-gainsboro-200">
            Timestamp                  
          </div>
        </div>
      {transactions &&
            transactions.map((transaction, idx) => (
              <div className="w-full flex-1 flex items-start justify-center gap-[20px] flex-row sm:flex-col">
              <div className="flex-1 rounded flex flex-col items-center justify-center p-2.5 border-[1px] border-solid border-gainsboro-200">
                <a
                  href={`https://sepolia.etherscan.io/address/${transaction.sender}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {makeItShort(transaction.sender)}
                </a>
    
              </div>
              <div className="flex-1 rounded flex flex-col items-center justify-start p-2.5 border-[1px] border-solid border-gainsboro-200">
                <a
                  href={`https://sepolia.etherscan.io/address/${transaction.receiver}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {makeItShort(transaction.receiver)}
                </a>
              </div>
              <div className="flex-1 rounded flex flex-col items-center justify-start p-2.5 border-[1px] border-solid border-gainsboro-200">
              {transaction.message}
              </div>
              <div className="flex-1 rounded flex flex-col items-center justify-start p-2.5 border-[1px] border-solid border-gainsboro-200">
              {parseInt(transaction.amount._hex) / 10 ** 18}
              </div>
              <div className="flex-1 rounded flex flex-col items-center justify-start p-2.5 border-[1px] border-solid border-gainsboro-200">
                {new Date(
                  transaction.timestamp.toNumber() * 1000
                ).toLocaleString()}
              </div>
            </div>
    
              ))}
      </div>
    </div>
  );
};

export default TransactionHome;
