import { SHOW_TOAST } from '../constants/actionTypes';

export const showToast = (type, message) => ({
    type: SHOW_TOAST,
    payload: {
        type,
        message
    }
});

