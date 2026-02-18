@echo off
echo Setting up Git repository...
git init

echo Adding files...
git add .

echo Committing changes...
git commit -m "Initial commit of RB20 F1 landing page"

echo setting branch to main...
git branch -M main

echo Configuring remote...
git remote remove origin 2>nul
git remote add origin https://github.com/shishir-sh26/rb-20_f1.git

echo Pushing to GitHub...
git push -u origin main

echo Done!
pause
