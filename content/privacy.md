---
layout: page
title: Privacy policy
---

## Overview

This website collects privacy-friendly anonymous data for analytics powered by [GoatCounter](https://www.goatcounter.com/). Their goal is to monitor page traffic and optimize the user experience^[By making sure that the display's responsiveness works correctly for most users' screen resolutions, for instance.].

No identifying / personal data is collected. No information is shared with third parties.

Apart from the analytics, the website does not collect any data. It doesn't use cookies either. The only piece of information stored^[In your browser's localStorage] is your favorite theme (i.e. light or dark) if you change the default manually.

I also link to [my newsletter subscription form](/newsletter), which collects your e-mail address if you choose to subscribe. The newsletter emails use UTM tags when linking back to the blog, which allows me to know whether you came from one of my emails when you visit a page (cf. the Referer section below). No further information is collected for the newsletter.

If you have any questions or concerns about this privacy policy, you can [contact me](/contact).

I reserve the right to make changes to this policy. Any update will become effective as soon as it's posted on this page.

## Analytics

The following information is collected:

- The **URL of the page visited**. For instance, right now you're visiting `{{ page.url }}`. It's useful to know which content is most popular and if any pages are currently trending.
- The **`Referer` header**. This is the URL of the previous page you were on (it could be your search engine, e.g. Google, another website, another page from the same website, or undefined^[It's possible to hide your referrer status when linking to another website]). This information is useful to learn where most of the traffic is coming from (i.e. who referred you here).
- The **`User-Agent` header**. This contains information on your browser (for instance, whether you're using Chrome or Firefox) and is useful to test and ensure that the website's layout is functional for most users.
- Your **screen size**. This information is useful to test and ensure that the website's responsiveness is functional for the most common user resolutions.
- The location of the visitor, i.e. **country and region name** based on IP address. This information is mostly for my curiosity, it's always interesting to have some demographic data on one's audience.
- The **`Accept-Language` header**, which contains the natural language and locale that the browser/user prefers. This information is collected for the same reasons as the location (i.e. curiosity^[And who knows, I may branch out with some French content, if I have enough of a potential audience]).
- **Anonymous session tracking**: a hash of the IP address, User-Agent, and a random number. This is a way to avoid counting the same visitor several times without storing any identifying data. If you're curious, you can read more on this page about [GoatCounter's anonymous session-tracking algorithm](https://github.com/arp242/goatcounter/blob/master/docs/sessions.markdown#goatcounters-solution).

No personal information (such as IP address) is collected; a hash of the IP address, User-Agent, and a random number (“salt”) is kept in the process memory for 8 hours to identify a browsing session, and is never stored to disk.

This may seem like quite a lot of data, but I think all of it is justified. I tried my best to keep things transparent and easily understandable, so you can judge for yourself. In contrast, most websites use Google Analytics which collects far more information and is not privacy-friendly^[That's generally not Google's strongest suit].

If you'd like even more information, you can read more on GoatCounter's website:

- [GoatCounter's privacy policy](https://www.goatcounter.com/help/privacy)
- [GoatCounter and GDPR](https://www.goatcounter.com/help/gdpr)

<details class="changelog">
  <summary>Changelog</summary>

- **November 12, 2023**: Updated the policy to include the information optionally collected for the newsletter.

</details>