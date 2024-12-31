function FindProxyForURL(url, host) {
    if (dnsDomainIs(host, "gateway.icloud.com.cn") || dnsDomainIs(host, "ppq.apple.com")) {
        return "DIRECT";
    }
    return "PROXY 10.23.148.17:8888";
}

