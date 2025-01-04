import {useDispatch} from 'react-redux';
import {AppDispatch} from '../models/state.ts';


export const useAppDispatch = () => useDispatch<AppDispatch>();
