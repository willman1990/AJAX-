jQueryѧϰ�ʼǣ�����̳̣�
	jQuery��Ϊһ��JavaScript�����⣬����ؼ���JS��̡�
	
һ��jQuery���
	1.1 ʲô��jQuery
		jQuery�����ͨ��һ�м򵥵ı�Ǳ���ӵ���ҳ�С��������¹��ܣ�
			HTMLԪ��ѡȡ
			HTMLԪ�ز���
			CSS����
			HTML�¼�����
			JavaScript��Ч�Ͷ���
			HTML DOM�������޸�
			AJAX
			Utilities
			ps: jQuery���ṩ�����Ĳ����
	1.2 jQuery��װ	
		jQuery����һ��JS�ļ������Դ�jquery.com���أ�������ʹ��HTML��<script>��ǩ���á�
	1.3 jQuery�﷨
		ͨ��jQuery������ѡȡ����ѯ��query��HTMLԭɫ��������ִ�С���������actions����
		���﷨��ͨ��ѡȡHTMLԪ�أ�����ѡȡ��Ԫ��ִ��ĳЩ������
		�����﷨��
			$(selector).action() // ��Ԫ����$����jQuery  ѡ���selector����ѯ���͡����ҡ�HTMLԪ��  actionִ�ж�Ԫ�صĲ�����
			ʵ����
				$(this).hide() --- ���ص�ǰԪ��
				$("p").hide() --- �������� <p> Ԫ��
				$("p.test").hide() --- ��������class="test"��<p>Ԫ��
				$("#test").hide() --- ��������id="test"��Ԫ��
			�ĵ������¼���Ϊ�˷�ֹ�ĵ�����ȫ���أ�������֮ǰ����jQuery���룬����DOM������ɺ�ſ��Զ�DOM���в�����
				��ʽһ��  $(document).ready(function(){
								// jQuery����
							});
				��ʽ����  $(function(){
								// jQuery����
						  }
	1.4 jQueryѡ����
		jQueryѡ������������HTMLԪ����ɻ򵥸�Ԫ�ؽ��в���������Ԫ�ص�id���ࡢ���͡����Եȡ����ҡ�HTMLԪ�أ�������ѡ����������Ԫ���ſ�ͷ��$()��
		1) ����Ԫ������ѡȡԪ��     $("p")
			ps: �û������ť������ <p> Ԫ�ض����أ�
		    $(document).ready(function(){
				$("button").click(function(){
					$("p").hide();
				});
			});
			
		2) #idѡ����ͨ��HTMLԪ�ص�id����ѡȡ�ƶ���Ԫ��    $("#test")
			ps: ���û������ť���� id="test" ���Ե�Ԫ�ؽ������أ�
			$(document).ready(function(){
				$("button").click(function(){
					$("#test").hide();
				});
			});
			
		3) ��ѡ��������ͨ��ָ����class����Ԫ��     $(".test")
			ps: �û������ť�����д��� class="test" ���Ե�Ԫ�ض����أ�
			$(document).ready(function(){
				$("button").click(function(){
					$(".test").hide();
				});
			});
		4) ����ʵ��
			�﷨						����	
			$("*")					ѡȡ����Ԫ��	
			$(this)					ѡȡ��ǰ HTML Ԫ��	
			$("p.intro")				ѡȡ class Ϊ intro �� <p> Ԫ��	
			$("p:first")				ѡȡ��һ�� <p> Ԫ��	
			$("ul li:first")			ѡȡ��һ�� <ul> Ԫ�صĵ�һ�� <li> Ԫ��	
			$("ul li:first-child")		ѡȡÿ�� <ul> Ԫ�صĵ�һ�� <li> Ԫ��	
			$("[href]")				ѡȡ���� href ���Ե�Ԫ��	
			$("a[target='_blank']")	ѡȡ���� target ����ֵ���� "_blank" �� <a> Ԫ��	
			$("a[target!='_blank']")	ѡȡ���� target ����ֵ������ "_blank" �� <a> Ԫ��	
			$(":button")				ѡȡ���� type="button" �� <input> Ԫ�� �� <button> Ԫ��	
			$("tr:even")				ѡȡż��λ�õ� <tr> Ԫ��	
			$("tr:odd")				ѡȡ����λ�õ� <tr> Ԫ��
	1.5 jQuery�¼�
		ҳ��Բ�ͬ�����ߵ���Ӧ�����¼����¼��������ָ���ǵ�HTML�з���ĳЩ�¼�ʱ�����õķ������磺��Ԫ����
		�ƶ���ꡢѡȡ��ѡ��ť�Լ����Ԫ�ء�
			// ΪԪ��<p>ָ������¼�
			$("p").click();
			// ���崥���¼�
			$("p").click(function(){
				// ������ִ�еĴ���
			});
		���õ�jQuery�¼�������
			1) $(document).ready()    �÷��������������ĵ���ȫ�������ִ�к�����
			2) click()     click() �����ǵ���ť����¼�������ʱ�����һ���������ú������û���� HTML Ԫ��ʱִ�С�
				$("p").click(function(){
					$(this).hide();
				});
			3) dblclick()    ˫��Ԫ��ʱ�������¼���
			4) mouseenter() &  mouseleave()    ����괩�����뿪Ԫ��ʱ������
			5) mousedown()  &  mouseup()  ����Ԫ���Ϸ����»��ɿ����ʱ������
			6) hover()    hover()��������ģ������ͣ�¼���������ƶ���Ԫ����ʱ���ᴥ��ָ���ĵ�һ������(mouseenter);������Ƴ����Ԫ��ʱ��
				�ᴥ��ָ���ĵڶ�������(mouseleave)��
			7) focus()  &  blur()    ��Ԫ�ػ�ý���ʱ����focus�¼���ʧȥ����ʱ����blur�¼���
				$(document).ready(function(){
					$("input").focus(function(){
						$(this).css("background-color","#cccccc");
					});
					$("input").blur(function(){
						$(this).css("background-color","#ffffff");
					});
				});
				
����jQuery HTML
	2.1 jQuery����
		1) test()    ���û򷵻���ѡԪ�ص��ı�����
		2) html()    ���û򷵻���ѡԪ�ص����ݣ�����HTML��ǣ�
		3) val()     ���û򷵻ر��ֶε�ֵ
		4) attr()    ��ȡ����ֵ
			���ӣ�
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
				<p id="test1">����һ�����䡣</p>
				<p id="test2">��������һ�����䡣</p>
				<p>�����: <input type="text" id="test3" value="����̳�"></p>
				<p id="runoob" href="http://www.runoob.com">"����̳�"</p>
				<button id="btn1">�����ı�</button>
				<button id="btn2">���� HTML</button>
				<button id="btn3">����ֵ</button>
				<button>�޸�����</button>
				</body>
			
	2.2 jQuery���Ԫ��
		1) append()   �ڱ�ѡԪ�ؽ�β��������
		2) prepend()   �ڱ�ѡԪ�ؿ�ͷ��������
		3) after()    �ڱ�ѡԪ��֮���������
		4) before()   �ڱ�ѡԪ��֮ǰ��������
	2.3 jQueryɾ��Ԫ��
		1) remove()    ɾ����ѡԪ�ؼ�����Ԫ��
		2) empty()     �ӱ�ѡԪ����ɾ������Ԫ��
			$("#div1").remove();
			$("#div1").empty();
			// ɾ��class=��italic��������<p>Ԫ��
			$("p").remove(".italic");
		
		
		
			
			
			
			
			
			
			
			
			