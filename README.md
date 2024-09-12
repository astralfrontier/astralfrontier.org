# astralfrontier.org

This is a static site using the [Zola](https://www.getzola.org/) static site generator.

It uses the [Bulma](https://bulma.io/) CSS toolkit.

## Adding content and building

You can use `npm run gulp:serve` to start a dev server, which will open the site in a browser window. This runs `zola serve --open` behind the scenes.

Running `npm run gulp` will build the static site but not serve it.

You can use `npm run new-blog` to kick off a script that generates a new blog post. You are responsible for providing a local copy of a banner image from the Internet.

Any git commit will trigger a build on Netlify, where the site is currently hosted. Look at `netlify.toml` for the commands that are run.

## Images

You have two choices for images:

1. Put them into `content/SECTION`, alongside Markdown files
2. Put them into `static`, where they're available at the root URL

To retroactively add an image from some URL, use `npm run add-banner`.

## Sass/CSS and JS components

Libraries like Bulma and fontawesome are managed via NPM. Static files are copied over by a Gulp task.

If I ever migrate past basic jQuery, I might include a JS build pipeline, but we don't need that right now.

## Error checking

You can look for broken links with wget, e.g.

`C:\ProgramData\chocolatey\lib\Wget\tools\wget  -r -nv --spider -o broken.log https://astralfrontier.org`

## Reports

You can generate reports on content metadata with `gulp report`, e.g.

```
npm run gulp report | findstr path | jq -r 'select(.extra?.icon? == null) | .path'
```

This will show all content by path that doesn't have an 'icon' field in the extra section of the front matter.