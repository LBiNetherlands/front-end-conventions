## Readme GruntJS
---
This is the read me file for the GruntJS setup. A small explanation on what file belong to GruntJS and a quick summery of what GruntJS does.

###Usage
---
GruntJS is a tool that uses NodeJS to automate development processes for streamlining your workflow. GruntJS can be used for e.g. SASS compilation on file change, CSS and JavaScript minifcation etc.

###Files
---
- readme-grunt.md
- gruntfile.js
- package.json
- node_modules

#####readme-grunt.md
The read me file about the GruntJS configuration for informing developers on the dependent files and why they exist in the project.

#####gruntfile.js
The `gruntfile.js` is where the complete GruntJS configuration is declared.

#####package.json
The `package.json` file is used for managing the GruntJS plugins that are used by the GruntJS configuration. From within the `gruntfile.js` the content from this file can be referenced and used for rendering project title, version numbering etc.

#####node_modules
The `node_modules` folder is created by NodeJS and this is where it saves the registered plugins from the `package.json` file.

###References
---
- <http://gruntjs.com/>
- <http://nodejs.org/>
- <http://www.smashingmagazine.com/2013/10/29/get-up-running-grunt/>