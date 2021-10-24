function setInputAttr(obj, val) {
	obj.setAttribute("type", "text");
	obj.setAttribute("name", val);
	obj.setAttribute("placeholder", val);
}

function setName(obj, val) {
	obj.setAttribute("value", val);
}

function buildForm(form) {
	const container = document.createElement("div");
	const title = document.createElement("input");
	const username = document.createElement("input");
	const textarea = document.createElement("textarea");
	const submit = document.createElement("button");

	container.classList.add("container");
	setInputAttr(title, "title");
	setName(title, "Post-Title");
	setInputAttr(username, "username");
	setName(username, "James Pickering");

	submit.setAttribute("type", "submit");
	submit.classList.add("btn");
	submit.innerHTML = "Create Post";

	form.appendChild(title);
	form.appendChild(username);
	form.appendChild(textarea);
	form.appendChild(submit);
	container.appendChild(form);
	document.body.appendChild(container);
}

document.addEventListener(
	"DOMContentLoaded",
	function () {
		const form = document.createElement("form");
		form.setAttribute("action", "");
		buildForm(form);
		form.addEventListener("submit", function (e) {
			e.preventDefault();
			const now = new Date();
			let title = document.querySelector('input[name="title"]').value;
			const slug =
				now.getFullYear() + "-" + now.getMonth() + "-" + now.getDate();
			const datestamp =
				now.getFullYear() +
				"/" +
				now.getMonth() +
				"/" +
				now.getDate() +
				", " +
				now.getHours() +
				":" +
				now.getMinutes();
			let username = document.querySelector('input[name="username"]').value;
			let img = "/assets/asset.png";
			let body =
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iure nesciunt autem soluta ex hic.";

			const markdown =
				slug +
				"-" +
				title +
				"\n" +
				"# " +
				title +
				"\n" +
				"## by " +
				username +
				"\n" +
				"### " +
				datestamp +
				"\n" +
				"![alt](" +
				img +
				")" +
				"\n" +
				"\n" +
				body;
			console.log(markdown);
			document.querySelector("textarea").innerHTML = markdown;
		});
	},
	false
);
