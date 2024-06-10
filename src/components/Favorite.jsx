function Favorite({ FavoriteList }) {
  if (FavoriteList.length > 0) {
    return (
      <section className="w-full p-2 bg-purple-400 rounded-lg lg:w-1/2 h-fit">
        <h1 className="mb-4 text-xl font-semibold tracking-wider text-white">
          Favorites
        </h1>
        <section className="gap-x-2">
          {FavoriteList.map((favoriteOne) => (
            <div
              className="flex items-center gap-4 p-2 mb-2 rounded-lg bg-purple-200/50"
              key={favoriteOne.id}
            >
              <img
                src={`/assets/${favoriteOne.image}`}
                alt="book image"
                className="w-10 rounded-md "
              />
              <h2 className="font-medium text-white ">{favoriteOne.title}</h2>
            </div>
          ))}
        </section>
      </section>
    );
  } else {
    null;
  }
}

export default Favorite;
