import { createContext } from 'react';

export const SearchContext = createContext({
    animeData: [],
    singleData: {},
    recData: [],
    scoreData: {},
    search: () => {},
    setData: () => {},
    setSingle: () => {},
    setRec: () => {},
    setScore: () => {},
});