function FindProxyForURL(url, host) {
    // 1. Domain checks (Fast, no DNS lookup needed)
    if (dnsDomainIs(host, ".youtube.com") || 
        dnsDomainIs(host, ".ndtv.com") || 
        localHostOrDomainIs(host, "youtube.com") ||
        localHostOrDomainIs(host, "ndtv.com")) {
        return "DIRECT";
    }

    // 2. IP/Internal checks (Triggers DNS lookup)
    if (shExpMatch(host, "10.42.*") || 
        (shExpMatch(host, "185.199.*") ||
        isInNet(host, "127.0.0.1", "255.255.255.255")) {
        return "DIRECT";
    }

    // 3. Everything else goes to Proxy via Tunnel
    return "PROXY 10.42.2.66:8090";
}
