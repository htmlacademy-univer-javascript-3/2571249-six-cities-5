import {TypedUseSelectorHook, useSelector} from 'react-redux';

import {State} from '../models/state.ts';


export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
