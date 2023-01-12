/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateFNotes = /* GraphQL */ `
  subscription OnCreateFNotes($filter: ModelSubscriptionFNotesFilterInput) {
    onCreateFNotes(filter: $filter) {
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
export const onUpdateFNotes = /* GraphQL */ `
  subscription OnUpdateFNotes($filter: ModelSubscriptionFNotesFilterInput) {
    onUpdateFNotes(filter: $filter) {
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
export const onDeleteFNotes = /* GraphQL */ `
  subscription OnDeleteFNotes($filter: ModelSubscriptionFNotesFilterInput) {
    onDeleteFNotes(filter: $filter) {
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
export const onCreateWildlife = /* GraphQL */ `
  subscription OnCreateWildlife($filter: ModelSubscriptionWildlifeFilterInput) {
    onCreateWildlife(filter: $filter) {
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
export const onUpdateWildlife = /* GraphQL */ `
  subscription OnUpdateWildlife($filter: ModelSubscriptionWildlifeFilterInput) {
    onUpdateWildlife(filter: $filter) {
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
export const onDeleteWildlife = /* GraphQL */ `
  subscription OnDeleteWildlife($filter: ModelSubscriptionWildlifeFilterInput) {
    onDeleteWildlife(filter: $filter) {
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
export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote($filter: ModelSubscriptionNoteFilterInput) {
    onCreateNote(filter: $filter) {
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
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote($filter: ModelSubscriptionNoteFilterInput) {
    onUpdateNote(filter: $filter) {
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
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote($filter: ModelSubscriptionNoteFilterInput) {
    onDeleteNote(filter: $filter) {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
    onCreateComment(filter: $filter) {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
    onUpdateComment(filter: $filter) {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
    onDeleteComment(filter: $filter) {
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
export const onCreateSightings = /* GraphQL */ `
  subscription OnCreateSightings(
    $filter: ModelSubscriptionSightingsFilterInput
  ) {
    onCreateSightings(filter: $filter) {
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
export const onUpdateSightings = /* GraphQL */ `
  subscription OnUpdateSightings(
    $filter: ModelSubscriptionSightingsFilterInput
  ) {
    onUpdateSightings(filter: $filter) {
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
export const onDeleteSightings = /* GraphQL */ `
  subscription OnDeleteSightings(
    $filter: ModelSubscriptionSightingsFilterInput
  ) {
    onDeleteSightings(filter: $filter) {
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
