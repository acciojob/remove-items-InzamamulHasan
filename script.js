//your JS code here. If required.
let btn=document.querySelector("input");
btn.addEventListener("click",()=>{
	let x=document.getElementById("colorSelect");
	x.remove(x.selectedIndex);
})
