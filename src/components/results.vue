<template>
 <!-- <script type="text/html" id="result_tpl"> -->
    <div class="result-wrapper">
        <div class="song" v-for="(item,index) in songList" :key="index">
          <div class="name">
            <span class="iconfont icon-play" @dblclick="playmusic(item.id)"></span>
            {{item.name}}
            <span class="iconfont icon-editmedia"></span>
          </div>
          <div class="singer">{{item.artists|filterSinger}}</div>
          <div class="album">《{{item.album.name}}》</div>
          <div class="time">{{item.duration|formatTime}}</div>
        </div>
         
      </div>

    <!-- </script> -->
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      songList: []
    };
  },
  created() {
    axios
      .get(`https://autumnfish.cn/search?keywords=${this.$route.params.music}`)
      .then(res => {
        console.log(res);
        this.songList = res.data.result.songs;
        console.log(this.songList);
      });
  },
  filters: {
    formatTime(msec) {
      //计算总秒数
      let totalsec = msec / 1000;
      let min = Math.floor(totalsec / 60);
      let sec = Math.floor(totalsec % 60);
      let minStr = min < 10 ? "0" + min : min + "";
      let secStr = sec < 10 ? "0" + sec : sec + "";
      return `${minStr}:${secStr}`;
    },
    filterSinger(singers) {
      let arr = [];
      for (let i = 0; i < singers.length; i++) {
        arr.push(singers[i].name);
      }
      return arr.join("/");
    }
  },
  methods: {
    playmusic(id) {
      this.$router.push("/play/" + id);
    }
  }
};
</script>

<style>
@import url("../assets/css/results.css");
</style>