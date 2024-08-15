/****menu***/
$(function() {
	$(".rili").sudyPubdate({
		target:"div:eq(0)",			// 日期元素
		lang: "en",					//	月份语言，支持"en"英文，"cn"中文, "num"数字，默认为数字
		separator:"-",				// 文章日期之间分隔符的，默认是后台输出的"-"号
		format:"年月日",			// 文章日期格式，默认为年月日
		tpl: '<div class="sudy-pubdate"><span class="pubdate-month">%d%</span><span class="pubdate-day">%m%</span></div>'   // 自定义输出格式  %Y%代表年，%m%代表月, %d%代表日, %w%代表星期, %M%代表翻译后月份，%W%代表翻译后星期
	});
});

window.onload = function() {
    alert("Window onload triggered.");
    console.log("JavaScript loaded and running.");

    // Step 1: 检查目标元素是否存在
    var newsListDiv = document.querySelector('.column-news-list.clearfix[frag="窗口9"][portletmode="simpleList"]');
    console.log(newsListDiv); // 检查是否选中了正确的元素
    if (!newsListDiv) {
        alert("Target div not found!");
        return; // 如果没有找到目标元素，停止执行
    }

    // Step 2: 检查子元素数量
    var childDivs = newsListDiv.children;
    console.log("Child div count: ", childDivs.length); // 输出子元素数量

    // Step 3: 如果只有一个子元素 div
    if (childDivs.length === 1) {
        alert("Only one child div found!");

        // Step 4: 查找 .wp-column-news 元素
        var wpColumnNews = document.querySelector('.wp-column-news');
        console.log(wpColumnNews); // 检查是否选中了正确的元素
        if (!wpColumnNews) {
            alert(".wp-column-news element not found!");
            return; // 如果没有找到 .wp-column-news 元素，停止执行
        }

        // Step 5: 创建并插入新的 div
        var newDiv = document.createElement('div');
        newDiv.className = 'test';
        wpColumnNews.parentNode.insertBefore(newDiv, wpColumnNews);
        console.log("New 'test' div added.");
        alert("New 'test' div added successfully!");
    }
};
