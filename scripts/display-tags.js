import { get, set, remove, removeAll } from "./data/storage.js";
import {textLimiter} from "./functions.js";
// import {prepareFrame} from "./prepare-frames.js";  // no need for now 
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
    values === undefined ? bookmarkContainer.innerHTML = "<li>No bookmarks</li>" : displayBookmarks(values.bookmarks);
    if(values === undefined){
      bookmarkContainer.innerHTML = "<li>No bookmarks</li>";
    }else{
      displayBookmarks(values.bookmarks);
    }
  }


function displayBookmarks(bookmarks) {
  bookmarkContainer.innerHTML = bookmarks.map(bookmark =>`<li><a href="${bookmark.url}">${textLimiter(bookmark.title , 45)} <span>tags: ${bookmark.tags.join(" ")}</span></a></li>`).join("");
  // bookmarks.map(bookmark => bookmarkContainer.appendChild(prepareFrame(bookmark.url)));
} 

function displayTags(tags) {
  
  tagListContainer.innerHTML = tags
    .map(tag => `<li class="liContainer liContainerHover"><span>${tag}</span></li>`)
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
