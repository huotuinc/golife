<template>
  <div class="_full_router ddbg">
    <div class="_full_inner">
      <div class="qbxiaozu">
    <ul>
      <li>
        <router-link to="/circle/groupList/10">
          <div class="custom-image-mask">
            <span class="bn">养生</span>
            <span class="bna">3232人已关注</span>
            <div class="masksd">
            </div>
            <img src="/static/images/a1.jpg" style="width:100%; ">
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/circle/groupList/10">
          <div class="custom-image-mask">
            <span class="bn">养生</span>
            <span class="bna">3232人已关注</span>
            <div class="masksd">
            </div>
            <img src="/static/images/zzxxzz.png" style="width:100%; ">
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/circle/groupList/10">
          <div class="custom-image-mask">
            <span class="bn">养生</span>
            <span class="bna">3232人已关注</span>
            <div class="masksd">
            </div>
            <img src="/static/images/zzxxzz.png" style="width:100%; ">
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/circle/groupList/10">
          <div class="custom-image-mask">
            <span class="bn">养生</span>
            <span class="bna">3232人已关注</span>
            <div class="masksd">
            </div>
            <img src="/static/images/zzxxzz.png" style="width:100%; ">
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/circle/groupList/10">
          <div class="custom-image-mask">
            <span class="bn">养生</span>
            <span class="bna">3232人已关注</span>
            <div class="masksd">
            </div>
            <img src="/static/images/zzxxzz.png" style="width:100%; ">
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/circle/groupList/10">
          <div class="custom-image-mask">
            <span class="bn">养生</span>
            <span class="bna">3232人已关注</span>
            <div class="masksd">
            </div>
            <img src="/static/images/zzxxzz.png" style="width:100%; ">
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/circle/groupList/10">
          <div class="custom-image-mask">
            <span class="bn">养生</span>
            <span class="bna">3232人已关注</span>
            <div class="masksd">
            </div>
            <img src="/static/images/zzxxzz.png" style="width:100%; ">
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/circle/groupList/10">
          <div class="custom-image-mask">
            <span class="bn">养生</span>
            <span class="bna">3232人已关注</span>
            <div class="masksd">
            </div>
            <img src="/static/images/zzxxzz.png" style="width:100%; ">
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/circle/groupList/10">
          <div class="custom-image-mask">
            <span class="bn">养生</span>
            <span class="bna">3232人已关注</span>
            <div class="masksd">
            </div>
            <img src="/static/images/zzxxzz.png" style="width:100%; ">
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/circle/groupList/10">
          <div class="custom-image-mask">
            <span class="bn">养生</span>
            <span class="bna">3232人已关注</span>
            <div class="masksd">
            </div>
            <img src="/static/images/zzxxzz.png" style="width:100%; ">
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/circle/groupList/10">
          <div class="custom-image-mask">
            <span class="bn">养生</span>
            <span class="bna">3232人已关注</span>
            <div class="masksd">
            </div>
            <img src="/static/images/zzxxzz.png" style="width:100%; ">
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/circle/groupList/10">
          <div class="custom-image-mask">
            <span class="bn">养生</span>
            <span class="bna">3232人已关注</span>
            <div class="masksd">
            </div>
            <img src="/static/images/zzxxzz.png" style="width:100%; ">
          </div>
        </router-link>
      </li>
    </ul>
    <p style="clear:both"></p>
  </div>
    </div>
  </div>
</template>
<script>
  import store from '../../../vuex/store';
  export default{
    activated() {
      this.$store.dispatch("updateFooter",false);
      this.$emit('update-decline', true)
    },
    deactivated() {
      this.$emit('update-decline', false)
    }
  }
</script>
