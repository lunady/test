$(function(){
	function page(){
		this._initField();
	}
	page.prototype = {
		constructor : page,
		_init : function(id){
			this.pageEl = $("<ul class='pagination'></ul>").appendTo($(id));
			this._bindEvents();
			
		},
		_initField :function(){
			this.pageIndex = this.pageIndex || 1; //当前页
			this.pageSize = this.pageSize || 10; //每页显示数据数
			this.pageTotal = 1;                  //总页数
		},
		_renderPage :function(){
			
			var array = [];
			if(this.pageIndex <= 1){
				array.push("<li class='disabled'>");
			}else {
				array.push("<li classs='fistPage'>");
			}
			array.push("<a href='#' aria-label='Previous'><span aria-hidden='true'>首页</span></a></li>");
			if(this.pageTotal<11){
				var i=0;
				for( var  i = 0 ;i<this.pageTotal;i++){
					if(this.pageIndex == (i+1)){
						array.push("<li id='pager$"+ (i+1)+" 'class='page active'><a href='javascript:void(0)'>"+ (i+1) +"</a></li>");
					}
					else{
						array.push("<li id='pager$" +(i+1) + " 'class='page'><a href='javascript:void(0)'>"+ (i+1) +"</a></li>")
					}
				}
			}else {
                var leftDot = 0, rightDot = 0, start = 0, end = 0;

                if (this.pageIndex <= 6) {
                    leftDot = this.pageTotal - 13;
                    rightDot = 0;
                    start = 9;
                    end = -1;
                } else if (this.pageIndex >= this.pageTotal - 6) {
                    rightDot = this.pageTotal - 13;
                    leftDot = 0;
                    start = -1;
                    end = 3
                } else {
                    start = 3;
                    leftDot = this.pageIndex - 4 - start;
                    end = this.pageIndex -(-2);
                    rightDot = this.pageTotal - 6 - this.pageIndex;
                }
                
                for (var i = 0; i < this.pageTotal; i++) {
                    if (i == start) {
                        array.push('<li class="disabled"><a href="javascript:void(0)">...<span class="sr-only">(current)</span></a></li>');
                        i += leftDot;
                    } else if (i == end) {
                        array.push('<li class="disabled"><a href="javascript:void(0)">...<span class="sr-only">(current)</span></a></li>');
                        i += rightDot;
                    } else {
                        var active = '';
                        if (this.pageIndex == i + 1) {
                            active += 'active ';
                        }
                        array.push('<li id="pager$' + (i + 1) + '" class="' + active + 'page"><a href="javascript:void(0)">' + (i + 1) + '<span class="sr-only">(current)</span></a></li>');
                    }
                }  
            }
			if(this.pageIndex == this.pageTotal){
				array.push("<li class='disabled'>")
			}else{
				array.push("<li class='lastPage'>")
			}
			array.push("<a href='#' aria-label='Next'><span aria-hidden='true'>末页</span></a></li>");
			this.pageEl.html(array.join(''));
			
			
		},
		_setData:function(total){
			this.pageTotal = Math.ceil(total/this.pageSize);
			this._renderPage();
			
		},
		_bindEvents:function(){
			this.pageEl = $(".pagination");
			this.pageEl.on("click",".page",this._onPageClick.bind(this));
			
			
		},
		_onPageClick:function(e){
			var selector =	e.currentTarget;
			var index = selector.id.split("$")[1];
			this.pageIndex = index;
			/*if(index == this.pageTotal-1){
				$.ajax({
					type:"post",
					url:url,
					datatype:"json",
					data:"",
					success:function(result){
						this._renderPage();
					}
				})
			}*/
			this._renderPage();
			
		},
		setPage:function(id,total){
			this._init(id);
			this._setData(total);
		}

	}
	var Page = new page();
		Page.setPage(page1,200);
})