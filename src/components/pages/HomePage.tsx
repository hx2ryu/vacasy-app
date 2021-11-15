import {addWord, Word} from '@/features/wordbook/slice';
import {useAppDispatch, useAppSelector} from '@/store/hooks';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useCallback} from 'react';
import {RootParamList} from '../navigation/types';
import {HomeTemplate} from '../templates';

type Props = NativeStackScreenProps<RootParamList, 'Home'>;
const HomePage: React.FC<Props> = ({navigation}) => {
  const {wordList} = useAppSelector(state => state.word);
  const dispatch = useAppDispatch();

  const onAddWord = useCallback((word: Word) => {
    dispatch(addWord(word));
  }, []);

  const showSearchModalUp = useCallback(() => {
    console.log('modal');
    navigation.navigate('Search', undefined);
  }, [navigation]);

  return (
    <HomeTemplate
      list={wordList}
      onAddWord={onAddWord}
      onPressSearchButton={showSearchModalUp}
    />
  );
};

export default HomePage;
