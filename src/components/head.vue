<template>
    <div class="head">
        <nut-textinput class="search" v-model="search" label="" placeholder="请输入歌名"/>
    </div>
</template>
<script>
export default {
    data() {
        return {
            search: ""
        }
    }
}
</script>
<style lang="less">
div.head {
    padding: 10px;
    background: black;
}
.search {
    width: 80%;
    margin: 5px auto 0;
}
.search.nut-textinput input {
    border-radius: 30px;
    height: 60px;
}
</style>
