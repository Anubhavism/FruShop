myApp.controller('CartCtrl',function($scope,userService){

		$scope.order= userService;
		$scope.totQuantity=0;
		$scope.addCart=function(item){
		userService.addToCart(item);
	}
		$scope.clearCart=function(){
			userService.clearTheCart();

		}
		$scope.incItem=function(item){
			$scope.order[item-1].quantity++;


			// userService.addQuantity(item);
		}
		$scope.decItem=function(item){
			userService.subQuantity(item);

		}
});