$httpClient.get("https://tenapi.cn/comment/", function (error, response, data) {
	const { song, content, name, sing } = data.data;
	console.log(JSON.stringify(data));
	$done({
		title: "网易云热评",
		content:
			"网易云热评 | " +
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
