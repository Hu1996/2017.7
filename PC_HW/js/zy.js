// JavaScript Document
window.onload=function(){
		
	
	
	//1
	var XL1=document.getElementById('xl1');
	var XL2=document.getElementById('xl2');
	XL1.addEventListener('mouseover',xlcd1);
	function xlcd1(){
			XL2.style.display='block';
		}
	XL1.addEventListener('mouseout',xlcd2);
	function xlcd2(){
			XL2.style.display='none'
		}
	XL2.addEventListener('mouseover',xlcd1);
	function xlcd1(){
			XL2.style.display='block';
		}
	XL2.addEventListener('mouseout',xlcd2);
	function xlcd2(){
			XL2.style.display='none'
		}
		
	//2	
	var XL3=document.getElementById('xl3');
	var XL4=document.getElementById('xl4');
	XL3.addEventListener('mouseover',xlcd3);
	function xlcd3(){
			XL4.style.display='block';
		}
	XL3.addEventListener('mouseout',xlcd4);
	function xlcd4(){
			XL4.style.display='none'
		}
	XL4.addEventListener('mouseover',xlcd3);
	function xlcd3(){
			XL4.style.display='block';
		}
	XL4.addEventListener('mouseout',xlcd4);
	function xlcd4(){
			XL4.style.display='none'
		}
	
	
	//3
	var XL5=document.getElementById('xl5');
	var XL6=document.getElementById('xl6');
	XL5.addEventListener('mouseover',xlcd5);
	function xlcd5(){
			XL6.style.display='block';
		}
	XL5.addEventListener('mouseout',xlcd6);
	function xlcd6(){
			XL6.style.display='none'
		}
	XL6.addEventListener('mouseover',xlcd5);
	function xlcd5(){
			XL6.style.display='block';
		}
	XL6.addEventListener('mouseout',xlcd6);
	function xlcd6(){
			XL6.style.display='none'
		}
	//4
	var XL7=document.getElementById('xl7');
	var XL8=document.getElementById('xl8');
	XL7.addEventListener('mouseover',xlcd7);
	function xlcd7(){
			XL8.style.display='block';
		}
	XL7.addEventListener('mouseout',xlcd8);
	function xlcd8(){
			XL8.style.display='none'
		}
	XL8.addEventListener('mouseover',xlcd7);
	function xlcd7(){
			XL8.style.display='block';
		}
	XL8.addEventListener('mouseout',xlcd8);
	function xlcd8(){
			XL8.style.display='none'
		}
		
	//5
	var XL9=document.getElementById('xl9');
	var XL0=document.getElementById('xl0');
	XL9.addEventListener('mouseover',xlcd9);
	function xlcd9(){
			XL0.style.display='block';
		}
	XL9.addEventListener('mouseout',xlcd0);
	function xlcd0(){
			XL0.style.display='none'
		}
	XL0.addEventListener('mouseover',xlcd9);
	function xlcd9(){
			XL0.style.display='block';
		}
	XL0.addEventListener('mouseout',xlcd0);
	function xlcd0(){
			XL0.style.display='none'
		}
	
	//6var 
	XL11=document.getElementById('xl11');
	var XL12=document.getElementById('xl12');
	XL11.addEventListener('mouseover',xlcd11);
	function xlcd11(){
			XL12.style.display='block';
		}
	XL11.addEventListener('mouseout',xlcd12);
	function xlcd12(){
			XL12.style.display='none'
		}
	XL12.addEventListener('mouseover',xlcd11);
	function xlcd11(){
			XL12.style.display='block';
		}
	XL12.addEventListener('mouseout',xlcd12);
	function xlcd12(){
			XL12.style.display='none'
		}		
		
	} 