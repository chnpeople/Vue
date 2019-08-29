<template>
     <div id="player">
    <h2 class="title">黑云音乐</h2>
    <div class="search">
      <input type="text" v-model="music" @keyup.enter="queryMusic" />
      <button>
        <span class="iconfont icon-search"></span>
      </button>
    </div>
    <div class="tab-wrapper">
      <!-- tab栏 -->
      <div class="tab-bar">

        <router-link to="/results" class="bar-item">搜索结果</router-link>
        <router-link to="/play" class="bar-item">歌曲播放</router-link>
        <router-link to="/video" class="bar-item">MV</router-link>
        <router-link to="/comment" class="bar-item">歌曲评论</router-link>


      </div>
      <!-- 对应的内容区域 -->
      <div class="tab-content">
          <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
   data() {
     return {
       music:'北京欢迎你'
     }
   },
  methods: {
    // 调用搜索音乐的方法，切换到搜索显示列表界面
    queryMusic() {
      this.$router.push(`/results/${this.music}`)
    }
  },
}
</script>

<style>
    @import url('./assets/css/index.css');
    @import url('./assets/css/iconfont.css');
</style>