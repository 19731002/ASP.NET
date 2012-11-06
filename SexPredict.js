function createSelect(ActionFlag, tY, tM, tD) { 
				var selYear = document.getElementById(tY); 
				var selMonth = document.getElementById(tM); 
				var selDay = document.getElementById(tD); 

				var dt = new Date(); 

				if(ActionFlag == 1) { 
					MinYear = dt.getFullYear() - 45; 
					MaxYear = dt.getFullYear(); 

					for(var i = MinYear; i <= MaxYear; i++) { 
						var op = document.createElement("OPTION"); 
						op.value = i; 
						op.innerHTML = i; 
						selYear.appendChild(op); 
					} 
					selYear.selectedIndex = 45; 

					for(var i = 1; i < 13; i++) { 
						var op = document.createElement("OPTION"); 
						op.value = i; 
						op.innerHTML = i; 
						selMonth.appendChild(op); 
					} 
					selMonth.selectedIndex = dt.getMonth(); 
				} 

				var date = new Date(selYear.value, selMonth.value, 0); 
				var daysInMonth = date.getDate(); 
				selDay.options.length = 0; 

				for(var i = 1; i <= daysInMonth ; i++) { 
					var op = document.createElement("OPTION"); 
					op.value = i; 
					op.innerHTML = i; 
					selDay.appendChild(op); 
				} 
				
				selDay.selectedIndex = dt.getDate() - 1; 
			} 

