import React, { useReducer } from "react";

export const SearchContext = React.createContext({
    searchText: '',
    setSearchText: (searchText) => {}
});

const defaultSearchState = {
    searchText: ''
}

export const searchActionTypes = {
    SET_SEARCH_TEXT: 'SET_SEARCH_TEXT',
}

function searchReducer(state, action) {
    switch (action.type) {
        case searchActionTypes.SET_SEARCH_TEXT:
            return {
                ...state,
                searchText: action.searchText,
            }

        default:
            return state;
    }
}

function SearchContextProvider(props) {
    const [searchState, dispatchSearch] = useReducer(searchReducer, defaultSearchState);

    function setSearchText(searchText) {
        dispatchSearch({
            type: searchActionTypes.SET_SEARCH_TEXT,
            searchText: searchText,
        });
    }

    const searchContext = {
        searchText: searchState.searchText,
        setSearchText: setSearchText,
    }

    return (
        <SearchContext.Provider value={searchContext}>
            {props.children}
        </SearchContext.Provider>
    )
}

export default SearchContextProvider;