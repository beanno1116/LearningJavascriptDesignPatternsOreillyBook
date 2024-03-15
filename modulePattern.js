console.log("********** MODULE PATTERN SECTION **********");

/**
 * Module pattern
 */

//EX: 1 object literals

const myModule = {
  myProperty: "someValue",
  myConfig: {
    useCaching: true,
    language: "EN"
  },
  saySomething(){
    console.log("Say something");
  },
  reportMyConfig(){
    console.log(`Caching is ${this.myConfig.useCaching} and language is ${this.myConfig.language}`);
  },
  updateMyConfig(config){
    if (typeof config === 'object'){
      this.myConfig = config;      
    }
  }
}

myModule.saySomething();
myModule.reportMyConfig();
myModule.updateMyConfig({useCaching:false,language:"CH"});
myModule.reportMyConfig();