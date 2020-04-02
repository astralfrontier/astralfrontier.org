---
date: '2020-01-26T09:47:41.000Z'
title: 'Flip-a-Card: More TeX!'
path: /flip-a-card-more-tex
description: Progress on typesetting cards with TeX
category: flip-a-card
tags:
  - flip-a-card
  - game design diary
---
    


I've put some time into learning TeX, starting with using [Pandoc](https://pandoc.org/) to output TeX from HTML. With some massaging, research, and experimentation, I've got a sample card that looks like this:

![](document-1-1.png)

The input to that looks like this:

```
\documentclass[parskip]{scrartcl}
\usepackage[paperwidth=3in, paperheight=5in, margin=3mm]{geometry}
\usepackage[utf8]{inputenc}

% Support fancy section stuff
\usepackage{sectsty}

% Support underlines in sections
\usepackage[normalem]{ulem}

% Font selection supplied by pandoc
\usepackage{lmodern}
\usepackage{ifxetex,ifluatex}
\usepackage{fixltx2e} % provides \textsubscript
\ifnum 0\ifxetex 1\fi\ifluatex 1\fi=0 % if pdftex
\usepackage[T1]{fontenc}
\else % if luatex or xelatex
\ifxetex
\usepackage{mathspec}
\else
\usepackage{fontspec}
\fi
\defaultfontfeatures{Ligatures=TeX,Scale=MatchLowercase}
\fi

% use microtype if available
\IfFileExists{microtype.sty}{%
	\usepackage{microtype}
	\UseMicrotypeSet[protrusion]{basicmath} % disable protrusion for tt fonts
}{}
\IfFileExists{parskip.sty}{%
	\usepackage{parskip}
}{% else
	\setlength{\parindent}{0pt}
	\setlength{\parskip}{6pt plus 2pt minus 1pt}
}
\setlength{\emergencystretch}{3em}  % prevent overfull lines
\providecommand{\tightlist}{%
	\setlength{\itemsep}{0pt}\setlength{\parskip}{0pt}}

% Sections are not numbered, and are underlined
\setcounter{secnumdepth}{0}
\sectionfont{\centering\underline}

% Document
\begin{document}
	\section{Card Name}
	Lorem Ipsum Text.
\begin{itemize}
	\tightlist
	\item[-] Bullet
	\item[-] Bullet
\end{itemize}
\vspace*{\fill}
\centering\emph{Rules text goes here}
\end{document}
```

As this is still a work in progress, there's plenty I don't understand (like some of the font and package stuff Pandoc pulled in).

What's left to do? Roughly in order of must-have to nice-to-have:

* Templating. I need this system to read from a CSV file and produce many pages, one card per page. I can either do that via TeX itself, or by doing it in another script.
* Related to that, automatic generation on git push. Every time I update the site, you should be able to download a new set of cards in PDF form.
* Icons and background images. I need the visuals on each card to show up as expected.
* Font choices. Right now these are awful fonts. I need to make sure they are big enough to be readable, and using font choices that people with visual issues can make out.


    