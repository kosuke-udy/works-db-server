import { Notation } from "../notations";
import { 
    caId,
    polarisId, 
    yyjId,
    sdsrId,
} from "../works";

/*
    {
        id: '',
        parentId: ,
        body: '',
        isOfficial: ,
    },
*/

export const workNotations: Array<Notation> = [
    {
        id: '66aa6882-204d-4e3a-a4d9-f8b6a1684a11',
        parentId: caId,
        body: 'Club Aquila',
        isOfficial: true,
    },
    {
        id: '29af6c81-650e-4eab-9144-cbb64eaa5ade',
        parentId: polarisId,
        body: 'Polaris',
        isOfficial: true,
    },
    {
        id: '841702e1-6924-4e7c-ad74-aeb1137a153f',
        parentId: yyjId,
        body: 'Yona Yona Journey',
        isOfficial: true,
    },
    {
        id: '098c3c42-028a-47ea-a019-7bac19336da2',
        parentId: sdsrId,
        body: 'START DASH SENSATION [Taku Inoue Remix]',
        isOfficial: true,
    },
];