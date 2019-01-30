<template>
  <div class="container login-container">
    <div class="login-wrap">
      <div class="login-inner">
        <el-form ref="searchForm" :model="searchForm" :rules="rules" label-position="right" label-width="100px">
          <el-form-item label="姓名" prop="userName">
            <el-input v-model.trim="searchForm.userName" placeholder="姓名" :maxlength="12"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model.trim="searchForm.password" type="password" auto-complete="off" placeholder="密码" :minlength="6" :maxlength="16"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="renewpassword">
            <el-input v-model.trim="searchForm.renewpassword" type="password" auto-complete="off" placeholder="确认密码" :minlength="6" :maxlength="16"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" :loading="saveBtnLoading" @click="onSubmit">
              注册
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const namePattern = new RegExp(
      '^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9])*$'
    );
    const pwdPattern = new RegExp(
      '^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$'
    );
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
        if (this.searchForm.renewpassword !== '') {
          this.$refs.searchForm.validateField('renewpassword');
        }
      }
      callback();
    };
    const validateReNewPwd = (rule, value, callback) => {
      if (this.searchForm.password) {
        if (value === '') {
          callback(new Error('请输入确认密码'));
        } else if (value !== this.searchForm.password) {
          callback(new Error('密码与确认密码不一致'));
        }
      }
      callback();
    };
    return {
      searchForm: {
        userName: '',
        password: '',
        renewpassword: ''
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
        renewpassword: [
          { required: true, message: '确认密码不能为空', trigger: 'blur' },
          { validator: validateReNewPwd, trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    onSubmit() {
      this.$refs.searchForm.validate((valid) => {
        if (valid) {
          this.onRegister();
        } else {
          return false;
        }
      });
    },
    onRegister() {
      const post_data = { ...this.searchForm };
      delete post_data.renewpassword;
      console.log('注册成功: ', post_data);
      // this.editUser(post_data);
    }
  }
};
</script>

<style lang="postcss" scoped>
.login-container {
  display: flex;
  align-content: center;
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
