import { remove, get, set } from "./data/storage.js";

const tagDelete = document.getElementById("tag-delete");
const tags = document.getElementsByClassName("liContainer");

tagDelete.addEventListener("click", () => {
  for (let i = 0; i < tags.length; i++) {
    const tag = tags[i];
    if (!tag.classList.contains("t-delete")) {
      tag.classList.add("t-delete");
      tag.innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z"/></svg>`;
      removeTags(tags);
    } else {
      const svgElement = tag.querySelector("svg");
      if (svgElement) {
        svgElement.remove();
      }
      tag.classList.remove("t-delete");
    }
  }
});

function removeTags(arr) {
  // loop through all tags and add event listener
  for (let i = 0; i < arr.length; i++) {
    arr[i].addEventListener("click", (event) => {
      const tag = event.currentTarget; // the tag that was clicked
      if (tag.classList.contains("t-delete")) { // check if it contain "t-delete"
        const span = tag.querySelector("span");
        if (span && span.innerText) { // check if it has a span and text
          const tagText = span.innerText;
          get("tags").then((tags) => { // get tags from storage
            let newTags = tags.filter((tag) => tag !== tagText); // filter out the tag and remove the tag that was clicked from the array
            return newTags; // return the new array
          }).then((newTags) => { // set the new array to storage
            remove("tags"); // remove the old array
            set("tags", newTags);
          });
          span.parentElement.remove(); // remove the element from the dom
        }
      }
    });
  }
}
