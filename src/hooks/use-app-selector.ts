import {SelectorKey} from '../const';
import {useSelector} from 'react-redux';
import {selector} from '../store/selectors';

export const useAppSelector = (key: SelectorKey) => useSelector(selector(key));;
