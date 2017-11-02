jQuery学习笔记（菜鸟教程）
	jQuery作为一个JavaScript函数库，极大地简化了JS编程。
	
一、jQuery简介
	1.1 什么是jQuery
		jQuery库可以通过一行简单的标记被添加到网页中。包含以下功能：
			HTML元素选取
			HTML元素操作
			CSS操作
			HTML事件函数
			JavaScript特效和动画
			HTML DOM遍历和修改
			AJAX
			Utilities
			ps: jQuery还提供大量的插件。
	1.2 jQuery安装	
		jQuery库是一个JS文件，可以从jquery.com下载，并可以使用HTML的<script>标签引用。
	1.3 jQuery语法
		通过jQuery，可以选取（查询，query）HTML原色，并对其执行“操作”（actions）。
		其语法是通过选取HTML元素，并对选取的元素执行某些操作。
		基础语法：
			$(selector).action() // 美元符号$定义jQuery  选择符selector“查询”和“查找”HTML元素  action执行对元素的操作。
			实例：
				$(this).hide() --- 隐藏当前元素
				$("p").hide() --- 隐藏所有 <p> 元素
				$("p.test").hide() --- 隐藏所有class="test"的<p>元素
				$("#test").hide() --- 隐藏所有id="test"的元素
			文档就绪事件：为了防止文档在完全加载（就绪）之前运行jQuery代码，即在DOM加载完成后才可以对DOM进行操作。
				方式一：  $(document).ready(function(){
								// jQuery代码
							});
				方式二：  $(function(){
								// jQuery代码
						  }
	1.4 jQuery选择器
		jQuery选择器允许您对HTML元素组成或单个元素进行操作。基于元素的id、类、类型、属性等“查找”HTML元素，其所有选择器都以美元符号开头：$()。
		1) 基于元素名称选取元素     $("p")
			ps: 用户点击按钮后，所有 <p> 元素都隐藏：
		    $(document).ready(function(){
				$("button").click(function(){
					$("p").hide();
				});
			});
			
		2) #id选择器通过HTML元素的id属性选取制定的元素    $("#test")
			ps: 当用户点击按钮后，有 id="test" 属性的元素将被隐藏：
			$(document).ready(function(){
				$("button").click(function(){
					$("#test").hide();
				});
			});
			
		3) 类选择器可以通过指定的class查找元素     $(".test")
			ps: 用户点击按钮后所有带有 class="test" 属性的元素都隐藏：
			$(document).ready(function(){
				$("button").click(function(){
					$(".test").hide();
				});
			});
		4) 更多实例
			语法						描述	
			$("*")					选取所有元素	
			$(this)					选取当前 HTML 元素	
			$("p.intro")				选取 class 为 intro 的 <p> 元素	
			$("p:first")				选取第一个 <p> 元素	
			$("ul li:first")			选取第一个 <ul> 元素的第一个 <li> 元素	
			$("ul li:first-child")		选取每个 <ul> 元素的第一个 <li> 元素	
			$("[href]")				选取带有 href 属性的元素	
			$("a[target='_blank']")	选取所有 target 属性值等于 "_blank" 的 <a> 元素	
			$("a[target!='_blank']")	选取所有 target 属性值不等于 "_blank" 的 <a> 元素	
			$(":button")				选取所有 type="button" 的 <input> 元素 和 <button> 元素	
			$("tr:even")				选取偶数位置的 <tr> 元素	
			$("tr:odd")				选取奇数位置的 <tr> 元素
	1.5 jQuery事件
		页面对不同访问者的响应叫做事件，事件处理程序指的是当HTML中发生某些事件时所调用的方法。如：在元素上
		移动鼠标、选取单选按钮以及点击元素。
			// 为元素<p>指定点击事件
			$("p").click();
			// 定义触发事件
			$("p").click(function(){
				// 触发后执行的代码
			});
		常用的jQuery事件方法：
			1) $(document).ready()    该方法允许我们在文档完全加载完后执行函数。
			2) click()     click() 方法是当按钮点击事件被触发时会调用一个函数。该函数在用户点击 HTML 元素时执行。
				$("p").click(function(){
					$(this).hide();
				});
			3) dblclick()    双击元素时触发该事件。
			4) mouseenter() &  mouseleave()    当鼠标穿过或离开元素时触发。
			5) mousedown()  &  mouseup()  当在元素上方按下或松开鼠标时触发。
			6) hover()    hover()方法用于模拟光标悬停事件。当鼠标移动到元素上时，会触发指定的第一个函数(mouseenter);当鼠标移出这个元素时，
				会触发指定的第二个函数(mouseleave)。
			7) focus()  &  blur()    当元素获得焦点时触发focus事件，失去焦点时触发blur事件。
				$(document).ready(function(){
					$("input").focus(function(){
						$(this).css("background-color","#cccccc");
					});
					$("input").blur(function(){
						$(this).css("background-color","#ffffff");
					});
				});
				
二、jQuery HTML
	2.1 jQuery捕获
		1) test()    设置或返回所选元素的文本内容
		2) html()    设置或返回所选元素的内容（包括HTML标记）
		3) val()     设置或返回表单字段的值
		4) attr()    获取属性值
			例子：
				<script>
				$(document).ready(function(){
				  $("#btn1").click(function(){
					$("#test1").text("Hello world!");
				  });
				  $("#btn2").click(function(){
					$("#test2").html("<b>Hello world!</b>");
				  });
				  $("#btn3").click(function(){
					$("#test3").val("RUNOOB");
				  });
				  $("button").click(function(){
					$("#runoob").attr("href","http://www.runoob.com/jquery");
				});
				</script>
				</head>

				<body>
				<p id="test1">这是一个段落。</p>
				<p id="test2">这是另外一个段落。</p>
				<p>输入框: <input type="text" id="test3" value="菜鸟教程"></p>
				<p id="runoob" href="http://www.runoob.com">"菜鸟教程"</p>
				<button id="btn1">设置文本</button>
				<button id="btn2">设置 HTML</button>
				<button id="btn3">设置值</button>
				<button>修改属性</button>
				</body>
			
	2.2 jQuery添加元素
		1) append()   在被选元素结尾插入内容
		2) prepend()   在被选元素开头插入内容
		3) after()    在被选元素之后插入内容
		4) before()   在被选元素之前插入内容
	2.3 jQuery删除元素
		1) remove()    删除被选元素及其子元素
		2) empty()     从被选元素中删除其子元素
			$("#div1").remove();
			$("#div1").empty();
			// 删除class=”italic“的所有<p>元素
			$("p").remove(".italic");
		
		
		
			
			
			
			
			
			
			
			
			