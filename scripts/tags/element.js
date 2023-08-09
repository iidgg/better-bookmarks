export default function tagElementCreate(name) {
  if (!document) return null;
  const tag = document.createElement("li");
  tag.classList.add("tag");
  tag.innerText = name;

  tag.addEventListener("click", () => {
    tag.classList.toggle("active");
  });
  return tag;
}
