import axios from "axios";
import { API } from "../../helpers/consts"
import { AppDispatch } from "../store"
import { storeMessages, Message } from "./messageSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

const config: any = {
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  }
}

export const fetchMessages = async (dispatch: AppDispatch): Promise<any> => {
  try {
    const { data } = await axios.get(API, config);
    dispatch(storeMessages(data));
  } catch (error: any) {
    console.log(error);
  }
}

export const sendMessage = createAsyncThunk('messages/create', async (message: Message) => {
  try {
    await axios.post(API + "/create", JSON.stringify(message), config)
  } catch (error) {
    console.log(error);
  }
})