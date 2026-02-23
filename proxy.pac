function FindProxyForURL(url, host) {
    // 1. DIRECT: The PAC file's own location (GitHub Pages)
    // This prevents the phone from trying to use the proxy to find the script itself.
    if (dnsDomainIs(host, "dummyyml14-cmd.github.io") || 
        shExpMatch(host, "github.io")) {
        return "DIRECT";
    }

    // 2. DIRECT: News and Streaming (No Proxy)
    if (dnsDomainIs(host, ".ndtv.com") || 
        localHostOrDomainIs(host, "ndtv.com") ||
        dnsDomainIs(host, ".hotstar.com") || 
        localHostOrDomainIs(host, "hotstar.com") ||
        shExpMatch(host, "*.hotstar.com") ||
        shExpMatch(host, "*.akamaihd.net")) { // Required for Hotstar video delivery
        return "DIRECT";
    }

    // 3. DIRECT: Internal/Local traffic
    if (isPlainHostName(host)) {
        return "DIRECT";
    }

    // 4. PROXY: Everything else goes via the IPsec Tunnel
    return "PROXY 10.42.2.66:8090";
}
