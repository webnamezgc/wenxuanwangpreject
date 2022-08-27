
class Product{
    constructor(){
        this.$nav = $('#header-right ul li');
        this.$nav_a = $('.line-center ul li a');
        this.$serch_a2 = $('#a2');
        this.$sort = $('.sort-item');
        this.$product = $('.product-list .product');
        this.$btn = $('.product-list .product .opt-btns .toCart');
        this.$page_nav = $('.Page-navigation .pagination li');
        this.$pro = $('.product .img img');
        this.$price_1 = $('.product .price .span2');
        this.$price_2 = $('.product .price .span3');
        this.$author = $('.product .author a');
        this.$publisher_a = $('.product .publisher a');
        this.$publisher_span = $('.product .publisher span');
        this.$to_cart = $('.product>.opt-btns>.toCart');
        this.init();
        this.page_1();
        this.page_2();
        this.page_3();
        this.addEvent();
    }
    init(){
        //导航栏滑过效果
        this.$nav.each(function(){
            $(this).hover(() => {
                $(this).css('backgroundColor','#a40000');
            },
                () => {
                    $(this).css('backgroundColor', '#e4393c');
                }
            )
        });
        $('#href').on('click',()=>{
            location.href = './goods.html'
        })
        //导航栏下方的文字滑过变颜色（精选区）
        this.$nav_a.each(function(){
                $(this).hover(() => {
                    $(this).css('color','#dc0014');
                },
                () => {
                    $(this).css('color','#666')
                }
            )
        })
        //搜索移入变色
        this.$serch_a2.mouseenter(function(){
            $(this).css('color','#dc0014');
        });
        this.$serch_a2.mouseleave(function(){
            $(this).css('color','black')
        })
        //排序
        this.$sort.each(function(){
            $(this).hover(() => {
                $(this).css('backgroundColor','#fff');
            },
            () => {
                $(this).css('backgroundColor','#f7f7f7');
            })
        });
        //商品列表
        this.$product.each(function(){
            $(this).on({
                mouseenter : () => {
                    $(this).css('border','2px solid #e4393c');
                    $(this).children().eq(5).children().first().css('background','#fdefef');
                },
                mouseleave : () => {
                    $(this).css('border','1px solid #eee');
                    $(this).children().eq(5).children().first().css('background','#fff');
                }
            })
        });
        // 分页
        this.$page_nav.each(function(){
            $(this).on({
                mouseenter: () => {
                    $(this).css('backgroundColor','#f7f7f7');
                    $(this).children().css('color','#db2a41');
                },
                mouseleave: () => {
                    $(this).css('backgroundColor','#fff');
                    $(this).children().css('color','#666');
                }
            })
        })
         //初始化列表页
         $.get('../lib/list.json', (data) => {
            // alert(this);
            for (let i = 0; i < 20; i++) {
                // console.log(data[`book${(i + 1)}`].src);
                $(this.$pro[i]).attr('src', data[`book${(i + 1)}`].src);
                $(this.$price_1[i]).text(data[`book${(i + 1)}`].price);
                $(this.$price_2[i]).text(data[`book${(i + 1)}`].o_price);
                $(this.$author[i]).text(data[`book${(i + 1)}`].writer);
                $(this.$publisher_a[i]).text(data[`book${(i + 1)}`].press);
                $(this.$publisher_span[i]).text(data[`book${(i + 1)}`].time);
                // $(this.$pro[i]).attr('data-good-id',`book${i}`);
                $(this.$pro[i]).attr('class',`book${i + 1}`);
            }
        })
        console.log()
    }
    //第一页商品
    page_1(){
        //记录this
        let that = this;
        $(this.$page_nav).eq(1).click(function(){
            //清空之前的数据
            // for (let i = 0; i < 20; i++) {
                $(that.$price_2).text('');
                $(that.$author).text('');
                $(that.$publisher_a).text('');
                $(that.$price_1).text('');
                $(that.$pro).attr('src', '');
                $(that.$publisher_span).text('');
            // }
            //商品图片
            $.get('../lib/list.json', (data) => {
                for (let i = 0; i < 20; i++) {
                    // console.log(data[`book${(i + 1)}`].src);
                    $(that.$pro[i]).attr('src', data[`book${(i + 1)}`].src);
                    $(that.$price_1[i]).text(data[`book${(i + 1)}`].price);
                    $(that.$price_2[i]).text(data[`book${(i + 1)}`].o_price);
                    $(that.$author[i]).text(data[`book${(i + 1)}`].writer);
                    $(that.$publisher_a[i]).text(data[`book${(i + 1)}`].press);
                    $(that.$publisher_span[i]).text(data[`book${(i + 1)}`].time);
                    // $(that.$pro[i]).attr('data-good-id',`book${i}`);
                    $(that.$pro[i]).attr('class',`book${i + 1}`);
                }
            })
            
        })
    }
    page_2(){
        //记录this
        let that = this;
        $(this.$page_nav).eq(2).click(function(){
            //清空之前的数据
            // for (let i = 0; i < 20; i++) {
                $(that.$price_2).text('');
                $(that.$author).text('');
                $(that.$publisher_a).text('');
                $(that.$price_1).text('');
                $(that.$pro).attr('src', '');
                $(that.$publisher_span).text('');
            // }
            //商品图片
            $.get('../lib/list2.json', (data) => {
                for (let i = 0; i < 20; i++) {
                    // console.log(data[`book${(i + 1)}`].src);
                    $(that.$pro[i]).attr('src', data[`book${(i + 1)}`].src);
                    $(that.$price_1[i]).text(data[`book${(i + 1)}`].price);
                    $(that.$price_2[i]).text(data[`book${(i + 1)}`].o_price);
                    $(that.$author[i]).text(data[`book${(i + 1)}`].writer);
                    $(that.$publisher_a[i]).text(data[`book${(i + 1)}`].press);
                    $(that.$publisher_span[i]).text(data[`book${(i + 1)}`].time);
                    // $(that.$pro[i]).attr('data-good-id',`book${i + 20}`);
                    $(that.$pro[i]).attr('class',`book${i + 21}`);
                }
            })
            
        })
    }
    page_3(){
        //记录this
        let that = this;
        $(this.$page_nav).eq(3).click(function(){
            //清空之前的数据
            // for (let i = 0; i < 20; i++) {
                $(that.$price_2).text('');
                $(that.$author).text('');
                $(that.$publisher_a).text('');
                $(that.$price_1).text('');
                $(that.$pro).attr('src', '');
                $(that.$publisher_span).text('');
            // }
            //商品图片
            $.get('../lib/list3.json', (data) => {
                for (let i = 0; i < 20; i++) {
                    // console.log(data[`book${(i + 1)}`].src);
                    $(that.$pro[i]).attr('src', data[`book${(i + 1)}`].src);
                    $(that.$price_1[i]).text(data[`book${(i + 1)}`].price);
                    $(that.$price_2[i]).text(data[`book${(i + 1)}`].o_price);
                    $(that.$author[i]).text(data[`book${(i + 1)}`].writer);
                    $(that.$publisher_a[i]).text(data[`book${(i + 1)}`].press);
                    $(that.$publisher_span[i]).text(data[`book${(i + 1)}`].time);
                    // $(that.$pro[i]).attr('data-good-id',`book${i + 40}`); 
                    $(that.$pro[i]).attr('class',`book${i + 41}`);
                }
            })
           
        })
    }
    addEvent(){
        this.$to_cart.each(function(){
            $(this).click(() => {
                //商品id
                let id = $(this).parent().parent().children().first().children().eq(0).attr('class');
                //商品图片
                let book_src = $(this).parent().parent().children().first().children().eq(0).attr('src');
                //商品价格1
                let book_price1 = $(this).parent().parent().children().eq(1).children().eq(1).text();
                //商品价格2
                let book_price2 = $(this).parent().parent().children().eq(1).children().eq(2).text();
                //作者
                let book_author = $(this).parent().parent().children().eq(3).children().eq(0).text();
                //出版社
                let book_publisher = $(this).parent().parent().children().eq(4).children().eq(0).text();
                //出版时间
                let book_publisher_span = $(this).parent().parent().children().eq(4).children().eq(1).text();
                let storage = window.localStorage;
                let storage_str = storage.getItem('books') ? storage.getItem('books') : '';
                let storage_obj = convertStrToObj(storage_str);
                if(book_id in storage_obj){
                    storage_obj[id].num ++
                }else{
                    storage_obj[id] = {
                        "num" : 1,
                        "pic" : book_src,
                        "price1" : book_price1,
                        "price2" : book_price2,
                        "author" : book_author,
                        "publisher" : book_publisher,
                        "time" : book_publisher_span,
                    }
                }
                storage.setItem('books',JSON.stringify(storage_obj));
            })
        })
    }
}
new Product();