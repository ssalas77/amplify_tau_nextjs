// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // images: {
  //   domains: ['res.cloudinary.com']
  // }
}

// LOOK INTO SECURITY
// const headers = require('./headers');
// child-src example.com;

// const ContentSecurityPolicy = `
//   default-src 'self';
//   script-src 'self';
//   style-src 'self' example.com;
//   font-src 'self';
//   `
  
  

// const securityHeaders = [
//   {
//     key: 'Content-Security-Policy',
//     value: "default-src 'self'; script-src 'self'; style-src 'self' example.com; img-src 'self'; font-src 'self'",
//   },
//   {
//     key: 'X-DNS-Prefetch-Control',
//     value: 'on',
// },
// {
//     key: 'Strict-Transport-Security',
//     value: 'max-age=63072000; includeSubDomains; preload',
// },
// {
//     key: 'Server',
//     value: 'Apache', //phony server value
// },
// {
//     key: 'X-Content-Type-Options',
//     value: 'nosniff',
// },
// {
//     key: 'X-Frame-Options',
//     value: 'sameorigin',
// },
// {
//     key: 'X-XSS-Protection',
//     value: '1; mode=block',
// },
// {
//     key: 'Referrer-Policy',
//     value: 'same-origin',
// },
// {
//     key: 'Permission-Policy',
//     value: "camera=(); battery=(); geolocation=(); microphone=()", // allow specified policies here
// },
// ]

module.exports = nextConfig
// {
//   async headers() {
//     return [
//       {
//         source: '/(.*)',
//         headers: securityHeaders,
//       },
//     ];
//   },
// };