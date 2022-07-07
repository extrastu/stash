const holidays = [
	{
		name: "👷‍♂️ 2022 劳动节",
		date: "2022-04-30",
		holidays:
			"劳动节放假5天，从2022年4月30日起放假至5月4日止（5月5号上班），共5天。",
		startDate: "2022-04-30",
	},
	{
		name: "🛠️ 05-07 补班",
		date: "2022-05-07",
		holidays: "今天是周六，补班！",
		startDate: "",
	},
	{
		name: "👩 2022 母亲节",
		date: "2022-05-08",
		holidays: "记得给妈妈打电话说一句：妈妈，我爱你！",
		startDate: "",
	},
	{
		name: "💝 2022 520",
		date: "2022-05-20",
		holidays: "520不放假，但也别忘了给女朋友买礼物哦！",
		startDate: "",
	},
	{
		name: "🍭 2022 六一国际儿童节",
		date: "2022-06-01",
		holidays: "六一儿童节不放假，但也别忘了给孩子买礼物哦！",
		startDate: "",
	},
	{
		name: "🐲 2022 端午节",
		date: "2022-06-03",
		holidays:
			"端午节放假3天，从2022年6月3日起放假至6月5日止（6月6号上班），共3天。",
		startDate: "2022-06-03",
	},
	{
		name: "🍎 2022 苹果秋季发布会",
		date: "2022-06-06",
		holidays: "苹果秋季发布会不放假，但值得一看！",
		startDate: "",
	},
	{
		name: "👨 2022 父亲节",
		date: "2022-06-19",
		holidays: "记得给爸爸打电话说一句：爸爸，我爱你！",
		startDate: "",
	},
	{
		name: "🍉 2022 夏至",
		date: "2022-06-21",
		holidays: "夏至不放假，是时候放暑假了！",
		startDate: "",
	},
	{
		name: "🎖️ 2022 建军节",
		date: "2022-08-01",
		holidays: "",
		startDate: "",
	},
	{
		name: "🐶 2022 七夕",
		date: "2022-08-04",
		holidays: "七夕不放假，但也别忘了给女朋友买礼物哦！",
		startDate: "",
	},
	{
		name: "🥮 2022 中秋节",
		date: "2022-09-10",
		holidays:
			"中秋节放假3天，从2022年9月10日起放假至9月12日止（9月13号上班），共3天。",
		startDate: "2022-09-10",
	},
	{
		name: "🎉 2022 国庆节",
		date: "2022-10-01",
		holidays:
			"国庆节放假7天，从2022年10月1日起放假至10月7日止（10月8号上班），共7天。",
		startDate: "2022-10-01",
	},
	{
		name: "🧑‍💻 2022 程序员节",
		date: "2022-10-24",
		holidays: "hello，world！",
		startDate: "",
	},
	{
		name: "👻 2022 万圣节",
		date: "2022-10-31",
		holidays: "不给糖就没有万圣节！",
		startDate: "",
	},
	{
		name: "❄️ 2022 冬至",
		date: "2022-12-22",
		holidays: "记得吃饺子哦！",
		startDate: "",
	},
	{
		name: "🎄 2022 圣诞节",
		date: "2022-12-25",
		holidays: "",
		startDate: "",
	},
	{
		name: "🍚 2022 腊八",
		date: "2022-12-30",
		holidays: "过了腊八，就是年！",
		startDate: "",
	},
	{
		name: "🥚 2023 元旦",
		date: "2023-01-01",
		holidays: "",
		startDate: "",
	},
	{
		name: "🧨 2023 除夕",
		date: "2023-01-21",
		holidays: "新年快乐！🧨🧨🧨",
		startDate: "",
	},
	{
		name: "㊗️ 2023 农历新年",
		date: "2023-01-22",
		holidays: "新年快乐！🧨🧨🧨",
		startDate: "",
	},
	{
		name: "🌕 2023 元宵节",
		date: "2023-02-05",
		holidays: "",
		startDate: "",
	},
];

// 获取当前日期 xxxx-xx-xx,
const date = new Date();
const year = date.getFullYear();
const month = (date.getMonth() + 1).padStart(2, "0");
const day = date.getDate().padStart(2, "0");
const currentDate = `${year}-${month}-${day}`;
const currentHoliday = holidays.find((holiday) => holiday.date === currentDate);
let tags = [];
// 获取 currentDate 和  假期list 中的日期 的差 几天
const diffDays = holidays.map((holiday) => {
	const diff = Math.floor(
		new Date(holiday.date).getTime() - new Date(currentDate).getTime()
	);
	let diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24));
	let text = "距离";
	let text1 = "还有";
	if (diffDays < 0) {
		text = ``;
		text1 = `过去`;
		// diffDays = Math.abs(diffDays);
	}
	if (diffDays === 0) {
		text = "";
		text1 = "就是";
		tags.push(holiday.name);
	}
	if (diffDays > 0 && diffDays <= 7) {
		tags.push(holiday.name);
	} else if (!tags.length && diffDays > 7 && diffDays <= 14) {
		tags.push(holiday.name);
	} else if (!tags.length && diffDays > 14 && diffDays <= 21) {
		tags.push(holiday.name);
	} else if (!tags.length && diffDays > 21 && diffDays <= 28) {
		tags.push(holiday.name);
	}
	return {
		text: `${text} ${holiday.name} ${holiday.date} ${text1} ${
			diffDays == 0 ? "今天" : diffDays + "天"
		} `,
		diffDays,
		holiday: holiday.name,
		isShow:
			(diffDays <= 7 && diffDays >= 0) || (diffDays <= 14 && diffDays > 7),
		desc: holiday.holidays,
	};
});

$done({
	title: `今天${currentDate}`,
	content: diffDays
		.filter((item) => item.isShow)
		.map((item) =>
			item.diffDays == 0 ? item.text + "\n" + item.desc : item.text
		),
	icon: "calendar",
	backgroundColor: "#409EFF",
});
