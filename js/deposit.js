document.getElementById("btn-deposit").addEventListener("click", function () {
  const newDepositAmount = getInputFildValueById("deposit-field");
  const previousDepositTotal = getElementValueById("deposit-total");

  const newDepositTotal = previousDepositTotal + newDepositAmount;
  setTextElementValueById("deposit-total", newDepositTotal);
  //get ager balence
  const pereBalanceTotal = getElementValueById("balance-total");
  const newBalanceTotal = pereBalanceTotal + newDepositAmount;
  setTextElementValueById("balance-total", newBalanceTotal);
});
