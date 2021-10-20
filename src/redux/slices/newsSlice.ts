import {
    createSlice,
    createAsyncThunk,
    PayloadAction,
    createSelector,
} from '@reduxjs/toolkit';
import { GetNewsInfoByQueryResponse, getNewsInfoByQuery } from "../../api/news"
import { RootState } from '../store';

export type ApiState = 'READY' | 'LOADING' | 'ERROR';

export interface NewsState {
    state: ApiState;
    data: GetNewsInfoByQueryResponse | null;

}

const initialState: NewsState = {
    state: 'READY',
    data: null,

};

export const currentNewsState = createSelector(
    (state:RootState)=>state.news.data,
    (data)=>data
)

var pageNumber :1|number 

export const fetchNewsDataByQuery = createAsyncThunk(
    'news/getInfo',
    async (q: "all" | string) => {
        const response = await getNewsInfoByQuery(q);
        return response;
    }
);



const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {
        getNews(state, action: PayloadAction<GetNewsInfoByQueryResponse>) {
            state.data = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchNewsDataByQuery.pending, (state, action) => {
            state.state = 'LOADING';
        });
        builder.addCase(fetchNewsDataByQuery.rejected, (state, action) => {
            state.state = 'ERROR';
        });
        builder.addCase(
            fetchNewsDataByQuery.fulfilled,
            (state, action: PayloadAction<GetNewsInfoByQueryResponse>) => {
                state.data = action.payload;
            }
        );
    },
})

export const {getNews} = newsSlice.actions
export default newsSlice.reducer;
