// export a blog post in markdown format
function generateBlogPost(slug, date, title, summary, author, img, content) {
	const h1 = "#";
	const h2 = "##";
	const h3 = "###";
	const h4 = "####";

	return h4 + ' slug: ' + slug + '-' + title.replace(" ", "-").toLowerCase() + '.md\n' +
    '\n' +
    h1 + ' ' + title + '\n' +
		h4 + ' ' + date.toLocaleString() + '\n' +
    h4 + ' Author: ' + author + '\n' +
    h2 + ' ' + summary + '\n' +
    '![alt](' + img + ')' + '\n' +
    '\n' +
    content;
}

function setAttr (target) {
	target.setAttribute("value", target.value);
}

function init() {
	const date = new Date();
	const slug = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
	const title = document.querySelector("#title").getAttribute("value");
	const author = document.querySelector("#username").getAttribute("value");
	const summary = "lorem ipsum dotor ipit amet, consectetur adipisicing elit.";
	const img = "/assets/featured.png";
	const content = "lorem ipsum dotor ipit amet, consectetur adipisicing elit. Temporibus in eveniet vel animi veritatis quae rerum dolorum corrupti illo maiores.";
	const blogPost = generateBlogPost( slug, date, title, summary, author, img, content );

	// output
	console.log(blogPost);
	document.querySelector("#output").innerHTML = blogPost;
}

document.addEventListener("DOMContentLoaded", function () {
	init();
}, false);
