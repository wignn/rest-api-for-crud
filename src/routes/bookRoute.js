
import { route } from "../config/express.js";
import {
  bookAll,
  bookById,
  bookCreate,
  bookSearch,
  chapterCreate,
  chapterDelete,
  chapterId,
  bookMark,
  bookMarkCreate,
  deleteMark,
  isMark,
  genre,
  createGenre,
  addgenre,
  unConectGenre,
  bookUpdate,
  getAllGenre,
  bookDelete,
} from "../controller/route.js";

const routeBook = route;
routeBook.post("/book/create", bookCreate);
routeBook.get("/book", bookAll);
routeBook.get("/books/:id", bookById);
routeBook.get("/book/search", bookSearch);
routeBook.get("/chapter/:id", chapterId);
routeBook.delete("/book/delete", bookDelete)
routeBook.delete("/chapter/delete", chapterDelete);
routeBook.post("/chapters/create", chapterCreate);
routeBook.post("/bookmark/create", bookMarkCreate);
routeBook.get("/bookmarsk/:id", bookMark);
routeBook.delete("/bookmark/delete/:userId/:bookId", deleteMark);
routeBook.get("/isMark/:userId/:bookId", isMark);
routeBook.get("/genre", genre);
routeBook.post("/genre/create", createGenre);
routeBook.post("/genre/conect", addgenre);
routeBook.put("/genre/disconect", unConectGenre);
routeBook.put("/book/edite", bookUpdate);
routeBook.get("/genres", getAllGenre)

export { routeBook };
