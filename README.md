# vadapav.mov<!-- omit in toc -->
- The Unofficial NodeJS Wrapper for [vadapav.mov](https://vadapav.mov)
# Topics<!-- omit in toc -->
- [Usage](#usage)
    - [directory](#directory)
    - [download](#download)
    - [listContentsOfDir](#listcontentsofdir)
    - [search](#search)
# Usage
### directory
```js
    const vadapav = require('vadapav.mov');
    const result = await vadapav.directory("") // Base Directory
    console.log(result)
    //OR--------------------------------------------------------
    const result = await vadapav.director("f36be06f-8edd-4173-99df-77bc4c7c2626") // other directory
    console.log(result)
```
### download
```js
    const vadapav = require('vadapav.mov');
    const fs = require('fs');

    const stream = await vadapav.download("5ff466e6-d95c-4881-add0-0fbdccf61856")
    stream.pipe(fs.createWriteStream("./1917.mp4"))
```
### listContentsOfDir
```js
    const vadapav = require('vadapav.mov');

    const result = await vadapav.listContentsOfDir("4ba10895-7a56-41f8-8e4b-6eb4c0d2f40e")
    console.log(result)
```
### search
```js
    const vadapav = require('vadapav.mov');

    const result = await vadapav.search("Talk to me")
    console.log(result)
```
