export const CHANGE_CURRENCY_AMOUNT = 'CHANGE_CURRENCY_AMOUNT';
export const CHANGE_INPUT_TYPE = 'CHANGE_INPUT_TYPE';
export const CHANGE_RETURN_TYPE = 'CHANGE_RETURN_TYPE';

export const changeCurrencyAmount = amount => ({
    type: CHANGE_CURRENCY_AMOUNT,
    amount: toString(amount),
});

export const changeInputType = type => ({
    type: CHANGE_INPUT_TYPE,
    type,
});

export const changeReturnType = type => ({
    type: CHANGE_RETURN_TYPE,
    type,
});