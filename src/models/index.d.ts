import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerFNotes = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FNotes, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly notes?: (Note | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFNotes = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FNotes, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly notes: AsyncCollection<Note>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type FNotes = LazyLoading extends LazyLoadingDisabled ? EagerFNotes : LazyFNotes

export declare const FNotes: (new (init: ModelInit<FNotes>) => FNotes) & {
  copyOf(source: FNotes, mutator: (draft: MutableModel<FNotes>) => MutableModel<FNotes> | void): FNotes;
}

type EagerNote = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Note, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly content: string;
  readonly fnote?: FNotes | null;
  readonly wildlife?: (Sightings | null)[] | null;
  readonly comments?: (Comment | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly fNotesNotesId?: string | null;
}

type LazyNote = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Note, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly content: string;
  readonly fnote: AsyncItem<FNotes | undefined>;
  readonly wildlife: AsyncCollection<Sightings>;
  readonly comments: AsyncCollection<Comment>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly fNotesNotesId?: string | null;
}

export declare type Note = LazyLoading extends LazyLoadingDisabled ? EagerNote : LazyNote

export declare const Note: (new (init: ModelInit<Note>) => Note) & {
  copyOf(source: Note, mutator: (draft: MutableModel<Note>) => MutableModel<Note> | void): Note;
}

type EagerWildlife = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Wildlife, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly bio?: string | null;
  readonly type: string;
  readonly subtype?: string | null;
  readonly notes?: (Sightings | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyWildlife = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Wildlife, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly bio?: string | null;
  readonly type: string;
  readonly subtype?: string | null;
  readonly notes: AsyncCollection<Sightings>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Wildlife = LazyLoading extends LazyLoadingDisabled ? EagerWildlife : LazyWildlife

export declare const Wildlife: (new (init: ModelInit<Wildlife>) => Wildlife) & {
  copyOf(source: Wildlife, mutator: (draft: MutableModel<Wildlife>) => MutableModel<Wildlife> | void): Wildlife;
}

type EagerComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly post?: Note | null;
  readonly content: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly noteCommentsId?: string | null;
}

type LazyComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly post: AsyncItem<Note | undefined>;
  readonly content: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly noteCommentsId?: string | null;
}

export declare type Comment = LazyLoading extends LazyLoadingDisabled ? EagerComment : LazyComment

export declare const Comment: (new (init: ModelInit<Comment>) => Comment) & {
  copyOf(source: Comment, mutator: (draft: MutableModel<Comment>) => MutableModel<Comment> | void): Comment;
}

type EagerSightings = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Sightings, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly noteId?: string | null;
  readonly wildlifeId?: string | null;
  readonly note: Note;
  readonly wildlife: Wildlife;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySightings = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Sightings, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly noteId?: string | null;
  readonly wildlifeId?: string | null;
  readonly note: AsyncItem<Note>;
  readonly wildlife: AsyncItem<Wildlife>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Sightings = LazyLoading extends LazyLoadingDisabled ? EagerSightings : LazySightings

export declare const Sightings: (new (init: ModelInit<Sightings>) => Sightings) & {
  copyOf(source: Sightings, mutator: (draft: MutableModel<Sightings>) => MutableModel<Sightings> | void): Sightings;
}