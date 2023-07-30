let folder_button = document.getElementById("folder_button");
let bookmark_title = document.getElementById("bookmark_title");
let bookmark_url = document.getElementById("bookmark_Url");
let folder_number = 0;
async function random_function() {
  chrome.bookmarks.getTree().then((a, b, c) => {
    console.log(a); //? << This gives u tree, yay have an apple
  });
}
async function create_bookmark_folder() {
  folder_number++;
  chrome.bookmarks.create({ parentId: "1" , title: `New folder (${folder_number})` }, function (newFolder) {
    console.log("added folder: " + newFolder.title);
  });
}
async function create_bookmark(bookmark_title, bookmark_url) {
    chrome.bookmarks.create({ title: bookmark_title, url: bookmark_url }, function (newBookmark) {
        console.log("added bookmark: " + newBookmark.title);
});
}

folder_button.addEventListener("click",() => {
    // create_bookmark_folder(); => this is for creating a folder we don't need it for now
    create_bookmark(bookmark_title.value, bookmark_url.value);  // pass the tittle and url of the bookmark (bookmark_title.value, bookmark_url.value)
} ); 
random_function();
