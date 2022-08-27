import { Region } from "./enums/region";
import { Language } from "./enums/language";
import { ArtistName } from "./types/artistName";
import { NotationByLanguage } from "./types/notationByLanguage";


export const takuInoueArray: Array<ArtistName> = [
    {
        id: '51f4c7d6-3180-4b2a-88b8-880cdb84c28c',
        originalNotation: "TAKU INOUE",
        regions: [Region.Japan],
    },
    {
        id: 'cc937c0c-6ea5-4d35-84ed-b2bd42a04ce1',
        originalNotation: "Taku Inoue",
        regions: [Region.Japan],
    },
];

export const midnightGrandOrchestra: ArtistName = {
    id: '218906c7-ac1d-4561-a1eb-b4eb09ff9362',
    originalNotation: "Midnight Grand Orchestra",
    regions: [Region.Japan],
};

export const siren: ArtistName = {
    id: 'aa7a3023-2dcf-4d6c-b3c9-adacd6768312',
    originalNotation: "セイレーン",
    originalNotationLanguage: Language.Japanese,
    notationByLanguage: {
        english: "Siren",
    },
    regions: [Region.Japan],
};

export const moriCalliope: ArtistName = {
    id: 'f2bdb16e-b8bf-470d-b950-aef95127c289',
    originalNotation: "Mori Calliope",
};

export const suiseiHoshimachi: ArtistName = {
    id: 'ad6b1209-b3c6-4690-9703-0d32e71fb995',
    originalNotation: "星街すいせい",
};

export const ruka: ArtistName = {
    id: '82502547-b7ae-4f14-8392-a0fecbb211e9',
    originalNotation: 'るか',
};

export const mona: ArtistName = {
    id: 'a421f483-6b4a-4672-ad6c-c757d365ba47',
    originalNotation: 'もな',
}

export const miki: ArtistName = {
    id: '8f81e456-6694-445b-9e5d-ca3bceb3b3a7',
    originalNotation: 'みき',
}

export const artistNames: Array<ArtistName> = [
    ...takuInoueArray,
    midnightGrandOrchestra,
    siren,
    moriCalliope,
    suiseiHoshimachi,
    ruka,
    mona,
    miki,
]