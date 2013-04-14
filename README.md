rfc822-validate
===============

This module provides a JavaScript function to check an email address conforms to [RFC822][1].  Compatible with Node.js and RequireJS/AMD.

Portions copyright © 2013 William Riley-Land - http://kun.io

Portions copyright © 2006 Ross Kendall - http://rosskendall.com

Portions copyright © 1993-2005 Cal Henderson - http://iamcal.com

Based on the PHP code by Cal Henderson

http://iamcal.com/publish/articles/php/parsing_email/

Licenced under Creative Commons _or_ GPL according to the terms in the LICENSE.md file.  

--

Installation
------------

    npm install rfc822-validate
    
and/or

    bower install rfc822-validate
    
Usage
-----

    var validate = require('rfc822-validate');
    var s = 'test@exaqmple.com'
    var valid = validate(s);
    
    if (valid) console.log('s was a valid email address');
    else console.log('s was not a valid email address');


[1]: http://www.ietf.org/rfc/rfc0822.txt "RFC822"
