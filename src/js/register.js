class Form {
    constructor() {
        this.$phone = $('.phone');
        this.$pclick = $('.phone_click');
        this.$repass = $('.repass');
        this.$rclick = $('.repass_click');
        this.$action = $('.action');
        this.$aclick = $('.action_click');
        this.$step1 = $('.step1');
        this.$step2 = $('.step2');
        this.$step3 = $('.step3');
        this.$phoneinp = $('#phone');
        this.$picture = $('#picture');
        this.$note = $('#note');
        this.$note_btn = $('#note_btn')
        this.$check = $('#check')
        this.flag = ['false', 'false', 'false', 'false'];
        this.open = ['false', 'false', 'false', 'false', 'false', 'false'];
        this.$next = $('#next');
        this.$pass = $('#pass');
        this.$restpass = $('#restpass');
        this.$btn = $('#btn')
        // this.$cookie_str = $.cookie('wenxuan_preject') ? $.cookie('wenxuan_preject') : '' ;
        // this.cookie_obj = convertStrToObj(cookie_str);
        this.init();
        this.addEvent();
    }
    init() {
        this.$phone.css('color', 'red');
        this.$pclick.css('background', 'red')
        this.$step1.css('display', 'block')
    }
    addEvent() {
        $('#header img').on('click',()=>{
            location.href = '../index.html';
        })
        $(function () {
            code_draw();
            // 点击后刷新验证码
            $(".a").on('click', function () {
                code_draw();
            })
        })
        this.$phoneinp.on('blur', () => {
            let str = this.$phoneinp.val();
            if (/^1(1|2|3|4|5|6|7|8|9)\d{9}$/.test(str)) {
                $('.inp_iteam>span').eq(0).css('color', 'green');
                $('.inp_iteam>span').eq(0).html('输入正确');
                this.flag[0] = 'true';
                this.open[0] = 'true';
            } else {
                $('.inp_iteam>span').eq(0).css('color', '');
                $('.inp_iteam>span').eq(0).html('请输入手机号');
            }
        })
        this.$picture.on('blur', () => {
            // 将输入的内容转为大写，可通过这步进行大小写验证
            var val = $(".input-val").val().toLowerCase();
            
            // 获取生成验证码值
            var num = $('#canvas').attr('data-code');
            if (val == '') {
                $('.inp_iteam>span').eq(1).css('color', '');
                $('.inp_iteam>span').eq(1).html('请输入验证码');
            } else if (val == num) {
                $('.inp_iteam>span').eq(1).css('color', 'green');
                $('.inp_iteam>span').eq(1).html('输入正确');
                $(".input-val").val('');
                this.flag[1] = 'true';
                this.open[1] = 'true';
            } else {
                $('.inp_iteam>span').eq(1).html('验证码错误！请重新输入！');
                $(".input-val").val('');
            }
        })
        this.$note_btn.on('click', () => {
            let str = this.$note.val();
            if (/^\w{6}$/.test(str)) {
                $('.inp_iteam>span').eq(2).css('color', 'green');
                $('.inp_iteam>span').eq(2).html('输入正确');
                this.flag[2] = 'true';
                this.open[2] = 'true';
            } else {
                $('.inp_iteam>span').eq(2).css('color', '');
                $('.inp_iteam>span').eq(2).html('请输入短信验证码');
            }
        })
        this.$check.on('click', () => {
            this.flag[3] = 'true';
            this.open[3] = 'true';
        })
        this.$next.on('click', () => {
            if (this.flag.indexOf('false') === -1) {
                this.$step1.css('display', '');
                this.$step2.css('display', 'block');
                this.$phone.css('color', '');
                this.$pclick.css('background', '');
                this.$repass.css('color','red');
                this.$rclick.css('background','red');
            }
        })
        this.$pass.on('blur', () => {
            let str = this.$pass.val();
            if (/^\w{6,12}$/.test(str)) {
                $('.inp_iteam>span').eq(3).css('color', 'green');
                $('.inp_iteam>span').eq(3).html('输入正确');
                this.open[4] = 'true';
            } else {
                $('.inp_iteam>span').eq(3).css('color', '');
                $('.inp_iteam>span').eq(3).html('请输入密码');
            }
        })
        this.$restpass.on('blur', () => {
            if (this.$restpass.val() === this.$pass.val()) {
                $('.inp_iteam>span').eq(4).css('color', 'green');
                $('.inp_iteam>span').eq(4).html('输入正确');
                this.open[5] = 'true';
            } else {
                $('.inp_iteam>span').eq(4).css('color', '');
                $('.inp_iteam>span').eq(4).html('请输入密码');
            }
        })
        this.$btn.on('click', () => {
            if (this.open.indexOf('false') === -1) {
                this.$step2.css('display', '');
                this.$step3.css('display', 'block');
                this.$repass.css('color','');
                this.$rclick.css('background','');
                this.$action.css('color','red');
                this.$aclick.css('background','red');
                this.setTime();
            }
        })
    }
    setTime(){
        setInterval(() => {
            let num = $('.num').html();
            --num;
            $('.num').html(num); 
            setTimeout(() => {
                //获取现有的cookie
				let cookie_Str = $.cookie('wenxuanpreject') ? $.cookie('wenxuanpreject') : '';
                console.log(cookie_Str)
				//转为对象
				let cookie_Obj = convertStrToObj(cookie_Str);
                let username = this.$phoneinp.val();
                let password = this.$pass.val();
                cookie_Obj[username] = password;
                cookie_Str = JSON.stringify(cookie_Obj);
                $.cookie('wenxuanpreject',cookie_Str,{expires : 10,path : '/'});
                console.log(cookie_Obj)
                location.href = './login.html'
            }, 5500);
        }, 1000);
    }
    
}
new Form();