         var request = new XMLHttpRequest();
         request.open('GET', 'https://samdaly130.github.io/term-project/data.json',true);

            request.send();
            
            request.onload = function() {
                var services = JSON.parse(request.responseText);
                console.log(services)
                section(services);
                table(services);
            } 
            
            function section(jsonObj) {
                
                var h1 = document.createElement('h1');
                 h1.textContent = jsonObj['.head'];
                section.appendChild(h1);
            }
            
            function table(jsonObj) {
                
                var s3rvices = jsonObj['.table'];
                
                for (var i = 0; i < s3rvices.length; i++) {
                    var cases = document.createElement('tr');
                    var headline1 = document.createElement('th');
                    var headline2 = document.createElement('th');
                    
                    headline1.innerHTML = .table['0'].services;
                    headline2.textContent = .table['1'].prices;
                    
                        var content = s3rvices[i].services;
                        for (var s = 0; s < content.length; s++) {
                            var bikeServ = document.createElement('td');
                            bikeServ.textContent = content[s];
                            cases.appendChild(bikeServ);
                        }
                    var pric3s = s3rvices[i].prices;
                    for (var p = 0; p < pric3s.length; p++) {
                        var pricing = document.createElement('td');
                        pricing.textContent = pric3s[p];
                        cases.appendChild(pricing);
                    }
                    cases.appendChild(headline1);
                    cases.appendChild(headline2);
table.appendChild(cases);
                }
            }