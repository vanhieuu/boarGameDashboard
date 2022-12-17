import { configureStore } from '@reduxjs/toolkit';
import characters from './api/slice/characters'
import items from './api/slice/item'
import app from './api/slice/appSlice'

export const store = configureStore({
    reducer:{
        characters,
        items,
        app
    }
})
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch