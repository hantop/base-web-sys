<template>
  <div class="common-box">
    <div class="common-container pb80">
      <div class="step-style">
        <el-steps :active="active" space="80%" align-center>
          <el-step title="项目选择和确认"></el-step>
          <el-step title="贷后检查基本信息填写"></el-step>
          <el-step title="客户面谈填写"></el-step>
        </el-steps>
      </div>
      <div class="first" v-show = "active === 0"><first ref="firstInfo" ></first></div>
      <div class="Second" v-show = "active === 1"><second ref="Baseinfo"></second></div>
      <div class="third" v-show = "active === 2"> <third ref="Finalinfo"></third></div>
    </div>
    <div class="common-bottom-btn">
      <el-button type="primary" @click="prev" v-if=" active == 1 || active == 2">上一步</el-button>
      <el-button type="primary" @click="next" v-if="active == 0 || active == 1 " :disabled="disabled">下一步</el-button>
      <el-button type="primary"  v-if="active == 2" @click="submitInfo">提交</el-button>
    </div>
  </div>
</template>

<script>
  import { loanInspectionController } from "./../../controller/common/loanInspection_controller";
import first from './first'
import Second from './second';
import third from './third';

export default {
  components: {Second, first, third},
  data() {
    return {
      active: 0,
      disabled: true,


      id:'',
      orderNo:'',
      BaseinfoForm:{},
    };
  },

  methods: {
    prev(){
      --this.active
      if (this.active < 0) this.active = 0;
    },
    next() {
      if (this.active++ > 2) this.active = 0;
      this.openDetails(row)

    },
  // 步骤条的提交
    judgeValidate () {
      return new Promise((resolve, reject) => {
        this.$nextTick(() => {
          const Baseinfo = this.$refs.Baseinfo
          const Finalinfo = this.$refs.Finalinfo
          // Baseinfo.judgeValidate().then(() => {
          //   Finalinfo.judgeValidate().then(() => {

              // const params = {
              //   qualityBaseinfoRequest: Baseinfo.qualityBaseinfoRequest,
              //   qualityFinalinfoRequest: Finalinfo.qualityFinalinfoRequest,
              // }

          const tempObj = {
            orderNo: this.$refs.firstInfo.tableData[0].orderNo,
          }
          const params = {
            qualityBaseinfoRequest: {...Baseinfo.qualityBaseinfoRequest, ...tempObj},
            qualityFinalinfoRequest:{...Finalinfo.qualityFinalinfoRequest, ...tempObj},
          }
              console.info(2323232323)
              resolve(params)
            })
          // .catch(() => {
            //   this.active = 1
            //   reject(1)
            // })
          })
        // .catch(() => {
          //   this.active = 2
          //   reject()
          // })
      //   })
      // })
    },
    //提交
    submitInfo () {
      this.judgeValidate().then(res => {
          loanInspectionController.saveQualityInfo(res).then(res => {
            if (res.status === 200) {
              this.$message.success('提交成功')
              this.$router.go(-1)
            }
          })
      })
    },
  },
  mounted() {
  },
};
</script>

<style lang="scss" scoped>
.pb80 {
	padding-bottom: 80px;
}
.step-style {
  margin-bottom: 20px;
  padding: 30px;
}
</style>
