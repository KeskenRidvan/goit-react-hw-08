import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors";

export const selectContacts = state => state.contacts.items;
export const selectContactsLoading = state => state.contacts.isLoading;
export const selectContactsError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filterValue) => {
    const normalized = filterValue.toLowerCase();

    return contacts.filter(contact => {
      const nameMatches = contact.name.toLowerCase().includes(normalized);
      const numberMatches = contact.number.toLowerCase().includes(normalized);
      return nameMatches || numberMatches;
    });
  }
);
