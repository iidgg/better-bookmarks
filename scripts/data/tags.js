import { set, get, remove, getAll, removeAll } from "./storage.js";

const tagsStorageName = "tags";

export async function createTag(name) {
  if (!tagOperationHandler()) return false;
  const tags = await get(tagsStorageName);
  const originalTagsLength = tags.length;
  const sameTag = await findTag(name);
  if (sameTag) return false;
  // ^^ Verify that no tag have the same name, tags have unique names
  tags.push(name);
  // ^^ add the tag to the tags array
  if (tags.length - 1 === originalTagsLength) set(tagsStorageName, tags);
  //   ^^ Verify that it have added only and only one tag
  return true;
}

export async function removeTag(name) {
  if (!tagOperationHandler()) return false;
  const tags = await get(tagsStorageName);
  const originalTagsLength = tags.length;
  const sameTag = await findTag(name);
  if (!sameTag) return false;
  // ^^ Verify the tag existence
  const indexOfTag = tags.indexOf(name);
  tags.splice(indexOfTag, indexOfTag);
  // ^^ removed the tag from the tags array
  if (tags.length + 1 === originalTagsLength) set(tagsStorageName, tags);
  //   ^^ Verify that it have removed only and only one tag
  return true;
}

export async function findTag(name) {
  if (!tagOperationHandler()) return false;
  const tags = await get(tagsStorageName);
  const sameTag = await tags.find((tag) => tag === name);
  if (sameTag && sameTag.length > 0) return sameTag[0];
  return undefined;
}

export async function getAllTags() {
  if (!tagOperationHandler()) return false;
  return await get(tagsStorageName);
}

async function debugAllTagOperations() {
  console.log(await get(tagsStorageName));
  console.log("createTag Operation: ", await createTag("coolTag"));

  console.log(await get(tagsStorageName));
  console.log(await removeTag("coolTag"));
}

async function tagOperationHandler() {
  // Verify that the tags value is available in the storage
  //? Creates one if non are found
  // returns false in rare cases where the creation fails

  const tags = await get(tagsStorageName);

  if (!tags) {
    const tagsCreate = await set(tagsStorageName, []);
    if (tagsCreate) return true;
    return false;
  }
  return true;
}
