<template>
  <div class="_full component-scoller">
    <div class="weui_search_bar" id="search_bar">
      <form class="weui_search_outer">
        <div class="weui_search_inner">
          <i class="weui_icon_search"></i>
          <input type="search" class="weui_search_input" id="search_input" placeholder="搜索" required/>
          <a href="javascript:" class="weui_icon_clear" id="search_clear"></a>
        </div>
        <label for="search_input" class="weui_search_text" id="search_text">
          <i class="weui_icon_search"></i>
          <span>搜索圈子、话题</span>
        </label>
      </form>
      <a href="javascript:" class="weui_search_cancel" id="search_cancel">取消</a>
    </div>
    <div class="con">
      <div class="msg">点击选择栏目</div>
      <ul class="list">
        <hot v-for = "(serchList,index) in serchLists" >
          <li v-bind:class="{ fixed: selected==index}" v-on:click="itemClick(index)">
            <a >  {{ serchList.name }} </a>
          </li>
        </hot>
      </ul>
      <div class="msg tip" disabled-message="最多#n#个分类,请先删除一些" origin-message="点击选择分类">点击选择分类</div>
      <ul class="list" data-toggle="menu-unselected">
        <li v-for = "secondClass in secondClasses" >
          <a>  {{ secondClass.name }} </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import store from '../vuex/store';
  import  searchApi from '../apis/search'
  export default {
    created () {
      this.$store.dispatch("updateFooter",false);
      this.$store.dispatch("updateBackClass",'');
      require("../../static/js/jquery-weui");



      // this.getSecondWikiItem(0,0);
      //
      // searchApi(this.selected).then((json) => {
      //    var listData =  JSON.stringify(json);
      //    for(var index = 0; index < json.length; index ++){
      //      console.log(json[index].name);
      //    }
      //    this.secondClasses = json;
      //   })
      // .catch((error) =>{
      //
      // });
    },


    beforeCreate () {

      searchApi(0).then((json)=>{
        this.serchLists = json;
      });
      searchApi(1).then((json)=>{
        this.secondClasses = json;
      });
      // searchApi(0).then((json) => {
      //    var listData =  JSON.stringify(json);
      //    for(var index = 0; index < json.length; index ++){
      //      console.log(json);
      //    }
      //    this.serchLists = json;
      //   })
      // .catch((error) =>{
      //
      // });



    },

    methods: {

      itemClick(index) {
          this.selected = index;
          searchApi(index).then((json)=>{
            this.secondClasses = json;
          });
      }



    },

    data () {
      return {
          serchLists: [],
          secondClasses: [],
          selected: 0
      }
    }

  }
</script>
<style scoped>
  @import "/static/css/weui.min-rsgghot-diy.css";
</style>
