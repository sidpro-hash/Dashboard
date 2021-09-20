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
				let spi_9=0,spi_8=0,spi_7=0,spi_6=0,spi_5=0,spi_4=0;
				let cpi_9=0,cpi_8=0,cpi_7=0,cpi_6=0,cpi_5=0,cpi_4=0;
				let av_spi_9=0,av_spi_8=0,av_spi_7=0,av_spi_6=0,av_spi_5=0,av_spi_4=0;
				
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
					if(spi>=9)spi_9+=1;
					else if(spi>=8)spi_8+=1;
					else if(spi>=7)spi_7+=1;
					else if(spi>=6)spi_6+=1;
					else if(spi>=5)spi_5+=1;
					else spi_4+=1;
					
					let cpi = parseFloat(theTD[2]);
					if(cpi>=9)cpi_9+=1;
					else if(cpi>=8)cpi_8+=1;
					else if(cpi>=7)cpi_7+=1;
					else if(cpi>=6)cpi_6+=1;
					else if(cpi>=5)cpi_5+=1;
					else cpi_4+=1;
					
					theTD.unshift(" ");
					Datatable.push(theTD);
				}
				av_spi_9 = spi_9*100/(totalRows-1);
				av_spi_8 = spi_8*100/(totalRows-1);
				av_spi_7 = spi_7*100/(totalRows-1);
				av_spi_6 = spi_6*100/(totalRows-1);
				av_spi_5 = spi_5*100/(totalRows-1);
				
				CanvasJS.addColorSet("colors",
					[//colorSet Array
					"#2F4F4F",
					"#008080",
					"#2E8B57",
					"#3CB371",
					"#90EE90"
					//"#5d9e9e"
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
							dataPoints: [
								{ y: av_spi_9, name: "SPI 9" ,exploded: true},
								{ y: av_spi_8, name: "SPI 8"},
								{ y: av_spi_7, name: "SPI 7" },
								{ y: av_spi_6, name: "SPI 6" },
								{ y: av_spi_5, name: "SPI 5" }
								
							]
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
							dataPoints: [
								{ label: "CPI 9",  y: cpi_9  },
								{ label: "CPI 8", y: cpi_8  },
								{ label: "CPI 7", y: cpi_7 },
								{ label: "CPI 6",  y: cpi_6  },
								{ label: "CPI 5",  y: cpi_5  },
								{ label: "CPI 4",  y: cpi_4  }
							]						

						},{
							// Change type to "stackedArea", "stackedColumn", "column", "doughnut", "line", "splineArea" etc.
							type: "stackedColumn",
							showInLegend: true,
							legendText: "SPI",
							dataPoints: [
								{ label: "SPI 9",  y: spi_9  },
								{ label: "SPI 8", y: spi_8  },
								{ label: "SPI 7", y: spi_7 },
								{ label: "SPI 6",  y: spi_6  },
								{ label: "SPI 5",  y: spi_5  },
								{ label: "SPI 4",  y: spi_4  }
							]						

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