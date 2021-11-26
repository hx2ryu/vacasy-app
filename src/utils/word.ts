export function getThumbnailMeaning(word: Word): string {
  const firstMeaning = word?.meanings[0]?.definitions[0]?.definition;
  return firstMeaning ? firstMeaning : '';
}
