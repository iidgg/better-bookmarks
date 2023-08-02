import { createTag, getAllTags, initializeOperations } from "./data/tags.js";

const tagContainer = document.getElementById("tag-list-container");
const tagAddButton = document.getElementById("tag-button");
const tagNameInput = document.getElementById("tag-input");
const characterLimit = 40;

async function handleTagCreation() {
  const tagValue = tagNameInput.value.trim();
  if (tagValue === "") return; 
   if (tagValue.length > characterLimit) {
    return alert(`Tag should not exceed ${characterLimit} characters.`);
    //TODO if we had time
  }

  const tag = tagCreate(tagValue);

  await createTag(tagValue);
  tagContainer.appendChild(tag);
  tagNameInput.value = "";

  // tag remove on double click (not needed for now or find a better way to do it)
  // tag.addEventListener("dblclick", () => {
  // tag.remove();
  // });
}

function tagCreate(name) {
  const tag = document.createElement("li");
  tag.classList.add("tag");
  tag.innerText = name;

  tag.addEventListener("click", () => {
    tag.classList.toggle("active");
  });
  return tag;
}

//

// Events

//

window.onload = async () => {
  await initializeOperations();
  const allTags = await getAllTags();
  //   ^^ This will run too fast so we will init our selfs before the file does
  if (!allTags || !allTags.length > 0) return;

  allTags.forEach((e) => {
    tagContainer.append(tagCreate(e));
  });
};

tagAddButton.addEventListener("click", handleTagCreation);
tagNameInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") handleTagCreation();
});
