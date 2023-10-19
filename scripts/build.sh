if [ ! -d "./docs" ]; then
  mkdir ./docs
fi

# copy index.html
cp -f ./.next/server/app/index.html ./docs/index.html

# copy static files
if [ ! -d "./docs/_next" ]; then
  mkdir ./docs/_next
fi
cp -f -r ./.next/static ./docs/_next/static/

# copy public files
cp -f ./public/* ./docs/
