function introduction(name){
return ( `Hi, my name is ${name}.`);
}
introduction("Lucy");

function introductionWithLanguage(name, language){
return (`Hi, my name is ${name} and I am learning to program in ${language}.` );
}
introductionWithLanguage("Koki","Ember.js");

function introductionWithLanguageOptional(name, language = "JavaScript"){
  return (`Hi, my name is ${name} and I am learning to program in ${language}.` );
  }
  introductionWithLanguageOptional("Morris","Javascript");
  //Note that we have used the assignment operator (=) here to assign a default value. 
  //The way this works is, if the function is called with an argument, the argument's value will 
  //supersede the default value. If it's called without an argument, the function will use the default value, logging "Hello, User!"

  

function introductionWithLanguageOptional(name, language = "JavaScript"){
  return (`Hi, my name is ${name} and I am learning to program in ${language}.` );
  }
  introductionWithLanguageOptional("Morris","Javascript");
