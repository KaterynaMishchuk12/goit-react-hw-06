import { createSlice } from "@reduxjs/toolkit";
// import { nanoid } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: [],
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      // prepare(text) {
      //   return {
      //     payload: {
      //       text,
      //       id: nanoid(),
      //       completed: false,
      //     },
      //   };
      // },
    },
    deleteContact: {
      reducer(state, action) {
        state.contacts = state.contacts.filter(
          (contact) => contact.id !== action.payload
        );
      },
    },
  },
});
console.log(contactsSlice);
//  експортуємо генератори екшенів та редюсер
export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
