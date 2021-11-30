type Wordbook = {
  date: string;
  wordList: Array<Word> | undefined;
};

type Word = {
  id: string;
  word: string;
  phonetic: string;
  phonetics: Array<Phonetic>;
  timestamp: string;
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
