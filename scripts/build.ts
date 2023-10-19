const fs = require('fs');

function modifyHTMLString(htmlString: string): string {
  const modifiedHTML = htmlString.replace(/\/_next\/static/g, 'static');

  return modifiedHTML;
}

const html = fs.readFileSync('./docs/index.html', 'utf-8')

const modifiedHTML = modifyHTMLString(html);

// 把 html 写回到 index.html 文件中
fs.writeFileSync('./docs/index.html', modifiedHTML);
