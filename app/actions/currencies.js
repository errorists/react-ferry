export const CHANGE_CURRENCY_AMOUNT = 'CHANGE_CURRENCY_AMOUNT';

export const changeCurrencyAmount = amount => ({
    type: CHANGE_CURRENCY_AMOUNT,
    amount: toString(amount),
});