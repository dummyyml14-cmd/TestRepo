function FindProxyForURL(url, host) {
    // 1. DIRECT: The PAC file's own location (GitHub Pages)
    // This prevents the phone from trying to use the proxy to find the script itself.
    if (dnsDomainIs(host, "dummyyml14-cmd.github.io") || 
        shExpMatch(host, "github.io") || 
        dnsDomainIs(host, "smc.pac")
    ) {
       return "DIRECT";
    }

    IF (shExpMatch (host, "*.facebook.com") ||
        dnsDomainIs (host, ".facebook.com") ||
        shExpMatch (host, "*.youtube.com") ||
        dnsDomainIs (host, ".youtube.com") ||
        localHostOrDomainIs (host, "facebook.com") ||
        localHostOrDomainIs (host, "youtube.com")) {  
        
        return "PROXY c75320397.wgcs.integration.skyhigh.cloud:8090";
    }
    return "DIRECT";
    
}
