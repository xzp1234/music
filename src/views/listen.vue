<template>
  <div class="Listen page">
    <nut-swiper direction="horizontal" ref="demo3" :loop="true" :autoPlay="3000" :canDragging="false" :paginationVisible="true">
      <div class="nut-swiper-slide gray" v-for="swip in swipList" :key="swip">
        <img :src="swip" alt="" width="100%" height="100%" srcset="">
      </div>
    </nut-swiper>

    <div class="caterage_wrap">
      <dl class="caterage" v-for="(val, index) in caterages" :key="index" >
        <dd class="caterage_icon" :class="val.icon"></dd>
        <dd class="caterage_title">{{val.title}}</dd>
      </dl>
    </div>
    

  <nut-tab @tab-switch="tabSwitch" positionNav="top" class="tabs_wrap">
    <nut-tab-panel v-for="value in editableTabs" v-bind:key="value.tabTitle" :tabTitle="value.tabTitle">
    </nut-tab-panel>
  </nut-tab>

  <component v-bind:is="currentView"></component>

  </div>
</template>
<script>
import newSong from '../components/newSong.vue'
import songList from '../components/songList.vue'
export default {
  data() {
    return {
      swipList: [
        require("../static/img/swip_01.jpg"),
        require("../static/img/swip_02.jpg"),
        require("../static/img/swip_03.jpg"),
        require("../static/img/swip_04.jpg")
      ],
      caterages: [
        {
          title: "乐库",
          icon: "icon-music"
        },
        {
          title: "歌单",
          icon: "icon-list"
        },
        {
          title: "电台",
          icon: "icon-tai"
        },
        {
          title: "猜你喜欢",
          icon: "icon-like"
        },
        {
          title: "每日推荐",
          icon: "icon-support"
        },
        {
          title: "更多",
          icon: "icon-more"
        }
      ],
      currentView:'songList',
      editableTabs:[
        {
          'tabTitle':'新歌',
          'route': 'newSong'
        },
        {
          'tabTitle':'歌单',
          'route': 'songList'
        },
        {
          'tabTitle':'资讯',
          'route': 'newSong'
        },
        {
          'tabTitle':'视频',
          'route': 'songList'
        }
      ]
    }
  },
  components: {
    newSong: newSong,
    songList: songList
  },
  methods: {
    tabSwitch(index) {
      this.currentView = this.editableTabs[index].route;
    },
    
  }
}
</script>
<style lang="less">
.caterage_wrap {
  margin-top: 20px;
}
.caterage_wrap:after {
  content: '';
  display: block;
  clear: both;
}
.caterage {
  float: left;
  width: 33%;
  margin: 10px 0px;
}

.caterage_icon {
    width: 100px;
    height: 100px;
    border-radius: 50px 50px;
    background-position: center;
    background-size: 60px 60px;
    background-repeat: no-repeat;
    margin: auto;
}

.icon-music {
  background-color: #f5a56e;
  background-image: url("../static/img/music.png");
}

.icon-list {
   background-color: #24ad3a;
  background-image: url("../static/img/list.png");
}

.icon-tai {
   background-color: #569dd6;
  background-image: url("../static/img/tai.png");
}

.icon-like {
   background-color: #eb6ef5;
  background-image: url("../static/img/like.png");
}

.icon-support {
   background-color: #fb1f54;
  background-image: url("../static/img/support.png");
}

.icon-more {
   background-color: #6042c1;
  background-image: url("../static/img/more.png");
}
.tabs_wrap  {
  padding: 20px;
}
.tabs_wrap .nut-tab {
  padding: 0;
  margin: 40px auto 0px;
  background: transparent;
  border: none;
}

.tabs_wrap  .nut-tab-title {
  width: 50%;
  height: 50px;
  border: none;
}

.tabs_wrap .nut-tab-item {
  display: none;
}
</style>
