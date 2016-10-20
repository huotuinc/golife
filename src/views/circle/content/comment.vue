<template>
  <div class="_full  app-content-color-white">
    <div id="full" class="weui-popup-container" v-bind:class="{'weui-popup-container-visible':open}" style="z-index:9999">
      <div class="weui-popup-overlay"></div>
      <div class="weui-popup-modal v">
        <aside class="cmnt_wrap">
          <div class="cmnt_tp">
            <span class="fl">
            <a href="javascript:void(0);" class="cmnt_cancel close-popup" id="j_cmnt_cancel" data-sudaclick="article_new_cms_send_cancel">取消</a>
            </span>
            <span class="fr">
            <a href="javascript:void(0);" class="cmnt_smt" id="j_cmnt_smt" data-sudaclick="article_new_cms_send_cmnt">发送</a>
            </span>
          </div>
          <div class="cmnt_login">
            <p class="fl" style="color:#ccc">我：<span >@小明明</span></p>
          </div>
          <div class="cmntarea" style="border-radius:6px">
            <textarea id="j_cmnt_input" class="newarea" name="" placeholder="说说你的看法"></textarea>
          </div>
        </aside>
      </div>
    </div>
    <div class="item-action">
      <div><!--别删-->
      </div>
      <div class="add-to-cart yuanjiaoo">
        <a class="open-popup" href="javascript:;" data-target="#full" style="display:block">编辑回复</a>
      </div>
    </div>
    <div class="f_hot_cmnt" style="display: block;">
      <p style="height:14px; background-color:#fff"></p>
      <div class="cmnt_list">
        <div class="cmnt_item" >
          <img src="http://tva1.sinaimg.cn/crop.0.0.1080.1080.50/8301bf66jw8eisueq6lquj20u00u0tbq.jpg" alt="" class="cmnt_pic">
          <div class="cmnt_info">
            <span class="cmnt_name cmnt_nick">时光_城堡</span><span class="cmnt_location"><i class="icon_location2"></i>河南郑州</span>
            <span class="cmnt_time">20楼</span>
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
        <div class="cmnt_item">
          <img src="http://tva2.sinaimg.cn/crop.0.10.491.491.50/74a15becjw8f4xeru1q6oj20dn0e8wff.jpg" alt="" class="cmnt_pic">
          <div class="cmnt_info">
            <span class="cmnt_name cmnt_nick">LL-Lemonade</span><span class="cmnt_location"><i class="icon_location2"></i>吉林延边</span><span class="cmnt_time">19楼</span>
          </div>
          <div class="timetime">
            17小时前
          </div>
          <div class="cmnt_text m-cmt-list-item">
            <div class="m-cmt-list-item-tb">
              <!--插入叠楼-->
              <div class="m-cmt-list-item-repeat">
                <div class="m-cmt-list-item-repeat">
                  <div class="m-cmt-list-item-repeat">
                    <div class="m-cmt-list-item-repeat">
                      <div class="m-cmt-list-item-inner">
                        <div class="m-cmt-list-item-th">
                          <span class="m-cmt-list-item-name">广东省深圳市网友</span><span class="m-cmt-list-item-floor">2楼</span>
                        </div>
                        <div class="m-cmt-list-item-body">
                          1
                        </div>
                      </div>
                    </div>
                    <div class="m-cmt-list-item-inner">
                      <div class="m-cmt-list-item-th">
                        <span class="m-cmt-list-item-name">广东省深圳市网友</span><span class="m-cmt-list-item-floor">5楼</span>
                      </div>
                      <div class="m-cmt-list-item-body">
                        2
                      </div>
                    </div>
                  </div>
                  <div class="m-cmt-list-item-inner">
                    <div class="m-cmt-list-item-th">
                      <span class="m-cmt-list-item-name">广东省深圳市网友</span><span class="m-cmt-list-item-floor">13楼</span>
                    </div>
                    <div class="m-cmt-list-item-body">
                      3
                    </div>
                  </div>
                </div>
                <div class="m-cmt-list-item-inner">
                  <div class="m-cmt-list-item-th">
                    <span class="m-cmt-list-item-name">广东省深圳市网友</span><span class="m-cmt-list-item-floor">24楼</span>
                  </div>
                  <div class="m-cmt-list-item-body">
                    4
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
            <span class="cmnt_name cmnt_nick">萌芽编辑</span><span class="cmnt_location"><i class="icon_location2"></i>江西南昌</span><span class="cmnt_time">19楼</span>
          </div><div class="timetime">
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
              <a href="javascript:void(0);" class="cmnt_good j_favor_single" data-agree="1017"><i class="icon_zan"></i><span class="cmnt_good_num">1017</span></a>
              <a href="javascript:void(0);" class="reply j_cmnt_single">回复</a>
            </div>
          </div>
        </div>
        <div class="cmnt_item" data-mid="57EBDECC-2AE40962-72B8D07D-867-8AC" data-wbuser="1" data-wbname="txxm001_fromzol">
          <img src="/static/images/mrtx.jpg" alt="" class="cmnt_pic">
          <div class="cmnt_info">
            <span class="cmnt_name cmnt_nick">txxm001_fromzol</span><span class="cmnt_location"><i class="icon_location2"></i>河南郑州</span><span class="cmnt_time">18楼</span>
          </div><div class="timetime">
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
              <a href="javascript:void(0);" class="cmnt_good j_favor_single" data-agree="976"><i class="icon_zan"></i><span class="cmnt_good_num">976</span></a>
              <a href="javascript:void(0);" class="reply j_cmnt_single">回复</a>
            </div>
          </div>
        </div>
        <div class="cmnt_item" data-mid="57EBD083-78247B39-55D81D52-867-818" data-wbuser="1" data-wbname="wtristone">
          <img src="/static/images/mrtx.jpg" alt="" class="cmnt_pic">
          <div class="cmnt_info">
            <span class="cmnt_name cmnt_nick">wtristone</span><span class="cmnt_location"><i class="icon_location2"></i>福建福州</span><span class="cmnt_time">17楼</span>
          </div><div class="timetime">
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
              <a href="javascript:void(0);" class="cmnt_good j_favor_single" data-agree="619"><i class="icon_zan"></i><span class="cmnt_good_num">619</span></a>
              <a href="javascript:void(0);" class="reply j_cmnt_single">回复</a>
            </div>
          </div>
        </div>
        <div class="cmnt_item" data-mid="57EBE0C4-A38EF824-7D8231C9-867-984" data-wbuser="1" data-wbname="80牛杂佬">
          <img src="http://tva2.sinaimg.cn/crop.0.0.1080.1080.50/7d8231c9jw8ek8y1dj1rrj20u00u0q4y.jpg" alt="" class="cmnt_pic">
          <div class="cmnt_info">
            <span class="cmnt_name cmnt_nick">80牛杂佬</span><span class="cmnt_location"><i class="icon_location2"></i>广东佛山</span><span class="cmnt_time">16楼</span>
          </div><div class="timetime">
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
              <a href="javascript:void(0);" class="cmnt_good j_favor_single" data-agree="532"><i class="icon_zan"></i><span class="cmnt_good_num">532</span></a>
              <a href="javascript:void(0);" class="reply j_cmnt_single">回复</a>
            </div>
          </div>
        </div>
        <div class="cmnt_item" data-mid="57EBE0E8-B6F24AF3-DACAE773-867-94E" data-wbuser="1" data-wbname="依咿虫子">
          <img src="http://tva1.sinaimg.cn/crop.72.256.426.426.50/dacae773gw1e72ejm9eh9j20ev0m8afb.jpg" alt="" class="cmnt_pic">
          <div class="cmnt_info">
            <span class="cmnt_name cmnt_nick">依咿虫子</span><span class="cmnt_location"><i class="icon_location2"></i>云南昆明</span><span class="cmnt_time">15楼</span>
          </div><div class="timetime">
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
              <a href="javascript:void(0);" class="cmnt_good j_favor_single" data-agree="513"><i class="icon_zan"></i><span class="cmnt_good_num">513</span></a>
              <a href="javascript:void(0);" class="reply j_cmnt_single">回复</a>
            </div>
          </div>
        </div>
        <div class="cmnt_item" data-mid="57EC30D4-B7B812A5-63932889-867-8F8" data-wbuser="1" data-wbname="亲亲的三大爷">
          <img src="http://tva1.sinaimg.cn/crop.0.0.1080.1080.50/63932889jw8egs72g5kz0j20u00u0wgf.jpg" alt="" class="cmnt_pic">
          <div class="cmnt_info">
            <span class="cmnt_name cmnt_nick">亲亲的三大爷</span><span class="cmnt_location"><i class="icon_location2"></i>山西太原</span><span class="cmnt_time">14楼</span>
          </div><div class="timetime">
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
              <a href="javascript:void(0);" class="cmnt_good j_favor_single" data-agree="396"><i class="icon_zan"></i><span class="cmnt_good_num">396</span></a>
              <a href="javascript:void(0);" class="reply j_cmnt_single">回复</a>
            </div>
          </div>
        </div>
        <div class="cmnt_item" data-mid="57EC467B-B7B88BBF-12AEB6349-867-951" data-wbuser="1" data-wbname="滨go_">
          <img src="http://tva4.sinaimg.cn/crop.0.0.996.996.50/005toA9rjw8f6dyidmyjhj30ro0rpaay.jpg" alt="" class="cmnt_pic">
          <div class="cmnt_info">
            <span class="cmnt_name cmnt_nick">滨go_</span><span class="cmnt_location"><i class="icon_location2"></i>山西太原</span><span class="cmnt_time">13楼</span>
          </div><div class="timetime">
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
              <a href="javascript:void(0);" class="cmnt_good j_favor_single" data-agree="384"><i class="icon_zan"></i><span class="cmnt_good_num">384</span></a>
              <a href="javascript:void(0);" class="reply j_cmnt_single">回复</a>
            </div>
          </div>
        </div>
        <div class="cmnt_item" data-mid="57EBD338-6FC0410B-443DD5A2-867-897" data-wbuser="1" data-wbname="xuech117">
          <img src="http://tva3.sinaimg.cn/crop.227.99.568.568.50/443dd5a2jw8equjznyvqsj20sg0lc46n.jpg" alt="" class="cmnt_pic">
          <div class="cmnt_info">
            <span class="cmnt_name cmnt_nick">xuech117</span><span class="cmnt_location"><i class="icon_location2"></i>北京</span><span class="cmnt_time">12楼</span>
          </div><div class="timetime">
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
              <a href="javascript:void(0);" class="cmnt_good j_favor_single" data-agree="355"><i class="icon_zan"></i><span class="cmnt_good_num">355</span></a>
              <a href="javascript:void(0);" class="reply j_cmnt_single">回复</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import store from '../../../vuex/store';
  export default {
    data () {
      return {
        open:false,
      }
    },
    created () {
      this.$store.dispatch("updateFooter",false);
      this.$store.dispatch("updateBackClass",'');
    },
    methods:{
      openMessage:function () {
        this.open=true
      },
      close:function () {
        this.open=false
      }
    },
  }
</script>
<style scoped>
  @import "../../../../static/css/weui.min-gggeren-diy.css";
  @import "../../../../static/css/cmnt.min.css";
  @import "../../../../static/css/online-min.css";
</style>
