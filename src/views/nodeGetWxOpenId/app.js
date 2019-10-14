const express = require('express')
const https = require('https')
const path = require('path')
const app = express()

// appId
const appID = 'wxfa87489a33943db2'
const appSerect = '40c9afdc9990007cfe0a1a0405757af3'

//点击授权后重定向url地址
let redirectUrl = `/getUserInfo`
let host = `http://127.0.0.1:8800`

//微信授权api,接口返回code,点击授权后跳转到重定向地址并带上code参数
let authorizeUrl = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appID}&redirect_uri=` +
    `${host}${redirectUrl}&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect`

app.get("/login", function(req, res) {
    res.sendFile(path.resolve(__dirname,'login.html'))
})

app.get("/auth", function(req, res) {
    res.writeHead(302, {
        'Location': authorizeUrl
    });
    res.end()
})

app.get("/getUserInfo", function(req, res) {
    let code = req.query.code;
    let getaccess = `https://api.weixin.qq.com/sns/oauth2/access_token?appid=` +
        `${appID}&secret=${appSerect}&code=${code}&grant_type=authorization_code`;

    //通过拿到的code和appID、app_serect获取access_token和open_id
    https.get(getaccess, (resText) => {
        var ddd = "";
        resText.on('data', (d) => {
            ddd += d;
        });
        resText.on('end', () => {
            // console.log(ddd);
            var obj = JSON.parse(ddd);
            var access_token = obj.access_token;
            var open_id = obj.openid;
            //通过上一步获取的access_token和open_id获取userInfo即用户信息
            let getUserUrl = `https://api.weixin.qq.com/sns/userinfo?access_token=${access_token}&openid=${open_id}&lang=zh_CN`;
            https.get(getUserUrl, (resText) => {
                user = "";
                resText.on('data', (d) => {
                    user += d;
                });
                resText.on('end', () => {
                    console.log(user);
                    var userobj = JSON.parse(user);
                    res.send(userobj);
                    console.log(userobj);
                });
            })        });
    }).on('error', (e) => {
        console.error(e);
    })
})
app.listen(8800, () => {
    console.log('成功开启服务, http://127.0.0.1:8800')
})