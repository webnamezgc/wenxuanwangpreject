class Cart{
    constructor(){
        this.$cartList = $('.prom_group');
        this.init();
        this.addEvent();
    }
    init(){
        let storage = window.localStorage;
        console.log(storage)
        console.log(storage['product'].length)
        for(let i = 0,len = storage.length;i < len;i ++){
            let key = storage.key(i); 
            if(key.startsWith('product_')){
                console.log(value)
                let value = storage.getItem(key) ? storage.getItem(key) : '';
                let good = this.convertStrToObj(value);
                this.$cartList.append(`
                div class="trow">
                    <div class="checkbox">
                        <input name="item" 
                            type="checkbox" 
                            data-shopgroup-id="1" value="${key}">
                    </div>
                    <div class="product">
                        <a href="//item.winxuan.com/1202507433" target="_blank">
                            <img src="${good.src}"
                                alt="${good.name}">
                        </a>
                        <a href="//item.winxuan.com/1202507433" target="_blank"
                        title="${good.name}">${good.name}
                        </a>
                        <p class="red-hint"></p>
                    </div>
                    <div class="price">¥<em>${good.price}</em></div>
                    <div class="credits">${key}</div>
                    <div class="privilege"></div>
                    <div class="quantity" data-min="1" data-good-id="${key}"
                        data-max=" 18832 ">
                        <a href="javascript:;" title="减少" class="reduce"
                        data-id="1202507433">减少</a>
                        <input name="quantity" value="${good.num}" data-value="1" 
                            data-id="1202507433">
                        <a href="javascript:;" title="增加" class="increase"
                        data-id="1202507433">增加</a>
                    </div>

                    <div class="operation" style="position: relative;">
                        <a href="javascript:;" class="remove"
                        data-id="1202507433">删除</a>
                    </div>
                </div>
                `)
            }
        }
    }
    addEvent(){
         //获取所有的-
        $('.reduce').each(function(){
            $(this).click(function(){
                let storage = window.localStorage;
                //获取id
                let id = $(this).parents('.quantity').attr('data-good-id');
                
                //获取cookie
                let value = storage.getItem(key) ? storage.getItem(key) : '';
               
                //转对象
                let good = this.convertStrToObj(value);
                // console.log(cookie_obj);
                if(good[id].num > 1){
                    good[id].num --;
                }
                //存入cookie
                storage.setItem('books',JSON.stringify(storage_obj));
                $(this).next().val(good[id].num);
                $(this).parent().prev().text(good[id].price * good[id].num);
            })
        })
        //获取所有的+
        $('.increase').each(function(){
            $(this).click(function(){
                
                let storage = window.localStorage;
                //获取id
                let id = $(this).parents('.quantity').attr('data-good-id');
                
                //获取cookie
                let value = storage.getItem(key) ? storage.getItem(key) : '';
               
                //转对象
                let good = this.convertStrToObj(value);
                // console.log(cookie_obj);
            
                    good[id].num ++;
            
                //存入cookie
                $.cookie('products',JSON.stringify(cookie_obj),{expires: 7,path: '/'});
                $(this).prev().val(good[id].num);
                $(this).parent().prev().text(good[id].price * good[id].num);
            })
        })
        //获取所有的数量框
        $('.quantity>input').each(function(){
            $(this).blur(function(){
                
                let storage = window.localStorage;
                //获取id
                let id = $(this).parents('.quantity').attr('data-good-id');
                
                //获取cookie
                let value = storage.getItem(key) ? storage.getItem(key) : '';
               
                //转对象
                let good = this.convertStrToObj(value);
                let num = $(this).val();
                if(/^\d+$/.test(num) && num > 0){
                    good[id].num = num;
                }else{
                    good[id].num = 1;
                }
                
                //存入cookie
                storage.setItem('books',JSON.stringify(good));
                $(this).val(good[id].num);
                $(this).parent().prev().text(good[id].price * good[id].num);
            })
        })
        //获取所有的删除
        $('.remove').each(function(){
            $(this).click(function(){
                
                //获取id
                let id = $(this).parents('.operation').prev().attr('data-good-id');
                let storage = window.localStorage;
                //获取cookie
                let value = storage.getItem(key) ? storage.getItem(key) : '';
               
                //转对象
                let good = this.convertStrToObj(value);
                 

                //存入cookie
                storage.setItem('books',JSON.stringify(good));
                $(this).parents('.trow').detach();
                
            })
        })
    }
    convertStrToObj(str){
        if(!str){
            return {};
        }
        return JSON.parse(str);
    }
}
new Cart();