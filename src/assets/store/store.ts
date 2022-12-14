import { configureStore } from '@reduxjs/toolkit';
import characters from './api/slice/characters'



export const store = configureStore({
    reducer:{
        characters
    }
})
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch