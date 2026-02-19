function FindProxyForURL(url, host) {
    if (shExpMatch(host, "10.42.2.66") || 
        shExpMatch(host, "10.42.4.67") || 
        isInNet(host, "127.0.0.1", "255.255.255.255") ||
        isInNet(host, "185.199.108.0", "255.255.252.0") || // Specific GitHub range
        isInNet(host, "185.199.0.0", "255.255.0.0")
        dnsDomainIs(host, ".youtube.com") ||  // Excludes all youtube subdomains
        dnsDomainIs(host, ".ndtv.com") ||     // Excludes all ndtv subdomains
        localHostOrDomainIs(host, "youtube.com") ||
        localHostOrDomainIs(host, "ndtv.com")) {     // Your requested /16 range
        return "DIRECT";
    }
    return "PROXY 10.42.2.66:8090";
}
