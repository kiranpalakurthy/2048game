var arr = new Array(3);
 for(var i=0; i<4; i++){
	 arr[i]=new Array(3);
 }
 function newGame(){
	for(var i=0; i<4; i++){
	 for(var j=0; j<4; j++){
		 arr[i][j]=0;
	 }
 }
 randomnumbergenerator();
}
function randomnumbergenerator()
{
 
 
 
 var x = Math.floor(Math.random()*15+1);
 console.log("val of x:" + x);
 var y = Math.floor(Math.random()*15+1);
 console.log("val of y:" + y);
 if(x==y){
	 do {
		 y = Math.floor(Math.random()*15+1);
	 } while(x == y);
	   
 }
 arr[Math.floor(x/4)][x%4]=2;
 arr[Math.floor(y/4)][y%4]=2;
  
 draw();
}
function draw(){
	var s = [];
	for (var i=0; i< 4; i++) {
		s.push('<div class="row">');
		for (var j=0; j<4; j++) {
			s.push('<div class="cell"><h5 class="tile-inner">');
			s.push(arr[i][j]);
			s.push('</h5></div>')
		}
		s.push('</div>');	
	}
	
	document.getElementById("division").innerHTML= s.join('');
	
	//document.getElementById("division").innerHTML = '<div class="row"><div class="cell"><h5 class="tile-inner">'+arr[0][0]+'</h5></div><div class="cell"><h5 class="tile-inner">'+arr[0][1]+'</h5></div><div class="cell"><h5 class="tile-inner">'+arr[0][2]+'</h5></div><div class="cell"><h5 class="tile-inner">'+arr[0][3]+'</h5></div><div class="cell"><h5 class="tile-inner">'+arr[1][0]+'</h5></div><div class="cell"><h5 class="tile-inner">'+arr[1][1]+'</h5></div><div class="cell"><h5 class="tile-inner">'+arr[1][2]+'</h5></div><div class="cell"><h5 class="tile-inner">'+arr[1][3]+'</h5></div><div class="cell"><h5 class="tile-inner">'+arr[2][0]+'</h5></div><div class="cell"><h5 class="tile-inner">'+arr[2][1]+'</h5></div><div class="cell"><h5 class="tile-inner">'+arr[2][2]+'</h5></div><div class="cell"><h5 class="tile-inner">'+arr[2][3]+'</h5></div><div class="cell"><h5 class="tile-inner">'+arr[3][0]+'</h5></div><div class="cell"><h5 class="tile-inner">'+arr[3][1]+'</h5></div><div class="cell"><h5 class="tile-inner">'+arr[3][2]+'</h5></div><div class="cell"><h5 class="tile-inner">'+arr[3][3]+'</h5></div></div>';
	 
}
$(document).keydown(function(e) {
	var m;
  if(e.which == 37) { // left     
      alert("down");
  }
  else if(e.which == 39) { // right     
      for(var i=3; i>=0; i--){
		  for(var j=3; j>=0; j--){
			  if(arr[i][j] == arr[i][j-1] && arr[i][j]!=0){
				  arr[i][j]=2*arr[i][j];
				  arr[i][j-1]=0;
				  
				  }
				 
			   else if((arr[i][j] == 0) && (j-1>=0)){
				  arr[i][j] = arr[i][j-1];
				  arr[i][j-1]=0;
				  if(arr[i][j]==arr[i][j+1] && arr[i][j]!=0){
					  arr[i][j+1]=2*arr[i][j];
					  arr[i][j]=0;
				  }
				  m=j;
				  if(arr[i][j]!=0 && arr[i][j+1]==0 && j+1<=3){
				  while((m<3) && (arr[i][m+1] == 0)){
					  
						  m++;
					  
					  
					  }
					  arr[i][m]=arr[i][j];
					  arr[i][j]=0;
				  }
				  }
				 
				 
		  }
		  }
	  }
	  
  
  draw();
});
 