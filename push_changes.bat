@echo off
echo Adding changes to git...
git add .

echo Committing changes...
git commit -m "Fix contact form CORS issue with Formspree"

echo Pushing to GitHub...
git push origin main

echo Done! Changes pushed to GitHub.
pause
