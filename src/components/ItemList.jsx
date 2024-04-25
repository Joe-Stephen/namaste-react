import { CDN_URL } from "../utils/constants";
const ItemList = ({ items }) => {
  console.log(items);
  return (
    <>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between items-center"
        >
          <div>
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                backgroundImage: `url(${CDN_URL}${item.card.info.imageId})`,
                backgroundSize: "cover",
                borderRadius: "10px",
                width: "156px",
                height: "144px",
                aspectRatio: "13/12",
              }}
            ></div>
            <div className="bg-white w-[110px] py-1.5 -mt-5 rounded-lg text-center cursor-pointer hover:bg-gray-300">
              <button className="text-center bg-transparent text-lg text-green-600 font-bold">
                ADD
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ItemList;
