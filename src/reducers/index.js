import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer.js';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
    //libraries: () => [] //this is internal
    libraries: LibraryReducer, // this is external
    selectedLibraryId: SelectionReducer
});
