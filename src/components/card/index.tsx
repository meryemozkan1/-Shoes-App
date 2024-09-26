import { Link } from "react-router-dom";
import { Shoe } from "../../types";

import calcDiscount from "../../utils/calcDiscount";
import Badge from "./badge";

const Card = ({ item }: { item: Shoe }) => {
  return (
    <div className="flex flex-col justify-between">
      <div className="w-full">
        <div className="bg-white rounded-[16px] lg:rounded-[28px] p-[8px] relative w-full">
          <Badge discount={item.discount} />
          <img
            className="rounded-[16px] lg:rounded-[28px] h-full w-full"
            src={item.picture[0]}
          />
        </div>
        <h2 className="font-bold line-clamp-2 mt-5 mb-4 lg:text-[20px]">
          {item.name}
        </h2>
      </div>
      <Link
        to={`/detail/${item.id}`}
        className="bg-gray-dark text-white font-medium px-4 py-2 rounded-[8px] transition hover:bg-black text-center"
      >
        Ürünü Görüntüle-
        <span className={item.discount ? "text-yellow" : "text-white"}>
          ${calcDiscount(item.price, item.discount)}
        </span>
        {item.discount && (
          <span className="max-xl:hidden line-throgh text-yellow ps-2">
            (${item.price})
          </span>
        )}
      </Link>
    </div>
  );
};

export default Card;
