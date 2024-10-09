npx tsc src/test --outDir ./lib/ --esModuleIntero
npx jsdoc2md --files ./src/*.ts --configure ./jsdoc2md.json > ./DOCS.md