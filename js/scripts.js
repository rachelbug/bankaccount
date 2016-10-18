//back end logic

function bankAccount(name, initDeposit) {
  this.name = name;
  this.accountBalance = initDeposit;
}

bankAccount.prototype.depositAmount = function(deposit) {
  this.accountBalance += deposit;
}

bankAccount.prototype.withdrawalAmount = function(withdrawal) {
  this.accountBalance -= withdrawal;
}

//front end logic
$(document).ready(function() {

  $("form#bank-info").submit(function(event) {
    event.preventDefault();

    var bankInfo = $("input#name").val();
    var bankAmount = parseInt($("input#deposit").val());

    var newBankAccount = new bankAccount(bankInfo, bankAmount);

    alert(newBankAccount.name);
    alert(newBankAccount.accountBalance);

    $("form#deposit-info").submit(function(event) {
      event.preventDefault();
      var depositInfo = parseInt($("input#transaction1").val());

      newBankAccount.depositAmount(depositInfo);
      alert(newBankAccount.accountBalance);
    });

    $("form#withdrawal-info").submit(function(event) {
      event.preventDefault();
      var withdrawInfo = parseInt($("input#transaction2").val());

      newBankAccount.withdrawalAmount(withdrawInfo);
      alert(newBankAccount.accountBalance);



    });

 });
});
