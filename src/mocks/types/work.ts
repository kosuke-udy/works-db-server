import { Region } from "mocks/enums/region";
import { Language } from "../enums/language";
import { NotationByLanguage } from "./notationByLanguage";

export type Work = {
    id: string,
    originalTitle: string,
    originalTitlesLanguage?: Language,
    titlesNotationByLanguage?: NotationByLanguage,
    artist: WorksArtist,
    artistAliases?: Array<WorksArtist>,
    releaseDate?: Date,
    regions?: Array<Region>,
};

export type WorksArtist = {
    id: string,
    mainNameIds?: Array<string>,
    featNameIds?: Array<string>,
    prodNameIds?: Array<string>,
    remixNameIds?: Array<string>,
    originalNotation?: string,
    originalNotationsLanguage?: Language,
    notationByLanguage?: NotationByLanguage,
}
