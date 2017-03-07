$(function(){
		

		function grid(){
			
			
			
		}
		grid.prototype = {
			constructor : grid,
			//初始化元素
			_init:function(id){
				
				this.tableEl = $("<table class='table table-bordered table-hover'></table>").appendTo($(id));
				this.theadEl = $("<thead></thead>").appendTo(this.tableEl);
				this.trEl = $("<tr></tr>").appendTo(this.theadEl);
			
				
			},
			_render:function(listField,data){

				for(var i=0;i<listField.length;i++){
					this.thEl = $("<th>"+listField[i]+"</th>").appendTo(this.trEl);
				}
				this.tbodyEl = $("<tbody></tbody>").appendTo(this.tableEl);
				
				for(var i=0; i < data.length;i++){
					this.trEl = $("<tr></tr>").appendTo(this.tbodyEl);
					this.tdEl = $("<td>"+ data[i].id +"</td>").appendTo(this.trEl);
					this.tdEl = $("<td>"+ data[i].name +"</td>").appendTo(this.trEl);
					this.tdEl = $("<td>"+ data[i].age +"</td>").appendTo(this.trEl);
					this.tdEl = $("<td>"+ data[i].job +"</td>").appendTo(this.trEl);
					this.tdEl = $("<td>"+ data[i].time +"</td>").appendTo(this.trEl);
					this.tdEl = $("<td>"+ data[i].reward +"</td>").appendTo(this.trEl);
				}
			},
			setGrid:function(id,listField,data){
				this._init(id);
				this._render(listField,data);
			}
		}
		
		
	    var data1 = [
	    	{
	    		"id":"1",
	    		"age":"22",
	    		"name":"peter",
	    		"job":"software engineer",
	    		"time":"2017年2月14日",
	    		"reward":"200￥"
	    	},
	    	{
	    		"id":"2",
	    		"age":"22",
	    		"name":"peter",
	    		"job":"software engineer",
	    		"time":"2017年2月14日",
	    		"reward":"200￥"

	    	},
	    	{
	    		"id":"3",
	    		"age":"22",
	    		"name":"peter",
	    		"job":"software engineer",
	    		"time":"2017年2月14日",
	    		"reward":"200￥"

	    	}
	    ]
	      var data2 = [
	    	{
	    		"id":"4",
	    		"age":"22",
	    		"name":"peter",
	    		"job":"software engineer",
	    		"time":"2017年2月14日",
	    		"reward":"200￥"
	    	},
	    	{
	    		"id":"5",
	    		"age":"22",
	    		"name":"peter",
	    		"job":"software engineer",
	    		"time":"2017年2月14日",
	    		"reward":"200￥"

	    	},
	    	{
	    		"id":"6",
	    		"age":"22",
	    		"name":"peter",
	    		"job":"software engineer",
	    		"time":"2017年2月14日",
	    		"reward":"200￥"

	    	}
	    ]
	      var data3 = [
	    	{
	    		"id":"4",
	    		"age":"22",
	    		"name":"peter",
	    		"job":"software engineer",
	    		"time":"2017年2月14日",
	    		
	    	},
	    	{
	    		"id":"5",
	    		"age":"22",
	    		"name":"peter",
	    		"job":"software engineer",
	    		"time":"2017年2月14日",
	    		

	    	},
	    	{
	    		"id":"6",
	    		"age":"22",
	    		"name":"peter",
	    		"job":"software engineer",
	    		"time":"2017年2月14日",
	    		

	    	}
	    ]
	    var listField1 = ["学员id","姓名","学员来源","学员类型","激活时间","推荐奖励"];
	    var listField2 = ["学员id","姓名","学员来源","学员类型","激活时间","详情"];
	    var listField3 = ["学员id","姓名","学员提交的总结","","",];
	    var listField4 = ["学员id","姓名","同意或是拒绝的理由","审核时间","审查结果","审查通过给的账号"];
	    var Grid = new grid();
	    Grid.setGrid(grid1,listField1,data1);
	    
	  
	})