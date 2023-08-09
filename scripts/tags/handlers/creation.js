import { createTag } from "../../data/tags.js";
import tagElementCreate from "../../tags/element.js";

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

  const tag = tagElementCreate(tagValue);

  createTag(tagValue)
    .then(() => {
      tagNameInput.value = "";
    })
    .catch(() => {
      alert(`Something went wrong, horribly wrong.`);
    });
  //   tagContainer.appendChild(tag);

  // tag remove on double click (not needed for now or find a better way to do it)
  // tag.addEventListener("dblclick", () => {
  // tag.remove();
  // });
}

tagAddButton.addEventListener("click", handleTagCreation);
tagNameInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") handleTagCreation();
});
