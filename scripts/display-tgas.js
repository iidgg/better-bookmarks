import { get, set, remove, removeAll } from "./data/storage.js";

const bookmarkContainer = document.getElementById("bookmark-container");
const tagListContainer = document.getElementById("tag-list-container");

async function fetchData() {
    const values = await get("bookmarkObject")
    const tags = await get("tags");
    
    // display tags
    if(tags === undefined){
      tagListContainer.innerHTML = `<li>No tags</li>`;
    }else{
      displayTags(tags);
      setupTagClickListeners();
    }
    // display bookmarks
    if(values === undefined){
      bookmarkContainer.innerHTML = `<li>No bookmarks</li>`;
    }else{
      displayBookmarks(values.bookmarks);
    }
    
  }


function displayBookmarks(bookmarks) {
  bookmarkContainer.innerHTML = bookmarks
    .map(bookmark =>`<li><a href="${bookmark.url}">${bookmark.title}<span>tags: ${bookmark.tags.join(" ")}</span></a></li>`).join("");
}

function displayTags(tags) {
  tagListContainer.innerHTML = tags
    .map(tag => `<li class="liContainer"><span>${tag}</span></li>`)
    .join("");
}

function setupTagClickListeners() {
  const liContainer = document.querySelectorAll(".liContainer");
  liContainer.forEach(container => {
    container.addEventListener("click", () => {
      container.classList.toggle("tag-active");
    });
  });
}

document.addEventListener("DOMContentLoaded", fetchData);

// const liContainer = document.getElementsByClassName("liContainer");
// for(let i = 0; i < liContainer.length; i++){
//     liContainer[i].addEventListener("click" , () => {
//         liContainer[i].classList.toggle("tag-active");
//     })
// }
