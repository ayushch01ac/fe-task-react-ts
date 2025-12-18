import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Contact } from "../../types/contact.ts";
import { contactsList } from "../../types/contact.ts";

type ContactsState = {
  list: Contact[];
  searchTerm: string;
};

const initialState: ContactsState = {
  list: contactsList,
  searchTerm: "",
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContacts: (state, action: PayloadAction<Contact>) => {
      state.list.push(action.payload);
    },
    removeContact: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter(c => c.id !== action.payload);
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    }
  },
});

export const { addContacts, removeContact, setSearchTerm } = contactsSlice.actions;
export default contactsSlice.reducer;
