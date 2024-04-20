let selectedAmount = 0;

function Amount(amount) {
  selectedAmount += amount;
  console.log("Amount set to: " + amount);
}
function send() {
      const receiverName = document.getElementById("Receivername").value;
  if (!receiverName) {
    alert("Please enter  receiver name");
    return;
  }

  if (selectedAmount === 0) {
    alert("Please select an amount");
    return;
  }

  alert(
    `Amount send Successful\n${selectedAmount}_Rs has been sent to ${receiverName}`
  );
}