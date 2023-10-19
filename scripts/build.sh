rm -rf ./docs 
rm -rf ./_next

if [ ! -d "./docs" ]; then
  mkdir ./docs
fi

# copy index.html
cp -f ./.next/server/app/index.html ./docs/index.html
cp -f ./.next/server/app/index.html ./index.html

# copy static files
if [ ! -d "./_next" ]; then
  mkdir ./_next
fi
cp -f -r ./.next/static ./_next/static/

# copy public files
cp -f ./public/* ./docs/
