export function createEmailLink(subject) {
  return `mailto:?subject=${encodeURIComponent(subject)}`;
}
