function setTable(id,data,title){
	$(id).bootstrapTable({
				classes:"table table-bordered table-hover padding-0 ", //table的class
				pagination:true,			//开启分页
				paginationPreText:"上一页",
				paginationNextText:"下一页",
				striped : true, 			//表格隔行变色
				paginationLoop : false, 	//分页无限循环
				showPaginationSwitch : false,
				data : data,
				columns: title,
				
			});
}

		