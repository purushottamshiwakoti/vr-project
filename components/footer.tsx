export const Footer = () => {
  const date = new Date();
  return (
    <>
      <div className="bg-[#120e16]   w-full ">
        <p className="flex items-center justify-center  p-3 text-[#b3b3b3] text-xs md:text-base">
          Copyright {date.getFullYear()}. All Right Reserved Hanuman Universe
          Token
        </p>
      </div>
    </>
  );
};
