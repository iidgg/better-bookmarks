const tagListContainer = document.getElementById("tag-list-container");
const tags = document.getElementsByClassName("tag");
export default function tagElementCreate(name) {
  if (!document) return null;
  const tagElement = document.createElement("li");
  tagElement.classList.add("tag");
  tagElement.innerText = name;
  // check if tag is already in the list
  for (let i = 0; i < tags.length; i++) {
    if(tags[i].innerText === name) return null;
  }
  tagListContainer.appendChild(tagElement);
  tagElement.addEventListener("click", () => {
    tagElement.classList.toggle("active");
  });
  return tagElement;
}
