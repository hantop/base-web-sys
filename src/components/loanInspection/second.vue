<template>
  <div>
    <div class="g-listpage__style">
      <p class='common-title'>贷后检查基本信息</p>
      <div>
        <el-form label-position='left' :model='qualityBaseinfoRequest' ref="Baseinfo"  style="margin-top:20px;" label-width="168px">
          <el-row :gutter="30">
            <el-col :span="8">
              <el-form-item label='贷款用途(实际使用)：' prop='loanPurpose'  >
                <el-select v-model='qualityBaseinfoRequest.loanPurpose' placeholder='请选择'>
                  <el-option
                    v-for="item in $dict.findDictData('LoanUseType')"
                    :key='item.id'
                    :label='item.value'
                    :value='item.id'>
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label='是否与申请时一致：' prop='agreement' >
                <el-select placeholder="请选择" style="width: 90px;" v-model="qualityBaseinfoRequest.agreement">
                  <el-option
                    v-for="item in agreement"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"/>
                </el-select>
                <el-input v-model="qualityBaseinfoRequest.agreementDateil" style="width: 147px"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label='客户联系方式是否有效：' prop='effective' >
                <el-select placeholder="请选择" style="width: 90px;" v-model="qualityBaseinfoRequest.effective">
                  <el-option
                    v-for="item in effective"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"/>
                </el-select>
                <el-input v-model="qualityBaseinfoRequest.effectiveDateil" style="width: 147px"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="30">
            <el-col :span="8">
              <el-form-item label='网查有无负面信息：' prop='webLookup'>
                <el-select placeholder="请选择"  v-model="qualityBaseinfoRequest.webLookup">
                  <el-option
                    v-for="item in webLookup"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"/>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label='有无涉诉和风险信息：' prop='risk'>
                <el-select placeholder="请选择" style="width: 90px;" v-model="qualityBaseinfoRequest.risk">
                  <el-option
                    v-for="item in risk"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"/>
                </el-select>
                <el-input v-model="qualityBaseinfoRequest.riskDateil" style="width: 147px"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label='公司结构是否发生变更：' prop='companyChange'>
                <el-select placeholder="请选择" style="width: 90px;" v-model="qualityBaseinfoRequest.companyChange">
                  <el-option
                    v-for="item in companyChange"
                    :key="item.id"
                    :label="item.value"
                    :value="item.value"/>
                </el-select>
                <el-input v-model="qualityBaseinfoRequest.companychangeDateil" style="width: 147px"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>

    </div>
    <div class="g-listpage__style">
      <div>
        <el-form label-position='left' :model='qualityBaseinfoRequest' ref="Baseinfo" label-width="180px">
          <el-row >
            <el-col :span="22">
              <el-form-item label='客户房产车辆情况描述：' prop='assetsDetail'>
                <el-input  type="textarea" v-model="qualityBaseinfoRequest.assetsDetail" :row="4"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row >
            <el-col :span="22">
              <el-form-item label='经营情况描述：' prop='operationDateil'>
                <el-input  type="textarea" v-model="qualityBaseinfoRequest.operationDateil" :row="4"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row >
            <el-col :span="22">
              <el-form-item label='存货数量变化描述：' prop='stockDateil'>
                <el-input  type="textarea" v-model="qualityBaseinfoRequest.stockDateil" :row="4"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row >
            <el-col :span="22">
              <el-form-item label='已收账款回笼描述：' prop='accountsDateil'>
                <el-input  type="textarea" v-model="qualityBaseinfoRequest.accountsDateil" :row="4"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row >
            <el-col :span="22">
              <el-form-item label='现场作业描述：' prop='homeworkDateil'>
                <el-input  type="textarea" v-model="qualityBaseinfoRequest.homeworkDateil" :row="4"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row >
            <el-col :span="22">
              <el-form-item label='同行/客户反馈信息：' prop='feedbackDateil'>
                <el-input  type="textarea" v-model="qualityBaseinfoRequest.feedbackDateil" :row="4"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row >
            <el-col :span="22">
              <el-form-item label='其他:(影响项目安全因素)：' prop='otherDateil'>
                <el-input  type="textarea" v-model="qualityBaseinfoRequest.otherDateil" :row="4"></el-input>
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
        isHaveSelected: false,
        agreement:[{value:'是',id:'1'},{value:'否',id:'2'}],
        effective:[{value:'是',id:'3'},{value:'否',id:'4'}],
        webLookup:[{value:'是',id:'5'},{value:'否',id:'6'}],
        risk:[{value:'是',id:'7'},{value:'否',id:'8'}],
        companyChange:[{value:'是',id:'7'},{value:'否',id:'8'}],
        BaseinfoForm: {},
        qualityBaseinfoRequest:{
          otherDateil:'',
          feedbackDateil:'',
          homeworkDateil:'',
          accountsDateil:'',
          stockDateil:'',
          operationDateil:'',
          assetsDetail:'',
          companychangeDateil:'',
          effectiveDateil:'',
          riskDateil:'',
          agreementDateil:'',
          loanPurpose:'',

        }
      };
    },
    methods: {
      searchFnc() {

      },
      judgeValidate () {
        return new Promise((resolve, reject) => {
          this.$refs['Baseinfo'].validate((valid) => {
            if (valid) {
              resolve()
            } else {
              reject()
              return false
            }
          })
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
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
      addFuc() {
        this.$router.push({
          path: "/sys/system/role/edit/add"
        });
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
  .el-form-item__label{
    width: 150px !important;
  }
</style>
