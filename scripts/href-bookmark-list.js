import {removeAll} from './data/storage.js'
const tagLink = document.getElementById("bookmarks_link");
tagLink.addEventListener("click", () => {
  chrome.tabs.create({ url: "popups/bookmark-list.html" }, () => {
    console.log("add-tags.html is opened");
  });
});
document.getElementById("removeAll").addEventListener("click", () => {
  removeAll(true);
});