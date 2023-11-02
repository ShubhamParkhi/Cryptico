const InstructionsHome = () => {
  return (
    <div className="self-stretch flex items-center justify-center py-[100px] px-[30px] sm:py-[25px]">
        <div className="w-full flex-1 max-w-[1440px] flex flex-col items-start justify-center gap-[25px]">
          <div className="text-29xl">
            How to use Cryptico?
          </div>
          <div className="text-5xl">
            Using Cryptico is very simple and straightforward. Just follow these
            steps:
          </div>
          <div className="self-stretch rounded-xl bg-gainsboro-100 flex flex-col items-center justify-center py-[50px] px-[30px] gap-[25px] text-text-color border-[1px] border-solid border-gainsboro-200">
            <div className="w-full flex items-center justify-center gap-[20px]">
              <div className="rounded-11xs-5 bg-text-color w-3 h-3" />
              <div className="flex-1 text-5xl">
                Connect your MetaMask wallet to the website.
              </div>
            </div>
            <div className="w-full flex items-center justify-center gap-[20px]">
              <div className="rounded-11xs-5 bg-text-color w-3 h-3" />
              <div className="flex-1 text-5xl">
                Enter the recipient’s wallet address, the amount of eth you want
                to send and any message for the receiver.
              </div>
            </div>
            <div className="w-full flex items-center justify-center gap-[20px]">
              <div className="rounded-11xs-5 bg-text-color w-3 h-3" />
              <div className="flex-1 text-5xl">
                Confirm the transaction details and the network fee.
              </div>
            </div>
            <div className="w-full flex items-center justify-center gap-[20px]">
              <div className="rounded-11xs-5 bg-text-color w-3 h-3" />
              <div className="flex-1 text-5xl">
                Wait for the transaction confirmation and enjoy your eth
                transfer.
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default InstructionsHome;
