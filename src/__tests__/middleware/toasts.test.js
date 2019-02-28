import { toast } from 'react-toastify';
import toastMiddleware from '../../middleware/toasts';
import {reactToastifyDefaultOptions} from '../../middleware/toasts';
jest.mock("react-toastify");

describe('toast middleware', () => {
    let next, dispatch, getState, middleware;

    beforeEach(() => {
        next = jest.fn();
        dispatch = jest.fn()
        getState = jest.fn();
        middleware = toastMiddleware({ getState, dispatch })(next);
    });

    test('moves on to next middleware/reducer', () => {
        const toastAction = {
            type: 'SHOW_TOAST',
            payload: {
                message: '',
                type: ''
            }
        };

        middleware(toastAction);
        expect(next).toBeCalledWith(toastAction);
    });

    test('handles only action type SHOW_TOAST', () => {
        const toastAction = {
            type: '',
            payload: {
                message: '',
                type: ''
            }
        };

        middleware(toastAction);
        expect(toast.mock.calls.length).toBe(1);
    });

    test('handles SHOW_TOAST correctly', () => {
        const toastAction = {
            type: 'SHOW_TOAST',
            payload: {
                message: '',
                type: ''
            }
        };

        middleware(toastAction);
        expect(toast.mock.calls.length).toBe(2);
        expect(toast).lastCalledWith('', {
            ...reactToastifyDefaultOptions,
            type: ''
        });
    });
})
