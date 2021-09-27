import { createAction, props } from '@ngrx/store';
import { ArticleTagInterface } from 'src/app/shared/types/article.interface';
import { ActionTypes } from '../actionTypes';

export const getPopularTagsAction = createAction(ActionTypes.GET_POPULARTAGS)

export const getPopularTagsSuccessAction = createAction(
    ActionTypes.GET_POPULARTAGS_SUCCESS,
    props<{ popularTags: Array<ArticleTagInterface> }>()
)

export const getPopularTagsFailrueAction = createAction(ActionTypes.GET_POPULARTAGS_FAILURE)