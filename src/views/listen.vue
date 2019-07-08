<template>
  <div class="Listen">
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
    

  </div>
</template>
<script>
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
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.caterage_wrap {
  margin-top: 20px;
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
</style>
