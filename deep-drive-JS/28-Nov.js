// First challenge of Classes
class Film {
  constructor(id, title, director, releaseYear, genres = []) {
    this.id = id;
    this.title = title;
    this.director = director;
    this.releaseYear = releaseYear;
    this.genres = genres;
  }

  addGenre(genre) {
    this.genres = [...this.genres, genre];
  }

  getFilmTitle() {
    return `Film: ${ this.title }`
  }
}

const myFavouriteFilm = new Film(1, "Rear Window", "Afred Hitchcock", "1954")
console.log(myFavouriteFilm.director)
myFavouriteFilm.addGenre("Thrilling");
console.log(myFavouriteFilm.genres)
console.log(myFavouriteFilm.getFilmTitle())