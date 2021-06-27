import { createContext } from 'react';

export const SearchContext = createContext({
    animeData: [],
    singleData: {},
    recData: {},
    search: () => {},
    setData: () => {},
    setSingle: () => {},
    setRec: () => {},
});