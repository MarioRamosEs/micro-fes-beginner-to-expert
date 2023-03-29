# clear dist folder items
rm -r dist/*

cd addtocart
npm run build
cp -r dist ../dist/addtocart

cd ..
cd cart
npm run build
cp -r dist ../dist/cart

cd ..
cd home
npm run build
cp -r dist ../dist/home

cd ..
cd pdp
npm run build
cp -r dist ../dist/pdp

cd ..
cd server
npm run build
cp -r dist ../dist/server

cd ..