
import { registerEnumType } from "type-graphql";

export enum Language {
    Japanese,
    English,
    Korean,
    Chinese,
    Taiwanese,
}

registerEnumType(Language, {
    name: "Language",
});