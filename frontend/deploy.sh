npm run build
mkdir -p ./dist/images && cp -r images/* $_
ls ./dist
git branch -D master
cd ..
git add **dist/**
git commit -m "new Deploy"
git subtree split --prefix frontend/dist -b master
git stash drop
git stash

git checkout master
git status
git push origin master -f

git checkout develop
git reset HEAD~1 --hard
git stash apply
