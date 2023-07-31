export const localStorage = chrome.storage.local;

console.log(localStorage);

//
//
//

// display tags
const tag_list = document.getElementById("tag-list");
const tag_button = document.getElementById("tag-button");
const tag_input = document.getElementById("tag-input");
const character_limit = 40;

tag_button.onclick = function () {
    const tag = document.createElement("li");
    if(tag_input.value === "") return;
    if(tag_input.value.length > character_limit) return alert(`tag should not be more then ${character_limit} characters`);
    tag.classList.add("tag");
    tag.innerText = tag_input.value;
    tag_list.appendChild(tag);
    tag_input.value = "";
}





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
