const actions = {
    CHANGE_TITLE: 'CHANGE_TITLE',
    CHANGE_TITLE_SUCCESS : 'CHANGE_TITLE_SUCCESS',
    CHANGE_TITLE_ERROR : 'CHANGE_TITLE_ERROR',
    API_ERROR: 'API_ERROR',
    changeTitle : (title)=>{
        return (dispatch,getState)=>{
            dispatch({
                type:actions.CHANGE_TITLE,
                payload:{title}
            })
        }
    },
    changeTitleSuccess : (title)=>({
            type:actions.CHANGE_TITLE_SUCCESS,
            title
        }),
    getAPIError: () => {
        type:actions.API_ERROR
    }
}
export default actions;
