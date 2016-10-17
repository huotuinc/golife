<template>
  <div>
    <div id="full" :class="'weui-popup-container '+edit.open" style="z-index:9999">
      <div class="weui-popup-overlay">
      </div>
      <div class="weui-popup-modal v">
        <aside class="cmnt_wrap">
          <div class="cmnt_tp">
        <span class="fl">
            <a href="javascript:void(0);" class="cmnt_cancel close-popup" v-on:click="close" data-sudaclick="article_new_cms_send_cancel">取消</a>
            </span><span class="fr">
            <a href="javascript:void(0);" class="cmnt_smt" id="j_cmnt_smt" data-sudaclick="article_new_cms_send_cmnt">发送</a>
            </span>
          </div>
          <div class="cmnt_login">
            <span class="fl" style="color:#ccc">我：say</span>
          </div>
          <div class="cmntarea" style="border-radius:6px">
            <textarea id="j_cmnt_input" class="newarea" name="" placeholder="说说你的看法"></textarea>
          </div>
        </aside>
      </div>
    </div>
    <div class="item-action">
      <div class="active-contact" style="display:none">
        <!--web通过微信右上角转发-->
        <a href=""><span class="icon"></span>转发</a>
      </div>
      <div class="toggle-collect">
        <!---替换--toggle-collect_on-收藏状态----->
        <a href="javascript:;"><span class="icon"></span>收藏</a>
      </div>
      <div class="go-store">
        <router-link to="/circle/commentList/id"><span class="icon" style="position:relative">
    <i style="display:block;" class="plmus">99</i>
    </span>评论</router-link>
      </div>
      <div class="add-to-cart yuanjiaoo">
        <a class="open-popup" href="javascript:;" v-on:click="openMessage" data-target="#full" style="display:block"> 编辑回复</a>
      </div>
    </div>
    <div class="fenmianmian-img">
      <img src="/static/images/a1.jpg">
    </div>
    <div class="cont-zhbox-t diyxq">
      <p class="cont-zhbox-a v">韩媒:朝鲜遭遇严重干旱粮食缺口近70万吨粮食缺口近70万吨</p>
    </div>
    <div class="cont-zhbox-t diydz diyi">
      <div class="zhbox">
        <div class="zh-tx">
          <img src="/static/images/j2.jpg">
        </div>
        <div class="zh-wz">
          <div class="zh-wz-x">
            <p class="zh-wz-name">小明</p>
          </div>
          <div class="njk">
            <a href="javascript:;" id="show-toast-zan" class="weui_btn weui_btn_mini weui_btn_default">关注</a>
          </div>
          <div  class="zh-wz-time">
            <span style="float:left">09-20 22:00</span>
            <span style="float:right"></span>
            <span style="float:right; margin-right:10px"></span>
            <p style="clear:both"></p>
          </div>
        </div>
      </div>
    </div>

    <!--富文布容器-->
    <div style="padding:0px 15px 0px 15px;">
      <p class="cont-zhbox-nav" style="font-size:16px; line-height:24px">
        <!--发布内容-->
        瑞银在周二发布的一份报告中研究了部分国家的房地产市场，发现2011年来，有泡沫风险的地区房价上涨了几乎50%。</br>
        瑞银认为，温哥华的房价在2008年的金融危机中没有受到影响，大宗商品走弱的背景下反而还在持续上涨。</br>
        </br>
        新华社北京9月28日电  中共中央政治局9月27日下午就二十国集团领导人峰会和全球治理体系变革进行第三十五次集体学习。</br>
        大贡献。</br>
        </br>
        <img src="/static/images/a2.jpg" style="width:100%">
        <img src="/static/images/a3.jpg" style="width:100%"> 外交学院高飞教授就这个问题进行讲解，并谈了意见和建议。</br>
        </br>
        中共中央政治局各位同志认真听取了讲解，并就有关问题进行了讨论。</br>
        </br>
        习近平在主持学习时发表了讲话。</br>
        影响最深的国际峰会。</br>
        我们运用议题和议程设置主动权，打造亮点，突出特色，开出气势，形成声势，引导峰会形成一系列具有开创性、引领性、机制性的成果，实现了为世界经济指明方向、为全球增长提供动力、为国际合作筑牢根基的总体目标。</br>
        在这次峰会上，我们首次全面阐释我国的全球经济治理观，首次把创新作为核心成果，首次把发展议题置于全球宏观政策协调的突出位置，首次形成全球多边投资规则框架，首次发布气候变化问题主席声明，首次把绿色金融列入二十国集团议程，在二十国集团发展史上留下了深刻的中国印记。
        <!--发布内容-->
      </p>
    </div>
    <!--富文布end-->

    <!--标签热词-->
    <div style="padding:10px 15px 10px 15px;color:#999;">
      <div class="rechi">
        <ul>
          <li>荨麻疹</li><li>湿疹</li><li>月经不调</li><li>过敏性疾病如鼻炎</li><li>糖尿病</li>
        </ul>
      </div>
      <p style="clear:both"></p>
    </div>
    <!---->

    <!--举报、点赞-->
    <div style="padding:10px 15px 10px 15px;color:#999;">
      <div style="float:left;">
        <a href="javascript:;" id="" style="font-size:15px" ><img src="/static/images/ddicon/zz.png" style="width:20px; vertical-align: text-bottom; margin-right:4px"></a>
        22
      </div>
      <div  style="float:right">
        <a href="javascript:;"  id="" style="color:#999; font-size:14px; margin-right:8px">举报</a>
      </div>
      <p style="clear:both"></p>
    </div>
    <!--举报、点赞-->

    <!--插入广告-->
    <div style="background-color:#f1f1f1; padding:10px 0px">
      <!--1-->
      <div class="weui_panel weui_panel_access">
        <div class="weui_panel_hd">相关商品</div>
        <div class="weui_media_box weui_media_small_appmsg">
          <div class="weui_cells weui_cells_access ">
            <a class="weui_cell " href="javascript:;">
              <div class="dssdf">
                <img class="weui_media_appmsg_thumb" src="/static/images/imgsss.png" alt="">
              </div>
              <div class="weui_media_bd" style="width: 100%;">
                <h4 class="weui_media_title diytiel" style="height:30px">天然玉石茶壶 岫玉整套茶具茶杯茶碗岫玉整套茶具茶杯茶碗 功夫茶道用品养生保健正品</h4>
                <p class="weui_media_desc" style="color:red">￥3200.00</p>
              </div>
              <span class="weui_cell_ft"></span>
            </a>
            <a class="weui_cell " href="javascript:;">
              <div class="dssdf">
                <img class="weui_media_appmsg_thumb" src="/static/images/imgsss.png" alt="">
              </div>
              <div class="weui_media_bd" style="width: 100%;">
                <h4 class="weui_media_title diytiel" style="height:30px">达贺 足底按摩器 老人实用保健</h4>
                <p class="weui_media_desc" style="color:red">￥3200.00</p>
              </div>
              <span class="weui_cell_ft"></span>
            </a>
          </div>
        </div>
      </div>

      <div class="weui_panel weui_panel_access">
        <div class="weui_panel_hd">相关专家</div>
        <div class="weui_panel_bd">
          <a href="javascript:void(0);" class="weui_media_box weui_media_appmsg">
            <div class="weui_media_hd zjtouxiang">
              <img class="weui_media_appmsg_thumb" src="/static/images/imgsss.png" alt="">
            </div>
            <div class="weui_media_bd">
              <h4 class="weui_media_title">小明</h4>
              <p class="weui_media_desc">运用辨体-辨病-辨证相结合诊治疑难杂病：失眠、偏头痛、抑郁、高血压、心律失常、脂肪肝、肥胖、消瘦、糖尿病、高脂血、痛风、中风、肾功能不全、便秘、口腔溃疡、结肠炎、咳嗽、痤疮、湿疹、异位性皮炎、紫癜、月经不调、痛经等。2.男科病如性功能障碍、男性不育、前列腺炎、前列腺增生症等。3.过敏性疾病如鼻炎、哮喘、荨麻疹、花粉症及药物过敏等。4.九种体质的辨识与调治等疗效显著</p>
            </div>
          </a>

        </div>

      <a href="javascript:void(0);" class="weui_panel_ft">查看更多</a>
      </div>
      <!--2-->
      <div class="weui_panel weui_panel_access">
        <div class="weui_panel_hd">相关推荐</div>
        <div class="weui_panel_bd">
          <div class="weui_media_box weui_media_text">
            <h4 class="weui_media_title">文章标题由各种物质组成的巨型球状天体</h4>
            <p class="weui_media_desc">由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</p>
          </div>
          <div class="weui_media_box weui_media_text">
            <h4 class="weui_media_title">文章标题星球。星球有一定的形状</h4>
            <p class="weui_media_desc">由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</p>
          </div>
        </div>
        <a href="javascript:void(0);" class="weui_panel_ft">查看更多</a>
      </div>
    </div>
    <!--end-->

    <div class="f_hot_cmnt" style="display: block; border-bottom:0px; border-top:1px solid #e5e5e5;">
      <p style="height:14px; background-color:#fff"></p>
      <div class="cmnt_list" id="j_hotlist">
        <div class="cmnt_item" >
          <img src="http://tva1.sinaimg.cn/crop.0.0.1080.1080.50/8301bf66jw8eisueq6lquj20u00u0tbq.jpg" alt="" class="cmnt_pic">
          <div class="cmnt_info">
            <span class="cmnt_name cmnt_nick">时光_城堡</span>
            <span class="cmnt_location"><i class="icon_location2"></i>河南郑州</span>
            <span class="cmnt_time">19楼</span>
          </div>
          <div class="timetime">
            17小时前
          </div>
          <div class="cmnt_text m-cmt-list-item">
            <div class="m-cmt-list-item-tb">
              <div class="m-cmt-list-item-body">
                哥也进了水，屏幕坏了，寄回去没跟他说是进水的，结果免费换了拿回来，现在用的好好的
              </div>
            </div>
          </div>
          <div class="cmnt_op">
            <a href="javascript:void(0);" class="cmnt_report j_report">举报</a>
            <div class="cmnt_num">
              <a href="javascript:void(0);" class="cmnt_good j_favor_single" data-agree="1660"><i class="icon_zan"></i><span class="cmnt_good_num">1660</span></a>
              <a href="javascript:void(0);" class="reply j_cmnt_single">回复</a>
            </div>
          </div>
        </div>
        <div class="cmnt_item" data-mid="57EBDBE6-AF1F8A25-74A15BEC-867-908" data-wbuser="1" data-wbname="LL-Lemonade">
          <img src="http://tva2.sinaimg.cn/crop.0.10.491.491.50/74a15becjw8f4xeru1q6oj20dn0e8wff.jpg" alt="" class="cmnt_pic">
          <div class="cmnt_info">
            <span class="cmnt_name cmnt_nick">LL-Lemonade</span><span class="cmnt_location"><i class="icon_location2"></i>吉林延边</span><span class="cmnt_time">18楼</span>
          </div>
          <div class="timetime">
            1天前
          </div>
          <!--（m-cmt-list-item-repeat>m-cmt-list-item-inner循环嵌套回复）（m-cmt-list-item-body我的留言）-->
          <div class="cmnt_text m-cmt-list-item">
            <div class="m-cmt-list-item-tb">
              <div class="m-cmt-list-item-repeat">
                <div class="m-cmt-list-item-repeat">
                  <div class="m-cmt-list-item-repeat">
                    <div class="m-cmt-list-item-inner">
                      <div class="m-cmt-list-item-th">
                        <span class="m-cmt-list-item-name">广东省深圳市网友</span><span class="m-cmt-list-item-floor">32楼</span>
                      </div>
                      <div class="m-cmt-list-item-body">
                        奴比亚又卖不掉了！来狂砸广告！特别是Z11&nbsp;MAX京东才3000&nbsp;的评论可见这机销量了！拿个652当人SB卖1999，好吧现在1799都没人要了！快回到属于它1499的位置上去吧，再过段时间更没有人买了！国产机也只有坑爹的步步高敢坑小白其它牌子都不敢拿652卖1999的价钱了！
                      </div>
                    </div>
                  </div>
                  <div class="m-cmt-list-item-inner">
                    <div class="m-cmt-list-item-th">
                      <span class="m-cmt-list-item-name">上海市网友</span><span class="m-cmt-list-item-floor">39楼</span>
                    </div>
                    <div class="m-cmt-list-item-body">
                      另外，还是6.0的屏幕，太大
                    </div>
                  </div>
                </div>
                <div class="m-cmt-list-item-inner">
                  <div class="m-cmt-list-item-th">
                    <span class="m-cmt-list-item-name">广东省东莞市网友</span><span class="m-cmt-list-item-floor">52楼</span>
                  </div>
                  <div class="m-cmt-list-item-body">
                    去年买了个Z9mini，不到半年就出问题了，出问题不可怕，可怕的是垃圾的售后服务，竟然单方面判定手机进水了（真不知水从何来），不保修。
                  </div>
                </div>
              </div>
              <div class="m-cmt-list-item-body">
                哥也进了水，屏幕坏了，寄回去没跟他说是进水的，结果免费换了拿回来，现在用的好好的
              </div>
            </div>
          </div>
          <div class="cmnt_op">
            <a href="javascript:void(0);" class="cmnt_report j_report">举报</a>
            <div class="cmnt_num">
              <a href="javascript:void(0);" class="cmnt_good j_favor_single" data-agree="1229"><i class="icon_zan"></i><span class="cmnt_good_num">1229</span></a>
              <a href="javascript:void(0);" class="reply j_cmnt_single">回复</a>
            </div>
          </div>
        </div>
        <div class="cmnt_item" data-mid="57EBE450-7529ED58-87BA63CF-867-948" data-wbuser="1" data-wbname="萌芽编辑">
          <img src="http://tva3.sinaimg.cn/crop.0.0.180.180.50/87ba63cfjw1e8qgp5bmzyj2050050aa8.jpg" alt="" class="cmnt_pic">
          <div class="cmnt_info">
            <span class="cmnt_name cmnt_nick">萌芽编辑</span><span class="cmnt_location"><i class="icon_location2"></i>江西南昌</span><span class="cmnt_time">17楼</span>
          </div>
          <div class="timetime">
            2016-10-10
          </div>
          <div class="cmnt_text m-cmt-list-item">
            <div class="m-cmt-list-item-tb">
              <div class="m-cmt-list-item-repeat">
                <div class="m-cmt-list-item-inner">
                  <div class="m-cmt-list-item-th">
                    <span class="m-cmt-list-item-name">广东省深圳市网友</span>
                    <span class="m-cmt-list-item-floor">32楼</span></div>
                  <div class="m-cmt-list-item-body">奴比亚又卖不掉了！来狂砸广告！特别是Z11&nbsp;MAX京东才3000&nbsp;的评论可见这机销量了！拿个652当人SB卖1999，好吧现在1799都没人要了！快回到属于它1499的位置上去吧，再过段时间更没有人买了！国产机也只有坑爹的步步高敢坑小白其它牌子都不敢拿652卖1999的价钱了！</div>
                </div></div>
              <div class="m-cmt-list-item-body">
                哥也进了水，屏幕坏了，寄回去没跟他说是进水的，结果免费换了拿回来，现在用的好好的
              </div>
            </div>
          </div>
          <div class="cmnt_op">
            <a href="javascript:void(0);" class="cmnt_report j_report">举报</a>
            <div class="cmnt_num">
              <a href="javascript:void(0);" class="cmnt_good j_favor_single" data-agree="1017"><i class="icon_zan"></i><span class="cmnt_good_num">1017</span></a>
              <a href="javascript:void(0);" class="reply j_cmnt_single">回复</a>
            </div>
          </div>
        </div>
        <a href="geren-index9.html" class="weui_btn weui_btn_default">全部评论</a>
      </div>
    </div>
    <!--end-->
  </div>
</template>
<script>
  import store from '../../vuex/store';
  export default {
    data () {
      return {
        edit:{
          open:'',
        }
      }
    },
    created () {
      this.$store.dispatch("updateFooter",false);
      this.$store.dispatch("updateBackClass",'');
    },
    methods:{
      openMessage:function () {
        this.edit.open="weui-popup-container-visible"
      },
      close:function () {
        this.edit.open=""
      }
    },
  }
</script>
<style>
  @import "../../../static/css/cmnt.min.css";
  @import "../../../static/css/online-min.css";
</style>
