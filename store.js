import { configureStore } from "@reduxjs/toolkit";
import selectionReducer from "./features/create-modal/sectionsSlice"

export default configureStore({
  reducer: {
    sections: selectionReducer
  }
})
