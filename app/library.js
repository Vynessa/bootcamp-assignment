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
  }


 }

