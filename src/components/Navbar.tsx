const Navbar = ({
  setSwitch,
}: {
  setSwitch: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="bg-red-300 flex justify-evenly p-3">
      <button
        onClick={() => setSwitch(false)}
        className="bg-yellow-300 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-black shadow-md transition duration-150 ease-in-out hover:bg-yellow-400 hover:shadow-lg focus:bg-zinc-700 focus:text-white focus:shadow-lg"
      >
        NEW
      </button>
      <br />
      <button
        onClick={() => setSwitch(true)}
        className="bg-yellow-300 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-black shadow-md transition duration-150 ease-in-out hover:bg-yellow-400 hover:shadow-lg focus:bg-zinc-700 focus:text-white focus:shadow-lg"
      >
        ISSUES
      </button>
    </div>
  );
};

export default Navbar;
