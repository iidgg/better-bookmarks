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
