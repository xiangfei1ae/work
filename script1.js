       function ha()
        {
            document.getElementById("ge").innerHTML = "说鸽就鸽也是一种不鸽";
        }
        function ga()
        {
            document.getElementById("ge").innerHTML = "今天鸽还是不鸽呢"
        }
        function add()
        {
            var a=document.getElementById("type1").value;
            var parent=document.getElementById("event");
            var bn=document.createElement("div");
            var newnode1=document.createElement("input");
            newnode1.type="checkbox";
            var newnode2=document.createElement("input");
            newnode2.type="text";
            newnode2.value=a;
            bn.appendChild(newnode1);
            bn.appendChild(newnode2);
            newnode1.name="ui";
            parent.appendChild(bn);
            document.getElementById("type1").value="";
        }
        function dele()
        {
            var parent=document.getElementById("event");
            var arr=document.getElementsByName("ui");    
            for(let i=0;i<arr.length;i++)
            {
                if(arr[i].checked)
                parent.removeChild(parent.childNodes[i]);
            }
        }
