export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // remove special chars
    .trim()
    .replace(/\s+/g, "-"); // replace spaces with -
}
