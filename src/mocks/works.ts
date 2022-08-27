import { 
    midnightGrandOrchestra, 
    miki, 
    mona, 
    moriCalliope, 
    ruka, 
    siren, 
    takuInoueArray,
} from "./artistNames";
import { Work } from "./types/work";

export const caId = 'a0f02d75-5c47-4d7f-85b2-35091e9e60c9';
export const allegroId = '873cace4-b1e9-44c9-81aa-042b9d1c985a';
export const polarisId = '5388227a-fea7-4031-b585-6cc970f156c1';
export const yyjId = '88df2e2c-daa8-4dde-a65a-3b31e7f15cca';
export const sdsrId = 'cbe29dfd-184b-4fad-9e0e-8cebf031f9e9';

export const works = [
    {
        // Club Aquila - TAKU INOUE
        id: caId,
        originalTitle: 'Club Aquila',
        artist: {
            id: '020ff922-456a-4d7f-bf1c-ea232cafcbb2',
            mainNameIds: [takuInoueArray[0].id]
        }
    },
    {
        // Allegro - Midnight Grand Orchestra
        id: allegroId,
        originalTitle: 'Allegro',
        artist: {
            id: '243c706a-0999-498b-8695-0c55216ed00e',
            mainNameIds: [midnightGrandOrchestra.id],
        },
    },
    {
        // title: 'Polaris'
        id: polarisId,
        originalTitle: 'Polaris',
        artist: {
            id: '4355be6a-21e0-4065-88ad-265c4523ebee',
            mainNameIds: [siren.id],
        },
    },
    {
        // title: 'Yona Yona Journey'
        id: yyjId,
        originalTitle: 'Yona Yona Journey',
        artist: {
            id: 'e5cf516d-a7e5-4df6-aad5-83857722538d',
            mainNameIds: [takuInoueArray[0].id, moriCalliope.id],
        }
    },
    {
        // title: 'START DASH SENSATION [Taku Inoue Remix]'
        id: sdsrId,
        originalTitle: 'START DASH SENSATION [Taku Inoue Remix]',
        artist: {
            id: '22a696f0-efbe-4073-bb10-e7072d5ee0f7',
            originalNotation: 'るか・もな・みき from AIKATSU☆STARS!',
            mainNameIds: [ruka.id, mona.id, miki.id],
            remixNameIds: [takuInoueArray[1].id],
        },
    },
];
