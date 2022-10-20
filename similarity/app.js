const compare = require('./index.js');

(async () => {
  const srcImg = "./test-files/1.png";
  const dstImg = "./test-files/2.png";
  const visual = compare.screenshots(srcImg, dstImg, (err, res) => {
    if (err) console.error(err);
    else console.log(res);
  });
})();
