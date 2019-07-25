const initialState = {
	data: [],
	isLoading: false,
	isError: false
};

export default (users = (state = initialState, action) => {
	switch (action.type){
		case 'FETCH_USER_PENDING':
            return{
                isLoading: true
            }
        case 'FETCH_USER_FULFILLED':
            return{
                isLoading: false,
                isError: false,
                data: action.payload.data.data[0]
            }
        case 'FETCH_USER_REJECTED':
            return{
                isLoading:false,
                isError:true
            }
		default:
            return state;
	}
})