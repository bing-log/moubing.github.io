"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3043],{9238:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>m});var t=r(4848),i=r(8453);const o={slug:"upload-file",title:"\u5b9e\u73b0\u4e0a\u4f20\u529f\u80fd",authors:"bing",tag:["mongoose","express","json","formidable"]},s=void 0,a={permalink:"/blog/upload-file",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-4-7-upload-file.mdx",source:"@site/blog/2024-4-7-upload-file.mdx",title:"\u5b9e\u73b0\u4e0a\u4f20\u529f\u80fd",description:"\u8fd9\u662f\u4e00\u4e2a\u4f5c\u4e1a\uff0c\u8981\u6c42\u662f\u901a\u8fc7http\u534f\u8bae\u4f20\u8f93\u56fe\u7247\uff0c\u5ba2\u6237\u7aef\u8981\u8bfb\u53d6\u56fe\u7247\u5e76\u5c06\u5176\u8f6c\u6362\u4e3a\u5b57\u8282\u6d41\u6216\u8005Base64\u7f16\u7801\uff0c\u5728\u53d1\u9001\u7ed9\u670d\u52a1\u7aef\uff0c\u76ee\u524d\u6211\u5c31\u662f\u4f7f\u7528\u4e00\u4e2ainput\u6765\u9009\u62e9\u4e0a\u4f20\u7684\u56fe\u7247\uff0c\u5e76\u6ca1\u6709\u5c06\u5b83\u8f6c\u6362\uff0c\u670d\u52a1\u7aef\u63a5\u6536\u5230\u540e\u4f7f\u7528formidable\u6765\u89e3\u6790post\u8bf7\u6c42\u4f53\uff0c\u7136\u540e\u5c06\u56fe\u7247\u4fdd\u5b58\u5728\u9759\u6001\u8d44\u6e90\u76ee\u5f55public/image\u76ee\u5f55\u4e2d\uff0c\u5e76\u5c06\u56fe\u7247\u7684\u540d\u79f0\u5b58\u5165\u4e86\u672c\u5730\u7684mongodb\u6570\u636e\u5e93\u3002",date:"2024-04-07T00:00:00.000Z",tags:[],readingTime:3.88,hasTruncateMarker:!1,authors:[{name:"moubing",title:"rookie devloper",imageURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfY41iE56Ax06LOKKpuNRd08lquyOXxNbvsn6EySzlNA&s",key:"bing"}],frontMatter:{slug:"upload-file",title:"\u5b9e\u73b0\u4e0a\u4f20\u529f\u80fd",authors:"bing",tag:["mongoose","express","json","formidable"]},unlisted:!1,nextItem:{title:"\u5b66\u4e60docusaurs\u7684\u7b2c\u4e00\u5929",permalink:"/blog/01-study-docusaurus"}},l={authorsImageUrls:[void 0]},m=[{value:"\u4e0a\u4f20\u9875\u9762",id:"\u4e0a\u4f20\u9875\u9762",level:2}];function c(n){const e={code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:["\u8fd9\u662f\u4e00\u4e2a\u4f5c\u4e1a\uff0c\u8981\u6c42\u662f\u901a\u8fc7",(0,t.jsx)(e.code,{children:"http"}),"\u534f\u8bae\u4f20\u8f93\u56fe\u7247\uff0c\u5ba2\u6237\u7aef\u8981\u8bfb\u53d6\u56fe\u7247\u5e76\u5c06\u5176\u8f6c\u6362\u4e3a\u5b57\u8282\u6d41\u6216\u8005",(0,t.jsx)(e.code,{children:"Base64"}),"\u7f16\u7801\uff0c\u5728\u53d1\u9001\u7ed9\u670d\u52a1\u7aef\uff0c\u76ee\u524d\u6211\u5c31\u662f\u4f7f\u7528\u4e00\u4e2ainput\u6765\u9009\u62e9\u4e0a\u4f20\u7684\u56fe\u7247\uff0c\u5e76\u6ca1\u6709\u5c06\u5b83\u8f6c\u6362\uff0c\u670d\u52a1\u7aef\u63a5\u6536\u5230\u540e\u4f7f\u7528formidable\u6765\u89e3\u6790post\u8bf7\u6c42\u4f53\uff0c\u7136\u540e\u5c06\u56fe\u7247\u4fdd\u5b58\u5728\u9759\u6001\u8d44\u6e90\u76ee\u5f55public/image\u76ee\u5f55\u4e2d\uff0c\u5e76\u5c06\u56fe\u7247\u7684\u540d\u79f0\u5b58\u5165\u4e86\u672c\u5730\u7684mongodb\u6570\u636e\u5e93\u3002"]}),"\n",(0,t.jsx)(e.h2,{id:"\u4e0a\u4f20\u9875\u9762",children:"\u4e0a\u4f20\u9875\u9762"}),"\n",(0,t.jsx)(e.p,{children:"\u73b0\u5728react\u8fd8\u4e0d\u591f\u719f\u7ec3\uff0c\u5f53\u7136\u6211\u4e5f\u662f\u89c9\u5f97\u8fd9\u53ea\u662f\u4e00\u4e2a\u4f5c\u4e1a\uff0c\u6211\u4fbf\u5c31\u4f7f\u7528\u6700\u57fa\u672c\u7684\u4e09\u4ef6\u5957\u6765\u8bbe\u8ba1\u9875\u9762"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-html",metastring:'title="upload.html" showLineNumbers',children:'<div class="section">\r\n        <div class="container">\r\n            <h2>\u4e0a\u4f20\u56fe\u7247</h2>\r\n            <form method="post" action="/upload/succeed" enctype="multipart/form-data" >\r\n                <div class="border">\r\n                    <input name="img" type="file" class="imgInput" multiple>\r\n                </div>\r\n                <button type="submit" class="submit-btn">\u63d0\u4ea4</button>\r\n            </form>\r\n            <h2>\u56fe\u7247\u9884\u89c8\u5217\u8868</h2>\r\n            <div class="imgList"></div>\r\n        </div>\r\n    </div>\n'})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-css",metastring:'title="upload.css" showLineNumbers',children:"body {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.section {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin: 100px auto;\r\n    width: 400px;\r\n    box-shadow: 0 0 5px 0 rgba(0,0,0,.4);\r\n    border-radius: 10px;\r\n    background-color: rgb(235, 238, 244);\r\n    \r\n}\r\n\r\n.imgInput {\r\n    opacity: 0;\r\n    position: absolute;\r\n}\r\n\r\n.border {\r\n    width: 150px;\r\n    height: 150px;\r\n    border: 5px #c68b8b dotted;\r\n    position: relative;\r\n    transition: transform 150ms ease-in-out;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.border::before {\r\n    content: '+';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    text-align: center;\r\n    line-height: 150px;\r\n    font-size: 50px;\r\n    opacity: .5;\r\n    transition: all 150ms ease-in-out;\r\n}\r\n\r\n.border:hover {\r\n    transform: scale(1.2, 1.2);\r\n}\r\n\r\n.border:hover.border::before {\r\n    transform: scale(1.3, 1.3);\r\n    color: rgb(124, 33, 33);\r\n}\r\n\r\nh2 {\r\n    text-align: center;\r\n}\r\n\r\n.file-name {\r\n    color: red;\r\n}\r\n\r\n.imgList {\r\n    width: 400px;\r\n\r\n}\r\n\r\n.imgItem {\r\n    width: 200px;\r\n}\r\n\r\nform {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 10px 0;\r\n    flex-direction: column;\r\n}\r\n\r\n.submit-btn {\r\n    background-color: rgb(64, 85, 85);\r\n    outline: none;\r\n    box-shadow: 0 0 3px 0 rgba(0, 0, 0, .4);\r\n    border-radius: 5px;\r\n    width: 60px;\r\n    height: 40px;\r\n    font-size: large;    \r\n    font-weight: bold;\r\n    color: skyblue;\r\n    transition: all 150ms ease-in-out;\r\n}\r\n\r\n.submit-btn:hover {\r\n    color: white;\r\n    background-color: rgb(99, 124, 124);\r\n    box-shadow: 0 0 3px 3px rgba(0, 0, 0, .4);\r\n\r\n}\r\n\r\nform input {\r\n    opacity: 0;\r\n    position: absolute;\r\n    transform: translateX(9999px);\r\n}\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",metastring:'title="upload.js" showLineNumbers',children:"\r\nconst border = document.querySelector('.border')\r\nconst imgInput = document.querySelector('.imgInput')\r\nconst imgList = document.querySelector('.imgList')\r\nconst uploadInput = document.querySelector('form input')\r\n\r\nconst imgArray = []\r\n\r\nborder.addEventListener('click', () => {\r\n    imgInput.click()\r\n})\r\n\r\nimgInput.addEventListener('change', updateImgList)\r\n\r\nfunction updateImgList() {\r\n    while(imgList.firstChild) {\r\n        imgList.remove(imgList.firstChild)\r\n    }\r\n\r\n    const files = imgInput.files\r\n    if(files.length === 0) {\r\n        const listItem = document.createElement('p')\r\n        listItem.innerText = \"\u4f60\u5e76\u6ca1\u6709\u4e0a\u4f20\u56fe\u7247\"\r\n        imgList.append(listItem)\r\n    } else {\r\n        \r\n        for(const file of files) {\r\n            if(validFile(file.type)){\r\n                imgArray.push(file)\r\n                const newImgItem = document.createElement('div')\r\n                const fileName = document.createElement('div')\r\n                const fileSize = document.createElement('div')\r\n                const img = document.createElement('img')\r\n                fileName.innerText = file.name\r\n                fileSize.innerText = computeSize(file.size)\r\n                img.src = URL.createObjectURL(file)\r\n                img.alt = file.name\r\n                fileName.classList.add('file-name')\r\n                fileSize.classList.add('file-size')\r\n                img.classList.add('imgItem')\r\n                newImgItem.append(fileName)\r\n                newImgItem.append(fileSize)\r\n                newImgItem.append(img)\r\n                imgList.append(newImgItem)\r\n\r\n            } else {\r\n                const listItem = document.createElement('p')\r\n                listItem.innerText = `\u4f60\u4e0a\u4f20\u6587\u4ef6${file.name}\u4e0d\u662f\u56fe\u7247\u683c\u5f0f\uff0c\u5b83\u662f${file.type}\u683c\u5f0f\u7684`\r\n                imgList.append(listItem)\r\n            }\r\n        }\r\n    }\r\nconst finalObj = imgArray.reduce((obj,curfile) => {\r\n    obj[curfile.name] = curfile\r\n    return obj\r\n}, {})\r\n\r\nconst showPra = document.createElement('p')\r\nconst testObj = {name: 'moubing', age: 13, address: {street: 'haha', build: 'wiwiw'}}\r\nshowPra.innerText = JSON.stringify(testObj, (key, value) => {\r\n    if(typeof value === 'object' && value !== null) {\r\n        return value\r\n    }\r\n    return value\r\n})\r\nimgList.append(showPra)\r\n}\r\n\r\n\r\nfunction computeSize(number) {\r\n    if (number < 1024) {\r\n        return `${number} bytes`;\r\n      } else if (number >= 1024 && number < 1048576) {\r\n        return `${(number / 1024).toFixed(1)} KB`;\r\n      } else if (number >= 1048576) {\r\n        return `${(number / 1048576).toFixed(1)} MB`;\r\n      }\r\n}\r\n\r\nfunction validFile(type) {\r\n    return fileTypes.includes(type)\r\n}\r\n\r\nconst fileTypes = [\r\n    \"image/apng\",\r\n    \"image/bmp\",\r\n    \"image/gif\",\r\n    \"image/jpeg\",\r\n    \"image/pjpeg\",\r\n    \"image/png\",\r\n    \"image/svg+xml\",\r\n    \"image/tiff\",\r\n    \"image/webp\",\r\n    \"image/x-icon\",\r\n  ];\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u5988\u7684\uff0c\u773c\u775b\u597d\u7d2f\u554a\uff0c\u660e\u5929\u5728\u5199\u4e86\uff0c\u662f\u771f\u7684\u906d\u4e0d\u4f4f\u4e86\uff0c\u770b\u5c4f\u5e55\u90fd\u662f\u82b1\u7684\uff0c\u6211\u8fd8\u662f\u4e0d\u4f7f\u7528\u8fd9\u4e2a\u6df1\u8272\u6a21\u5f0f\u4e86\uff0c\u592a\u96be\u53d7\u4e86\uff0c\u6211\u5df2\u7ecf\u591f\u5fcd\u53d7\u5b83\u7684\u4e86\u3002\u9e3d\u4e86\u9e3d\u4e86\uff0c\u6211\u539f\u672c\u6bcf\u5929\u7684\u76ee\u6807\u5c31\u662f\u81f3\u5c11\u5199\u4e00\u7bc7\u535a\u5ba2\uff0c\u8bb0\u5f55\u8fd9\u4e00\u5929\u90fd\u5e72\u4e86\u4ec0\u4e48\uff0c\u4eca\u5929\u5b9e\u5728\u662f\u592a\u7d2f\u4e86\u3002\u5c31\u7b97\u5f3a\u5fcd\u7740\u5199\u5b8c\uff0c\u8d28\u91cf\u4e5f\u582a\u5fe7\uff01\uff01\uff01"})]})}function d(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(c,{...n})}):c(n)}},8453:(n,e,r)=>{r.d(e,{R:()=>s,x:()=>a});var t=r(6540);const i={},o=t.createContext(i);function s(n){const e=t.useContext(o);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:s(n.components),t.createElement(o.Provider,{value:e},n.children)}}}]);