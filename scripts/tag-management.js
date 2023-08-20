import { remove , get , set } from "./data/storage.js";
const tagDelete = document.getElementById("tag-delete");
const tags = document.getElementsByClassName("liContainer");
const tDelete = document.getElementsByClassName("t-delete");

tagDelete.addEventListener("click", () => {
  for (let i = 0; i < tags.length; i++) {
    tags[i].classList.remove("liContainerHover");
    tags[i].classList.toggle("t-delete");
    if (tags[i].classList.contains("t-delete")) {
      tags[i].innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z"/></svg>`;
    } else {
      // Remove the previously added SVG element
      const svgElement = tags[i].querySelector("svg");
      if (svgElement) {
        svgElement.remove();
      }
      tags[i].classList.add("liContainerHover");
    }
    if (tags[i].classList.contains("t-edit")) {
      tags[i].classList.remove("t-edit");
    }
  }
  for (let i = 0; i < tDelete.length; i++) {
    tDelete[i].addEventListener("click", (event) => {
      const span = event.currentTarget.querySelector("span");
      if (span && span.innerText) {
        const tagText = span.innerText;
        get("tags").then((tags) => {
         let newTags = tags.filter((tag) => tag !== tagText);
          return newTags;
        }).then((newTags) => {
          remove("tags")
          set("tags", newTags);
        });
          span.parentElement.remove();
      }
    });
  }
});
