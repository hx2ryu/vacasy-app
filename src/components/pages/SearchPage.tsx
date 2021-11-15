import {addWord, Word} from '@/features/wordbook/slice';
import {useAppDispatch} from '@/store/hooks';
import React, {useCallback} from 'react';
import {StyleSheet} from 'react-native';
import {SearchTemplate} from '../templates';

const SearchPage: React.FC = () => {
  const dispatch = useAppDispatch();

  const addWordToWordbook = useCallback(
    (word: Word) => {
      dispatch(addWord(word));
    },
    [dispatch],
  );
  return <SearchTemplate onAddWord={addWordToWordbook} />;
};

export default SearchPage;

const styles = StyleSheet.create({});
