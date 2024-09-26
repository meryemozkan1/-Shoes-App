const Buttons = ({ open }: { open: () => void }) => {
  return (
    <div className="mt-5 flex gap-5 lg:hidden">
      <button
        onClick={open}
        className="flex-1 bg-white rounded-md p-2 px-4 flex gap-4 items-center justify-between"
      >
        Filtreler
      </button>
      <img src="/lines.svg" alt="" />
      <img src="/down.svg" alt="" />
      <button className="flex-1 bg-white rounded-md p-2 px-4 flex gap-4 items-center justify-between">
        Sırala
      </button>
    </div>
  );
};

export default Buttons;
