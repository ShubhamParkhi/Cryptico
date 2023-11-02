const WorkingAbout = () => {
  return (
    <div className="self-stretch flex items-center justify-center py-[25px] px-[30px]">
    <div className="w-full flex-1 max-w-[1440px] flex flex-col items-start justify-center gap-[25px]">
      <div className="text-29xl">How does it work?</div>
      <div className="text-5xl">
      All you need is a web browser and an MetaMask wallet. To send eth, you
          just need to enter the recipient’s wallet address, the amount of eth
          you want to send, any message for the receiver, and confirm the
          transaction.
      </div>
    </div>
  </div>
);
};

export default WorkingAbout;
