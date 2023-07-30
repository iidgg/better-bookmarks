let folder_button = document.getElementById("folder_button");
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
folder_button.addEventListener("click", create_bookmark_folder); 
random_function();
