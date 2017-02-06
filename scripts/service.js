myApp.factory('userService', function(){
	var obj=[];

	obj.addToCart= function(newItem){
		obj.push(newItem);
		console.log(obj[newItem.id-1]);
	}
	
	obj.clearTheCart=function(){
		obj.splice(0,obj.length);
	}
	obj.addQuantity=function(newItem){
		
	 }
	 obj.subQuantity=function(newItem){
	 	obj[newItem.id-1].quantity--;
	 }
	return obj;
});