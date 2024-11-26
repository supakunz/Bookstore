import Image from "next/image";

const BookCard = ({ data }) => {
  return (
    <section>
      <div className="flex flex-col gap-6">
        <div className="relative">
          <Image
            src={data.image}
            width={500}
            height={500}
            alt="book_image"
            quality={100}
            style={{ objectFit: "contain", width: "100%" }}
          />
          {data.desc ? (
            <span
              className={`absolute top-[2rem] p-[0.45rem_1.05rem] ${
                data.desc == "SOLD"
                  ? "bg-[#999999]"
                  : data.desc == "NEW"
                  ? "bg-black"
                  : data.desc == "SALE"
                  ? "bg-[#D14031]"
                  : null
              } font-josefin text-white text-[10.5px] tracking-[0.3em]`}
            >
              {data.desc}
            </span>
          ) : null}
          <div className="absolute cursor-pointer flex justify-center items-center top-0 left-0 bg-[#D14031] w-full h-full text-white font-josefin text-[12px] tracking-[0.3em] opacity-0 hover:opacity-95 transition-opacity duration-500">
            <p className="btn-effect">READ MORE</p>
          </div>
        </div>
        <div>
          <p className="text-[12px] tracking-[0.4em] text-[#999999] font-josefin">
            {data.writer}
          </p>
          <p className="text-[21px]">{data.name}</p>
          <div className="flex gap-2">
            <p className="text-[19px] text-[#343434]">${data.price}</p>
            {data.old_price ? (
              <p className="text-[19px] text-[#999999] line-through">
                ${data.old_price}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookCard;
