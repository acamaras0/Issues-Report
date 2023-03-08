const Navbar = ({
  setSwitch,
}: {
  setSwitch: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="bg-sky-100 flex justify-evenly p-3 font-mono">
      <button
        onClick={() => setSwitch(false)}
        className="bg-white px-6 py-2.5 text-xs font-bold uppercase leading-tight text-black shadow-md transition duration-150 ease-in-out hover:bg-zinc-50 hover:shadow-lg focus:bg-zinc-700 focus:text-white focus:shadow-lg"
      >
        NEW
      </button>
      <br />
      <button
        onClick={() => setSwitch(true)}
        className="bg-white px-6 py-2.5 text-xs font-bold uppercase leading-tight text-black shadow-md transition duration-150 ease-in-out hover:bg-zinc-50 hover:shadow-lg focus:bg-zinc-700 focus:text-white focus:shadow-lg"
      >
        ISSUES
      </button>
    </div>
  );
};

export default Navbar;
