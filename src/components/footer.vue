<template>
    <div class="footer">
        <nut-tabbar @tab-switch="tabSwitch3" :tabbarList="tabList3" :bottom="true">
        </nut-tabbar>
    </div>
</template>
<script>
export default {
    data() {
        return {
            tabList3: [
                {
                    'tabTitle': '音乐馆',
                    'curr': true,
                    'icon': require('../static/img/base.png'),
                    'activeIcon': require('../static/img/base_active.png'),
                    'href': '###'
                },
                {
                    'tabTitle': '发现',
                    'curr': false,
                    'icon': require('../static/img/find.png'),
                    'activeIcon': require('../static/img/find_active.png'),
                    'href': '###'
                },
                {
                    'tabTitle': '我的',
                    'curr': false,
                    'icon': require('../static/img/my.png'),
                    'activeIcon': require('../static/img/my_active.png'),
                    'href': '###'
                },
            ]
        }
    },
    methods: {
        tabSwitch3() {

        }
    }
}
</script>
<style lang="less">
.footer .curr {
    color: #2bca90;
}

.nut-tabbar {
    background: black;
}
</style>
