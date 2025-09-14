@echo off
echo Updating Git repository...
git add .
git commit -m "Fix Cloudflare MIME type issue - Add _headers file and update Vite config for better deployment"
git push origin main
echo Done!
pause
