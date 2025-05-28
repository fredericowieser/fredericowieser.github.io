# Making A Hugo Website

Hugo is a static site generator for creating fast and fairly complex websites, written in Go. When using you do not have to be familiar with Go and it is even possible to only have to write Markdown files when making your own website. When I have used it though I have found it very useful to know some HTML/CSS and Javascript, these tools allow you to customise your website much more and have helped me to tailor the websites I've made in the past to have great features such as tools to pull information from other sites to then be displayed or even to implement your own commenting system.

The use cases are pretty wide. I myself have made Hugo powered websites for the technical documentation of a few teams at one of my previous roles and have also now used it to write the website you are most likely reading this on at https://fredericowieser.github.io/.

## How to get started?

I would recommend going to the [Quick start | Hugo](https://gohugo.io/getting-started/quick-start/) guide. After that direct yourself to the [Complete List | Hugo Themes](https://themes.gohugo.io/) where you can pick out a base template to then customise and work on, I have found this to be the fastest way to achieving a Minimal Viable Product. All the themes will have git repositories available for you to then build on locally.

## Examples Of What Can Be Done In This Blog

This blog post uses Markdown, and I'll demonstrate some of the cool things you can include!

### Code Examples

You can easily include code snippets in your Hugo posts. Here's an example of a simple HTML structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Hugo Website</title>
</head>
<body>
    <h1>Hello from Hugo!</h1>
    <p>This is a simple paragraph.</p>
</body>
</html>
```

And here's a little bit of CSS to style it:

```css
body {
    font-family: sans-serif;
    line-height: 1.6;
    margin: 20px;
}

h1 {
    color: #333;
}
```

You can also show more complex code, like a Go function:

```go
package main

import "fmt"

func main() {
    fmt.Println("This is a Go program!")
}
```

### LaTeX for Mathematical Expressions

If you need to include mathematical equations, you can use LaTeX syntax. Here's an inline example: The famous equation $E=mc^2$ relates energy and mass.

And here's a display math example:

$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$

Another example, the quadratic formula:
$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$

And even:

\begin{CD}
   A @>a\>> B \\\\
@VbVV @AAcA \\\\
   C @= D
\end{CD}

### More...

To read more about this checkout the documentation website for this theme I am basing my website on...
- https://hugoloveit.com/theme-documentation-built-in-shortcodes/
- https://hugoloveit.com/theme-documentation-extended-shortcodes/
- https://hugoloveit.com/basic-markdown-syntax/
