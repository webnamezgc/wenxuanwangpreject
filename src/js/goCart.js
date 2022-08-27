class goCart{
  constructor(){
    this.$buy_btn_1=$('.buy_btn_1');
    this.$add_btn=$('.add_btn');
    this.$reduce_btn=$('.reduce_btn');
    this.$buy_num_text=$('.buy_num_text');
    this.init();
  }
  init(){
    this.$buy_btn_1.click(function(){
      let $tip=$('.tip');
      $tip.css('display', 'block');
      let $gotoCart= $('.gotoCart');
      let $continue= $('.continue');
      let $close= $('.close');
      $close.click(function(){
        $tip.css('display', 'none');
      })
      $continue.click(function(){
        $tip.css('display', 'none');
      })
      $gotoCart.click(function(){
        // 此处写要跳转的购物车结算页面
        location.href='#';
        // 商品id
        let good_id=$(this).parent().parent().parent().prev().children().eq(1).children().eq(0).attr('good_id');
        // 商品图片
        let good_src=$(this).parent().parent().parent().prev().children().eq(1).children().eq(0).children().eq(0).attr('src');
        // 商品价格
        let good_price=$(this).parent().parent().parent().prev().children().eq(2).children().eq(0).children().eq(3).children().eq(1).children().eq(1).children().eq(0).text();
        // alert(good_price)
        // 商品名称
        let good_name=$(this).parent().parent().parent().prev().children().eq(2).children().eq(0).children().eq(0).text();
        // 商品数量
        let good_num=$(this).parent().parent().parent().prev().children().eq(2).children().eq(1).children().eq(0).children().eq(1).children().eq(0).children().eq(1).val();
        // alert(good_num)
        
        function convertStrToObj(str) {
          if(!str){
            return {}
          }else{
            return JSON.parse(str)
          }
        }

        let storage=window.localStorage;
        let storage_str=storage.getItem('books')?
        storage.getItem('books'):'';
        let storage_obj=convertStrToObj(storage_str);
        if (good_id in storage_obj){
          storage_obj[good_id].num = good_num*1+storage_obj[good_id].num*1;
        }else{
          storage_obj[good_id]={
            "name":good_name,
            "src":good_src,
            "price":good_price,
            "num":good_num,
          }
          
        }
        storage.setItem('books',JSON.stringify(storage_obj));
        console.log(storage_obj)
      })
    })
    // 加号按钮
    this.$add_btn.click(function(){
      let value =$(this).prev().val()
      value++;
      $(this).prev().val(value);
      
    })
    // 减号按钮
    this.$reduce_btn.click(function(){
      let value =$(this).next().val()
      if(value > 1){
        value--;
      $(this).next().val(value);
      }
    })

  }
}
new goCart();