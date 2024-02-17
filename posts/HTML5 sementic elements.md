HTML5 semantic elements provides a clearer structure for a web documents. Here are some semantic elements:
1. <header> : This tag is used for adding header to page or section.
for example:
```html
<!DOCTYPE html>
<html>
    <head>
        <title>HTML5 semantic elements</title>
    </head>
    <body>
        <header>
        </header>
    </body>
</html>
```
The output will be:
![Header tag example](/p2s1.png)

2. <nav> :This tag is used to create navigation bar of the website.
for example:
```html
<!DOCTYPE html>
<html>
    <head>
        <title>HTML5 semantic elements</title>
    </head>
    <body>
        <nav>
            <a href="/">Website Logo</a>
            <a href="/home">Home</a>
            <a href="/about">About</a>
            <a href="/services">Services</a>
        </nav>
    </body>
</html>
```
The output will be:
![Nav tag example](/p2s2.png)

3. <main> : It contains the main contents of website excluding headers, footers & sidebars.
for example:
```html
<!DOCTYPE html>
<html>
    <head>
        <title>HTML5 semantic elements</title>
    </head>
    <body>
        <main>
            <p>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. 
                It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
            </p>
        </main>
    </body>
</html>
```
The output will be:
![Main tag example](/p2s3.png)

4. <article> : It represents the self-contained piece of content like news article or blog post .
for example:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML5 semantic tags</title>
    <style>
        article {
            border: 1px solid #ccc;
            padding: 10px;
            margin: 10px 0;
        }
    </style>
</head>
<body>

    <header>
        <h1>Blog Title</h1>
    </header>

    <nav>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Categories</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>

    <article>
        <h2>Article Title</h2>
        <p>Published on: <time datetime="2024-02-17">February 17, 2024</time></p>
        <p>This is the content of the article. It can contain text, images, and other media elements.</p>
    </article>

    <footer>
        <p>&copy; 2024 Blog Name</p>
    </footer>

</body>
</html>
```
The output will be:
![screenshot 2](/p2s4.png)

5. <section> : Groups related to content together & typically has its own heading.
for example:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>HTML5 semantic tags</title>
    <style>
        section {
            border: 1px solid #ccc;
            padding: 10px;
            margin: 10px 0;
        }
    </style>
</head>
<body>

    <header>
        <h1>Website Title</h1>
    </header>

    <nav>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>

    <section>
        <h2>Section 1</h2>
        <p>This is the content of the first section.</p>
    </section>

    <section>
        <h2>Section 2</h2>
        <p>This is the content of the second section.</p>
    </section>

    <footer>
        <p>&copy; 2024 Website Name</p>
    </footer>

</body>
</html>
```
The output will be:
![aside tag example](/p2s5.png)

Using these semantic elements not only improves document structure but also aids accessibility and search engine optimization.