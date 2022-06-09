import createAsyncSlice from './Helper/createAsyncSlice';
const photos = createAsyncSlice({
  name: 'photos',
  initialState: {
    list: [],
    page: 0,
    infinite: true,
  },
  reducers: {
    addPhotos(state, action) {
      state.list.push(...action.payload);
      state.page++;
      if (action.payload.length === 0 || action.payload.length === 1)
        state.infinite = 0;
    },
    removePhotos(state) {
      state.page = 0;
      state.infinite = true;
      state.list = [];
      state.data = null;
    },
  },
  fetchConfig: (page) => ({
    url: `https://dogsapi.origamid.dev/json/api/photo/?_page=${page}&_total=3&_user=0`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  }),
});
export const fetchPhotos = photos.asyncAction;
export const { addPhotos, removePhotos } = photos.actions;

export const loadNewPhotos = (page) => async (dispatch) => {
  const { payload } = await dispatch(fetchPhotos(page));
  dispatch(addPhotos(payload));
};

export default photos.reducer;
