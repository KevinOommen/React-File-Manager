const initialState ={
    isLoading : false,
    currentFolder : "",
    userFolders : [],
    userFiles : [],
    adminFolders : [],
    adminFiles : []
}

const filefolderReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default filefolderReducer;