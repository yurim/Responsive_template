	
	//박스 초기화 레이아웃 구문
	const grid = new Isotope("section", { 
		itemSelector: "article", 
		columnWidth: "article", 
		transitionDuration: "0.5s" 
	});	

	//박스 정렬 구문
	grid.arrange({ filter : ".item" });


