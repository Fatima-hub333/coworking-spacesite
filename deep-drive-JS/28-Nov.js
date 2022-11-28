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

// Share Class features with Extends
class Product{
  constructor(name, price, discountable) {
    this.name = name;
    this.price = price;
    this.discountable = discountable;
  }
  isDiscountable() {
    return this.discountable;
  }
}

class SaleProduct extends Product {
  constructor(name, price, discountable, percentOff) {
    super(name, price, discountable);
    this.percentOff = percentOff;
  }
  getSalePrice() {
    if (super.isDiscountable()) {
      return this.price * ((100 - this.percentOff) / 100)
    } else {
      return `${this.name} is not eligible for a discount`
    }
  }
}

const SaleProduct1 = new SaleProduct("Coffe Maker", 99, false, 20);
console.log(SaleProduct1.getSalePrice())



























