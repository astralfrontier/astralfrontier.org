---
date: '2020-02-20T05:52:58.000Z'
title: From Markdown to PDFs
path: /from-markdown-to-pdfs
description: How I'm using Pandoc to separate content and layout
featuredImage: ./featured.jpg
tags:
  - game design diary
---
    


For the much-delayed WITCH game, I wanted to produce some nice-looking playbooks and text, but I also wanted to make a lot of fast edits to the material. I previously created a playtest PDF using Scribus, but now that I know more about LaTeX, I wanted to try something new.

I also read this article:

http://www.danielallington.net/2016/09/the-latex-fetish/

The gist that I got is: "don't use LaTeX as your writing tool", and it follows that you ought to separate your content from your typography. Can I do that? Sure, with [Pandoc](https://pandoc.org/). Pandoc is a universal format converter. It can pull structured data from a remarkable number of sources, and write it out in the same range of formats. For my purposes, Pandoc can convert Markdown (with YAML frontmatter) into LaTeX, and hence to PDF.

Here's the raw Markdown. As you can see, most of it is actually structured data in the frontmatter. [https://raw.githubusercontent.com/Astral-Frontier-Games/witch/master/playbooks/idiot.md](https://raw.githubusercontent.com/Astral-Frontier-Games/witch/master/playbooks/idiot.md)

I created a Pandoc template file like this: [https://raw.githubusercontent.com/Astral-Frontier-Games/witch/master/pandoc/templates/playbook.latex](https://raw.githubusercontent.com/Astral-Frontier-Games/witch/master/pandoc/templates/playbook.latex)

And finally, a short script to pull it together: [https://raw.githubusercontent.com/Astral-Frontier-Games/witch/master/build.sh](https://raw.githubusercontent.com/Astral-Frontier-Games/witch/master/build.sh)

The net effect isn't pretty to look at right now - but I haven't done any work on bringing in better fonts or formatting either. Now that the basics are done, I can move on with that.

Can I do the same to the main body of the rules? Sure - write game rules in familiar Markdown, write a template file for LaTeX, and convert. The last step of the process will be to assemble these different outputs, like the cover page, the main body, and the playbooks, into a final PDF.

Going a step further, I can even use Gatsby or another static site generator to publish the game as an online SRD, with downloadable PDF. If someone wanted to fork the game and make their own version, add playbooks, or do anything else, they could do so very easily, and have the same all-in-one package.


    