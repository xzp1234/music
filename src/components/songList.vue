<template>
    <div class="songlist_wrap">
        <div class="card" v-for="card in songList" :key="card.id">
            <div class="card_top">
                <div class="card_item">
                    <img class="card_icon" :src="card.iconUrl"></img>
                    <dl class="card_info">
                        <dt class="card_name">{{card.name}}</dt>
                        <dd class="card_list" v-for="list in card.list" :key="list.id">{{list.name}}-{{list.singer}}</dd>
                    </dl>
                </div>
            </div>
            <div class="card_bottom">
                <span>{{card.reason}}</span>
                <span class="card_like">{{card.like}}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            songList: [
                {
                    id: "1",
                    name: "一百万个可能",
                    list: [
                        {
                            id: "1_1",
                            name: "浮夸",
                            singer: "陈奕迅"
                        },
                        {
                            id: "1_2",
                            name: "浮夸",
                            singer: "陈奕迅"
                        },
                        {
                            id: "1_3",
                            name: "浮夸",
                            singer: "陈奕迅"
                        }
                    ],
                    like: "999+",
                    iconUrl: require("../static/img/music.jpg"),
                    reason: "根据你喜欢的《王杰-不浪漫罪名》推荐"
                },
                {
                    id: "2",
                    name: "一百万个可能",
                    list: [
                        {
                            id: "2_1",
                            name: "浮夸",
                            singer: "陈奕迅"
                        },
                        {
                            id: "2_2",
                            name: "浮夸",
                            singer: "陈奕迅"
                        },
                        {
                            id: "2_3",
                            name: "浮夸",
                            singer: "陈奕迅"
                        }
                    ],
                    like: "999+",
                    iconUrl: require("../static/img/music.jpg"),
                    reason: "根据你喜欢的《王杰-不浪漫罪名》推荐"
                },
                {
                    id: "3",
                    name: "一百万个可能",
                    list: [
                        {
                            id: "3_1",
                            name: "浮夸",
                            singer: "陈奕迅"
                        },
                        {
                            id: "3_2",
                            name: "浮夸",
                            singer: "陈奕迅"
                        },
                        {
                            id: "3_3",
                            name: "浮夸",
                            singer: "陈奕迅"
                        }
                    ],
                    like: "999+",
                    iconUrl: require("../static/img/music.jpg"),
                    reason: "根据你喜欢的《王杰-不浪漫罪名》推荐"
                },
                {
                    id: "4",
                    name: "一百万个可能",
                    list: [
                        {
                            id: "4_1",
                            name: "浮夸",
                            singer: "陈奕迅"
                        },
                        {
                            id: "4_2",
                            name: "浮夸",
                            singer: "陈奕迅"
                        },
                        {
                            id: "4_3",
                            name: "浮夸",
                            singer: "陈奕迅"
                        }
                    ],
                    like: "999+",
                    iconUrl: require("../static/img/music.jpg"),
                    reason: "根据你喜欢的《王杰-不浪漫罪名》推荐"
                }
            ]
        }
    }
}
</script>
<style lang="less">
.card {
    margin: 20px;
    border-bottom: 1px solid #8a8a8a;
}

.card_item {
    display: flex;
    text-align: left;
}

.card_icon {
    width: 160px;
    height: 160px;
    border-radius: 10px 10px;
    margin-right: 20px;
}

.card_name {
    font-size: 16px;
    color: black;
}

.card_list {
    padding: 5px 0;
}

.card_like {
    float: right;
    height: 35px;
    line-height: 40px;
    padding-left: 40px;
    background-image: url("../static/img/messge.png");
    background-size: contain;
    background-repeat: no-repeat;
}

.card_bottom {
    margin: 10px auto;
    text-align: left;
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
