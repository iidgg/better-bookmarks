import { manageBookmarkData } from "./../../bookmark-data-management.js";
import { prepareFrame } from "./../../prepare-frames.js";
// import { removeAll } from "./data/storage.js";

const bookmarkActive = document.getElementsByClassName("active");
const bookmark_button = document.getElementById("bookmark-button");

bookmark_button.addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, async (tabs) => {
    const tab = tabs[0];
    chrome.bookmarks.create({ title: tab.title, url: tab.url });
    const arr = [];
    for (let i = 0; i < bookmarkActive.length; i++) {
      arr.push(bookmarkActive[i].innerText);
    }
    const newBookmark = { title: tab.title, url: tab.url, tags: arr , screenshot:  {data: await prepareFrame(tab.id)}};
    // call managebookmarkdata function to save the data to the storage
    // TODO: dumpy code here
    manageBookmarkData(bookmarkActive, newBookmark);
  });
});
