function hit() {
  if (!gameInProgress) return;

  dealCard(playerCards, playerCardDisplays);

  var playerValue = getHandValue(playerCards);
  updatePlayerValue();

  if (playerValue > 21) {
    document.getElementById("message").innerHTML = "You bust! You lose $" + currentBet + ".";
    money -= currentBet;  // <-- ADDED THIS LINE
    endGame(false);
  } else if (playerValue == 21) {
    stand();
  }
}
