         var serviceObject = new XMLHttpRequest();
         serviceObject.open('GET', 'https://samdaly130.github.io/term-project/data.json',true);

            serviceObject.send();
            
            serviceObject.onload = function() {
                var serviceInfo = JSON.parse(serviceObject.responseText);
                console.log(serviceInfo);
                
                document.getElementById('header').innerHTML = serviceInfo.head;
                
                document.getElementById('headlineOne').innerHTML = serviceInfo.table
                
            } 
            
