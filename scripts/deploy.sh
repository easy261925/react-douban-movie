npm run postinstall
npm run build

SOURCE_BRANCH="master"
if [ "$TRAVIS_PULL_REQUEST" != "false" -o "$TRAVIS_BRANCH" != "$SOURCE_BRANCH" ]; then
    echo "Skipping deploy; just doing a build and linting links/prose/js."
    exit 0
fi

git config --global user.name "Travis CI"
git config --global user.email "ci@travis-ci.org"

git remote set-url origin git@github.com:easy261925/react-douban-movie.git

openssl aes-256-cbc -K $encrypted_6a6181cc7521_key -iv $encrypted_6a6181cc7521_iv -in scripts/react_router_deploy_key.enc -out scripts/react_router_deploy_key -d
chmod 600 scripts/react_router_deploy_key
eval `ssh-agent -s`
ssh-add scripts/react_router_deploy_key


chmod -R 777 node_modules/gh-pages/
npm run deploy
