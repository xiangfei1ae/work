      function getit()
        {
            var a=document.getElementById("mail").value;
            var str=/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
            var yy=str.test(a);
            var pass1=document.getElementById("pass1").value;
            var pass2=document.getElementById("pass2").value;
            if(!pass1)
            alert("请输入密码");
            else if(!pass2)
            alert("请再次输入密码");
            if(pass1!=pass2)
            alert("两次输入密码不一致");
            else{
                var pattern1 =/^[a-zA-Z2-8#&*?]*$/;
                var tt=pattern1.test(pass1);
                if(!tt)
                alert("请输入合法字符");

                else {var pattern2=/^.{8,15}$/;
                tt=tt=pattern2.test(pass1);}
                if(!tt)
                alert("密码长度非法");

                else var pattern3= /(?=[A-Za-z0-9]*[A-Z][A-Za-z0-9]*[A-Z])(?=[A-Za-z0-9]*[a-z][A-Za-z0-9]*[a-z])(?=[A-Za-z0-9]*[0-9][A-Za-z0-9]*[0-9])[A-Za-z0-9]+/;
                tt=pattern3.test(pass1);
                if(!tt)
                alert("至少有两个大写字母");
            }
        }