<template>
    <div class="login_page page">
        <div class="login_form">
            <nut-tab @tab-switch="switchLoginType">
                <nut-tab-panel tabTitle="手机号登录">
                    <nut-textinput v-model="userPhone" label="手机号：" placeholder="请输入手机号码" :clearBtn="true"/>
                    <nut-textinput placeholder="请输入验证码" v-model="validCode" label="验证码：" :clearBtn="true" type="password"/>
                </nut-tab-panel>
                <nut-tab-panel tabTitle="账号登录"></nut-tab-panel>
            </nut-tab>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      userPhone: '',
      validCode: ''
    }
  },
  methods: {
    switchLoginType (index, event) {

    }
  }
}
</script>
<style lang="less" scoped>
    .login_page {
        background: url("../assets/img/login_bg.jpg");
        background-size: contain;
    }

    .login_form {
        width: 80%;
        margin: 150px auto 0;
    }

    .login_form .nut-tab {
        padding: 0;
    }
</style>
