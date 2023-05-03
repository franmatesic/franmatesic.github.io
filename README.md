# Deploy new version

1. `npm run build`

2. Check for ignored files in `/dist` and commit changes

3. `git subtree push --prefix dist origin gh-pages`