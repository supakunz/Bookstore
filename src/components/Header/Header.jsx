const Header = () => {
  return (
    <header className="container mx-auto p-[13px_4%] bg-blacklight text-white">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-[10px] font-normal tracking-[0.22rem]">
            FREE SHIPING FOR ORDERS OVER $50
          </p>
        </div>
        <div className="flex gap-3">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
