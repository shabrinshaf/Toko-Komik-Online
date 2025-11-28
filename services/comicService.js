import dataComic from "../data.js"; // pastikan data.js berisi array komik

// Get all comics, optional filter by genre
async function getAllComics(filters) {
  if (!filters || Object.keys(filters).length === 0) {
    return dataComic;
  }
  let filteredComics = dataComic;
  if (filters.genre) {
    filteredComics = filteredComics.filter(comic => {
      return comic.genre.toLowerCase() === filters.genre.toLowerCase();
    });
  }
  return filteredComics;
}

// Get comic by ID
async function getComicById(id) {
  const comicId = parseInt(id);
  const comic = dataComic.find((c) => c.id === comicId);
  if (!comic) {
    throw new Error("Comic not found");
  }
  return comic;
}

// Create new comic
async function createComic(comicData) {
  const newComic = {
    id: dataComic.length + 1,
    title: comicData.title,
    author: comicData.author,
    genre: comicData.genre,
    price: comicData.price,
    stock: comicData.stock
  };
  dataComic.push(newComic);
  return newComic;
}

// Update comic
async function updateComic(id, comicData) {
  const comicId = parseInt(id);
  const comicIndex = dataComic.findIndex((c) => c.id === comicId);
  if (comicIndex === -1) {
    throw new Error("Comic not found");
  }

  dataComic[comicIndex].title = comicData.title || dataComic[comicIndex].title;
  dataComic[comicIndex].author = comicData.author || dataComic[comicIndex].author;
  dataComic[comicIndex].genre = comicData.genre || dataComic[comicIndex].genre;
  dataComic[comicIndex].price = comicData.price || dataComic[comicIndex].price;
  dataComic[comicIndex].stock = comicData.stock || dataComic[comicIndex].stock;

  return dataComic[comicIndex];
}

// Delete comic
async function deleteComic(id) {
  const comicId = parseInt(id);
  const comicIndex = dataComic.findIndex((c) => c.id === comicId);
  if (comicIndex === -1) {
    throw new Error("Comic not found");
  }
  const deletedComic = dataComic.splice(comicIndex, 1);
  return deletedComic[0];
}

const comicService = { getAllComics, getComicById, createComic, updateComic, deleteComic };
export default comicService;

