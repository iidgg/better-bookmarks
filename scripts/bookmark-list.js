import { goThroughBranch , textLimiter} from "./functions.js";
//? List the bookmarks
chrome.bookmarks.getTree().then((tree) => {
  goThroughBranch(tree, function (e) {
    const listElement = document.createElement(e.children ? "ul" : "li");
    const bookmarkList = document.getElementById(`treeID-${e.parentId || "0"}`);
    listElement.id = `treeID-${e.id}`;

    // limit the text to 20 characters
    listElement.textContent = textLimiter(e.title , 20);
  
    if (e.children) {
      listElement.classList.add("bold", "parent-of-kids");

      listElement.textContent = "";
      const ulTitle = document.createElement("button");
      ulTitle.classList.add("folder-title");
      ulTitle.textContent = e.title;
      ulTitle.for = listElement.id;

      bookmarkList.appendChild(ulTitle);
    }

    bookmarkList.appendChild(listElement);
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
