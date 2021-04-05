import PreviewView from "./previewView.js";

class BookmarksView extends PreviewView {
  _parentElement = document.querySelector(".bookmarks__list");
  _errorMessage =
    "Well if you havent bookmarked anything how do you expect to find anything here? Ya moron!";
  _successMessage = "";

  addBookmarkshandler(handler) {
    window.addEventListener("load", handler);
  }
}

export default new BookmarksView();
