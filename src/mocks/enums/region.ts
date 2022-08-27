import { registerEnumType } from "type-graphql";

export enum Region {
    Japan = 'JAPAN',
    US = 'US',
}

registerEnumType(Region, {
    name: "Region",
});