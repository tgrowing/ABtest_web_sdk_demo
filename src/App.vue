<!--
 * @Descripttion: 
 * @Author: sherrysong
 * @Date: 2022-05-06 15:58:26
 * @LastEditors: sherrysong
 * @LastEditTime: 2022-06-14 16:48:14
-->
<template>
  <div class="content">
    <div class="title">web SDK基本信息</div>
    <div>
      <el-form ref="form" :model="form" label-width="120px">
         <el-form-item label="Appkey">
          <el-input v-model="form.appkey" placeholder="必填"></el-input>
        </el-form-item>
        <el-form-item label="上报url" >
          <el-input v-model="form.reportUrl"  placeholder="选填（默认为SAAS地址）"></el-input>
        </el-form-item>
        <el-form-item label="获取实验配置url">
          <el-input v-model="form.experimentUrl"  placeholder="选填（默认为SAAS地址）"></el-input>
        </el-form-item>
         <el-form-item label="用户id">
          <el-input v-model="form.guid"  placeholder="可不填"></el-input>
        </el-form-item>
        <el-form-item label="测试环境">
          <el-switch v-model="form.isTest"></el-switch>
        </el-form-item>
        <el-form-item>
          <el-button :disabled="initStatus" type="primary" @click="onSubmit">初始化</el-button>
        </el-form-item>
      </el-form>
      <!-- <div class="title">切换用户</div>
      <el-form ref="form2" :model="form" label-width="120px">
         <el-form-item label="用户id">
          <el-input v-model="form.guid"></el-input>
        </el-form-item>
        
        <el-form-item>
          <el-button :disabled="initStatus" type="primary" @click="switchUser">提交</el-button>
        </el-form-item>
      </el-form> -->
      <div class="title">上报一次曝光</div>
      <el-form ref="form3" :model="form3" label-width="120px">
         <el-form-item label="实验id">
          <el-input v-model="form3.expId"></el-input>
        </el-form-item>
        
        <el-form-item>
          <el-button :disabled="!form3.expId" type="primary" @click="reportExpData">发送上报</el-button>
        </el-form-item>
      </el-form>
      <div class="title">上报一次事件</div>
      <el-form ref="form3" :model="form3" label-width="120px">
         <el-form-item label="实验id">
          <el-input v-model="form3.expId"></el-input>
        </el-form-item>
        <el-form-item label="事件code">
          <el-input v-model="form3.eventCode"></el-input>
        </el-form-item>
        
        <el-form-item>
          <el-button :disabled="!(form3.expId&&form3.eventCode)"  type="primary" @click="reportExpAndCodeData">发送上报</el-button>
        </el-form-item>
      </el-form>
      </div>
  </div>
</template>

<script>
// import abtest from './utils/tabc_sdk.min.js';
// console.log("abtest",abtest);
export default {
  name: 'Demo',
  components: {
  },
  computed: {
  },
  data() {
    return {
      initStatus: false,
      form: {
        appkey:'b2662644e05999e45cbc277ac116460b',
        reportUrl: '',
        experimentUrl: '',
        isTest:true,
        guid: '',
      },
      form3:{
        expId:'',
        eventCode:'',

      }
    }
  },
  async created() {
  },
  mounted() {
    // this.swiper.slideTo(0, 1000, false)
  },
  methods: {
    onSubmit(){
      const {appkey,isTest,reportUrl,
        experimentUrl,
        guid,} = this.form;
      const self = this;
      window.tabc&&window.tabc.init({
        appkey,
        isTest,
        reportUrl,
        experimentUrl,
        guid,
        onInit: function (data) {
          console.log('onInit',data);
          self.initStatus = true;
        },
        onNetData: function (data) {
          console.log(data);
        },
      });
    },
    async reportExpData(){
      const {expId} = this.form3;
      const exp = await window.tabc.getExpByName(expId);
      console.log("exp",exp);
      window.tabc.reportExpExpose(exp);
    },
    async reportExpAndCodeData(){
      const {expId,eventCode} = this.form3;
      const exp = await window.tabc.getExpByName(expId);
      window.tabc.reportExpEvent(eventCode,exp);
    },
    switchUser(){
    },
   
  },
};
</script>

<style>
  .content{
    width: 800px;
    margin: 0 auto;
  }
  .title{
    text-align: center;
  }

</style>
