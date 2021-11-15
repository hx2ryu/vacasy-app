import {addWord, Word} from '@/features/wordbook/slice';
import {useAppDispatch, useAppSelector} from '@/store/hooks';
import React, {useCallback} from 'react';
import {StyleSheet} from 'react-native';
import {SearchTemplate} from '../templates';

const SearchPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const {wordList} = useAppSelector(state => state.word);

  const addWordToWordbook = useCallback(
    (word: Word) => {
      dispatch(addWord(word));
    },
    [dispatch],
  );
  return <SearchTemplate onAddWord={addWordToWordbook} wordList={wordList} />;
};

export default SearchPage;

const styles = StyleSheet.create({});
