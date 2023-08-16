const tagDelete = document.getElementById("tag-delete");
const tagEdit = document.getElementById("tag-edit");
const tags = document.getElementsByClassName("liContainer");

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
  }
});
