$httpClient.get("https://tenapi.cn/comment/", function (error, response, data) {
	const { song, content, name, sing } = data.data;
	console.log(song,content,name,sing);
	$done({
		title: "网易云热评",
		content:
			song +
			" - " +
			sing +
			"\n\n" +
			content +
			"\n\n" +
			"来自@" +
			name,
		backgroundColor: "#e31f00",
		icon: "music.note",
	});
});
