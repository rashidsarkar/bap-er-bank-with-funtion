document.getElementById("btn-withdraw").addEventListener("click", function () {
  const newWithdrawAmount = getInputFildValueById("withdraw-field");
  const pereWithdrawAmount = getElementValueById("withdraw-total");
  const newWithdrawTotal = pereWithdrawAmount + newWithdrawAmount;
  setTextElementValueById("withdraw-total", newWithdrawTotal);
  const pereBalancetotal = getElementValueById("balance-total");
  const newBalanceTotal = pereBalancetotal - newWithdrawAmount;
  setTextElementValueById("balance-total", newBalanceTotal);
});
