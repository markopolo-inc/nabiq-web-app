import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from 'react-redux';
import { RootState } from 'src/store';

// Create a typed version of the useSelector hook
const useAppSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
export default useAppSelector;
