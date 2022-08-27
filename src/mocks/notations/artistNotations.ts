import { Region } from "../enums/region";
import { Notation } from "../notations";
import { 
    Artist,
    takuInoue, 
    midnightGrandOrchestra, 
    siren,
} from "../artistNames";

export const artistNotations: Array<Notation> = [
    // TAKU INOUE
    {
        id: '33f6c145-e95a-4585-82f5-86eca5e23ef8',
        parentId: (takuInoue as Artist).id,
        body: 'TAKU INOUE',
        isOfficial: true,
        isCurrentlyUsed: true,
    },
    {
        id: 'a04409cb-6165-454c-94c6-eaab63bec3ac',
        parentId: (takuInoue as Artist).id,
        body: 'Taku Inoue',
        isOfficial: true,
    },
    {
        id: '2686d24b-d15a-4b94-92bc-8c85b6e83641',
        parentId: (takuInoue as Artist).id,
        body: 'BNSI(Taku Inoue)',
        isOfficial: true,
    },
    {
        id: '32b31985-9bde-4ce8-8bb3-2fca71ebdfad',
        parentId: (takuInoue as Artist).id,
        body: '井上拓',
        isOfficial: true,
    },
    {
        id: 'dc372f6d-04bc-45e5-bf4c-afe7dca0ce71',
        parentId: (takuInoue as Artist).id,
        body: 'T.INOUE',
        isOfficial: true,
    },
    {
        id: '3a08d069-21c4-47e4-bd76-75f5c163b1de',
        parentId: (takuInoue as Artist).id,
        body: 'applebonker',
        isOfficial: true,
    },
    {
        id: '5eccff36-0553-4fd0-bd7c-7152fd376a27',
        parentId: (takuInoue as Artist).id,
        body: 'スリムクリアアイズ',
        isOfficial: true,
    },

    // Midnight Grand Orchestra
    {
        id: '5a9e7383-154d-4d58-bb79-10081f1b3c3e',
        parentId: midnightGrandOrchestra.id,
        body: 'Midnight Grand Orchestra',
        isOfficial: true,
    },

    // Others of Taku Inoue Works
    {
        id: 'b3ea92a3-de0e-4654-8daa-643a6e3ea2bd',
        parentId: siren.id,
        body: 'セイレーン',
        isOfficial: true,
    },
];

/*
    {
        id: '',
        parentId: ,
        body: '',
        isOfficial: ,
    },
*/