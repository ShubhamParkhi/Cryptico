const ReassuranceHome = () => {
  return (
    <div className="self-stretch flex items-center justify-center py-[100px] px-[30px]">
      <div className="w-full flex-1 flex items-center justify-between max-w-[1440px] flex-row sm:flex-col gap-[50px]">
        <div className="max-w-[600px] flex flex-col items-start gap-[25px] justify-center">
            <div className="text-29xl">
              Service that I’ll continue to improve
            </div>
            <div className="text-5xl">
              The best choice for sending your eth with various super friendly
              service
            </div>
        </div>
        <div className="w-full max-w-[440px] flex flex-col items-center justify-center gap-[20px]">
          <div className="self-stretch rounded-xl bg-gainsboro-100 flex items-center justify-center p-[30px] gap-[10px] border-[1px] border-solid border-gainsboro-200">
            <img
              className=" w-[19.2px] h-[23.3px]"
              alt=""
              src="/group.svg"
            />
            <div className="flex-1 text-lg">
              Security Guaranty
            </div>
          </div>
          <div className="self-stretch rounded-xl bg-gainsboro-100 flex items-center justify-center p-[30px] gap-[10px] border-[1px] border-solid border-gainsboro-200">
            <img
              className=" w-[23.9px] h-[23.9px]"
              alt=""
              src="/group1.svg"
            />
            <div className="flex-1 text-lg">
              Best Exchange Rates
            </div>
          </div>
          <div className="self-stretch rounded-xl bg-gainsboro-100 flex items-center justify-center p-[30px] gap-[10px] border-[1px] border-solid border-gainsboro-200">
            <img
              className=" w-[23.3px] h-[21.5px]"
              alt=""
              src="/group2.svg"
            />
            <div className="flex-1 text-lg">
              Fastest Transactions
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReassuranceHome;
