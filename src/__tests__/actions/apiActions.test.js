import * as actions from '../../actions/apiActions';

describe("apiStart", () => {
    test("has type API_START", () => {
        const expectedVal = {
            type: "API_START"
        };
        expect(actions.apiStart()).toEqual(expectedVal);
    });

    test("has type API_START and payload", () => {
        const expectedVal = {
            type: "API_START",
            payload: 22
        };
        expect(actions.apiStart(22)).toEqual(expectedVal);
    });
});

describe("apiEnd", () => {
    test("has type API_END", () => {
        const expectedVal = {
            type: "API_END",
        };
        expect(actions.apiEnd()).toEqual(expectedVal);
    });

    test("has type API_END and payload", () => {
        const expectVal = {
            type: "API_END",
            payload: 22
        };

        expect(actions.apiEnd(22)).toEqual(expectVal);
    })
})

