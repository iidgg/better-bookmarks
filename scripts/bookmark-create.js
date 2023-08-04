import { manageBookmarkData } from "./bookmark-data-management.js";
const bookmarkActive = document.getElementsByClassName("active");
const bookmark_button = document.getElementById("bookmark-button");
bookmark_button.addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tab = tabs[0];

    const newBookmark = { title: tab.title, url: tab.url };
    // call managebookmarkdata function to save the data to the storage
    manageBookmarkData(bookmarkActive, newBookmark);
  });
});
