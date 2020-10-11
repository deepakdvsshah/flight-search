# Initial project setup with this command
npx create-nx-workspace@latest

# For ui lib we need to add angular material
ng add @angular/material
npm install @angular/flex-layout @angular/cdk

# After adding state in to feature we need to install store and devtools-plugin.
npm install @ngxs/store
npm install @ngxs/devtools-plugin

# For documentation we need to run this command
npm install -g @compodoc/compodoc

# Run documentation
compodoc -p tsconfig.base.json

# Run Project
npm install
ng serve
