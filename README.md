# Contact Book Project 📱

- Create a repository named `goit-react-hw-08`.
- Provide two links for the assignment submission: one for the source files and another for the live page on [Vercel](https://vercel.com/keskenridvans-projects) 🚀.
- The project must be built using [Vite](https://vite.dev/) ⚡.
- There should be no errors or warnings in the console when the task code is executed.
- For each component, there should be a separate folder in the `src/components` directory containing the React component JSX file and the style file. The folder name, component file name (extension `.jsx`), and style file name (before `.module.css`) must be the same and match the names specified in the tasks (if given) 📂.
- For each page, there should be a separate folder in the `src/pages` folder containing the React component JSX file and the style file. The folder name, component file name (extension `.jsx`), and style file name (before `.module.css`) must be the same and match the names specified in the tasks (if given) 📄.
- The `export default` method should be preferred for exporting components.
- JS code should be clean and understandable; use **Prettier** ✨.
- Configure the application using the `Redux Toolkit` library 🏗️.
- Styling should be done with **CSS Modules** 🎨.

## Contact Book ☎️

Add user registration and login functionality to the "Contact Book" application, ensuring that users can only access their own personal contact list.

## Backend 🌐

There is a ready-to-use backend for this task with [documentation](https://connections-api.goit.global/docs/). Use this instead of the backend you created using [mockapi.io](https://mockapi.io/projects) in the previous assignment.

```text
https://connections-api.goit.global/

```

It supports registration, login, and user updates with JWT, as well as all necessary operations for contact list management 🔐.

## Redux Directory Structure 📂

There should be three slices in Redux. In addition to the `contacts` and `filters` slices you previously created, a new slice called `auth` should be added to handle the user state. Separate files should be created for entities such as operations, selectors, and slice logic for each slice.

Structure it this way:

Move the code from `contactsSlice.js`, `contactsOps.js`, and `filtersSlice.js` into the new relevant files 🚚.

## auth Slice 🔑

Add a new auth state to Redux with the following structure:

```json
{
  "user": {
    "name": null,
    "email": null
  },
  "token": null,
  "isLoggedIn": false,
  "isRefreshing": false
}
```

## auth Slice Operations ⚙️

Add user-related operations to the `redux/auth/operations.js` file using `createAsyncThunk`:

- `register` - For new user registration. Base action type `"auth/register"`. Used in the `RegistrationForm` component on the registration page 📝.
- `login` - For logging in an existing user. Base action type `"auth/login"`. Used in the `LoginForm` component on the login page 🔑.
- `logout` - For logging out of the application. Base action type `"auth/logout"`. Used in the `UserMenu` component at the top of the app 🚪.
- `refreshUser` - For refreshing the user via token. Base action type `"auth/refresh"`. Used during the mounting of the `App` component 🔄.

The authorized user's token should be stored in local storage using the [persist](https://github.com/rt2zz/redux-persist#readme) library.

## Routing 🛤️

Add routing with **React Router**. Add page components to the `src/pages` folder. Use `PrivateRoute` and `RestrictedRoute` components for public and private pages.

The application must have the following routes:

- `/` - Home route, may contain information about the application or developer. Renders the `HomePage` component 🏠.
- `/register` - Public route for new user registration, renders the `RegistrationPage` containing the `RegistrationForm` 📝.
- `/login` - Login page for existing users, renders the `LoginPage` containing the `LoginForm` 🔑.
- `/contacts` - Private route where users can work with their contact list, renders the `ContactsPage` 👥.

Create a `Layout` component that renders the `AppBar` and wraps all routes so it’s accessible on every route.

The `AppBar` component should render the `Navigation` and `AuthNav` components. A logged-in user should see the `UserMenu` component instead of `AuthNav`.

Make sure to clear the contact list from the state upon logout 🧹.

When the `/contacts` page is reloaded, ensure the user's authorization status is maintained. The authorized state should be automatically restored without the user having to log in again.

## Forms 📝

It is recommended to use the [Formik](https://formik.org/) library for login (`LoginForm`) and registration (`RegistrationForm`) forms.

## Extra ✨

This is the final version of the application; handle the code with care. Some optional features that can be added:

- Filtering not only by names but also by phone numbers in the contact search box 🔍.
- A confirmation modal window for deletion operations ⚠️.
- Showing notifications to users during successful addition and deletion using [React Hot Toast](https://react-hot-toast.com/) 🍞.
- Contact information should be editable; the backend supports PATCH requests ✏️.
- A component library like [Material UI](https://mui.com/material-ui/) can be used for styling 🎨.

---

## Criteria ✅

### Fastcheck

- Check if the repository exists.
- Check if the repository is public.
- Check if the `main.jsx` file exists in the repository.
- Check if the `src/components` folder exists.
- Check if the `src/redux` folder exists.
- Check if the `src/pages` folder exists.
- Check the `vercel.json` file.
- `src/redux`: `store.js`, `redux/auth/operations.js`, and `redux/contacts/operations.js` exist.

### Error

- `src/redux`: `auth/slice.js`, `filters/slice.js`, `contacts/slice.js`, `auth/selectors.js`, `filters/selectors.js`, and `contacts/selectors.js` exist.
- `pages` includes required components: `Home.jsx`, `Login.jsx`, `Contacts.jsx`, `Registration.jsx`.
- `components` includes: `App`, `AppBar`, `AuthNav`, `LoginForm`, `RegistrationForm`, `ContactForm`, `Navigation`, `ContactList`, `Contact`, `UserMenu`, `PrivateRoute.jsx`, `RestrictedRoute.jsx`, `Filter.jsx`.

`main.jsx`

- `Provider` component is present.
- `PersistGate` component is present.
- `BrowserRouter` component is present.

`store.js`

- `authPersistConfig` has the following structure:

```jsx
const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};
```

- `authPersistConfig` is passed as an argument to the `persistReducer` function.
- `persistReducer()` function is called with two arguments.
- `configureStore` is used to create the app store.
- Result of `persistReducer()` is assigned to the `auth` field in `configureStore()`.
- `persistStore(store)` is called and exported as `export let persistor = persistStore(store)`.

`src/redux/contacts/operation.js`

- `axios.defaults.baseURL` structure is not present (handled globally or in auth).

`src/redux/contacts/slice.js`

- `addCase(logOut.fulfilled, () => {})` exists to clear contacts on logout.
- `selectFilteredContacts` selector function is exported.

`src/redux/contacts/selectors.js`

- Memoized `selectFilteredContacts` selector created with `createSelector` exists.
- Takes `[selectContacts, selectNameFilter]` as the first argument.

`src/redux/auth/operations.js`

- `createAsyncThunk` is imported.
- `axios` is used for HTTP requests.
- `axios.defaults.baseURL= 'https://connections-api.herokuapp.com'` exists.
- `register` operation created with action type `"auth/register"`.
- `POST` request and `try...catch` block present in operations.
- `thunkAPI.rejectWithValue` is returned in the `catch` block.
