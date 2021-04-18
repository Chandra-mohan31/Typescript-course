import {ActionType} from "../action-types";


interface RepositoriesState{
    loading: boolean,
    error: string|null,
    data: string[]
}


interface SearchRepoAction{
    type: ActionType.SEARCH_REPOSITORIES

}
interface  SearchRepoSuccessAction{
    type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
    payload: string[]
}
interface SearchRepoErrorAction{    
    
    type: ActionType.SEARCH_REPOSITORIES_ERROR,
    payload: string

}

export type Action = | SearchRepoAction | SearchRepoSuccessAction | SearchRepoErrorAction;
