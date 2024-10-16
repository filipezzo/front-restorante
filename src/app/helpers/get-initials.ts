export function getInitials(name: string) {
  if (!name) {
    return;
  }
  const firstLetters = name.slice(0, 1).toUpperCase();
  return firstLetters;
}
