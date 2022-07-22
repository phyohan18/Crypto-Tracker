import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState } = createGlobalState({
    defaultCurrency: 'usd',
    accountAddress: null,
    darkMode: false
});

export { useGlobalState, setGlobalState };