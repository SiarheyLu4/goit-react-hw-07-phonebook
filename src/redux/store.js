import { configureStore} from "@reduxjs/toolkit";
// import { persistStore, persistReducer, FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER, } from "redux-persist";
// import storage from "redux-persist/lib/storage";

import contactsReducer from "./contacts/contacts-reducer";
import filterReducer from "./filter/filter-reducer";

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  }
})

export default store;

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });



// const persistConfig = {
//   key: 'contacts',
//   storage,
//   whitelist: ['contacts']
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer);


// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// })

// export const persistor = persistStore(store);