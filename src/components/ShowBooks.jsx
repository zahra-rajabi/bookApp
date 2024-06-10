import books from "../constants/mockData";

function ShowBooks({
  clicked,
  searchBooks,
  FavoriteList,
  setFavoriteList,
  setClicked,
}) {
  return (
    <section className="grid items-center justify-center w-full grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-1 ">
      {(clicked ? searchBooks : books).map((book) => (
        <section
          key={book.id}
          className="flex flex-col justify-between w-full h-full px-4 py-2 mb-4 rounded-lg lg:gap-4 lg:h-fit lg:flex-row bg-zinc-700 selection:select-none"
        >
          <img
            src={`/assets/${book.image}`}
            alt="book image"
            className="w-1/3 mb-2 rounded-lg lg:mb-0 lg:w-32 lg:h-full"
          />
          <div className="flex flex-col justify-between w-full ">
            <div className="">
              <div className="mb-0 sm:mb-2 text-[10px] font-semibold text-gray-100 sm:text-[18px] lg:text-2xl title">
                {book.title}
              </div>
              <div className="text-gray-400 Author text-[8px] sm:text-base lg:text-xl">
                {book.author}
              </div>
            </div>
            <div className="text-[5px] lg:space-x-2 sm:text-base text-gray-200/50">
              <span className=" language">{book.language}</span>
              <span className="block pages lg:inline-block">
                <span>{book.pages} </span>
                <span>pages</span>
              </span>
            </div>
          </div>
          <span className="flex justify-end w-full ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 cursor-pointer sm:w-7 sm:h-7 lg:h-10 lg:w-10 fill-zinc-400"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                onClick={(event) => {
                  let element = event.target;
                  element.classList.toggle("fav");
                  FavoriteList.includes(book)
                    ? null
                    : setFavoriteList([...FavoriteList, book]);
                  if (!element.classList.contains("fav")) {
                    let newFavList = FavoriteList.filter(
                      (mybook) => mybook !== book
                    );
                    setFavoriteList(newFavList);
                  }
                }}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </span>
        </section>
      ))}
    </section>
  );
}

export default ShowBooks;
