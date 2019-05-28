/**
 * git do not control webim.config.js
 * everyone should copy webim.config.js.demo to webim.config.js
 * and have their own configs.
 * In this way , others won't be influenced by this config while git pull.
 *
 */

// for react native
// var location = {
//     protocol: "https"
// }

function getUrl(){
    var apiUrl = (window.location.protocol === "https:" ? "https:" : "http:") + "//a1.easemob.com"
    var xmppUrl = "im-api.easemob.com"
    if(window.location.href.indexOf("webim-h5.easemob.com") !== -1 || window.location.href.indexOf("localhost") !== -1 || window.location.href.indexOf("172.17.2.168") !== -1){
        apiUrl = (window.location.protocol === "https:" ? "https:" : "http:") + "//a1.easemob.com"
        xmppUrl = "im-api.easemob.com"
    }
    else if(window.location.href.indexOf("webim-hsb.easemob.com") !== -1){
        apiUrl = (window.location.protocol === "https:" ? "https:" : "http:") + "//a1-hsb.easemob.com"
        xmppUrl = "im-api-hsb.easemob.com"
    }
    return {
        apiUrl: apiUrl,// rest Server地址，
        xmppUrl: xmppUrl //xmpp Server地址，对于在console.easemob.com创建的appKey，固定为该值
    }
}


var config = {
    /*
     * XMPP server
     */
    xmppURL: getUrl().xmppUrl,
    // xmppURL: "im-api.easemob.com",
    // xmppURL: '172.17.2.139:5280',
    /*
     * Backend REST API URL
     */
    // apiURL: (location.protocol === 'https:' ? 'https:' : 'http:') + '//a1.easemob.com',
    // ios must be https!!! by lwz
    // apiURL: "https://a1.easemob.com",
    apiURL: getUrl().apiUrl,
    // apiURL: (location.protocol === 'https:' ? 'https:' : 'http:') + '//172.17.3.155:8080',
    /*
     * Application AppKey
     */
    appkey: "easemob-demo#chatdemoui",// App key
    /*
     * Application Host
     */
    Host: "easemob.com",
    /*
     * Whether to use HTTPS
     * @parameter {Boolean} true or false
     */
    https: false, // 是否使用https
    isHttpDNS: false,//防止DNS劫持从服务端获取XMPPUrl、restUrl
    /*
     * isMultiLoginSessions
     * true: A visitor can sign in to multiple webpages and receive messages at all the webpages.
     * false: A visitor can sign in to only one webpage and receive messages at the webpage.
     */
    isMultiLoginSessions: false,  // 是否开启多页面同步收消息，注意，需要先联系商务开通此功能
    /**
     * Whether to use window.doQuery()
     * @parameter {Boolean} true or false
     */
    isWindowSDK: false,
    /**
     * isSandBox=true:  xmppURL: 'im-api.sandbox.easemob.com',  apiURL: '//a1.sdb.easemob.com',
     * isSandBox=false: xmppURL: 'im-api.easemob.com',          apiURL: '//a1.easemob.com',
     * @parameter {Boolean} true or false
     */
    isSandBox: false,
    /**
     * Whether to console.log in strophe.log()
     * @parameter {Boolean} true or false
     */
    isDebug: true, // 打开调试，会自动打印log，在控制台的console中查看log
    /**
     * Whether to show logs in strophe
     * @parameter {Boolean} true or false
     */
    isStropheLog: false,
    /**
     * will auto connect the xmpp server autoReconnectNumMax times in background when client is offline.
     * won't auto connect if autoReconnectNumMax=0.
     */
    autoReconnectNumMax: 5, // 断线重连最大次数
    /**
     * the interval secons between each atuo reconnectting.
     * works only if autoReconnectMaxNum >= 2.
     */
    autoReconnectInterval: 2, // 断线重连时间间隔
    /**
     * webrtc supports WebKit and https only
     */
    isWebRTC: window.RTCPeerConnection && /^https\:$/.test(window.location.protocol),
    /**
     *  cn: chinese
     *  us: english
     */
    i18n: "cn",
    /*
     * Set to auto sign-in
     */
    isAutoLogin: true, // 自动出席，（如设置为false，则表示离线，无法收消息，需要在登录成功后手动调用conn.setPresence()才可以收消息）
    /**
     * Size of message cache for person to person
     */
    p2pMessageCacheSize: 500,
    /**
     * When a message arrived, the receiver send an ack message to the
     * sender, in order to tell the sender the message has delivered.
     * See call back function onReceivedMessage
     */
    delivery: true, // 是否发送已读回执
    /**
     * Size of message cache for group chating like group, chatroom etc
     */
    groupMessageCacheSize: 200,
    /**
     * 5 actual logging methods, ordered and available:
     * 'TRACE', 'DEBUG', 'INFO', 'WARN', 'ERROR'
     */

    loglevel: "ERROR",

    /**
     * enable localstorage for history messages
     */
    enableLocalStorage: true
}

export default config
