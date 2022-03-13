//typeScript transcompiles to vanilla javaScript(es5).That is why all the browser(old version or updated version) supports it.
const country = 'I love Bangladesh';
console.log(country);
//In that case,const transcompiles to vanilla javaScript var.(es5 feature)


//editor setup & compilation
//In terminal we need to type "tsc (filename)" everytime when we need to compile it to javascript.In the large project that is a serious matter.so in terminal we need to type "tsc --init" for creating a tsconfig.json file.In tsconfig.json file,we need to customize rootDir (where our ts file have) & outDir (where our ts file compile to js file).so now we need to type "tsc" in terminal instead of typing "tsc (filename)".But that's also a huge matter.Because Everytime we need to open terminal & type in terminal "tsc" to compile the file to js file.so now we need to type "tsc -w" to prevent this problem.Now we don't need to use terminal and type command to compile to js file.When we update the ts file and save it;it will automatically compile to js file.
