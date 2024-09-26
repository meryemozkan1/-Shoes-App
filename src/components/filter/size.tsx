import { useEffect } from "react";
import { numbers } from "../../utils/constants";
import { useParams, useSearchParams } from "react-router-dom";

export type FilterProps = {
  selected: string[];
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
};

const Size = ({ selected, setSelected }: FilterProps) => {
  const [params, setParams] = useSearchParams();
  //State her değiştiğinde url deki parametre güncelel
  useEffect(() => {
    if (selected.length > 0) {
      //Seçili eleman varsa urldeki parametreyi kaldır
      params.set("size", selected.join(","));
    } else {
      //Seçili eleman yoksa urldeki parametreyi kaldır
      params.delete("size");
    }
    setParams(params);
  }, [selected]);

  //Üzerine tıklanan numra state de yoksa ekle varsa kaldır
  const toggle = (num: string) => {
    const found = selected.includes(num);

    if (!found) {
      setSelected([...selected, num]);
    } else {
      setSelected(selected.filter((i) => i !== num));
    }
  };

  return (
    <div className="lg:mt-5">
      <h2 className="mb-4">Numara</h2>

      <div className="grid grid-cols-5 gap-4">
        {numbers.map((num) => {
          //numara seçili mi?
          const found = selected.includes(num);
          return (
            <p
              onClick={() => toggle(num)}
              className={`py-2 px-4 lg:px-0 text-center rounded-md cursor-pointer transition hover:bg-zinc-400 ${
                found ? "bg-gray-dark text-white" : " bg-white text-gray-dark"
              }`}
            >
              <span>{num}</span>
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Size;
