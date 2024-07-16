import { Note } from '@/models/note'

const notesDb = new Map();
notesDb.set("1", new Note("1", "First Note", "Hello World!"));
notesDb.set("2", new Note("2", "Second Note", "A whole new world"));
notesDb.set("3", new Note("3", "Third Note", "Another Note.."));
notesDb.set("Bacon", new Note("Bacon", "Bacon Note", "Uhh Whatever"));

export const fetchNotes = async (): Promise<Note[]> => {
  // const response = await fetch('https://your-api-url.com/notes');
  // if (!response.ok) {
  //   throw new Error(`HTTP error: Status ${response.status}`);
  // }
  // return await response.json();
  await new Promise(res => setTimeout(res, 500));
  return Array.from(notesDb.values())
}

export const fetchNote = async (id:string): Promise<Note> => {
  // const response = await fetch('https://your-api-url.com/notes');
  // if (!response.ok) {
  //   throw new Error(`HTTP error: Status ${response.status}`);
  // }
  // return await response.json();
  await new Promise(res => setTimeout(res, 500));
  return notesDb.get(id)
}

export const putNote = async (title:string, authorId:string): Promise<Note> => {
  // const response = await fetch('https://your-api-url.com/notes');
  // if (!response.ok) {
  //   throw new Error(`HTTP error: Status ${response.status}`);
  // }
  // return await response.json();
  await new Promise(res => setTimeout(res, 500));
  return notesDb.get("1")
}

export const patchNote = async (note:Note): Promise<Note> => {
  // const response = await fetch('https://your-api-url.com/notes');
  // if (!response.ok) {
  //   throw new Error(`HTTP error: Status ${response.status}`);
  // }
  // return await response.json();
  await new Promise(res => setTimeout(res, 500));
  notesDb.set(note.id, note)
  return note
}