class NotesStore {
  constructor() {
    this.notes = [];
    this.validStates = ['completed', 'active', 'others'];
  }

  validateName(name) {
    if (name === '') {
      throw new Error('Name cannot be empty');
    }
  }

  validateState(state) {
    if (!this.validStates.includes(state)) {
      throw new Error(`Invalid state {${state}}`);
    }
  }

  addNote(state, name) {
    this.validateName(name);
    this.validateState(state);

    this.notes.push({ state, name });
  }

  getNotes(state) {
    this.validateState(state);

    return this.notes
      .filter(note => note.state === state)
      .map(note => note.name);

  }
}

const notesStore = new NotesStore();
notesStore.addNote('completed', 'Test');
notesStore.addNote('active', 'Test 2');


console.info('[notesStore]', notesStore);
console.info('[completed notes]', notesStore.getNotes('completed'));
console.info('[active notes]', notesStore.getNotes('active'));
console.info('[others notes]', notesStore.getNotes('others'));
