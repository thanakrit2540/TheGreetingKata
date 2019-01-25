
function greet(name) {
  
  if(name == null){
    return `Hello, my friend.`;
  }else if(Array.isArray(name)){
  //  name.splice(",")
    
    return `Hello, ${name.join(" and ")}.`;
  }else if(name == name.toUpperCase()){
    return `Hello ${name}!`;
  }
  else {
    return `Hello, ${name}.`;
  }

 
  
 
}
module.exports = greet;