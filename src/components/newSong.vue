<template>
    <div class="newsong_wrap">
        <div class="song_item" v-for="song in newSong" :key="song.id">
            <div class="flex_left"></div>
            <div class="flex_mid">
                <img class="song_icon" :src="song.iconUrl"/>
                <dl class="song_info">
                    <dt class="song_name">{{song.name}}</dt>
                    <dd class="song_des">{{song.des}}</dd>
                    <dd class="song_like">{{song.like}}</dd>
                </dl>
            </div>
            <div class="flex_right">
                <span class="song_more"></span>
                <p>{{song.time}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            newSong: [
                {
                    id: "1",
                    name: "一百万个可能",
                    des: "纪艳丽-一百万个可能",
                    like: "999+",
                    iconUrl: require("../static/img/music.jpg"),
                    time: "1小时前"
                },
                {
                    id: "2",
                    name: "一百万个可能",
                    des: "纪艳丽-一百万个可能",
                    like: "999+",
                    iconUrl: require("../static/img/music.jpg"),
                    time: "1小时前"
                },
                {
                    id: "3",
                    name: "一百万个可能",
                    des: "纪艳丽-一百万个可能",
                    like: "999+",
                    iconUrl: require("../static/img/music.jpg"),
                    time: "1小时前"
                },
                {
                    id: "4",
                    name: "一百万个可能",
                    des: "纪艳丽-一百万个可能",
                    like: "999+",
                    iconUrl: require("../static/img/music.jpg"),
                    time: "1小时前"
                },
                {
                    id: "5",
                    name: "一百万个可能",
                    des: "纪艳丽-一百万个可能",
                    like: "999+",
                    iconUrl: require("../static/img/music.jpg"),
                    time: "1小时前"
                }
            ]
        }
    }
}
</script>
<style lang="less">
.song_item {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0px;
}
.flex_left {
    width: 25px;
    height: 25px;
    margin: 20px;
    background-image: url("../static/img/add.png");
    background-size: contain;
    background-repeat: no-repeat;
}
.flex_mid {
    flex: 1;
    display: flex;
    text-align: left;
}
.flex_right {
    padding-right: 20px;
    text-align: right;
}
.song_icon {
    width: 100px;
    height: 100px;
    // background-color: black;
    border-radius: 10px 10px;
    margin-right: 20px;
    // background-image: url("../static/img/music.jpg");
    // background-size: contain;
    // background-repeat: no-repeat;
}

.song_name {
    font-size: 24px;
    color: black;
}

.song_des {
    font-size: 24px;
    padding: 5px 0;
}

.song_like {
    height: 35px;
    line-height: 40px;
    padding-left: 40px;
    background-image: url("../static/img/messge.png");
    background-size: contain;
    background-repeat: no-repeat;
}
.song_more {
    display: inline-block;
    width: 30px;
    height: 30px;
    margin: 10px 0px 20px 0px;
    background-image: url("../static/img/newsong_more.png");
    background-size: contain;
    background-repeat: no-repeat;
}
</style>
