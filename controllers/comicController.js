import comicService from "../services/comicService.js";

const { createComic, getAllComics, getComicById, updateComic, deleteComic } = comicService;

// Get all comics
async function getAllComicsController(req, res) {
  try {
    const comics = await getAllComics(req.query);
    if (comics.length === 0) {
      return res.status(404).json({ message: "No comics found" });
    }
    res.status(200).json(comics);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Get comic by ID
async function getComicByIdController(req, res) {
  try {
    const comic = await getComicById(req.params.id);
    res.status(200).json(comic);
  } catch (error) {
    if (error.message === "Comic not found") {
      return res.status(404).json({ message: error.message });
    }
    res.status(500).json({ message: error.message });
  }
}

// Create new comic
async function createComicController(req, res) {
  const { title, author, genre, price, stock } = req.body;
  if (!title || !author || !genre || !price || !stock) {
    return res.status(400).json({ message: "Title, author, genre, price, and stock are required" });
  }
  try {
    const newComic = await createComic(req.body);
    res.status(201).json(newComic);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Update comic
async function updateComicController(req, res) {
  const { title, author, genre, price, stock } = req.body;
  if (!title || !author || !genre || !price || !stock) {
    return res.status(400).json({ message: "Title, author, genre, price, and stock are required" });
  }
  try {
    const updatedComic = await updateComic(req.params.id, req.body);
    res.status(200).json(updatedComic);
  } catch (error) {
    if (error.message === "Comic not found") {
      res.status(404).json({ message: error.message });
    } else {
      res.status(500).json({ message: error.message });
    }
  }
}

// Delete comic
async function deleteComicController(req, res) {
  try {
    const deletedComic = await deleteComic(req.params.id);
    res.status(200).json({ message: "Comic deleted successfully", comic: deletedComic });
  } catch (error) {
    if (error.message === "Comic not found") {
      res.status(404).json({ message: error.message });
    } else {
      res.status(500).json({ message: error.message });
    }
  }
}

export { 
  getAllComicsController, 
  getComicByIdController, 
  createComicController, 
  updateComicController, 
  deleteComicController 
};
