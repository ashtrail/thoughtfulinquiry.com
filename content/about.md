---
layout: page
title: About
eleventyNavigation:
  key: About
  order: 3
---

I may add content and split this page in two in the future. In the meantime, you can find more information on both the website and myself below.

## About the Website

### Legal

Here are some links to the [content's license](/license) and to the [site's privacy policy](/privacy). Basically, the text is only very loosely copyrighted and I don't collect any of your information (currently at least^[I intend to add some ethical analytics and create a newsletter in the future, which means collecting e-mail addresses on opt-in.]). Feel free to quote the website's content (even fairly hearty portions), just remember to credit Thoughtful Inquiry and link back to the page where you found it.

### Design

My goal for the design was to make a functional and aesthetically pleasing website. The user experience was important to me. I wanted something readable, clean, and structured with a tinge of customization. I tried to make it easy to find your bearings and avoid causing overwhelm with visual distractions. Looks-wise, I wanted something that felt warm and exuded a minimum of personality. Lastly, I wanted to avoid burning my readers' retina^[Why do all light themes need to be so fricking white?!].

I initially got inspired by a random complementary palette on [Pigment by ShapeFactory](https://pigment.shapefactory.co/). Then again, I've always had a soft spot for orange and blue.

I did my first very basic tests (i.e. colors and fonts) on Figma. However, I iterated on most of the design directly in HTML & CSS.

I use Affinity Designer v2 to conceive the logos and other visual assets.

The fonts used are Sora for paragraphs and Lora for titles and quotes.

### Technical Stack

The website is built with [Eleventy](https://www.11ty.dev/) and hosted on [Netlify](https://www.netlify.com/) (which are both great). You can find the [source code on Github](https://github.com/ashtrail/thoughtfulinquiry.com).

I used [eleventy-base-blog](https://github.com/11ty/eleventy-base-blog) and [eleventy-excellent](https://github.com/madrilene/eleventy-excellent) as templates for the codebase.

The side notes are based on [Tufte CSS](https://edwardtufte.github.io/tufte-css/) and the custom markdown parser is heavily based [on 11d.im's code](https://11d.im/notices/md-tufte/).

## About the Author

My name is Arthur. I'm {% authorAge %} years old. I was born and live in France, so French is my mother tongue, but I'm fluent in English thanks to my Canadian mother. Since I enjoy writing in both languages, I chose the latter to have a broader reach.

<img class="author-portrait" src="/img/portrait.jpg" alt="author portrait" width="150" height="150">

I do all the writing, designing, and programming on this website.

If I had to describe what I do, I guess I'd say I'm a professional overthinker with an artistic streak and expertise in dabbling. If that's too open for your taste and you must insist on some more tangible credentials, I have a degree in computer programming and currently work as a web developer. I also studied psychology a little at some point.

### Contact info

You can email me at <span class="email">{{ metadata.author.email | obfuscateEmail | safe }}</span>.
