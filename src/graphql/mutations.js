/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createFNotes = /* GraphQL */ `
  mutation CreateFNotes(
    $input: CreateFNotesInput!
    $condition: ModelFNotesConditionInput
  ) {
    createFNotes(input: $input, condition: $condition) {
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
export const updateFNotes = /* GraphQL */ `
  mutation UpdateFNotes(
    $input: UpdateFNotesInput!
    $condition: ModelFNotesConditionInput
  ) {
    updateFNotes(input: $input, condition: $condition) {
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
export const deleteFNotes = /* GraphQL */ `
  mutation DeleteFNotes(
    $input: DeleteFNotesInput!
    $condition: ModelFNotesConditionInput
  ) {
    deleteFNotes(input: $input, condition: $condition) {
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
export const createWildlife = /* GraphQL */ `
  mutation CreateWildlife(
    $input: CreateWildlifeInput!
    $condition: ModelWildlifeConditionInput
  ) {
    createWildlife(input: $input, condition: $condition) {
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
export const updateWildlife = /* GraphQL */ `
  mutation UpdateWildlife(
    $input: UpdateWildlifeInput!
    $condition: ModelWildlifeConditionInput
  ) {
    updateWildlife(input: $input, condition: $condition) {
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
export const deleteWildlife = /* GraphQL */ `
  mutation DeleteWildlife(
    $input: DeleteWildlifeInput!
    $condition: ModelWildlifeConditionInput
  ) {
    deleteWildlife(input: $input, condition: $condition) {
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
export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
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
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
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
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createSightings = /* GraphQL */ `
  mutation CreateSightings(
    $input: CreateSightingsInput!
    $condition: ModelSightingsConditionInput
  ) {
    createSightings(input: $input, condition: $condition) {
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
export const updateSightings = /* GraphQL */ `
  mutation UpdateSightings(
    $input: UpdateSightingsInput!
    $condition: ModelSightingsConditionInput
  ) {
    updateSightings(input: $input, condition: $condition) {
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
export const deleteSightings = /* GraphQL */ `
  mutation DeleteSightings(
    $input: DeleteSightingsInput!
    $condition: ModelSightingsConditionInput
  ) {
    deleteSightings(input: $input, condition: $condition) {
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
