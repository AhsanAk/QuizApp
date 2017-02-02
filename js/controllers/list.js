(function () {

  angular
    .module('turtleFacts')
    .controller('listCtrl', listController);

    listController.$inject = ['quizMetrics', 'DataService'];
  
    function listController(quizMetrics, DataService) {
      var vm = this;

      vm.quizMetrics = quizMetrics;
      vm.data = DataService.turtlesData;
      vm.activateQuiz = activateQuiz;
      vm.activeTurtle = {};
      vm.search = '';


      vm.changeActiveTurtle = changeActiveTurtle;
      function changeActiveTurtle(index) {
        vm.activeTurtle = index;
      }

      function activateQuiz() {
        quizMetrics.changeState('quiz', true);
      }

    }



})();