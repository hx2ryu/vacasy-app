export function getThumbnailMeaning(word: Word): string {
  const firstMeaning = word?.meanings[0]?.definitions[0]?.definition;
  return firstMeaning ? firstMeaning : '';
}

export function contains(array: Array<string>, candidate: string) {
  return array.find(_ => _ === candidate) !== undefined;
}
