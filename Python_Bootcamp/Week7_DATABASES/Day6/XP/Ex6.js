//bank details
// In this exercise, you have to decide which type of variables you have to use (ie. let or const):

// Create a global variable called bankAmount which value is the amount of money currently in your account.
// Create a variable that saves the % amount of VAT (In Israel, it’s 17%).
// Create an array with all your monthly expenses, both positive and negative (money made and money spent).
// Example : const details = ["+200", "-100", "+146", "+167", "-2900"]
// Create a program that modifies the expenses (ie. the positive AND the negative expenses) so that they will include taxes (multiply each expense by the VAT).
// Display your current bankAccount standing at the end of the month.
let bankAmount,bankAccount,TotBankAccount=0;
const Vat=15;
let Expenses = ["+200", "-100", "+146", "+167", "-2900"];

Expenses.forEach((MonthExp, i) => { 
    NewExp = Math.round(Expenses[i]*((100+Vat)/100));
    // console.log(NewExp);
    Expenses.splice(i,1, NewExp)
});
Expenses.forEach((bankAccount) => {TotBankAccount += bankAccount;});
console.log(TotBankAccount);