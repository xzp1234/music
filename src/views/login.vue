<template>
    <div class="login_page page">
        <div class="login_form">
            <nut-tab @tab-switch="switchLoginType">
                <nut-tab-panel tabTitle="手机号登录">
                    <nut-textinput class="user_phone" v-model="userPhone" label="手机号：" placeholder="请输入手机号码"/>
                    <nut-textinput placeholder="请输入验证码" v-model="validCode" label="验证码：" :clearBtn="true" type="password"/>
                </nut-tab-panel>
                <nut-tab-panel tabTitle="账号登录">
                    <nut-textinput class="user_count" v-model="userCount" label="账号：" placeholder="请输入用户名"/>
                    <nut-textinput placeholder="请输入密码" v-model="password" label="密码：" :clearBtn="true" type="password"/>
                </nut-tab-panel>
            </nut-tab>
            <nut-button type="primary" class="login_btn" shape="circle" block @click="login">
                登录
            </nut-button>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      userPhone: '',
      validCode: '',
      userCount: '',
      password: ''
    }
  },
  methods: {
    switchLoginType (index, event) {

    },
    login() {
        let param = {
            userPhone: this.userPhone,
            validCode: this.validCode
        };
        let succFn = res => {
            if (res.code == "0") {
                this.$router.replace({name: 'listen'});
                alert("success");
            } else {
                alert("fail")
            }
        };

        this.$axios.post('login', param, succFn);
    }
  }
}
</script>
<style lang="less">
    .login_page {
        background: url("../static/img/login_bg.jpg");
        background-size: 100% 100%;
    }

    .login_form {
        text-align: center;
    }

    .login_form .nut-tab {
        padding: 0;
        background-color: transparent;
        border: none;
    }
    .user_phone, .user_count {
        margin-bottom: 20px;
    }

    .login_form .nut-textinput-label {
        display: inline-block;
        width: 100px;
    }

    .login_btn.nut-button {
        margin: auto;
        width: 70%;
    }

</style>
