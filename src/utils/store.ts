import create from 'zustand';

import { ITag, IUser } from '../types';
import { TTagFilter, TOwnerFilter } from '../components/filter/Filter';
import { SortMethods } from '../types';

export interface AppState {
    sortFilter: SortMethods;
    tagFilter: TTagFilter;
    ownerFilter: TOwnerFilter;
    addForm: boolean;
    errorOpen: boolean;
    setSortFilter: (sort: SortMethods) => void;
    setTagFilter: (tags: ITag['value'][] | undefined) => void;
    setOwnerFilter: (rcId: IUser['rcId'] | undefined) => void;
    setErrorOpen: (status: boolean) => void;
}
export const useStore = create<AppState>((set) => ({
    sortFilter: SortMethods['Last Updated'],
    tagFilter: undefined,
    ownerFilter: undefined,
    addForm: false,
    errorOpen: false,
    setSortFilter: (sort) => set({ sortFilter: sort }),
    setTagFilter: (tags) => set({ tagFilter: tags }),
    setOwnerFilter: (rcId) => {
        set({
            ownerFilter: rcId,
        });
    },
    setErrorOpen: (status) => set({ errorOpen: status }),
}));
