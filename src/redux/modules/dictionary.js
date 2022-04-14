// firebase imports:
import { db } from "../../firebase";
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    doc,
    deleteDoc,
    getDoc,
} from "firebase/firestore";

// Actions

const CREATE = "dictionary/CREATE";
const UPDATE_COMPLETE = "dictionary/UPDATE_COMPLETE";
const UPDATE_INCOMPLETE = "dictionary/UPDATE_INCOMPLETE";
const UPDATE = "dictionary/UPDATE";
const REMOVE = "dictionary/REMOVE";
const LOADED = "dictionary/LOADED";

// Actions for Firebase
const LOAD = "dictionary/LOAD";

//Initial State
const initialState = {
    // list: ["영화관 가기", "매일 책읽기", "수영 배우기", "새로운 데이터"],
    is_loaded: false,
    list: [
        {
            word: "-",
            exp: "-",
            example: "-",
            completed: false,
        },
        {
            word: "-",
            exp: "-",
            example: "-",
            completed: false,
        },
        {
            word: "-",
            exp: "-",
            example: "-",
            completed: false,
        },
    ],
};

// Action Creators
// 액션 생성 함수
export function createDictionary(dictionary) {
    return { type: CREATE, dictionary };
}

export function updateComplete(dictionary_index) {
    return { type: UPDATE_COMPLETE, dictionary_index };
}

export function updateNotComplete(dictionary_index) {
    return { type: UPDATE_INCOMPLETE, dictionary_index };
}

export function updateDictionary(index, dictionary) {
    return { type: UPDATE, index, dictionary };
}

export function removeDictionary(dictionary_index) {
    return { type: REMOVE, dictionary_index };
}

export function isLoaded(loaded) {
    return { type: LOADED, loaded };
}

// Action Creators for Firebase
// 액션 생성 함수

export function loadDictionary(dictionary_list) {
    return { type: LOAD, dictionary_list };
}

// middlewares

export const loadDictionaryFB = () => {
    return async function (dispatch) {
        const dictionary_data = await getDocs(collection(db, "dictionary"));
        console.log(dictionary_data);
        let dictionary_list = [];

        dictionary_data.forEach((dictionary) => {
            console.log(dictionary.data());
            dictionary_list.push({ id: dictionary.id, ...dictionary.data() });
        });
        console.log(dictionary_list);
        dispatch(loadDictionary(dictionary_list));
    };
};

export const addDictionaryFB = (dictionary) => {
    return async function (dispatch) {
        dispatch(isLoaded(false));
        const docRef = await addDoc(collection(db, "dictionary"), dictionary);
        console.log(docRef);
        const dictionary_data = { id: docRef.id, ...dictionary };
        console.log(dictionary_data);
        dispatch(createDictionary(dictionary_data));
    };
};

export const updateCompleteFB = (dictionary_id) => {
    return async function (dispatch, getState) {
        dispatch(isLoaded(false));
        const docRef = doc(db, "dictionary", dictionary_id);
        await updateDoc(docRef, { completed: true });
        const _dictionary_list = getState().dictionary.list;
        const dictionary_index = _dictionary_list.findIndex((d) => {
            return d.id == dictionary_id;
        });
        dispatch(updateComplete(dictionary_index));
    };
};

export const updateNotCompleteFB = (dictionary_id) => {
    return async function (dispatch, getState) {
        dispatch(isLoaded(false));
        const docRef = doc(db, "dictionary", dictionary_id);
        await updateDoc(docRef, { completed: false });
        const _dictionary_list = getState().dictionary.list;
        const dictionary_index = _dictionary_list.findIndex((d) => {
            return d.id == dictionary_id;
        });
        dispatch(updateNotComplete(dictionary_index));
    };
};

export const updateDictionaryFB = (dictionary_id, updatedDictionary, index) => {
    return async function (dispatch) {
        dispatch(isLoaded(false));
        const docRef = doc(db, "dictionary", dictionary_id);
        await updateDoc(docRef, updatedDictionary);
        dispatch(updateDictionary(index, updatedDictionary));
        console.log(dictionary_id);
    };
};

export const deleteBucketFB = (dictionary_id) => {
    return async function (dispatch, getState) {
        dispatch(isLoaded(false));
        if (!dictionary_id) {
            window.alert("아이디가 없네요");
            return;
        }
        const docRef = doc(db, "dictionary", dictionary_id);
        await deleteDoc(docRef);

        const _dictionary_list = getState().dictionary.list;
        const dictionary_index = _dictionary_list.findIndex((d) => {
            return d.id == dictionary_id;
        });
        dispatch(removeDictionary(dictionary_index));
    };
};

//Reducer 데이터를 변경하는 곳
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case CREATE: {
            const new_dictionary_list = [...state.list, action.dictionary];
            return { list: new_dictionary_list, is_loaded: true };
        }

        case UPDATE: {
            const update_dictionary_list = state.list.map((l, idx) => {
                if (action.index == idx) {
                    return { ...l, ...action.dictionary };
                }
                return l;
            });
            return { list: update_dictionary_list, is_loaded: true };
        }

        case UPDATE_COMPLETE: {
            const new_dictionary_list = state.list.map((l, idx) => {
                if (action.dictionary_index === idx) {
                    return { ...l, completed: true };
                } else {
                    return l;
                }
            });
            return { list: new_dictionary_list, is_loaded: true };
        }

        case UPDATE_INCOMPLETE: {
            const new_dictionary_list = state.list.map((l, idx) => {
                if (action.dictionary_index === idx) {
                    return { ...l, completed: false };
                } else {
                    return l;
                }
            });
            return { list: new_dictionary_list, is_loaded: true };
        }

        case REMOVE: {
            const new_bucket_list = state.list.filter((l, idx) => {
                return action.dictionary_index !== idx;
            });
            return { list: new_bucket_list, is_loaded: true };
        }

        case LOAD: {
            return { list: action.dictionary_list, is_loaded: true };
        }
        case LOADED: {
            return { ...state, is_loaded: action.loaded };
        }

        default:
            return state;
    }
}
