import { configureStore } from '@reduxjs/toolkit'
import expansionSlice from './expansionSlice'
import playerNumberSlice from './playerNumberSlice'
import sidesSlice from './sidesSlice'
import draftSlice from './draftSlice'
import randomizeSlice from './randomizeSlice'

export default configureStore({
  reducer: {expansionSlice, playerNumberSlice, sidesSlice, randomizeSlice, draftSlice},
})