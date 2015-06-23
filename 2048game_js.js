var arr = new Array(4);
var scr=$("#score");

 for(var i=0; i<4; i++){
	 arr[i]=new Array(4);
 }
 function newGame(){
	for(var i=0; i<4; i++){
	 for(var j=0; j<4; j++){
		 arr[i][j]=0;
	 }
	 scr=0;
 }
 randomnumbergenerator();
}

function randomnumbergenerator()
{
 var rannum=Math.random();
 var ranval;
 if(rannum <= 0.8){
	 ranval=2;
 }
 else{
	 ranval=4;
 }
 var x = Math.floor(Math.random()*15+1);
 console.log("val of x:" + x);
 var y = Math.floor(Math.random()*15+1);
 console.log("val of y:" + y);
 if(x==y){
	 do {
		 y = Math.floor(Math.random()*15+1);
	 } while(x == y);
	   
 }
 arr[Math.floor(x/4)][x%4]=ranval;
 arr[Math.floor(y/4)][y%4]=2;
  
 draw();
}
function draw(){
	$('#score').text(scr);
	var s = [];
	for (var i=0; i< 4; i++) {
		s.push('<div class="row">');
		for (var j=0; j<4; j++) {
			s.push('<div class="cell">');
			if(arr[i][j]==2){
				s.push('<h5 class="tile-inner two">');
			}
			else if(arr[i][j]==4){
				s.push('<h5 class="tile-inner four">');
			}
			else if(arr[i][j]==8){
				s.push('<h5 class="tile-inner eight">');
			}
			else if(arr[i][j]==16){
				s.push('<h5 class="tile-inner sixteen">');
			}
			else if(arr[i][j]==32){
				s.push('<h5 class="tile-inner thirtytwo">');
			}
			else if(arr[i][j]==64){
				s.push('<h5 class="tile-inner sixtyfour">');
			}
			else if(arr[i][j]==128){
				s.push('<h5 class="tile-inner onetwentyeight">');
			}
			else if(arr[i][j]==256){
				s.push('<h5 class="tile-inner twofiftysix">');
			}
			else if(arr[i][j]==512){
				s.push('<h5 class="tile-inner fivetwelve">');
			}
			else if(arr[i][j]==1024){
				s.push('<h5 class="tile-inner onethoutwenfour">');
			}
			else if(arr[i][j]==2048){
				s.push('<h5 class="tile-inner twothoufoureight">');
			}
			
			if(arr[i][j]!=0){
			s.push(arr[i][j]);
			}
			s.push('</h5></div>')
		}
		s.push('</div>');	
		
	}	
	document.getElementById("division").innerHTML= s.join('');		
}
$(document).keydown(function(e) {
	var initial = arr;
	console.log(initial);
	var m;
	if(e.which == 38){//up
	 for(var j=0; j<=3; j++){
		  for(var i=0; i<=3; i++){
			  
			  if (arr[i][j] == 0) {
				  var k=i+1;
				  while (k <= 3 && arr[k][j] == 0) { 
					k++;
				  }	
				  if (k <= 3) {
					arr[i][j] = arr[k][j];
					arr[k][j] = 0;	  	
				  }
				}
			  var next = i+1;
			  if (next<3 && arr[next][j] == 0) {
				  var k=next+1;
				  while (k <=3 && arr[k][j] == 0) { 
					k++;
				  }	
				  if (k <= 3 ) {
					arr[next][j] = arr[k][j];
					arr[k][j] = 0;	  	
				  }
				}

				if (i+1 <= 3 && arr[i][j] == arr[i+1][j]) {
				  arr[i][j] = 2 * arr[i][j];
				  arr[i+1][j] = 0;
				  scr=parseInt(scr)+arr[i][j];
			  }
		  }
	  }
	}
	else if(e.which == 40){//down
	 for(var j=3; j>=0; j--){
		  for(var i=3; i>=0; i--){
			  
			  if (arr[i][j] == 0) {
				  var k=i-1;
				  while (k >= 0 && arr[k][j] == 0) { 
					k--;
				  }	
				  if (k >= 0) {
					arr[i][j] = arr[k][j];
					arr[k][j] = 0;	  	
				  }
				}
			  var next = i-1;
			  if (next>0 && arr[next][j] == 0) {
				  var k=next-1;
				  while (k >= 0 && arr[k][j] == 0) { 
					k--;
				  }	
				  if (k >= 0 ) {
					arr[next][j] = arr[k][j];
					arr[k][j] = 0;	  	
				  }
				}

				if (i-1 >= 0 && arr[i][j] == arr[i-1][j]) {
				  arr[i][j] = 2 * arr[i][j];
				  arr[i-1][j] = 0;
				  scr=parseInt(scr)+arr[i][j];
			  }
		  }
	  }
	}
  else if(e.which == 37) { // left     
      for(var i=0; i<=3; i++){
		  for(var j=0; j<=3; j++){
			  
			  if (arr[i][j] == 0) {
				  var k=j+1;
				  while (k <= 3 && arr[i][k] == 0) { 
					k++;
				  }	
				  if (k <= 3) {
					arr[i][j] = arr[i][k];
					arr[i][k] = 0;	  	
				  }
				}
			  var next = j+1;
			  if (arr[i][next] == 0) {
				  var k=next+1;
				  while (k <=3 && arr[i][k] == 0) { 
					k++;
				  }	
				  if (k <= 3 ) {
					arr[i][next] = arr[i][k];
					arr[i][k] = 0;	  	
				  }
				}

				if (arr[i][j] == arr[i][j+1]) {
				  arr[i][j] = 2 * arr[i][j];
				  arr[i][j+1] = 0;
				  scr=parseInt(scr)+arr[i][j];
			  }
		  }
	  }
  }
  else if(e.which == 39) { // right     
      for(var i=3; i>=0; i--){
		  for(var j=3; j>=0; j--){
			  
			  if (arr[i][j] == 0) {
				  var k=j-1;
				  while (k >=0 && arr[i][k] == 0) { 
					k--;
				  }	
				  if (k >= 0 ) {
					arr[i][j] = arr[i][k];
					arr[i][k] = 0;	  	
				  }
				}
			  var next = j-1;
			  if (arr[i][next] == 0) {
				  var k=next-1;
				  while (k >=0 && arr[i][k] == 0) { 
					k--;
				  }	
				  if (k >= 0 ) {
					arr[i][next] = arr[i][k];
					arr[i][k] = 0;	  	
				  }
				}

				if (arr[i][j] == arr[i][j-1]) {
				  arr[i][j] = 2 * arr[i][j];
				  scr=parseInt(scr)+arr[i][j];
				  arr[i][j-1] = 0;
			  }
		  }
	  }
  }
  
  if((e.which === 37) || (e.which === 38) || (e.which === 39) || (e.which === 40) ){
  rand();
  draw();
  }
});
function arraycompare(initial, actual){
	
	
}
function rand(){
	var ran = [];
	var i,j;
	for(i=0;i<=3;i++){
	  for(j=0;j<=3;j++){
		  if(arr[i][j]==0){
			 ran.push({
            i: i, 
            j: j
        });
		  }
	  }
  }	
   var z=ran.length;  
   var random_number = Math.floor(Math.random()*z);
   var k=ran[random_number].i;
   var l=ran[random_number].j;
   arr[k][l] = 2;   
}
 