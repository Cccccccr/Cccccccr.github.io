const fs = require('fs');

function modifyHTMLString(htmlString: string): string {
  const headStartTag = '<head>';
  const headEndTag = '</head>';

  const headStartIndex = htmlString.indexOf(headStartTag);
  const headEndIndex = htmlString.indexOf(headEndTag);

  if (headStartIndex === -1 || headEndIndex === -1) {
    // 如果找不到 <head> 或 </head> 标签，则返回原始的 HTML 字符串
    return htmlString;
  }

  const headContent = htmlString.substring(headStartIndex + headStartTag.length, headEndIndex);
  const modifiedHeadContent = headContent.replace(/\/_next\/static/g, 'static');

  const modifiedHTML = htmlString.substring(0, headStartIndex + headStartTag.length) +
    modifiedHeadContent +
    htmlString.substring(headEndIndex);

  return modifiedHTML;
}

const html = fs.readFileSync('./docs/index.html', 'utf-8')

const modifiedHTML = modifyHTMLString(html);

// 把 html 写回到 index.html 文件中
fs.writeFileSync('./docs/index.html', modifiedHTML);
