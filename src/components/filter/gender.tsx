import { useSearchParams } from "react-router-dom";
import { FilterProps } from "./size";
import { useEffect } from "react";

const Gender = ({ selected, setSelected }: FilterProps) => {
  const [params, setParams] = useSearchParams();
  //State her değiştiğinde url deki parametre güncelel
  useEffect(() => {
    if (selected.length > 0) {
      //Seçili eleman varsa urldeki parametreyi kaldır
      params.set("gender", selected.join(","));
    } else {
      //Seçili eleman yoksa urldeki parametreyi kaldır
      params.delete("gender");
    }
    setParams(params);
  }, [selected]);

  //Üzerine tıklanan numra state de yoksa ekle varsa kaldır
  const toggle = (gender: string) => {
    const found = selected.includes(gender);

    if (!found) {
      setSelected([...selected, gender]);
    } else {
      setSelected(selected.filter((i) => i !== gender));
    }
  };
  return (
    <div>
      <h2 className="mb-4">Cinsiyet</h2>

      <div className="flex items-center gap-4">
        <input
          checked={selected.includes("men")}
          onChange={() => toggle("men")}
          id="men"
          type="checkbox"
        />
        <label htmlFor="men" className="select-none">
          Erkek
        </label>
      </div>
      <div className="flex items-center gap-4">
        <input
          checked={selected.includes("women")}
          onChange={() => toggle("women")}
          id="women"
          type="checkbox"
        />
        <label htmlFor="women" className="select-none">
          Kadın
        </label>
      </div>
    </div>
  );
};

export default Gender;
