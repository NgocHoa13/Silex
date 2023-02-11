"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const fs = require("fs");
const https = require("https");
function default_1(config, app) {
    const router = express.Router();
    if (config.sslOptions.forceHttps) {
        console.log('> Force SSL option is enabled');
        const forceSSL = require('express-force-ssl');
        app.set('forceSSLOptions', {
            trustXFPHeader: !!config.sslOptions.trustXFPHeader,
        });
        router.use(forceSSL);
    }
    else {
        console.log('> Force SSL option is disabled, env var SILEX_FORCE_HTTPS not set');
    }
    if (config.sslOptions.privateKey && config.sslOptions.certificate) {
        console.log('> SSL certificate is enabled, found certificate:', config.sslOptions.certificate);
        try {
            const privateKey = fs.readFileSync(config.sslOptions.privateKey).toString();
            const certificate = fs.readFileSync(config.sslOptions.certificate).toString();
            const options = {
                key: privateKey,
                cert: certificate,
                requestCert: true,
                rejectUnauthorized: false,
            };
            https.createServer(options, this).listen(config.sslOptions.sslPort, () => {
                console.log('SSL: listening on port ', config.sslOptions.sslPort);
            });
        }
        catch (e) {
            console.error('SSL: load certificate failed.', e);
        }
    }
    else {
        console.log('> SSL certificate disabled, env vars SILEX_SSL_CERTIFICATE and SILEX_SSL_PRIVATE_KEY not set');
    }
    return router;
}
exports.default = default_1;