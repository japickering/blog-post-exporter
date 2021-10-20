function setAttr(obj, val) {
	obj.setAttribute("type", "text");
	obj.setAttribute("name", val);
	obj.setAttribute("placeholder", val);
	obj.setAttribute("required", "true");
	obj.setAttribute("aria-required", "true");
}

function buildForm(form) {
	const container = document.createElement("div");
	const title = document.createElement("input");
	const author = document.createElement("input");
	const textarea = document.createElement("textarea");
	const submit = document.createElement("button");

	container.classList.add("container");
	setAttr(title, "title");
	setAttr(author, "author");
	textarea.innerHTML =
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iure nesciunt autem soluta ex hic.";

	submit.setAttribute("type", "submit");
	submit.classList.add("btn");
	submit.innerHTML = "Create Post";

	form.appendChild(title);
	form.appendChild(author);
	form.appendChild(textarea);
	form.appendChild(submit);
	container.appendChild(form);
	document.body.appendChild(container);
}

document.addEventListener( "DOMContentLoaded", function () {
		const form = document.createElement("form");
		form.setAttribute("action", "");
		buildForm(form);
		form.addEventListener("submit", function (e) {
			e.preventDefault();
			const now = new Date();
			const slug =
				now.getFullYear() + "-" + now.getMonth() + "-" + now.getDate();
			let title = document.querySelector('input[name="title"]').value;
			let author = document.querySelector('input[name="author"]').value;
			let img = "/assets/featured.png";
			let body = document.querySelector("textarea").innerHTML;
			let markdown =
				"# " +
				title +
				"\n" + "\n" +
				"## by " +
				author +
				"\n" + "\n" +
				"### " +
				slug +
				"\n" + "\n" +
				"![" +
				img +
				"](" +
				img +
				")" +
				"\n" + "\n" +
				body;
			console.log(markdown);
		});
	},
	false
);
