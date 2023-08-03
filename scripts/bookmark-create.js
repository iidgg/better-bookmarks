import { bookmarkObject } from "./index.js";
const bookmarkActive = document.getElementsByClassName("active");
const bookmark_button = document.getElementById("bookmark-button");
// const bookmark_title = document.getElementById("bookmark-title");
// create bookmarks on click with the current tab url and title if no title is given
// create bookmarks on click with the current tab url and title if no title is given
bookmark_button.addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tab = tabs[0];
    bookmarkObject.bookmarks.push({ title: tab.title, url: tab.url });

    chrome.bookmarks.create({ title: tab.title, url: tab.url });
    // chrome.bookmarks.create({ title: bookmark_title.value || tab.title , url: tab.url })
    // bookmark_title.value = "";
    let arr = [];
    for (let i = 0; i < bookmarkActive.length; i++) {
      arr.push(bookmarkActive[i].innerText);
    }
    bookmarkObject.tags.push(arr);
    console.log(bookmarkObject);
  });
});
