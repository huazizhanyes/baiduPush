const http = require('http')
const fs = require('fs')
var path = '/urls?site=blog.hzzy.xyz&token=XDBAanwPu0JphsAQ'
fs.readFile('./urls.txt','utf8',function(err,dataStr){
    if(err){
        return console.log('读取文件失败！'+err.message)
    }
    let pushList = []
    pushList.push(dataStr.split('\r\n'))
    console.log(pushList)
    for(var i = 0; i < pushList[0].length; i++) {
        // console.log(pushList[i].length);
        let params = {
            host: "data.zz.baidu.com",
            path: path,
            method: "post",
            "User-Agent": "curl/7.12.1",
            headers: {
                "Content-Type": "text/plain",
                "Content-Length": pushList[0][i].length
            }
        };
        let httpReq = http.request(params, function(res) {
            res.setEncoding("utf8");
            res.on("data", function(data) {
                console.log("data:", data);
            });
        });
        httpReq.write(pushList[0][i]);
        httpReq.end();
    }
})

// let pushList = [
//     "http://blog.hzzy.xyz",
//     "http://blog.hzzy.xyz/web",
//     "http://blog.hzzy.xyz/technology",
//     "http://blog.hzzy.xyz/more",
//     "http://blog.hzzy.xyz/pages/8309a5b876fc95e3",
//     "http://blog.hzzy.xyz/pages/4efa8a/",
//     "http://blog.hzzy.xyz/pages/c8f128/",
//     "http://blog.hzzy.xyz/pages/0a83b083bdf257cb",
//     "http://blog.hzzy.xyz/pages/ea6db1530c42ad51",
//     "http://blog.hzzy.xyz/pages/eff61bc8b4f4695d"
// ]

// for(var i = 0; i < pushList[0].length; i++) {
//     // console.log(pushList[i].length);
//     let params = {
//         host: "data.zz.baidu.com",
//         path: path,
//         method: "post",
//         "User-Agent": "curl/7.12.1",
//         headers: {
//             "Content-Type": "text/plain",
//             "Content-Length": pushList[i].length
//         }
//     };
//     let httpReq = http.request(params, function(res) {
//         res.setEncoding("utf8");
//         res.on("data", function(data) {
//             console.log("data:", data);
//         });
//     });
//     httpReq.write(pushList[i]);
//     httpReq.end();
// }