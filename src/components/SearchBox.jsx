import { MagnifyingGlass } from "@phosphor-icons/react";

function SearchBox({ setData, clickHandler }) {
  function changeHandler() {
    let value = document.querySelector("input").value;
    setData(value.toLowerCase());
  }

  return (
    <div className="flex items-center w-full gap-2 mb-8">
      <input
        type="text"
        name="search"
        className="p-2 rounded-lg bg-zinc-50 placeholder:text-zinc-800 focus:outline-none"
        placeholder="search title..."
        onChange={changeHandler}
      />
      <span className="p-2 bg-purple-400 rounded-lg cursor-pointer">
        <MagnifyingGlass
          size={24}
          className="fill-zinc-50 "
          onClick={clickHandler}
        />
      </span>
    </div>
  );
}

export default SearchBox;
