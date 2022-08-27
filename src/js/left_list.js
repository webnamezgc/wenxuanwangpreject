// 下拉菜单滑过弹出列表框
class left_list {
  constructor() {
    this.$item = $('.item');
    this.$itemPop = $('.item-pop');
    this.init();
  }
  init() {
    let that = this;
    this.$item.each(function (index, value) {
      $(value).mouseover(function () {
        that.$itemPop.eq(index).css('display', 'block');
        $(value).addClass('active');
      })
      $(value).mouseout(function () {
        that.$itemPop.eq(index).css('display', 'none');
        $(value).removeClass('active');
      });
    })
    this.$itemPop.each(function(index,value){
      $(this).mouseover(function () {
        $(this).css('display', 'block');
        that.$item.eq(index).addClass('active');
      })
      $(this).mouseout(function () {
        $(this).css('display', 'none');
        that.$item.removeClass('active');
      });
    })
  }

}
new left_list();