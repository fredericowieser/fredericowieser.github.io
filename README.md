# Portfolio Site

written in pure HTML5, CSS with Fontawesome.
DEMO: https://fredericowieser.github.io/
This project is divided in multiple submodules and plugin type files which can be easily implemented in any website:


# Things I want to Change
- [ ] Add Blog (Articles)
- [ ] Add Wieserpedia
- [ ] My Recommended Resources
	- [ ] Blogs
	- [ ] Music
	- [ ] Textbooks
	- [ ] Readingbooks
	- [ ] Free Online Courses
- [ ] My TimeLine
- [ ] CV
- [ ] Contracted Pricing if Interested
- [ ] Change Profile Picture
- [ ] Change Profile Picture Shape to Square
- [ ] Add following account on...
	- [ ] Code Wars
	- [ ] Leet Code
	- [ ] Kaggle
	- [ ] Hacker Rank

# Documentation
### GitHub Project fetcher

`js/github.js` - Fetches repos from GitHub user sorted by stars

Add this to your website

    <div id="github_projects" class="card">
        Loading...
    </div>
    <script src="js/github.js"></script>

### Name Slide

`js/slide.js` - Slides between multiple texts

Add this to your website

    <div class="bio grid-container">
        <div class="grid-item-start"><h1>I code with</h1></div>
        <div class="grid-item"><h1>NodeJs</h1></div>
        <div class="grid-item"><h1>Flutter</h1></div>
        <div class="grid-item"><h1>C++</h1></div>
        <div class="grid-item"><h1>Docker</h1></div>
        <div class="grid-item"><h1>Compose</h1></div>
        <div class="grid-item"><h1>MongoDB</h1></div>
        <div class="grid-item"><h1>HTML5</h1></div>
    </div>
    <script src="js/slide.js"></script>
