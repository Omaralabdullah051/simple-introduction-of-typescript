//if you want to import and export from one file to another file in ts;follow the classes/player.ts & class.ts file.

//here few some steps need to follow:
//we need to go tsconfig.json file and customize "target" :"es6","module":"es2015".Then we need to go index.html file and add the type attribute(type="module") in script tag.

//and finally it will support all the modern websites(older website doesn't support)

//but here are some performance issue on network tab and server request.not suitable in larger application.In that case, we need to use bundler(webpacks or etc) to bundle all the ts file to export .