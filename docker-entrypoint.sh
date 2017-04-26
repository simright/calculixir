#!/usr/bin/bash


apt-get update

apt-get install -y tree

tree -CAFa -I 'CVS|*.*.package|.svn|.git|node_modules|include|lib' --dirsfirst

# tree -CAFa -I 'CVS|*.*.package|.svn|.git|node_modules|include|lib' --dirsfirst /app/data

echo ">>>>>>>>>> Starting Node Server ... <<<<<<<<<<"

node app.js

