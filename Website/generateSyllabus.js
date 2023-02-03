var marked = require('marked');
var fs = require('fs');

var syllabusMD = fs.readFileSync('Syllabus.md', 'utf-8');
var markdownSyllabus = marked(syllabusMD);

fs.writeFileSync('./site/syllabus.html', markdownSyllabus);