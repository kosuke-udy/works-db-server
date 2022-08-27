import { Region } from "../enums/region";
import { Language } from "../enums/language";
import { NotationByLanguage } from "./notationByLanguage";

export type ArtistName = {
    id: string,
    originalNotation: string,
    originalNotationLanguage?: Language,
    notationByLanguage?: NotationByLanguage,
    since?: Date,
    until?: Date,
    regions?: Array<Region>,
}