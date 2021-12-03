type Word = {
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

type FilteredWordInfo = {
  id?: string;
  timestamp?: string;
  word: string;
  phonetic: string;
  audio: string | undefined;
  meanings: Array<FilteredDefinition>;
};

type FilteredDefinition = {
  partOfSpeech: string;
  definition: string;
  example: string;
};

type Wordbook = {
  date: string;
  wordList: Array<FilteredWordInfo> | undefined;
};
