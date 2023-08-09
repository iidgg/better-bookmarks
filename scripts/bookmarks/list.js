import { goThroughBranch } from "../functions.js";
import { bookmarkELement, folderElement } from "./element.js";
//? List the bookmarks

chrome.bookmarks.getTree().then((tree) => {
  goThroughBranch(tree, async function (treeElement) {
    console.log("new operation");
    try {
      let elements;
      const id = treeElement.id;
      const title = treeElement.title;
      const parentID = treeElement.parentId || "0";
      const parentElement = document.getElementById(`treeID-${parentID}`);

      treeElement.children
        ? (elements = folderElement(id, title))
        : (elements = bookmarkELement(id, title));
      elements.forEach((ge) => {
        // ge = given element
        parentElement.appendChild(ge);
      });
    } catch (err) {
      console.error("Catch error", err);
    }
  });

  const allFolders = document.querySelectorAll(".folder-list .folder-title");
  allFolders.forEach((ft) => {
    // ft = folder title (button)
    ft.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(`#${ft.for}`).classList.toggle("active-parent");
    });
  });
});
