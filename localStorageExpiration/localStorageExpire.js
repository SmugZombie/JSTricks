// Set Local Storage Without Expiration
// setLocalStorage("Hello", "World");

// Set Local Storage With Expiration (in minutes)
// setLocalStorage("Hello", "World", 15);

// Unset Local Storage / Expire Local Storage for Item on demand, value is required but can be empty.
// setLocalStorage("Hello", "", 0);

function getLocalStorage(name){ 
	now = parseInt(new Date() / 1000);
	expires = localStorage.getItem(name+"_expire");
	if(!expires){ return localStorage.getItem(name); }  
    	else if(now >= expires){ localStorage.removeItem(name+"_expire"); localStorage.removeItem(name); return ""; }
	else{ return localStorage.getItem(name); }	 
}

function setLocalStorage(name, value, minutes){ 
	if(minutes == null){ localStorage.setItem(name, value); localStorage.removeItem(name+"_expire"); return true} // No set expiration
	else if(minutes == 0){ localStorage.removeItem(name); localStorage.removeItem(name+"_expire"); return true} // Setting to 0 kills the localStorage Item any any expiration
	else{ 
		epochExpire = parseInt(new Date() / 1000 + (minutes * 60));
		localStorage.setItem(name, value); localStorage.setItem(name+"_expire", epochExpire); 
		return true
	} return false
}
