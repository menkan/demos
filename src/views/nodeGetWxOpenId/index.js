const express = require('express')
const path = require('path')
const https = require('https')
const app = express()

app.set('view engine','ejs')

// 微信公众号的id and serect
const APPID = 'wxfa87489a33943db2'
const APPSERECT = '40c9afdc9990007cfe0a1a0405757af3'

// redirectUlr others
const HOST = 'http://127.0.0.1:8800'
const redirect = '/getUserInfo'


//微信授权api,接口返回code,点击授权后跳转到重定向地址并带上code参数
let authorizeUrl = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${APPID}&redirect_uri=` +
    `${HOST}${redirect}&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect`

app.get('/login', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'login.html'))
})

app.get('/auth', (request, response) => {
    response.writeHead(302, {
        'Location': authorizeUrl,
    })
    response.end()
})

app.get('/getUserInfo', (request, response) => {
    getUserInfos(request, response)
})

async function getUserInfos(req, res) {
    let code = req.query.code

    // 通过appid && appserect && code 获取openid，userinfos 信息
    let getaccess = `https://api.weixin.qq.com/sns/oauth2/access_token?appid=` +
        `${APPID}&secret=${APPSERECT}&code=${code}&grant_type=authorization_code`;

    let result = await fetch({
        url: getaccess,
    })

    let access_token = result.access_token
    let open_id = result.open_id

    // 通过获取的 access_token and open_id get UserInfos
    let getUserUrl = `https://api.weixin.qq.com/sns/userinfo?access_token=${access_token}&openid=${open_id}&lang=zh_CN`

    let userInfosObj = await fetch({
        url: getUserUrl,
    })

    res.render(path.resolve(__dirname, 'userInfo.ejs'), {userObj: userInfosObj})
}

function fetch(options) {
    return new Promise((resolve, reject) => {
        https.get(options.url, (response) => {
            let resText = ''

            response.on('data', (datas) => {
                resText += datas
            })

            response.on('end', _ => {
                resolve(JSON.parse(resText))
            })
        }).on('error', e => {
            console.error(e)
        })
    })
}

app.listen(8800, _ => { console.log('Node服务成功开启; "http://127.0.0.1:8800') })