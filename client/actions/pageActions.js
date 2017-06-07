import { ACTION_SET_TITLE } from '../constants/page';

export function setTitle(title) {
	return {
		type: ACTION_SET_TITLE,
		payload: title
	}
}