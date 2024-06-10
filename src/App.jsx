import { useState } from "react";
import Favorite from "./components/Favorite";
import SearchBox from "./components/SearchBox";
import books from "./constants/mockData";
import ShowBooks from "./components/ShowBooks";
////////////////////////////////
function App() {
  let [data, setData] = useState("");
  const [FavoriteList, setFavoriteList] = useState([]);
  const [clicked, setClicked] = useState(false);
  ///////////////////////////////
  let searchBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(data) ||
      book.author.toLowerCase().includes(data)
  );
  //////////////////////////////////
  function clickHandler() {
    return clicked ? setClicked(false) : setClicked(true);
  }
  //////////////////////////////////

  return (
    <>
      <h1 className="px-8 py-4 mt-4 mb-16 text-2xl font-semibold text-white rounded-lg bg-zinc-700">
        Book App
      </h1>

      <SearchBox data={data} setData={setData} clickHandler={clickHandler} />
      <section className="flex flex-col-reverse w-full gap-8 lg:gap-4 lg:flex-row">
        <ShowBooks
          clicked={clicked}
          FavoriteList={FavoriteList}
          setFavoriteList={setFavoriteList}
          searchBooks={searchBooks}
          data={data}
          setClicked={setClicked}
        />
        <Favorite
          FavoriteList={FavoriteList}
          setFavoriteList={setFavoriteList}
        />
      </section>
    </>
  );
}

export default App;
