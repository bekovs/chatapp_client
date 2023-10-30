import axios from "axios";
import { API } from "../../helpers/consts"
import { Message } from "./messageSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { WSURL } from "../../helpers/consts";

const config: any = {
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  }
}


export const ws = new WebSocket(WSURL);

export const fetchMessages = createAsyncThunk('messages/all', async () => {
  try {
    const { data } = await axios.get(API, config);
    return data
  } catch (error) {
    console.log(error);
  }

})

export const sendMessage = createAsyncThunk('messages/create', async (message: Message) => {
  try {
    await axios.post(API + "/create", JSON.stringify(message), config)
  } catch (error) {
    console.log(error);
  }
})