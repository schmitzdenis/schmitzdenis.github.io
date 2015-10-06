npm run build
git branch -D master
cd ..
git subtree split --prefix frontend/dist -b master
git checkout master
git push origin master -f
git status
ls -al
git checkout develop
