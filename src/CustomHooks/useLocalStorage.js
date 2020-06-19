

const useLocalStorage = (key, value) => {
  if(value){
   if(value['hidden'] && value['upvotes'])
    localStorage.setItem(key, value);
   else {
     throw Error('Not a valid Value format');
   }
  }
  else {
    return localStorage.getItem(key);
  }
}

return useLocalStorage;