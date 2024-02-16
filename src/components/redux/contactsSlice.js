import { createSlice } from "@reduxjs/toolkit";
// import { nanoid } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: [],
  },
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    // {
    //   reducer(state, action) {
    //     // return [...state, action.payload];
    //     state.contacts.push(action.payload);
    //   },
    // },
    deleteContact: {
      reducer(state, action) {
        state.contacts = state.contacts.filter(
          (contact) => contact.id !== action.payload
        );
      },
    },
  },
});
// console.log(contactsSlice);
//  експортуємо генератори екшенів та редюсер
export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
