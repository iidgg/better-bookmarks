const bookmark_button = document.getElementById("bookmark-button");
const bookmark_title = document.getElementById("bookmark-title");

bookmark_button.addEventListener("click", () => {
    chrome.bookmarks.create({
        parentId: "1",
        title: bookmark_title.value, 
        url: "https://randomwebsite.com",
    }).then((newBookmark) => {
        console.log("added bookmark: " + newBookmark.title + " to folder: " + newBookmark.parentId + " with url: " + newBookmark.url);
    });
    bookmark_title.value = "";
});