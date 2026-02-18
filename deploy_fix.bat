@echo off
echo Adding configuration files...
git add .

echo Committing deployment fix...
git commit -m "Configure for Netlify static export"

echo Pushing to GitHub...
git push origin main

echo Done! Fixes deployed to GitHub.
pause
