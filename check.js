
const fs = require('fs');
const html = fs.readFileSync('birthday.html', 'utf8');
const match = html.match(/<style>([\s\S]*?)<\/style>/);
if(match){
  let depth = 0;
  const css = match[1];
  const lines = css.split('\n');
  for(let i=0; i<lines.length; i++){
    for(let char of lines[i]){
      if(char==='{') depth++;
      else if(char==='}') depth--;
    }
    if(depth < 0){
      console.log('Negative at line: ' + (i+1) + ' -> ' + lines[i]);
      depth = 0;
    }
  }
  console.log('Final depth: ' + depth);
}

