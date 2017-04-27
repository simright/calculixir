#!/usr/bin/bash

tree -CAFa -I 'CVS|*.*.package|.svn|.git|node_modules|include|lib' --dirsfirst

echo ">>>>>>>>>> Starting Node Server ... <<<<<<<<<<"

node app.js

