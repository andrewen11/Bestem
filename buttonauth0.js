document.getElementById('log').addEventListener('click', function() {
    // Initialize Auth0 client
    const auth0 = new Auth0Client({
        domain: 'https://dev-pwqnjsvjha5ilb3o.us.auth0.com',
        client_id: 'vwcd63gWdceM3KMvprUPvTGtZ0ycZs1t',
        redirect_uri: 'https://storage.googleapis.com/siteserverpa/logare.html',
    });

    // Trigger Auth0 login process
    auth0.loginWithRedirect();
});