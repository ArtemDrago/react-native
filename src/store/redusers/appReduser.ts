import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../../models/models";
import { ServiceCategories, CategoiesServiceList } from "./state";

const initialState: AppState = {
    serviceList: CategoiesServiceList,
    categories: ServiceCategories
};

export const appReduser = createSlice({
    name: "services",
    initialState,

    reducers: {

    },
});

export default appReduser.reducer;