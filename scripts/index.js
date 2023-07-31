import { goThroughBranch } from "./functions.js";

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





// display tags 
const second_popup = document.getElementById("second-popup");
second_popup.addEventListener('click',() => {
  console.log(chrome.browserAction)
});
const tag_list = document.getElementById("tag-list");
const tag_button = document.getElementById("tag-button");
const tag_input = document.getElementById("tag-input");
// Too early to code such a thing down there
//
//
//
//
//
//
//
//
//
//
//
//
//
// const folder_button = document.getElementById("folder_button");
// const bookmark_title = document.getElementById("bookmark_title");
// const bookmark_url = document.getElementById("bookmark_Url");
// let folder_number = 0;
//
//
//
//
//
//
//
//
//
//

// async function create_bookmark_folder() {
//   folder_number++;
//   chrome.bookmarks.create(
//     { parentId: "1", title: `New folder (${folder_number})` },
//     function (newFolder) {
//       console.log("added folder: " + newFolder.title);
//     }
//   );
// }
// async function create_bookmark(bookmark_title, bookmark_url) {
//   chrome.bookmarks.create(
//     { title: bookmark_title, url: bookmark_url },
//     function (newBookmark) {
//       console.log("added bookmark: " + newBookmark.title);
//     }
//   );
// }

// folder_button.addEventListener("click", () => {
//   // create_bookmark_folder(); => this is for creating a folder we don't need it for now
//   create_bookmark(bookmark_title.value, bookmark_url.value); // pass the tittle and url of the bookmark (bookmark_title.value, bookmark_url.value)
// });
