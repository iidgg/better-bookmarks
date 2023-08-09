import { getAllTags } from "../data/tags.js";
import tagElementCreate from "./element.js";

const tagContainer = document.getElementById("tag-list-container");

export default async function listTags() {}
window.addEventListener("load", async () => {
  let allTags = await getAllTags().catch(console.error);
  if (allTags) return actualList(allTags);
});

export function actualList(tags) {
  if (!tags) return false;
  tags.forEach((e) => {
    tagContainer.append(tagElementCreate(e));
  });
}
