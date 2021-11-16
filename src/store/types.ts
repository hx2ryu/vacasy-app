export type SearchResult = {
  word: string;
  phonetic: string;
  phonetics: Array<Phonetic>;
  origin: string;
  meanings: Array<Meaning>;
};

type Phonetic = {
  text: string;
  audio?: string | undefined;
};

type Meaning = {
  partOfSpeech: string;
  definitions: Array<Definition>;
};

type Definition = {
  definition: string;
  example: string;
  synonyms: Array<string>;
  antonyms: string;
};
