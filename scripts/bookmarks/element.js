import { textLimiter } from "../functions.js";

export function folderElement(id, title) {
  const folderElement = document.createElement("ul"); // if it has children, it's a folder, otherwise it's a bookmark
  folderElement.id = `treeID-${id}`;
  // limit the text to 20 characters
  folderElement.textContent = textLimiter(title, 20);

  folderElement.id = `treeID-${id}`;
  // limit the text to 20 characters
  folderElement.textContent = textLimiter(title, 20);

  folderElement.classList.add("bold", "parent-of-kids");

  folderElement.textContent = "";
  const ulTitle = document.createElement("button");
  ulTitle.classList.add("folder-title");
  ulTitle.textContent = title;
  //  ulTitle.textContent += ` (${e.children.length})`; // add the number of children to the folder title
  //? ^^^ is it that important to make a parameter for it? i don't think so
  ulTitle.for = folderElement.id;

  return [ulTitle, folderElement];
}

export function bookmarkELement(id, title) {
  const bookmarkElement = document.createElement("li");
  bookmarkElement.id = `treeID-${id}`;
  // limit the text to 20 characters
  bookmarkElement.textContent = textLimiter(title, 20);

  return [bookmarkElement];
}
