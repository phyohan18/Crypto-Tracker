import { createGlobalState } from "react-hooks-global-state"

const { setGlobalState, useGlobalState } = createGlobalState({
    defaultCurrency: 'usd',
    darkMode: false,
    accountAddress: null
});

export { useGlobalState, setGlobalState }