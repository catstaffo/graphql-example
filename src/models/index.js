// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { FNotes, Note, Wildlife, Comment, Sightings } = initSchema(schema);

export {
  FNotes,
  Note,
  Wildlife,
  Comment,
  Sightings
};