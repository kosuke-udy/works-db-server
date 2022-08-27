import { Region } from "./enums/region";

export type Notation = {
    id: string,
    parentId: string,
    body: string,
    isOfficial: boolean,
    regions?: [Region],
    isCurrentlyUsed?: boolean,
    since?: number,
    until?: number,
}