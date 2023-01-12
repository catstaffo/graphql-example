/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFNotes = /* GraphQL */ `
  query GetFNotes($id: ID!) {
    getFNotes(id: $id) {
      id
      name
      notes {
        items {
          id
          title
          content
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          fNotesNotesId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listFNotes = /* GraphQL */ `
  query ListFNotes(
    $filter: ModelFNotesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        notes {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncFNotes = /* GraphQL */ `
  query SyncFNotes(
    $filter: ModelFNotesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFNotes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        notes {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getWildlife = /* GraphQL */ `
  query GetWildlife($id: ID!) {
    getWildlife(id: $id) {
      id
      title
      bio
      type
      subtype
      notes {
        items {
          id
          wildlifeId
          noteId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listWildlife = /* GraphQL */ `
  query ListWildlife(
    $filter: ModelWildlifeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWildlife(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        bio
        type
        subtype
        notes {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncWildlife = /* GraphQL */ `
  query SyncWildlife(
    $filter: ModelWildlifeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncWildlife(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        bio
        type
        subtype
        notes {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      title
      content
      fnote {
        id
        name
        notes {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      wildlife {
        items {
          id
          wildlifeId
          noteId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          noteCommentsId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      fNotesNotesId
    }
  }
`;
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        content
        fnote {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        wildlife {
          nextToken
          startedAt
        }
        comments {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        fNotesNotesId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncNotes = /* GraphQL */ `
  query SyncNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncNotes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        content
        fnote {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        wildlife {
          nextToken
          startedAt
        }
        comments {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        fNotesNotesId
      }
      nextToken
      startedAt
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      post {
        id
        title
        content
        fnote {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        wildlife {
          nextToken
          startedAt
        }
        comments {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        fNotesNotesId
      }
      content
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      noteCommentsId
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        post {
          id
          title
          content
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          fNotesNotesId
        }
        content
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        noteCommentsId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncComments = /* GraphQL */ `
  query SyncComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncComments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        post {
          id
          title
          content
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          fNotesNotesId
        }
        content
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        noteCommentsId
      }
      nextToken
      startedAt
    }
  }
`;
export const getSightings = /* GraphQL */ `
  query GetSightings($id: ID!) {
    getSightings(id: $id) {
      id
      wildlifeId
      noteId
      wildlife {
        id
        title
        bio
        type
        subtype
        notes {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      note {
        id
        title
        content
        fnote {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        wildlife {
          nextToken
          startedAt
        }
        comments {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        fNotesNotesId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listSightings = /* GraphQL */ `
  query ListSightings(
    $filter: ModelSightingsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSightings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        wildlifeId
        noteId
        wildlife {
          id
          title
          bio
          type
          subtype
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        note {
          id
          title
          content
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          fNotesNotesId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSightings = /* GraphQL */ `
  query SyncSightings(
    $filter: ModelSightingsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSightings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        wildlifeId
        noteId
        wildlife {
          id
          title
          bio
          type
          subtype
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        note {
          id
          title
          content
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          fNotesNotesId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const sightingsByWildlifeId = /* GraphQL */ `
  query SightingsByWildlifeId(
    $wildlifeId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelSightingsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    sightingsByWildlifeId(
      wildlifeId: $wildlifeId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        wildlifeId
        noteId
        wildlife {
          id
          title
          bio
          type
          subtype
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        note {
          id
          title
          content
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          fNotesNotesId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const sightingsByNoteId = /* GraphQL */ `
  query SightingsByNoteId(
    $noteId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelSightingsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    sightingsByNoteId(
      noteId: $noteId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        wildlifeId
        noteId
        wildlife {
          id
          title
          bio
          type
          subtype
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        note {
          id
          title
          content
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          fNotesNotesId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
