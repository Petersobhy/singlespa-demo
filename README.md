# Single SPA Demo

## Microfrontend apps: AngularJs, ReactJs, NextJs

### "Root Config" creation
```
npm init single-spa
project name: root-config
type: single-spa root config
```

### Utility module creation "Auth"
```
npm init single-spa
project name: auth
type: in-browser utility module
```

### Single SPA App creation "clients" : reactjs
```
npm init single-spa
project name: auth
type: single-spa application
framework: react
```

### Single SPA App creation "dashboard" : nextjs
```
npm init single-spa
project name: auth
type: in-single-spa application
framework: other
```

## docker and docker-compose
## SSR
## dynamic import maps
