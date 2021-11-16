import {requestSearchWord} from '@/features/search/slice';
import {useGetSearchedResultQuery} from '@/store/api';
import {useAppDispatch, useAppSelector} from '@/store/hooks';
import React, {useCallback, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {SearchTemplate} from '../templates';

const SearchPage: React.FC = () => {
  // const {data, error, isLoading} = useGetSearchedResultQuery('hello');
  const dispatch = useAppDispatch();
  const {wordList} = useAppSelector(state => state.word);

  const searchWord = useCallback(
    (keyword: string) => {
      dispatch(requestSearchWord({keyword}));
      console.log('page');
    },
    [dispatch],
  );
  return <SearchTemplate onSearchWord={searchWord} wordList={wordList} />;
};

export default SearchPage;

const styles = StyleSheet.create({});
