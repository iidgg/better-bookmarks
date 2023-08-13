import { get, set, remove, removeAll } from "./data/storage.js";

const bookmarkContainer = document.getElementById("bookmark-container");
const tagListContainer = document.getElementById("tag-list-container");

async function fetchData() {
  try {
    const [tags, values] = await Promise.all([
      get("tags"),
      get("bookmarkObject")
    ]);

    displayBookmarks(values.bookmarks);
    displayTags(tags);
    setupTagClickListeners();
  } catch (error) {
    console.error("Error fetching data:", error);
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
