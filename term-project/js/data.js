         var serviceObject = new XMLHttpRequest();
         serviceObject.open('GET', 'https://samdaly130.github.io/term-project/data.json',true);

            serviceObject.send();
            
            serviceObject.onload = function() {
                var serviceInfo = JSON.parse(serviceObject.responseText);
                console.log(serviceInfo);
                
                document.getElementById('header').innerHTML = serviceInfo.head;
           
                document.getElementById('services1').innerHTML = serviceInfo.table["0"].services["0"];
                
                document.getElementById('services2').innerHTML = serviceInfo.table["0"].services["1"];
                
                document.getElementById('services3').innerHTML = serviceInfo.table["0"].services["2"];
                
                document.getElementById('services4').innerHTML = serviceInfo.table["0"].services["3"];
                
                document.getElementById('services5').innerHTML = serviceInfo.table["0"].services["4"];
                
                document.getElementById('services6').innerHTML = serviceInfo.table["0"].services["5"];
                
                document.getElementById('services7').innerHTML = serviceInfo.table["0"].services["6"];
                
                document.getElementById('services8').innerHTML = serviceInfo.table["0"].services["7"];
                
                    
                }
                
                

            
