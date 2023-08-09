import { get, set, remove, removeAll } from "./data/storage.js";
const bookmarkObject = { bookmarks: [] };

export function manageBookmarkData(bookmarkActive, newBookmark) {
  const arr = [];
  bookmarkActive.forEach((e) => {
    arr.push(bookmarkActive[i].innerText);
  });
  // get data (bookmarkObject) and then add it to the array and then set it to the storage again

  get("bookmarkObject")
    .then((existingData) => {
      if (!existingData) {
        existingData = bookmarkObject; // if no data is present, initialize it with an empty object (bookmarkObject)
      }

      if (!existingData.bookmarks) {
        existingData.bookmarks = []; // if no bookmarks array is present, initialize it with an empty array
      }

      const existingUrls = existingData.bookmarks.map(
        (bookmark) => bookmark.url
      );
      if (!existingUrls.includes(newBookmark.url)) {
        existingData.bookmarks.push(newBookmark);
        return set("bookmarkObject", existingData);
      }

      return existingData;
    })
    .then(() => {
      get("bookmarkObject").then((data) => console.log(data));
    });
}
