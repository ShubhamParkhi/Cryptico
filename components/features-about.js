const FeaturesAbout = () => {
  return (
    <div className="self-stretch flex items-center justify-center py-[100px] px-[30px]">
      <div className="w-full flex-1 max-w-[1440px] flex flex-col items-start justify-center gap-[25px]">
        <div className="text-29xl">Why use Cryptico?</div>
        <div className="text-5xl">
          This website has several advantages over other methods of sending eth:
        </div>
        <div className="self-stretch rounded-xl bg-gainsboro-100 [backdrop-filter:blur(8px)] flex flex-col items-center justify-center py-[50px] px-[30px] gap-[25px] text-text-color border-[1px] border-solid border-gainsboro-200">
          <div className="self-stretch flex flex-row items-center justify-center gap-[20px]">
            <div className="rounded-11xs-5 bg-text-color w-3 h-3" />
            <div className="flex-1 text-5xl">
              It is user-friendly and intuitive. You don’t need any technical
              skills or knowledge to use this website. It guides you through the
              process step by step.
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center gap-[20px]">
            <div className="rounded-11xs-5 bg-text-color w-3 h-3" />
            <div className="flex-1 text-5xl">
              It is fast and reliable. You don’t have to wait for long
              confirmation times or deal with network congestion. The website
              uses the latest technology and protocols to ensure your
              transactions are processed quickly and securely.
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center gap-[20px]">
            <div className="rounded-11xs-5 bg-text-color w-3 h-3" />
            <div className="flex-1 text-5xl">
              It is low-cost and transparent. You don’t have to pay any hidden
              fees or commissions to use this website. The only fee you pay is
              the network fee, which is displayed upfront before you confirm the
              transaction.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesAbout;
