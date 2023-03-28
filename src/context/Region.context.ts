import { createContext, Dispatch, SetStateAction, useContext } from 'react';

export type Region = {
	name: string;
	principalSubdivision: string;
	city?: string;
	date: string;
	venue: string;
	registration?: string;
	map?: string;
};
interface RegionData {
	current: Region | null | undefined;
	setRegion: Dispatch<SetStateAction<Region | null | undefined>>;
}

export const RegionContext = createContext<RegionData | null>(null);

export const useCurrentRegion = () => useContext(RegionContext);
