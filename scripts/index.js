//
//
//

// display tags
const tag_container = document.getElementById("tag-list-container");
const tag_button = document.getElementById("tag-button");
const tag_input = document.getElementById("tag-input");
const character_limit = 40;

function createTag() {
  const tagValue = tag_input.value.trim();
  if (tagValue === "") return;

  if (tagValue.length > character_limit) {
    return alert(`Tag should not exceed ${character_limit} characters.`);
  }

  const tag = document.createElement("li");
  tag.classList.add("tag");
  tag.innerText = tagValue;
  tag_container.appendChild(tag);
  tag_input.value = "";
  tag.addEventListener("click", () => {
    tag.classList.toggle("active");
  });

  // tag remove on double click (not needed for now or find a better way to do it)
  // tag.addEventListener("dblclick", () => {
  // tag.remove();
  // });
}

// create Tag on click
tag_button.addEventListener("click", createTag);
// create Tag when user press "Enter"

tag_input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    createTag();
  }
});

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
