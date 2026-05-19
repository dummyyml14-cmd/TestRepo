function FindProxyForURL(url, host) {
    // 1. DIRECT: The PAC file's own location (GitHub Pages)
    // This prevents the phone from trying to use the proxy to find the script itself.
    if (dnsDomainIs(host, "dummyyml14-cmd.github.io") || 
        shExpMatch(host, "github.io") || 
        dnsDomainIs(host, "smc.pac")
    ) {
       return "DIRECT";
    }

     if (
         // Myntra Domains
         dnsDomainIs(host, ".myntra.com") ||
        localHostOrDomainIs(host, "myntra.com") ||
        shExpMatch(host, "*.myntassets.com") ||

        // Medium Domains
        dnsDomainIs(host, ".medium.com") ||
        localHostOrDomainIs(host, "medium.com") ||

        // Amazon
        shExpMatch(host, "*.amazon.com") ||
        shExpMatch(host, "*.amazon.in") ||
        shExpMatch(host, "*.amazon.co.uk") ||
        shExpMatch(host, "*.media-amazon.com") ||
        dnsDomainIs(host, "amazon.com") ||
        dnsDomainIs(host, "amazon.in") ||
        dnsDomainIs(host, "amazon.co.uk") ||

        // Apple Maps & Infrastructure
        shExpMatch(host, "*.cdn-apple.com") ||
        shExpMatch(host, "*.apple-dns.net") ||
        shExpMatch(host, "*.icloud.com") ||
        shExpMatch(host, "configuration.apple.com") ||
        shExpMatch(host, "vector.maps.apple.com") ||
        shExpMatch(host, "*.apple-mapkit.com") ||
        shExpMatch(host, "*.ls.apple.com")
	) {
        return "DIRECT";

    }

    if (isPlainHostName(host)) {
        return "DIRECT";
    }

    //return "PROXY c75320397.wgcs.integration.skyhigh.cloud:8090";
	return "PROXY c75316042.wgcs.integration.skyhigh.cloud:8080";
}
