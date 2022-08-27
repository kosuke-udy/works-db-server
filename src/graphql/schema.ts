import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Query {
    works: [Work]
  }

  scalar Date

  enum Region {
    Japan
    US
    SouthKorea
    China
    Taiwan
  }

  enum Language {
    Japanese
    English
    Korean
    Chinese
    Taiwanese
  }

  type Work {
    id: ID!
    originalTitle: String!
    originalTitlesLanguage: Language
    titlesNotationByLanguage: NotationByLanguage
    artist: WorksArtist
    artistAliases: [WorksArtist!]
    releaseDate: Date
    regions: [Region]
  }

  type WorksArtist {
    id: ID!
    mainNameIds: [ID!]
    featNameIds: [ID!]
    prodNameIds: [ID!]
    remixNameIds: [ID!]
    originalNotation: String
    originalNotationsLanguage: Language
    notationByLanguage: NotationByLanguage
  }

  type WorksRelation {
    subjectId: ID!
    type: WorksRelationType!
    objectIds: [ID!]
  }

  enum WorksRelationType {
    Cover
    Remix
    Rearrange
    AnotherVersion
    Live

    Mashup
    DJMix

    Contain
  }

  type ArtistName {
    id: ID!
    originalNotation: String!
    originalNotationLanguage: Language
    notationByLanguage: NotationByLanguage
    since: Date
    until: Date
    regions: [Region!]
  }

  type ArtistNameGroup {
    id: ID!
    mainId: ID!
    subIds: [ID!]!
  }

  type ArtistNamesRelation {
    id: ID!
    subjectId: ID!
    objectId: ID!
    relationType: ArtistNamesRelationType
    relationDescription: String
    hasWithdrawn: Boolean
    since: Date
    until: Date
  }

  enum ArtistNamesRelationType {
    Performer

    Member
    SupportMember
  }

  type Credit {
    id: ID!
    role: CreditRole!
    workId: ID!
    artistId: ID!
    artistNotationId: ID!
  }

  type CreditRole {
    id: ID!
    type: RoleGenre!
    isMain: Boolean!
  }

  enum RoleGenre {
    Music
    Graphic
    Other
  }

  type NotationByLanguage {
    english: String
    japanese: String
    korean: String
    chinese: String
    taiwanese: String
  }

  type Alias {
    id: ID!
    parentId: ID!
    body: String!
    language: [Language!]
  }

  type User {
    id: ID!
    name: String!
    region: Region
  }

  type EditHistory {
    parentId: ID!
    date: Date!
  }
`;
