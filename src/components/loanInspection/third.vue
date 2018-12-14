<template>
  <div>
    <div class="g-listpage__style">
      <p class='common-title'>客户面谈信息</p>
      <div>
        <el-form label-position='left' :model='qualityFinalinfoRequest' ref="Finalinfo" label-width="120px" style="margin-top:20px;">
          <el-row :gutter=30>
            <el-col :span="7">
              <el-form-item label='面谈人姓名：' prop='talkName' :rules='$rules.realnameRule'>
                <el-input v-model="qualityFinalinfoRequest.talkName"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="7">
              <el-form-item label='联系电话：' prop='talkPhone':rules='$rules.requiredInputFigure'>
                <el-input v-model="qualityFinalinfoRequest.talkPhone" ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="7">
              <el-form-item label='职务：' prop='position':rules='$rules.requiredFilterValue'>
                <el-input v-model="qualityFinalinfoRequest.position"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <el-form-item label='面谈总结：' prop='talkFinal':rules='$rules.requiredFilterValue'>
                <el-input v-model="qualityFinalinfoRequest.talkFinal" type="textarea" :row="4"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </div>
    <div class="g-listpage__style">
      <p class='common-title'>检查综合意见</p>
      <div>
        <el-form label-position='left' :model='qualityFinalinfoRequest' ref="Finalinfo" label-width="180px">
          <el-row>
          <el-col :span="22">
            <el-form-item label='借款人资金运用情况：' prop='fundStatus' style="font-size:20px;">
              <el-radio-group v-model="qualityFinalinfoRequest.fundStatus">
              <el-radio  :label="0">良好</el-radio>
              <el-radio  :label="1" >异常</el-radio>
              </el-radio-group>
              <el-input v-model="qualityFinalinfoRequest.fundDemo" type="textarea" :row="4" 　placeholder="请输入异常说明"  v-if="qualityFinalinfoRequest.fundStatus == 1"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
          <el-row>
            <el-col :span="22">
              <el-form-item label='经营及财务情况：' prop='financialStatus' style="font-size:20px;">
                <el-radio-group v-model="qualityFinalinfoRequest.financialStatus">
                  <el-radio  :label="0">良好</el-radio>
                  <el-radio  :label="1" >异常</el-radio>
                </el-radio-group>
                <el-input v-model="qualityFinalinfoRequest.financialDemo" type="textarea" :row="4" placeholder="请输入异常说明" v-if="qualityFinalinfoRequest.financialStatus == 1"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="22">
              <el-form-item label='还款能力情况：' prop='code' style="font-size:20px;">
                <el-radio-group v-model="qualityFinalinfoRequest.paymentStatus">
                  <el-radio  :label="0">良好</el-radio>
                  <el-radio  :label="1" >异常</el-radio>
                </el-radio-group>
                <el-input v-model="qualityFinalinfoRequest.paymentDemo" type="textarea" :row="4" placeholder="请输入异常说明"v-if="qualityFinalinfoRequest.paymentStatus == 1"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="22">
              <el-form-item label='逾期情况：' prop='overdueStatus' style="font-size:20px;">
                <el-radio-group v-model="qualityFinalinfoRequest.overdueStatus">
                  <el-radio  :label="0">无</el-radio>
                  <el-radio  :label="1" >异常</el-radio>
                </el-radio-group>
                <el-input v-model="qualityFinalinfoRequest.overdueDemo" type="textarea" :row="4" placeholder="请输入异常说明"v-if="qualityFinalinfoRequest.overdueStatus == 1"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="22">
              <el-form-item label='涉诉情况：' prop='appealStatus' style="font-size:20px;">
                <el-radio-group v-model="qualityFinalinfoRequest.appealStatus">
                  <el-radio  :label="0">无</el-radio>
                  <el-radio  :label="1" >异常</el-radio>
                </el-radio-group>
                <el-input v-model="qualityFinalinfoRequest.appealDemo	" type="textarea" :row="4" placeholder="请输入异常说明" v-if="qualityFinalinfoRequest.appealStatus == 1"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="22">
              <el-form-item label='行政处罚情况：' prop='penalizeStatus' style="font-size:20px;">
                <el-radio-group v-model="qualityFinalinfoRequest.penalizeStatus">
                  <el-radio  :label="0">无</el-radio>
                  <el-radio  :label="1" >异常</el-radio>
                </el-radio-group>
                <el-input v-model="qualityFinalinfoRequest.penalizeDemo" type="textarea" :row="4" placeholder="请输入异常说明" v-if="qualityFinalinfoRequest.penalizeStatus == 1"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="22">
              <el-form-item label='贷后检查总结：' prop='loanReport'>
                <el-input v-model="qualityFinalinfoRequest.loanReport" type="textarea" :row="4"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>

    </div>
  </div>
</template>

<script>
  // import { orderController } from "./../../controller/common/order_controller";
  // import approveRecord from './../approvalDetails/approve-record'

  export default {
    components: {},
    data() {
      return {
        penalizeStatus:0,
        isHaveSelected: false,
        FinalinfoForm: {},
        qualityFinalinfoRequest:{
          loanReport:'',
          penalizeDemo:'',
          appealDemo:'',
          appealStatus:'',
          overdueDemo:'',
          overdueStatus:'',
          paymentDemo:'',
          paymentStatus:'',
          financialDemo:'',
          financialStatus:'',
          fundDemo:'',
          fundStatus:'',
          talkFinal:'',
          position:'',
          talkPhone:'',
          talkName:'',
        }
       };
    },
    methods: {
      searchFnc() {

      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      judgeValidate () {
        return new Promise((resolve, reject) => {
          this.$refs['Finalinfo'].
          loanReportvalidate((valid) => {
            if (valid) {
              resolve()
            } else {
              reject()
              return false
            }
          })
        })
      },
      handleSelectionChange(val) {
        let that = this;
        if (val.length == 0) {
          that.isHaveSelected = false;
        } else {
          that.isHaveSelected = true;
        }
        this.multipleSelection = val;
      },
      indexMethod(index) {
        return this.listIndex_pageSize * (this.listIndex_pageNo - 1) + index + 1;
      },
      pageSizeChange(size) {
        this.pageSize = size;
        // this.getRoleList();
      },
      pageNoChange(pageNo) {
        this.pageNo = pageNo;
        // this.getRoleList();
      },

      getRoleList() {
        roleController
          .list({
            page: this.pageNo,
            size: this.pageSize,
            roleName: this.searchForm.inputs
          })
          .then(res => {
            if (res.status === 200) {
              this.listIndex_pageSize = this.pageSize;
              this.listIndex_pageNo = this.pageNo;

              let data = res.data.data;

              this.tableData = data;
              this.total = res.data.count;
            } else {
              this.tableData = [];
              this.total = 0;
            }
          });
      }
    },
    props: {},
    created() {},
    mounted() {},
    computed: {},
    watch: {}
  };
</script>

<style lang="scss" scoped>
  .g-listpage__style {
    padding-top: 16px;
  }
</style>
