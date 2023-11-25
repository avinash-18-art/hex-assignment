import axios from 'axios';

export const getData = () => async(dispatch) => {
    dispatch({ type: 'dataRequest' });
    try {
        const { data } = await axios.get(`/api/v1/data`);
        dispatch({ type: 'dataSuccess', payload: data.dataApi });
    } catch (error) {
        dispatch({ type: 'dataFailure', payload: error.response.data.message });
    }
}