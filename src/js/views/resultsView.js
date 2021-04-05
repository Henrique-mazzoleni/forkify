import PreviewView from "./previewView.js";

class ResultsView extends PreviewView {
  _parentElement = document.querySelector(".results");
  _errorMessage = "Dafuck ya looking for? Ain't nutin' like dat here!";
  _successMessage = "";
}

export default new ResultsView();
