module.exports={
aritGeo:function(arr){
  if (arr.length === 0){
    return 0;
  }
  
  var isArit = true;
  var isGeo = true;
  
  var initDiff = arr[1] - arr[0];
  
  for (var i = 2; i < arr.length; i++){
    if (arr[i] - arr[i-1] !== initDiff){
      isArit = false;
    }
  }
  
    if (isArit){
      return "Arithmetic";
    }
  
  var initDiv = arr[1]/arr[0]
  
  for (var i = 2; i < arr.length; i++){
    
    if (arr[i]/arr[i-1] !== initDiv){
      isGeo = false;
    }
  }
  
  if (isGeo){
    return "Geometric";
  }
  return -1;

},

findMinMax:function(arr){
    var max = arr[0];
    var min = arr[0];
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
        }
        if (arr[i] < min){
            min = arr[i];
        }
    }
    if (min === max){
        return [max];
    }
    else{
    return [min, max];
    }
 },


fizzBuzz:function(x){
  if (x % 3 === 0 && x % 5 === 0){
    return 'FizzBuzz';
  }
  else if (x % 3 === 0){
    return 'Fizz';
  }
  else if (x % 5 === 0){
    return 'Buzz';
  }
  else {
    return x;
  }

 }

}