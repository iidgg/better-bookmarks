import { set, get, remove, getAll, removeAll } from "./storage.js";

export async function createTag(name) {
  if (!tagOperationHandler()) return false;
  const tags = await get("tags");
  const originalTagsLength = tags.length;
  const sameTag = await tags.find((tag) => tag === name);
  if (sameTag) return false;
  // ^^ Verify that no tag have the same name, tags have unique names
  tags.push(name);
  // ^^ add the tag to the tags array
  if (tags.length - 1 === originalTagsLength) set("tags", tags);
  //   ^^ Verify that it have added only and only one tag
  return true;
}

async function debugAllTagOperations() {
  console.log(await get("tags"));
  console.log(await createTag("coolTag"));
}

debugAllTagOperations();

async function tagOperationHandler() {
  const tags = await get("tags");
  if (!tags) {
    const tagsCreate = await set("tags", []);
    if (tagsCreate) return true;
    return false;
  }
  return true;
}
