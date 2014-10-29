'use strict';

angular.module('mean.system').controller('IndexController', ['$scope', 'Global', '$http',
  function($scope, Global, $http) {
    $scope.global = Global;
    
    // default playerCount
    $scope.playerCountOptions = [5, 6, 7, 8, 9, 10];
    $scope.questsCompletedOptions = [5, 4, 3, 2, 1, 0];
    
    $scope.victoryConditionOptions = ["Loyal Servants win 3 quests", "Minions fail 3 quests", "Merlin Assassination", "5 rejects"];
    $scope.loyalServantOptions = ["Vanilla Loyal Servant", "Merlin", "Percival"];
    $scope.minionOptions = ["Vanilla Minion", "Assassin", "Morgana", "Mordred", "Oberon"];
    $scope.playerOptions = ["Walter", "Hamilton", "Eddy", "Grits", "Myron", "Ford"];
    $http.get('/players/').success(function(data) {
        $scope.playerOptions = data;
    });
    
    /*$scope.minionsPlayers = [
      {name:"Walter", role:"Mordred"},
      {name:"Walter", role:"Mordred"},
      {name:"Walter", role:"Mordred"},
      {name:"Walter", role:"Mordred"},
    ]l*/
    $scope.minionPlayers = [];
    $scope.loyalServantPlayers = [];
    
    

    $scope.calculateMinionCount = function() {
        switch($scope.playerCount) {
            case "5":
                $scope.minionCount = 2;
                $scope.minionPlayers = [
                  {name: "", role: "Assassin"},
                  {name: "", role: "Vanilla Minion"}
                ];
                $scope.loyalServantCount = 3;
                $scope.loyalServantPlayers = [
                  {name: "", role: "Merlin"},
                  {name: "", role: "Vanilla Loyal Servant"},
                  {name: "", role: "Vanilla Loyal Servant"}
                ];
                break;
            case "6":
                $scope.minionCount = 2;
                $scope.minionPlayers = [
                  {name: "", role: "Assassin"},
                  {name: "", role: "Vanilla Minion"}
                ];
                $scope.loyalServantCount = 4;
                $scope.loyalServantPlayers = [
                  {name: "", role: "Merlin"},
                  {name: "", role: "Vanilla Loyal Servant"},
                  {name: "", role: "Vanilla Loyal Servant"},
                  {name: "", role: "Vanilla Loyal Servant"}
                ];
                break;
            case "7":
                $scope.minionCount = 3;
                $scope.minionPlayers = [
                  {name: "", role: "Assassin"},
                  {name: "", role: "Vanilla Minion"},
                  {name: "", role: "Vanilla Minion"}
                ];
                $scope.loyalServantCount = 4;
                $scope.loyalServantPlayers = [
                  {name: "", role: "Merlin"},
                  {name: "", role: "Vanilla Loyal Servant"},
                  {name: "", role: "Vanilla Loyal Servant"},
                  {name: "", role: "Vanilla Loyal Servant"}
                ];
                break;
            case "8":
                $scope.minionCount = 3;
                $scope.minionPlayers = [
                  {name: "", role: "Assassin"},
                  {name: "", role: "Vanilla Minion"},
                  {name: "", role: "Vanilla Minion"}
                ];
                $scope.loyalServantCount = 5;
                $scope.loyalServantPlayers = [
                  {name: "", role: "Merlin"},
                  {name: "", role: "Vanilla Loyal Servant"},
                  {name: "", role: "Vanilla Loyal Servant"},
                  {name: "", role: "Vanilla Loyal Servant"},
                  {name: "", role: "Vanilla Loyal Servant"}
                ];
                break;
            case "9":
                $scope.minionCount = 3;
                $scope.minionPlayers = [
                  {name: "", role: "Assassin"},
                  {name: "", role: "Morgana"},
                  {name: "", role: "Vanilla Minion"}
                ];
                $scope.loyalServantCount = 6;
                $scope.loyalServantPlayers = [
                  {name: "", role: "Merlin"},
                  {name: "", role: "Percival"},
                  {name: "", role: "Vanilla Loyal Servant"},
                  {name: "", role: "Vanilla Loyal Servant"},
                  {name: "", role: "Vanilla Loyal Servant"},
                  {name: "", role: "Vanilla Loyal Servant"}
                ];
                break;
            case "10":
                $scope.minionCount = 4;
                $scope.minionPlayers = [
                  {name: "", role: "Assassin"},
                  {name: "", role: "Morgana"},
                  {name: "", role: "Vanilla Minion"},
                  {name: "", role: "Vanilla Minion"}
                ];
                $scope.loyalServantCount = 6;
                $scope.loyalServantPlayers = [
                  {name: "", role: "Merlin"},
                  {name: "", role: "Percival"},
                  {name: "", role: "Vanilla Loyal Servant"},
                  {name: "", role: "Vanilla Loyal Servant"},
                  {name: "", role: "Vanilla Loyal Servant"},
                  {name: "", role: "Vanilla Loyal Servant"}
                ];
                break;
            default:
                $scope.minionCount = 0;
                $scope.loyalServantCount = 0; 
        }
    }

    $scope.ladyOfTheLake = false;
    $scope.playerCount = "10";
    $scope.numberOfQuestions = "5";
    $scope.victoryCondition = "5 rejects";
    $scope.questsCompleted = "5";
    $scope.calculateMinionCount();

    $scope.$watch("playerCount", function() {
        $scope.calculateMinionCount();
    });



  }
]);
