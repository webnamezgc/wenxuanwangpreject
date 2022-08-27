class Login {
    constructor(){
        this.$user = $('#user');
        this.$pass = $('#password');
        this.$check = $('#check');
        this.$phone = $('#phone');
        this.$regnum = $('#regum');
        this.$regbtn = $('.button');
        this.$btn = $('#button');
        this.$cpass = $('.pass');
        this.$cnote = $('.note');
        this.$pass_content = $('#pass_content')
        this.$note_content = $('#note_content')
        this.init();
        this.addEvent();
    }
    init(){
        this.$cpass.css({'border-bottom-color': '#e4393c','font-weight': 600,'opacity': 1});
        this.$pass_content.css('display','block');
    }
    addEvent(){
        $('#a').on('click',()=>{
            location.href = './register.html';
        })
        this.$cpass.on('click',()=>{
            this.$cpass.css({'border-bottom-color': '#e4393c','font-weight': 600,'opacity': 1});
            this.$cnote.css({'opacity':.65,'font-weight':400,'border-bottom-color': '#fff'});
            this.$pass_content.css('display','block');
            this.$note_content.css('display','none');
        })
        this.$cnote.on('click',()=>{
            this.$cnote.css({'border-bottom-color': '#e4393c','font-weight': 600,'opacity': 1});
            this.$cpass.css({'opacity':.65,'font-weight':400,'border-bottom-color': '#fff'});
            this.$note_content.css('display','block');
            this.$pass_content.css('display','none');
        })
        this.$phone.on('blur', () => {
            let str = this.$phoneinp.val();
            if (/^1(1|2|3|4|5|6|7|8|9)\d{9}$/.test(str)) {
                alert('输入正确');
            } else {
                alert('输入错误');
            }
        })
        this.$regbtn.on('click', () => {
            let str = this.$regnum.val();
            if (/^\w{6}$/.test(str)) {
                alert('输入正确');
            } else {
                alert('输入错误');
            }
        })
        this.$btn.on('click',()=>{
             //获取用户名
             let uname = this.$user.val();
             //获取密码
             let upwd = this.$pass.val();
             //判断用户名是否为空
            
             if(!uname){
                 alert('用户名不能为空！');
                 return;
             }
             //获取cookie
             let cookie_Str = $.cookie('wenxuanpreject') ? $.cookie('wenxuanpreject') : '';
             //转为对象
             let cookie_Obj = convertStrToObj(cookie_Str);
             console.log(cookie_Obj)
             //判断对象中是否有用户名
             if(uname in cookie_Obj){
                 if(cookie_Obj[uname] === upwd){
                    alert('登录成功');
                    cookie_Obj[user] = {
                        "username" : uname,
                        "password" : upwd
                    };
                    cookie_Str = JSON.stringify(cookie_Obj);
                    $.cookie('user',cookie_Str,{expires : 10,path : '/'});
                    location.href = '../index.html';
                 }else{
                     alert('请确认您的密码是否正确！');
                 }
             }else{
                 alert('用户名不存在！');
             }
        })     
    }

}
new Login();