export type WordResponse = {
  word: string;
  phonetics: Array<Phonetic>;
  meanings: Array<Meaning>;
};

type Phonetic = {
  text: string;
  audio?: string;
};

type Meaning = {
  partOfSpeech: string;
  definitions: Array<Definition>;
};

type Definition = {
  definition: string;
  example: string;
  synonyms: Array<string>;
  antonyms: Array<string>;
};

export interface WordInfo extends WordResponse {
  id: string;
  timestamp: string;
  isLiked: boolean;
  thumbnailDescription: string;
}
