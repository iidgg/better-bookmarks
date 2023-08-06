import { manageBookmarkData } from "./bookmark-data-management.js";
import { removeAll } from "./data/storage.js";
const bookmarkActive = document.getElementsByClassName("active");
const bookmark_button = document.getElementById("bookmark-button");
bookmark_button.addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tab = tabs[0];
    chrome.bookmarks.create({ title: tab.title, url: tab.url });
    const arr = [];
    for (let i = 0; i < bookmarkActive.length; i++) {
      arr.push(bookmarkActive[i].innerText);
    }
    const newBookmark = { title: tab.title, url: tab.url , tags: arr };
    // call managebookmarkdata function to save the data to the storage
    manageBookmarkData(bookmarkActive, newBookmark);
  });
});
