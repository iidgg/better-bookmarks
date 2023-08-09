const tagDelete = document.getElementById("tag-delete");
const tagEdit = document.getElementById("tag-edit");
const tags = document.getElementsByClassName("liContainer");
tagDelete.addEventListener("click", () => {
  for (let i = 0; i < tags.length; i++) {
    tags[i].classList.toggle("t-delete");
    if (tags[i].classList.contains("t-delete")) {
      tags[i].innerHTML += `<img src="../images/icons/trash.png" />`;
    }else{
        tags[i].innerHTML = tags[i].innerHTML.slice(0, -37);
    }
  }
});
