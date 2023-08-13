const tagListContainer = document.getElementById("tag-list-container");
const tagNamesSet = new Set();


export default function tagElementCreate(name) {
  if (!name) return null;

  if (tagNamesSet.has(name)) return null;
  

  const tagElement = document.createElement("li");
  tagElement.classList.add("tag");
  tagElement.innerText = name;
  tagElement.addEventListener("click", () => {
    tagElement.classList.toggle("active");
  });
  tagListContainer.appendChild(tagElement);
  tagNamesSet.add(name);

  return tagElement;
}
