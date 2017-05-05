# tampermokey-lms-refresh

A TamperMonkey/GreaseMonkey script to prevent the session from expiring on IBA LMS portal.

Affected sites:
- http://lms.iba.edu.pk
- http://lms2.iba.edu.pk

## How it works

By default, the LMS repeatedly queries the server to get the lastAccessedTime and then compares it with the current time to see if the difference is greater than 20 minutes.

This script makes an AJAX request to the server every minute, which keeps the lastAccessedTime fresh and the difference never reaches 20 minutes.
