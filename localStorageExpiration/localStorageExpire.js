function getLocalStorage(name){ 
	now = parseInt(new Date() / 1000);
	expires = localStorage.getItem(name+"_expire");
	if(now >= expires){ localStorage.removeItem(name+"_expire"); localStorage.removeItem(name); return ""; }
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
