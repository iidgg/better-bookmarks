import { get, set, remove, removeAll } from "./data/storage.js";

const bookmarkObject = { bookmarks: [], tags: [] };
const bookmarkActive = document.getElementsByClassName("active");
const bookmark_button = document.getElementById("bookmark-button");
bookmark_button.addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tab = tabs[0];

    const newBookmark = { title: tab.title, url: tab.url };
    const arr = [];
    for (let i = 0; i < bookmarkActive.length; i++) {
      arr.push(bookmarkActive[i].innerText);
    }
    // get data (bookmarkObject) and then add it to the array and then set it to the storage again
    
    get("bookmarkObject")
      .then((existingData) => {
        
        if (!existingData) {
          existingData = bookmarkObject; // if no data is present, initialize it with an empty object (bookmarkObject)
        }
    
        if (!existingData.bookmarks) {
          existingData.bookmarks = []; // if no bookmarks array is present, initialize it with an empty array
        }
    
        if (!existingData.tags) {
          existingData.tags = []; // some here but for tags
        }
    
        const existingUrls = existingData.bookmarks.map(
          (bookmark) => bookmark.url
        );
        if (!existingUrls.includes(newBookmark.url)) {
          existingData.bookmarks.push(newBookmark);
          existingData.tags.push(arr);
          return set("bookmarkObject", existingData);
        }

        return existingData;
      })
      .then(() => {
        get("bookmarkObject").then((data) => console.log(data));
      });
  });
});
