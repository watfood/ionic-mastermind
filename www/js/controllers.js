angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal) {

  // These icon classes are for mapping the selected guesses to the UI
  $scope.icons = ['ion-social-apple', 'ion-social-android','ion-social-angular','ion-social-html5'];


  // The current selected icon to assign to any clicked position.
  // TODO: Needs to be set when buttons in menu.html are clicked.
  $scope.selectedIcon = 0;

  // TODO: You're going to need a data structure to hold a list of "turns";
  // and those "turns" are likely going to be objects...

  $scope.secret = [];

  function createSecret() {
    while ($scope.secret.length < 4) {
     $scope.secret.push(Math.floor(Math.random() * $scope.icons.length));
    }
    console.log($scope.secret);
  }

  // Initialize game state
  $scope.newGame = function() {
    var secret = [];
    createSecret();
    // TODO: Set all data properties/structures to their beginning state

  };

  // Run newGame() upon loading
  $scope.newGame();

  /*
  TODO: Call this function when the user clicks a 'score' button.
        The 'score' button should remain disabled until all positions have a value.
        Maybe a button with an icon of a checkmark would be a good UI choice? Or,
        just use a small button with text of 'Score'?
  */
  $scope.scoreTurn = function() {
    for ( var i = 0; i <= 3; i++) {
      if ($scope.secret[i] === $scope.turn.position[i]) {
        turn.numPerfect.push(true);
      } else {
        if (($scope.secret[i] === $scope.turn.position[0]) ||
           ($scope.secret[i] === $scope.turn.position[1]) ||
           ($scope.secret[i] === $scope.turn.position[2]) ||
           ($scope.secret[i] === $scope.turn.position[3])) {
          turn.numAlmost.push(true);
        }
      }
    }
    // TODO: Score the turn

    // TODO: Show winModal IF turn is correct. Put line below in an if statement.
    // $scope.winModal.show();
  };


  // Create the winner modal.
  $ionicModal.fromTemplateUrl('templates/winner.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.winModal = modal;
  });

  // TODO: Call this function from the 'Play Again!' button in winModal's html (winner.html)
  $scope.playAgain = function() {
    $scope.newGame();
    $scope.winModal.hide();
  };

});
