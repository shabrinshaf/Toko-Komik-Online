import { 
  getAllComicsController,
  createComicController,
  getComicByIdController,
  updateComicController,
  deleteComicController
} from "../controllers/comicController.js";


const router = express.Router();

// Routes for comics
router.get("/comics", getAllComicsController);        // Get all comics
router.get("/comics/:id", getComicByIdController);   // Get comic by ID
router.post("/comics", createComicController);       // Create new comic
router.patch("/comics/:id", updateComicController);  // Update comic
router.delete("/comics/:id", deleteComicController); // Delete comic

export default router;
