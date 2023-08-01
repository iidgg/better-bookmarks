export function goThroughBranch(array, callback) {
  array.forEach((e) => {
    if (e.id === "0") return goThroughBranch(e.children, callback);
    callback(e);
    if (e.children && e.children.length > 0)
      goThroughBranch(e.children, callback);
    // if its a folder it may have some children's so we go through
    // it may also don't have any which will also cause the code to ignore it
    // Because do we need code that we don't use?
  });
}
// limit the text to a certain amount of characters
export function textLimiter(text, limit) {
  if (text.length > limit) {
    return text.slice(0, limit) + "...";
  }
  return text;
  // if the text is longer then the limit we slice it and add "..." to the end
}