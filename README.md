# UA-RADAR

>**_Note (31/12/2024): we're extending UA-RADAR to include the capacity to filter out unncessary information from the browsing environment when the user visits a website. Check back soon for more details._**

This repository contains a collection of artifacts that support the results and findings described in the paper: [*UA-Radar: Exploring the Impact of User Agents on the Web*](https://arxiv.org/abs/2311.10420). The artifacts include various forms of data and code that were used in the experiments, as well as detailed documentation and instructions to help others reproduce and validate the results.

## Crawled domains
In this paper, a total of 12,000 domains were crawled to gather data and examine the relevance of the user agent on the web. The websites selected for crawling were randomly chosen from the [Tranco](https://tranco-list.eu/) list in April, 2022. A comprehensive list of the crawled domains can be found in the file `./crawled_domains.json`. We used [McAfee SmartFilter](https://sitelookup.mcafee.com/en/feedback/url?action=checksingle&sid=BF6DB84A3A60F9AEB8F69A93DA023455) to obtain the Internet categories of the crawled domains. Below is the list of the categories of the crawled domains.

| CATEGORY          | DOMAINS |
|-------------------|---------|
| Internet Services | 1,575   |
| Business          | 1,419   |
| Marketing         | 1,230   |
| Education         | 724     |
| News              | 702     |
| Entertainment     | 631     |
| Blogs             | 583     |
| Games             | 491     |
| Ads               | 459     |
| Online Shopping   | 443     |
| Information       | 434     |
| Social Networking | 355     |
| Search Engines    | 352     |
| Health            | 304     |
| Miscellaneous     | 259     |
| Malicious Sites   | 250     |
| Finance           | 234     |
| Pornography       | 207     |
| Online Forum      | 204     |
| Government        | 201     |
| Non-Profit        | 166     |
| No Category       | 35      |
| \bf TOTAL         | 11,252  |



## Navigator properties exposed during the craw
To examine the relevance of the user agent on the web, we instrumented the so-called "None-browsers" - a browser with just the string "None" in the place of the user agent and any other browser identifying information. To instrument the None browsers, we modified the User-Agent HTTP request-header field of the standard browsers and changed it to the word "None". We also modified information that identifies the browser in the Navigator objects of the standard browsers. In particular, we changed `navigator.appVersion`, `navigator.platform`, `navigator.userAgent`, and `navigator.vendor` and placed the word `None` on each of those properties. Furthermore, to avoid our modified browsers from being detected as bots, we set `navigator.webdriver` to `false`. The table below details the navigator properties exposed on all browsers during the crawl.

| Navigator Property  | Chromium                                                                                                           | Chromium-None                                                                                        | Firefox                                                               | Firefox-None                                           | WebKit                                                                                                                                      | WebKit-None                                                                                                                                 |   |
|---------------------|--------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------|--------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|---|
| appCodeName         | Mozilla                                                                                                            | Mozilla                                                                                              | Mozilla                                                               | Mozilla                                                | Mozilla                                                                                                                                     | Mozilla                                                                                                                                     |   |
| appName             | Netscape                                                                                                           | Netscape                                                                                             | Netscape                                                              | Netscape                                               | Netscape                                                                                                                                    | Netscape                                                                                                                                    |   |
| appVersion          | 5.0 (X11; Linux x86\_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/101.0.4951.15 Safari/537.36         | None                                                                                                 | 5.0 (X11)                                                             | None                                                   | 5.0 (Macintosh; Intel Mac OS X $10\_15\_2$) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.4 Safari/605.1.15                         | None                                                                                                                                        |   |
| buildID             | -                                                                                                                  | -                                                                                                    | 20181001000000                                                        | 20181001000000                                         | -                                                                                                                                           | -                                                                                                                                           |   |
| connection          | NetworkInformation {onchange: null, effectiveType: '4g', rtt: 100, downlink: 1.5, saveData: false}                 | NetworkInformation {onchange: null, effectiveType: '4g', rtt: 100, downlink: 1.5, saveData: false}   | -                                                                     | -                                                      | -                                                                                                                                           | -                                                                                                                                           |   |
| cookieEnabled       | TRUE                                                                                                               | TRUE                                                                                                 | TRUE                                                                  | TRUE                                                   | TRUE                                                                                                                                        | TRUE                                                                                                                                        |   |
| doNotTrack          | null                                                                                                               | null                                                                                                 | unspecified                                                           | unspecified                                            | -                                                                                                                                           | -                                                                                                                                           |   |
| geolocation         | Geolocation \{\}                                                                                                   | Geolocation \{\}                                                                                     | Geolocation \{\}                                                      | Geolocation \{\}                                       | Geolocation \{getCurrentPosition: function, watchPosition: function, clearWatch: function\}                                                 | Geolocation \{getCurrentPosition: function, watchPosition: function, clearWatch: function\}                                                 |   |
| hardwareConcurrency | 8                                                                                                                  | 8                                                                                                    | 8                                                                     | 8                                                      | 8                                                                                                                                           | 8                                                                                                                                           |   |
| ink                 | Ink \{\}                                                                                                           | Ink \{\}                                                                                             | -                                                                     | -                                                      | -                                                                                                                                           | -                                                                                                                                           |   |
| language            | en-US                                                                                                              | en-US                                                                                                | en-US                                                                 | en-US                                                  | en-US                                                                                                                                       | en-US                                                                                                                                       |   |
| languages           | ['en-US']                                                                                                          | ['en-US']                                                                                            | [ 'en-US', 'en' ]                                                     | [ 'en-US', 'en' ]                                      | ['en-US']                                                                                                                                   | ['en-US']                                                                                                                                   |   |
| maxTouchPoints      | 0                                                                                                                  | 0                                                                                                    | 0                                                                     | 0                                                      | 0                                                                                                                                           | 0                                                                                                                                           |   |
| mediaCapabilities   | MediaCapabilities \{\}                                                                                             | MediaCapabilities \{\}                                                                               | MediaCapabilities \{\}                                                | MediaCapabilities \{\}                                 | MediaCapabilities \{decodingInfo: function, encodingInfo: function\}                                                                        | MediaCapabilities \{decodingInfo: function, encodingInfo: function\}                                                                        |   |
| mediaSession        | MediaSession \{metadata: null, playbackState: 'none'\}                                                             | MediaSession \{metadata: null, playbackState: 'none'\}                                               | MediaSession { metadata: null, playbackState: "none" }                | MediaSession { metadata: null, playbackState: "none" } | MediaSession \{metadata: null, playbackState: "none", setActionHandler: function, callActionHandler: function, setPositionState: function\} | MediaSession \{metadata: null, playbackState: "none", setActionHandler: function, callActionHandler: function, setPositionState: function\} |   |
| mimeTypes           | MimeTypeArray \{0: MimeType, 1: MimeType, application/pdf: MimeType, text/pdf: MimeType, length: 2\}               | MimeTypeArray \{0: MimeType, 1: MimeType, application/pdf: MimeType, text/pdf: MimeType, length: 2\} | MimeTypeArray \{ length: 0 \}                                         | MimeTypeArray \{ length: 0 \}                          | MimeTypeArray \{0: MimeType, 1: MimeType, application/pdf: MimeType, text/pdf: MimeType, length: 2, item: function, namedItem: function\}   | MimeTypeArray \{0: MimeType, 1: MimeType, application/pdf: MimeType, text/pdf: MimeType, length: 2, item: function, namedItem: function\}   |   |
| onLine              | TRUE                                                                                                               | TRUE                                                                                                 | TRUE                                                                  | TRUE                                                   | TRUE                                                                                                                                        | TRUE                                                                                                                                        |   |
| pdfViewerEnabled    | TRUE                                                                                                               | TRUE                                                                                                 | -                                                                     | -                                                      | -                                                                                                                                           | -                                                                                                                                           |   |
| oscpu               | -                                                                                                                  | -                                                                                                    | Linux x86\_64                                                         | Linux x86\_64                                          | -                                                                                                                                           | -                                                                                                                                           |   |
| permissions         | Permissions \{\}                                                                                                   | Permissions \{\}                                                                                     | Permissions \{\}                                                      | Permissions \{\}                                       | -                                                                                                                                           | -                                                                                                                                           |   |
| platform            | Linux x86\_64                                                                                                      | None                                                                                                 | Linux x86\_64                                                         | None                                                   | Linux x86\_64                                                                                                                               | None                                                                                                                                        |   |
| plugins             | Plugins \{\}                                                                                                       | Plugins \{\}                                                                                         | Plugins \{\}                                                          | Plugins \{\}                                           | Plugins \{\}                                                                                                                                | Plugins \{\}                                                                                                                                |   |
| product             | Gecko                                                                                                              | Gecko                                                                                                | Gecko                                                                 | Gecko                                                  | Gecko                                                                                                                                       | Gecko                                                                                                                                       |   |
| productSub          | 20030107                                                                                                           | 20030107                                                                                             | 20100101                                                              | 20100101                                               | 20030107                                                                                                                                    | 20030107                                                                                                                                    |   |
| scheduling          | Scheduling \{\}                                                                                                    | Scheduling \{\}                                                                                      | -                                                                     | -                                                      | -                                                                                                                                           | -                                                                                                                                           |   |
| userAgent           | Mozilla/5.0 (X11; Linux x86\_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/101.0.4951.15 Safari/537.36 | None                                                                                                 | Mozilla/5.0 (X11; Linux x86\_64; rv:98.0) Gecko/20100101 Firefox/98.0 | None                                                   | Mozilla/5.0 (Macintosh; Intel Mac OS X 10\_15\_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Safari/605.1.15                     | None                                                                                                                                        |   |
| vendor              | Google Inc.                                                                                                        | None                                                                                                 | -                                                                     | None                                                   | Apple Computer, Inc.                                                                                                                        | None                                                                                                                                        |   |
| vendorSub           | -                                                                                                                  | -                                                                                                    | -                                                                     | -                                                      | -                                                                                                                                           | -                                                                                                                                           |   |
| webdriver           | TRUE                                                                                                               | TRUE                                                                                                 | FALSE                                                                 | FALSE                                                  | FALSE                                                                                                                                       | FALSE                                                                                                                                       |

## UA-RADAR
UA-RADAR is a Node.js application that relies on a Node.js addon written in C++. The addon takes care of the comparison tasks for each dimension of UA-RADAR (Visual similarity, HTML structure, JavaScript, and CSS). To test the comparisons, we use Docker. Below are instructions to produce results.

### Running the application
Move into the directory `./similarity`,  build a Docker image and run it.

```
cd similarity
docker build -t similarity .
docker run similarity
```

### Changing test files
In the file `./similarity/app.js`, the visual comparison is the default UA-RADAR dimension available as follows:

```
const compare = require('./index.js');

(async () => {
  const srcImg = './test-files/1.png';
  const dstImg = './test-files/2.png';
  const visual = compare.screenshots(srcImg, dstImg, (err, res) => {
    if (err) console.error(err);
    else console.log(res);
  });
})();

```

`compare.screenshots` is a function of the addon behind this Node.js application. It takes 2 parameters of the images that you want to compare. If you want to compare two JS scripts or CSS stylesheets, you'd change the comparison function from `compare.screenshots` to `compare.scripts` and the 2 parameters would change to 2 JS files or 2 CSS files that you want to compare accordingly.

**Comparing JS scripts**
```
const compare = require('./index.js');

(async () => {
  const srcJS = "./test-files/1.js";
  const dstJS = "./test-files/2.js";
  const js = compare.scripts(srcJS, dstJS, (err, res) => {
    if (err) console.error(err);
    else console.log(res);
  });
})();

```

**Comparing CSS scripts**
```
(async () => {
  const srcCSS = "./test-files/1.css";
  const dstCSS = "./test-files/2.css";
  const css = compare.scripts(srcCSS, dstCSS, (err, res) => {
    if (err) console.error(err);
    else console.log(res);
  });
})();
```

**Comparing the HTML structure**

The same approach goes to comparing the HTML structure:

```
(async () => {
  const srcHtml = "./test-files/1.html";
  const dstHtml = "./test-files/2.html";
  const html = compare.structure(srcHtml, dstHtml, (err, res) => {
    if (err) console.error(err);
    else console.log(res);
  });
})();

```

It is worth noting that to see results for a compound metric as the UA-RADAR proposes, you can run all the 4 comparisons at the same time.

### HTML content comparison
The Node.js addon behind UA-RADAR uses [SFTM](https://github.com/lssol/sftm-csharp) to compare HTML structure (just nodes of the DOM trees and their attributes). To compare the content of the nodes of the DOM trees, we used [Diff Match Patch](https://github.com/google/diff-match-patch).

The complete UA-RADAR comparison as proposed in the submitted paper combines the above comparisons (HTML structure, HTML content, visual similarity, JS, and CSS).
