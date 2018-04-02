<template>
  <div class="container login-container">
    <div class="login-wrap">
      <div class="login-inner">
        <el-form :model="searchForm" ref="searchForm" :rules="rules" label-position="right" label-width="120px">
          <el-form-item label="accesstoken" prop="accesstoken">
            <el-input v-model.trim="searchForm.accesstoken" placeholder="accesstoken" :maxlength="36"></el-input>
          </el-form-item>
          <!-- <el-form-item label="姓名" prop="userName">
            <el-input v-model.trim="searchForm.userName" placeholder="姓名" :maxlength="12"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model.trim="searchForm.password" auto-complete="off" placeholder="密码" :minlength="6" :maxlength="16"></el-input>
          </el-form-item> -->
          <el-form-item>
            <el-button type="primary" @click="onSubmit" :loading="saveBtnLoading">登录</el-button>
            <!-- <el-button type="success" @click="onLoginByGithub" :loading="saveBtnLoading">通过Github登录</el-button> -->
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    const namePattern = new RegExp(
      '^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9])*$'
    );
    const pwdPattern = new RegExp(
      '^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$'
    );
    const accesstokenPattern = new RegExp('^[-0-9A-Za-z]{36}$');
    const validateName = (rule, value, callback) => {
      if (value) {
        const flag = namePattern.test(value);
        if (!flag) {
          callback(new Error('您输入的用户名格式不正确'));
        }
      }
      callback();
    };
    const validateNewPwd = (rule, value, callback) => {
      if (value) {
        const newPwdLen = value.length;
        if (newPwdLen < 6 || newPwdLen > 16) {
          callback(new Error('密码为6-16位数字及字母组合'));
        }
        const flag = pwdPattern.test(value);
        if (!flag) {
          callback(new Error('您输入的密码格式不正确'));
        }
      }
      callback();
    };

    const validateAccessToken = (rule, value, callback) => {
      if (value) {
        const newPwdLen = value.length;
        if (newPwdLen !== 36) {
          callback(new Error('accesstoken为36位数字及字母组合'));
        }
        const flag = accesstokenPattern.test(value);
        if (!flag) {
          callback(new Error('您输入的accesstoken格式不正确'));
        }
      }
      callback();
    };
    return {
      searchForm: {
        // userName: '',
        // password: '',
        // renewpassword: '',
        accesstoken: ''
      },
      saveBtnLoading: false,
      rules: {
        userName: [
          { required: true, message: '姓名不能为空', trigger: 'blur' },
          { validator: validateName, trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { validator: validateNewPwd, trigger: 'blur' }
        ],
        accesstoken: [
          { required: true, message: 'accesstoken不能为空', trigger: 'blur' },
          { validator: validateAccessToken, trigger: 'blur' }
        ]
      }
    };
  },
  computed: {
    // 从 store 的 state 对象中获取 loginInfo
    ...mapGetters({
      loginInfo: 'user/loginInfo',
      loading: 'user/loading'
    })
  },
  mounted() {
    console.log('loginInfo: ', this.loginInfo);
  },
  methods: {
    onSubmit() {
      this.$refs.searchForm.validate(valid => {
        if (valid) {
          this.onLogin();
        } else {
          return false;
        }
      });
    },
    async onLogin() {
      this.saveBtnLoading = true;
      const post_data = { ...this.searchForm };
      try {
        const userInfo = await this.$store.dispatch('user/doLogin', post_data);
        this.saveBtnLoading = false;
        if (userInfo.success) {
          this.$message({
            message: '登录成功',
            type: 'success'
          });
          this.$router.push('/');
        }
      } catch (error) {
        this.$message({
          message: '登录失败',
          type: 'error'
        });
        this.saveBtnLoading = false;
      }
    }
  }
};
</script>

<style lang="postcss" scoped>
.login-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-wrap {
    display: flex;
    align-content: center;
    align-items: center;
    width: 420px;
    height: 490px;
    border-radius: 8px;
    background: #fff;
    .login-inner {
      // padding: 40px;
    }
  }
}
</style>
