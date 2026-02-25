function FindProxyForURL(url, host) {
    // 1. DIRECT: The PAC file's own location (GitHub Pages)
    // This prevents the phone from trying to use the proxy to find the script itself.
    if (dnsDomainIs(host, "dummyyml14-cmd.github.io") || 
       shExpMatch(host, "github.io")) {
       return "PROXY 10.42.2.66:8090";
    }

    if (// Myntra Domains
        dnsDomainIs(host, ".myntra.com") || 
        localHostOrDomainIs(host, "myntra.com") ||
        shExpMatch(host, "*.myntassets.com") || // Myntra's Image/Static CDN
        
        // Hotstar Domains
        dnsDomainIs(host, ".hotstar.com") || 
        localHostOrDomainIs(host, "hotstar.com") ||
        shExpMatch(host, "*.akamaihd.net") || 

        // Medium
        shExpMatch(host, "*.medium.com") || 
        dnsDomainIs(host, "medium.com") ||

        // Amazon
        shExpMatch(host, "*.amazon.com") || 
        shExpMatch(host, "*.amazon.in") || 
        shExpMatch(host, "*.amazon.co.uk") ||
        shExpMatch(host, "*.media-amazon.com") ||
        dnsDomainIs(host, "amazon.com") ||
        dnsDomainIs(host, "amazon.in") ||
        dnsDomainIs(host, "amazon.co.uk") || 

        // NDTV Domains
        dnsDomainIs(host, ".ndtv.com") || 
        localHostOrDomainIs(host, "ndtv.com")) {
        return "DIRECT";

    }

    // 3. DIRECT: Internal/Local traffic
    if (isPlainHostName(host)) {
        return "DIRECT";
    }

    // 4. PROXY: Everything else goes via the IPsec Tunnel
    return "PROXY 10.42.2.66:8090";
}
