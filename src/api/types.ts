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
  timestamp: string | undefined;
  isLiked: boolean;
  thumbnailDescription: string;
}
