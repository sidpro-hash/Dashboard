			var G_H_result_sem_6="",G_result_sem_6="",H_result_sem_6="";
			var G_H_result_sem_5="",G_result_sem_5="",H_result_sem_5="";
			var G_H_result_sem_4="",G_result_sem_4="",H_result_sem_4="";
			var G_H_result_sem_3="",G_result_sem_3="",H_result_sem_3="";
			var G_H_result_sem_2="",G_result_sem_2="",H_result_sem_2="";
			var t;
			$(document).ready(function(){
				$.get('data/G_H_result_sem_6.csv',function(thedata){
					G_H_result_sem_6=thedata;
					
					$.get('data/G_result_sem_6.csv',function(thedata){
						G_result_sem_6=thedata;
						$.get('data/H_result_sem_6.csv',function(thedata){
							H_result_sem_6=thedata;
							Loadchange();
						});
					});
				});
			});
			
			function getLol(){
				
			}
			  
			
			function Loadchange(){
				let content = "";
				$('#tbody').html(content);
			
				var Datatable = [];
				let spi_10=0,spi_9=0,spi_8=0,spi_7=0,spi_6=0,spi_5=0,spi_4=0,spi_3=0,spi_2=0,spi_1=0;
				let cpi_10=0,cpi_9=0,cpi_8=0,cpi_7=0,cpi_6=0,cpi_5=0,cpi_4=0,cpi_3=0,cpi_2=0,cpi_1=0;
				let av_spi_9=0,av_spi_8=0,av_spi_7=0,av_spi_6=0,av_spi_5=0,av_spi_4=0,av_spi_3=0,av_spi_2=0,av_spi_1=0;
				
				let fk = document.getElementById('divs').value;
				let sem = parseInt(document.getElementById('sem').value);
				let tit = "Semester "+sem;
				let theData=G_H_result_sem_6;
				
				if(fk == "G"){
					switch(sem){
						case 2:if(G_result_sem_2==""){
									$.get('data/G_result_sem_2.csv',function(thedata){
										G_result_sem_2=thedata;
										Loadchange();
									});
									return;
								}
								else{ theData=G_result_sem_2; }
							break;
						case 3:if(G_result_sem_3==""){
									$.get('data/G_result_sem_3.csv',function(thedata){
										G_result_sem_3=thedata;
										Loadchange();
									});return;
								}
								else{ theData=G_result_sem_3; }
						
							break;
						case 4:if(G_result_sem_4==""){
									$.get('data/G_result_sem_4.csv',function(thedata){
										G_result_sem_4=thedata;
										Loadchange();
									});return;
								}
								else{ theData=G_result_sem_4; }
						
							break;
						case 5:if(G_result_sem_5==""){
									$.get('data/G_result_sem_5.csv',function(thedata){
										G_result_sem_5=thedata;
										Loadchange();
									});return;
								}
								else{ theData=G_result_sem_5; }
						
							break;
						case 6:if(G_result_sem_6==""){
								$.get('data/G_result_sem_6.csv',function(thedata){
									G_result_sem_6=thedata;
									Loadchange();
								});return;
							}
							else{ theData=G_result_sem_6; }
					
						break;
					}
				}
				else if(fk == "H"){
					switch(sem){
						case 2:if(H_result_sem_2==""){
									$.get('data/H_result_sem_2.csv',function(thedata){
										H_result_sem_2=thedata;
										Loadchange();
									});return;
								}
								else{ theData=H_result_sem_2; }
							break;
						case 3:if(H_result_sem_3==""){
									$.get('data/H_result_sem_3.csv',function(thedata){
										H_result_sem_3=thedata;
										Loadchange();
									});return;
								}
								else{ theData=H_result_sem_3; }
						
							break;
						case 4:if(H_result_sem_4==""){
									$.get('data/H_result_sem_4.csv',function(thedata){
										H_result_sem_4=thedata;
										Loadchange();
									});return;
								}
								else{ theData=H_result_sem_4; }
						
							break;
						case 5:if(H_result_sem_5==""){
									$.get('data/H_result_sem_5.csv',function(thedata){
										H_result_sem_5=thedata;
										Loadchange();
									});return;
								}
								else{ theData=H_result_sem_5; }
						
							break;
						case 6:if(H_result_sem_6==""){
								$.get('data/H_result_sem_6.csv',function(thedata){
									H_result_sem_6=thedata;
									Loadchange();
								});return;
							}
							else{ theData=H_result_sem_6; }
					
						break;
					}
				}
				else{
					switch(sem){
						case 2:if(G_H_result_sem_2==""){
									$.get('data/G_H_result_sem_2.csv',function(thedata){
										G_H_result_sem_2=thedata;
										Loadchange();
									});return;
								}
								else{ theData=G_H_result_sem_2; }
							break;
						case 3:if(G_H_result_sem_3==""){
									$.get('data/G_H_result_sem_3.csv',function(thedata){
										G_H_result_sem_3=thedata;
										Loadchange();
									});return;
								}
								else{ theData=G_H_result_sem_3; }
						
							break;
						case 4:if(G_H_result_sem_4==""){
									$.get('data/G_H_result_sem_4.csv',function(thedata){
										G_H_result_sem_4=thedata;
										Loadchange();
									});return;
								}
								else{ theData=G_H_result_sem_4; }
						
							break;
						case 5:if(G_H_result_sem_5==""){
									$.get('data/G_H_result_sem_5.csv',function(thedata){
										G_H_result_sem_5=thedata;
										Loadchange();
									});return;
								}
								else{ theData=G_H_result_sem_5; }
						
							break;
						case 6:if(G_H_result_sem_6==""){
									$.get('data/G_H_result_sem_6.csv',function(thedata){
										G_H_result_sem_6=thedata;
										Loadchange();
									});return;
								}
								else{ theData=G_H_result_sem_6; }
						
							break;
					}
				}					
			
				//console.log(theData);
				theData = theData.replace(/"/g,'');
				//console.log(theData);
					
				theData = theData.split(/\r?\n|\r/);
				//console.log(theData);
				let totalRows = theData.length;
				
				
				
				for(let i=1;i<totalRows;++i){
					theTD = theData[i].split(',');
					let spi = parseFloat(theTD[3]);
					if(spi>=10)spi_10+=1;
					else if(spi>=9)spi_9+=1;
					else if(spi>=8)spi_8+=1;
					else if(spi>=7)spi_7+=1;
					else if(spi>=6)spi_6+=1;
					else if(spi>=5)spi_5+=1;
					else if(spi>=4)spi_4+=1;
					else if(spi>=3)spi_3+=1;
					else if(spi>=2)spi_2+=1;
					else spi_1+=1;
					
					let cpi = parseFloat(theTD[2]);
					if(cpi>=10)cpi_10+=1;
					else if(cpi>=9)cpi_9+=1;
					else if(cpi>=8)cpi_8+=1;
					else if(cpi>=7)cpi_7+=1;
					else if(cpi>=6)cpi_6+=1;
					else if(cpi>=5)cpi_5+=1;
					else if(cpi>=4)cpi_4+=1;
					else if(cpi>=3)cpi_3+=1;
					else if(cpi>=2)cpi_2+=1;
					else cpi_1+=1;
					
					theTD.unshift(" ");
					Datatable.push(theTD);
				}
				av_spi_10 = spi_10*100/(totalRows-1);
				av_spi_9 = spi_9*100/(totalRows-1);
				av_spi_8 = spi_8*100/(totalRows-1);
				av_spi_7 = spi_7*100/(totalRows-1);
				av_spi_6 = spi_6*100/(totalRows-1);
				av_spi_5 = spi_5*100/(totalRows-1);
				av_spi_4 = spi_4*100/(totalRows-1);
				av_spi_3 = spi_3*100/(totalRows-1);
				av_spi_2 = spi_2*100/(totalRows-1);
				av_spi_1 = spi_1*100/(totalRows-1);
				
				const av_spi_list = new Array(av_spi_10,av_spi_9,av_spi_8,av_spi_7,av_spi_6,av_spi_5,av_spi_4,av_spi_3,av_spi_2,av_spi_1);
				const cpi_list = new Array(cpi_10,cpi_9,cpi_8,cpi_7,cpi_6,cpi_5,cpi_4,cpi_3,cpi_2,cpi_1);
				const spi_list = new Array(spi_10,spi_9,spi_8,spi_7,spi_6,spi_5,spi_4,spi_3,spi_2,spi_1);
				const datapoint1 = [];
				const datapoint2 = [];
				const datapoint3 = [];
				let be = true;
				for(let i=0;i<10;++i){
					if(cpi_list[i]!=0 || spi_list[i]!=0){
						datapoint1.push({label:`CPI ${10-i}`,y:cpi_list[i]});
						datapoint2.push({label:`SPI ${10-i}`,y:spi_list[i]});
					}
					if(av_spi_list[i]!=0){
						if(be){
							datapoint3.push({y: av_spi_list[i], name: `SPI ${10-i}`,exploded: true});
							be=false;
						}
						else
							datapoint3.push({y: av_spi_list[i], name: `SPI ${10-i}`});
					}
				}
				//console.log(datapoint1);
				//console.log(datapoint2);
				
				CanvasJS.addColorSet("colors",
					[//colorSet Array
					"#2F4F4F",
					"#008080",
					"#2E8B57",
					"#3CB371",
					"#90EE90",
					"#ABD699",
					"#75C9B7",
					"#5d9e9e",
					"#C7DDCC",
					"#16123F",
					"#2F5C8F"
					]);
				var chart2 = new CanvasJS.Chart("chartContainer2", {
					colorSet: "colors",
					theme: "dark2",
					exportEnabled: false,
					animationEnabled: true,
					title: {
						text: "Average SPI",
						fontColor:"white"
					},
					legend:{
						cursor: "pointer"
					},
					subtitles: [{
						text: tit,
						fontSize: 16
					}],
					data: [
						{
							type: "pie",
							showInLegend: true,
							indexLabelFontSize: 18,
							radius: 180,
							indexLabel: "{name} - {y}",
							yValueFormatString: "###0.0\"%\"",
							dataPoints: datapoint3
						}
					]
				});
				chart2.render();
				var chart = new CanvasJS.Chart("chartContainer", {
					title:{
						text: "Stacked Column chart for CPI and SPI",
						fontSize: 16							
					},
					axisX:{
						title: "CPI and SPI",
						fontSize: 16
					},
					axisY:{
						//interval: 50,
						fontSize: 16
					},
					legend: {
						fontSize: 16
					},
					theme: "dark2", //"light1", "light2", "dark1", "dark2"
					data: [              
						{
							// Change type to "stackedArea", "stackedColumn", "column", "doughnut", "line", "splineArea" etc.
							type: "stackedColumn",
							showInLegend: true,
							legendText: "CPI",
							dataPoints: datapoint1			

						},{
							// Change type to "stackedArea", "stackedColumn", "column", "doughnut", "line", "splineArea" etc.
							type: "stackedColumn",
							showInLegend: true,
							legendText: "SPI",
							dataPoints: datapoint2			

						}
					]
				});
				chart.render();
				
				if ( $.fn.dataTable.isDataTable( '#table_id' ) ) {
						t.clear().draw();
						t.rows.add(Datatable).draw();
				}
				else {
					tabler(Datatable);
				}	
					
			}
			function tabler(Datatable){
				t = $('#table_id').DataTable( {
						data: Datatable,
						responsive: true,
						
						"columnDefs": [ {
							"searchable": false,
							"orderable": false,
							"targets": 0
						} ],
						"order": [[ 1, 'asc' ]]
					} );
				t.on( 'order.dt search.dt', function () {
					t.column(0, {search:'applied', order:'applied'}).nodes().each( function (cell, i) {
						cell.innerHTML = i+1;
					} );
				} ).draw();
			}