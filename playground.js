var sandbox;
function go() {

	sandbox = document.getElementById('sandbox');
	logHolder = document.createElement('ol');
	sandbox.appendChild(logHolder);

	window.onmessage = function(data) {
		log(data);
	};
	makeWorker();
}

var logHolder;
function log () {
	var args = [].slice.call(arguments);

	args.forEach(function(arg) {
		var node = document.createElement('li');
		node.innerText = arg;
		logHolder.appendChild(node);
	});

	while(logHolder.childNodes.length > 500) {
		logHolder.removeChild(logHolder.firstChild);
	}
}

function makeWorker() {
	return new Worker('worker.js');
}