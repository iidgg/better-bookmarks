import { goThroughBranch } from "./functions.js";

//? List the bookmarks
chrome.bookmarks.getTree().then((tree) => {
  goThroughBranch(tree, function (e) {
    const listElement = document.createElement(e.children ? "ul" : "li");
    const bookmarkList = document.getElementById(`treeID-${e.parentId || "0"}`);
    listElement.id = `treeID-${e.id}`;
    listElement.textContent = e.title || `"${e.url}"`;

    const cl = listElement.classList;
    if (e.children) {
      cl.add("bold");

      listElement.textContent = "";
      const ulTitle = document.createElement("button");
      ulTitle.textContent = e.title;

      bookmarkList.appendChild(ulTitle);
    }

    bookmarkList.appendChild(listElement);
  });
});
