function ContactController() {
  var vm = this;
 
  this.changeName = function () {
    vm.name = 'Something else!'
  }

  vm.name = 'Auran';
  vm.email = 'auran@gmail.com'
  vm.phone = '1112223333'
}

angular
	.module('app')
	.controller('ContactController', ContactController);