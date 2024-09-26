import { useState } from "react";
import { numbers } from "../../utils/constants";

const Size = ({ data }: { data: string }) => {
  const [selected, setSelected] = useState<string>("");
  const stokSize = data.split(",");

  const toggle = (num: string) => {
    if (selected === num) {
      // seçili numaraya tekrar tıklanırsa seçimi kaldır.
      setSelected("");
    } else {
      // seçili olmayan numaraya tıklanırsa state ekler
      setSelected(num);
    }
  };

  return (
    <div>
      <h2 className="mb-3">Numara</h2>

      <div className="grid grid-cols-5 gap-4">
        {numbers.map((num, key) => {
          const found = selected === num;
          return (
            <button
              key={key}
              onClick={() => toggle(num)}
              disabled={!stokSize.includes(num)}
              className={`py-2 px-4 lg:px-0 text-center rounded-md cursor-pointer transition hover:bg-zinc-400 disabled:bg-[#D2D1D3] disabled:text-[#8F8C91] ${
                found ? "bg-gray-dark text-white" : "bg-white"
              }`}
            >
              <span>{num}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Size;
