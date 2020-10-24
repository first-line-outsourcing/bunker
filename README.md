# bunker

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Set up backend dev env
- Install Amplify CLI  `npm install -g @aws-amplify/cli`
- Add aws profile to your ~/.aws/credentials with name aplify-flo See creds in Notion
- Add
```
[profile aplify-flo]
output = json
region = us-east-1
```
 to ~/.aws/config.
- In the root project folder `amplify init` and say you want to use existing env
- On the next step you need to choose `dev`
- Use AWS profile - yes, and then `aplify-flo`
- `amplify env pull`
