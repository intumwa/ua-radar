Crawled domains can be found at ./crawled_domains.json

To test the similarity tool we developed:

cd similarity

docker build -t similarity .

docker run similarity

The default comparison is visual:
```
const srcImg = './test-files/1.html';
const dstImg = './test-files/2.html';
const visual = compare.structure(srcImg, dstImg, (err, res) => {
  if (err) console.error(err);
  else console.log(res);
});

```

If you want to compare two JS scripts:

```
const srcJS = "./test-files/1.js";
const dstJS = "./test-files/2.js";
const js = compare.scripts(srcJS, dstJS, (err, res) => {
  if (err) console.error(err);
  else console.log(res);
});

```

If you want to compare two CSS scripts:

```
const srcCSS = "./test-files/1.css";
const dstCSS = "./test-files/2.css";
const css = compare.scripts(srcCSS, dstCSS, (err, res) => {
  if (err) console.error(err);
  else console.log(res);
});

```
  
If you want to compare two HTML files:

```
const srcHtml = "./test-files/1.html";
const dstHtml = "./test-files/2.html";
const html = compare.structure(srcHtml, dstHtml, (err, res) => {
  if (err) console.error(err);
  else console.log(res);
});

```
