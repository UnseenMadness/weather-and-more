import { action } from 'typesafe-actions';
import { ADD_TOAST, REMOVE_TOAST, TOAST_CHANGE_EXPANDED } from './action-types';

export const addToast = (toast: any) => action(ADD_TOAST, toast);
export const removeToast = (id: number) => action(REMOVE_TOAST, id);
export const changeToastExpandedState = (id: number) => action(TOAST_CHANGE_EXPANDED, id);
