const tagDelete = document.getElementById("tag-delete");
const tagEdit = document.getElementById("tag-edit");
const tags = document.getElementsByClassName("liContainer");
tagDelete.addEventListener("click", () => {
  for (let i = 0; i < tags.length; i++) {
    tags[i].classList.toggle("t-delete");
    if (tags[i].classList.contains("t-delete")) {
      tags[i].innerHTML += `<i class="fas fa-trash-alt tag-trash-can"></i>`;
    }else{
        tags[i].innerHTML = tags[i].innerHTML.slice(0, -37);
    }
  }
});
