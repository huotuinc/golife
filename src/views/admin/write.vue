<template>
  <div>
    <div style="position:fixed;bottom:0px;left:0px;right:0px; z-index:999" :style="{bottom:bottom+'px'}">
      <div style="font-size:14px; background-color:#f9f9f9; padding:10px">
        <a href="#" style="border:1px solid #ddd;padding:4px 6px; color:#111; border-radius:2px;"><img
          src="/static/images/imggg2.png" style="width:16px; height:16px; vertical-align:middle; margin-top:-3px; margin-right:6px">图片</a>
      </div>
    </div>
    <div class="bd">
      <div>
        <div class="weui_cells_title" style="padding-top: .77em; margin-top: 0px;">
          标题
        </div>
        <div class="weui_cells weui_cells_form">
          <div class="weui_cell">
            <div class="weui_cell_bd weui_cell_primary">
              <input class="weui_input" type="text" placeholder="请输入标题（最多30个字）" style="font-size:14px">
            </div>
          </div>
        </div>
        <div class="weui_cells_title">
          上传封面
        </div>
        <!--只需要一张，加号是默认空-->
        <div class="weui_cells weui_cells_form">
          <div class="weui_cell">
            <div class="weui_cell_bd weui_cell_primary">
              <div class="weui_uploader">
                <div class="weui_uploader_bd">
                  <ul class="weui_uploader_files">
                    <li class="weui_uploader_file" style="background-image: url(/static/images/a2.jpg); border-radius:6px"></li>
                  </ul>
                  <div class="weui_uploader_input_wrp">
                    <input class="weui_uploader_input" type="file" accept="image/jpg,image/jpeg,image/png,image/gif" multiple>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div ref="edit">
        <div class="weui_cells_title">
          编辑内容
        </div>
        <div class="weui_cells weui_cells_form" style="margin-top:0px">
          <div class="weui_cell">
            <div class="weui_cell_bd weui_cell_primary">
              <textarea class="weui_textarea" v-on:focus="open" v-on:blur="close" placeholder="请输入内容" rows="3"></textarea>
              <div class="weui_textarea_counter">
                <span>0</span>/200
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-show="focus">
        <div class="weui_cells_title">
          选择发布到
        </div>
        <div class="weui_cells weui_cells_form">
          <div class="weui_cell weui_cell_select">
            <div class="weui_cell_bd h weui_cell_primary" style="font-size:14px">
              <select class="weui_select mnb" name="select1">
                <option selected="" value="0">xx圈子</option>
                <option value="1">xxxx</option>
              </select>
            </div>
          </div>
        </div>
        <div class="pbtn" style="padding: 10px 10px 20px 10px;clear: both;margin-top:10px;">
          <a href="javascript:;" class="weui_btn weui_btn_primary">发布内容</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import store from '../../vuex/store';
  export default{
    data() {
      return {
        focus:true,
        bottom:0
      }
    },
    methods:{
      open:function () {
        this.focus=false
        let height=this.$refs.edit.getBoundingClientRect().height+42
        let bodyHeight=document.documentElement.clientHeight
//        this.bottom=bodyHeight-height
      },
      close:function () {
        this.focus=true
        this.bottom=0
      }
    },
    activated() {
      this.$store.dispatch("updateFooter",false);
      this.$emit('update-decline', true)
    },
    deactivated() {
      this.$emit('update-decline', false)
    }
  }
</script>
