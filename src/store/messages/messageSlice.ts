import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { fetchMessages } from "./messageActions"

export interface Message {
  _id?: string,
  author: string,
  body: string
}

export interface MessagesState {
  messages: Message[]
}

const initialState: MessagesState = {
  messages: [],
}

export const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    storeMessages: (state, action: PayloadAction<any>) => {
      state.messages.push(action.payload);
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchMessages.fulfilled, (state, action: PayloadAction<any>) => {
      state.messages = action.payload;
    })
  }
})

export const { storeMessages } = messageSlice.actions
 
export default messageSlice.reducer