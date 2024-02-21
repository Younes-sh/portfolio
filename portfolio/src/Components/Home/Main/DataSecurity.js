const DataSecurity = [
    {
        title:'Input Validation',
        description: 'Ensuring that all user inputs are validated to prevent injection attacks such as SQL injection or cross-site scripting (XSS). This involves sanitizing and validating user inputs before processing them.'
    },
    {
        title:'Authentication and Authorization',
        description:'Implementing robust authentication mechanisms to verify the identity of users and authorization mechanisms to control access to resources based on user roles and permissions.'
    },
    {
        title:'HTTPS Usage',
        description:'Enforcing the use of HTTPS protocol to encrypt data in transit and protect against man-in-the-middle attacks, ensuring that sensitive information is securely transmitted between the client and server.'
    },
    {
        title:'Cross-Site Scripting (XSS) Mitigation',
        description:'Implementing measures to prevent XSS attacks, such as output encoding and Content Security Policy (CSP), to mitigate the risk of unauthorized script execution within the browser.'
    },
    {
        title:'Content Security Policy (CSP)',
        description:'Utilizing CSP headers to define and enforce a whitelist of trusted sources for content, scripts, and other resources, reducing the risk of XSS attacks and data exfiltration.'
    },
    {
        title:'Secure Communication',
        description:'Implementing secure communication practices, such as avoiding the transmission of sensitive information via URL parameters and using secure cookies with appropriate attributes like Secure and HttpOnly.'
    },
    {
        title:'Clickjacking Prevention',
        description:'Implementing measures to prevent clickjacking attacks by employing X-Frame-Options header or Content Security Policy frame-ancestors directive to control which domains can embed the web page.'
    },
    {
        title:'Client-Side Storage Security',
        description:'Ensuring the secure storage of sensitive data on the client-side, such as using secure storage mechanisms like sessionStorage or localStorage and avoiding storing sensitive information in cookies.'
    },
    {
        title:'Dependency Security',
        description:'Regularly updating and monitoring frontend dependencies (libraries, frameworks, plugins) for security vulnerabilities, and using tools like dependency checkers to identify and mitigate any potential risks.'
    },
    {
        title:'Error Handling and Logging',
        description:'Implementing proper error handling mechanisms to prevent sensitive information leakage and logging security-relevant events for monitoring, analysis, and incident response purposes.'
    },
]

export default DataSecurity