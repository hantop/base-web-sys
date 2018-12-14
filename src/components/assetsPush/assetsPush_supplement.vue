<template>
	<div class="common-box">
		<el-form label-position='left' class="common-container pb80" :model="allInfo" label-width="146px">
			<div>
				<div>
					<p class='common-title management-title'>业务网点信息</p>
					<div>
						<el-row :gutter="30">
							<el-col :span="8">
								<el-form-item label="客户经理名称:">
									<span v-text="allInfo.cusname"></span>
								</el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="联系方式:">
									<span v-text="allInfo.contactinfo"></span>
								</el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="所属网点:">
									<span v-text="allInfo.depart"></span>
								</el-form-item>
							</el-col>
						</el-row>
					</div>
				</div>
				<div>
					<p class='common-title management-title'>基础资料</p>
					<!-- 自然人 -->
					<div v-if="allInfo.membertype == 0">
						<el-row :gutter="30">
							<el-col :span="8">
								<el-form-item label="借款主体类型："> 
									<span v-text="$dict.findDictionaryId('BorrowerType',allInfo.membertype)"></span>
								</el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="借款主体名称：">
									<span v-text="allInfo.membername"></span>
								</el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="性别：">
									<span v-text="allInfo.sex"></span>
									<span v-text="$dict.findDictionaryId('Sex',allInfo.sex)"></span>
								</el-form-item>
							</el-col>
						</el-row>
						<el-row :gutter="30">
							<el-col :span="8">
								<el-form-item label="借款主体证件类型：">
									<span v-text="allInfo.idtype"></span>
									<span v-text="$dict.findDictionaryId('CertificateType',allInfo.idtype)"></span>
								</el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="借款主体证件号码：">
									<span v-text="allInfo.paperid"></span>
								</el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="最高学历：">
									<span v-text="$dict.findDictionaryId('Education',allInfo.educations)"></span>
									<span v-text="allInfo.educations"></span>
								</el-form-item>
							</el-col>
						</el-row>
						<el-row :gutter="30">
							<el-col :span="8">
								<el-form-item label="借款主体注册地址：">
									<!-- $dict.findAreaName(row.addressProvince) + '/' + $dict.findAreaName(row.addressCity) + $dict.findAreaName(row.addressCounty)" -->
									<span v-text="allInfo.registeraddress"></span>
								</el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="借款主体现地址：">
									<span v-text="allInfo.nowaddress"></span>
								</el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="婚姻状况：">
									<span v-text="$dict.findDictionaryId('MaritalStatus',allInfo.marriage)"></span>
									<span v-text="allInfo.marriage"></span>
								</el-form-item>
							</el-col>
						</el-row>
						<el-row :gutter="30">
							<el-col :span="8">
								<el-form-item label="备注：">
									<span v-text="allInfo.ps"></span>
								</el-form-item>
							</el-col>
						</el-row>
					</div>
					<!-- 企业 -->
					<div v-if="allInfo.membertype == 1">
						<el-row :gutter="30">
							<el-col :span="8">
								<el-form-item label="借款主体类型：">
									<span v-text="$dict.findDictionaryId('BorrowerType',allInfo.membertype)"></span>
								</el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="借款主体名称：">
									<span v-text="allInfo.membername"></span>
								</el-form-item>
							</el-col>
						</el-row>
						<el-row :gutter="30">
							<el-col :span="8">
								<el-form-item label="借款主体证件类型：">
									<span v-text="$dict.findDictionaryId('CertificateType',allInfo.idtype)"></span>
								</el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="借款主体证件号码：">
									<span v-text="allInfo.paperid"></span>
								</el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="企业成立时间：">
									<span v-text="allInfo.registertime"></span>
									<!-- <span v-text="$formatDate(allInfo.registertime, 'yyyy-MM-dd hh:mm:ss')"></span> -->
								</el-form-item>
							</el-col>
						</el-row>
						<el-row :gutter="30">
							<el-col :span="8">
								<el-form-item label="企业注册资本：">
									<span v-text="allInfo.registermoney"></span>
									<span v-text="allInfo.registermoney ? '万元' : ''"></span>
								</el-form-item>
							</el-col>
						<el-col :span="8">
								<el-form-item label="企业实缴资本：">
									<span v-text="allInfo.actualmoney"></span>
									<span v-text="allInfo.actualmoney ? '万元' : ''"></span>
								</el-form-item>
							</el-col>
						</el-row>
						<el-row :gutter="30">
							<el-col :span="8">
								<el-form-item label="借款主体注册地址：">
									<span v-text="allInfo.registeraddress"></span>
								</el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="借款主体现地址：">
									<span v-text="allInfo.nowaddress"></span>
								</el-form-item>
							</el-col>
						</el-row>
						<el-row :gutter="30">
							<el-col :span="8">
								<el-form-item label="备注:">
									<span v-text="allInfo.ps"></span>
								</el-form-item>
							</el-col>
						</el-row>
					</div>
				</div>
				<div>
					<p class='common-title management-title'>项目信息</p>
					<div>
						<el-row :gutter="30">
							<el-col :span="8">
								<el-form-item label="产品类型：">
									<el-select v-model="allInfo.projecttype">
										<el-option
											v-for="item in $dict.findDictData('projecttype')"
											:key="item.id"
											:label="item.value"
											:value="item.name">
										</el-option>
									</el-select>
								</el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="借款金额：">
									<span v-text="allInfo.amount"></span>
									<span v-text="allInfo.amount ? '元' : ''"></span>
								</el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="执行费率（%）：">
									<span v-text="allInfo.rate"></span>
								</el-form-item>
							</el-col>
						</el-row>
						<el-row :gutter="30">
							<el-col :span="8">
								<el-form-item label="借款期限：">
									<span v-text="allInfo.terms"></span>
									<span v-text="$dict.findDictionaryId('DateUnit',allInfo.projectterm)"></span>
								</el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="费用方案：" >
									<span v-text="$dict.findDictionaryId('projectfeetype',allInfo.projectfeetype)"></span>
								</el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="借款用途：">
									<span v-text="$dict.findDictionaryId('LoanUseType',allInfo.projectusage)"></span>
								</el-form-item>
							</el-col>
						</el-row>
						<el-row :gutter="30">
							<el-col :span="8">
								<el-form-item label="还款方式：">
									<span v-text="$dict.findDictionaryId('Repayment',allInfo.projectrepayment)"></span>
								</el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="最短收息期：">
									<span v-text="allInfo.minday"></span>
									<span v-text="$dict.findDictionaryId('DateUnit',allInfo.mindaysterm)"></span>
								</el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="费用收取方式：">
									<el-select v-model="allInfo.feeway">
										<el-option
											v-for="item in $dict.findDictData('feeway')"
											:key="item.id"
											:label="item.value"
											:value="item.name">
										</el-option>
									</el-select>
								</el-form-item>
							</el-col>
						</el-row>
						<el-row :gutter="30">
							<el-col :span="8">
								<el-form-item label="放款手续费（%）：">
									<el-input v-model="allInfo.lendfee" type="number"></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="借款总费用：">
									<el-input v-model="allInfo.totalfee" type="number"></el-input>
								</el-form-item>
							</el-col>
						</el-row>
					</div>
				</div>
				<div>
					<p class='common-title management-title'>线上借款信息-基础信息</p>
					<!-- 自然人 -->
					<div v-if="allInfo.membertype == 0">
						<el-row :gutter="30">
							<el-col>
								<el-form-item label="借款人说明：" label-width="160px">
									<el-input v-model="allInfo.details" type="textarea" :rows="2"></el-input>
								</el-form-item>
							</el-col>
						</el-row>
						<el-row>
							<el-col>
								<el-form-item label="借款人收入/负债情况：" label-width="160px">
									<el-input v-model="allInfo.incomedebt" type="textarea" :rows="2"></el-input>
								</el-form-item>
							</el-col>
						</el-row>
						<el-row :gutter="30">
							<el-col :span="8">
								<el-form-item label="工作性质：">
									<el-input v-model="allInfo.worktype"></el-input>
									<!-- <el-select v-model="allInfo.worktype">
										<el-option
											v-for="item in list"
											:key="item.id"
											:label="item.label"
											:value="item.name">
										</el-option>
									</el-select> -->
								</el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="还款来源：">
									<el-input v-model="allInfo.paymentincome"></el-input>
								</el-form-item>
							</el-col>
						</el-row>
					</div>
					<!-- 企业 -->
					<div v-if="allInfo.membertype == 1">
						<el-row :gutter="30">
							<el-col>
								<el-form-item label="借款人说明：" label-width="160px">
									<el-input v-model="allInfo.details" type="textarea" :rows="2"></el-input>
								</el-form-item>
							</el-col>
							<el-col>
								<el-form-item label="借款人收入/负债情况：" label-width="160px">
									<el-input v-model="allInfo.incomedebt" type="textarea" :rows="2"></el-input>
								</el-form-item>
							</el-col>
						</el-row>
						<el-row :gutter="30">
							<el-col :span="8">
								<el-form-item label="所属行业：">
									<el-input v-model="allInfo.industry"></el-input>
									<!-- <el-select v-model="allInfo.industry">
										<el-option
											v-for="item in list"
											:key="item.id"
											:label="item.label"
											:value="item.name">
										</el-option>
									</el-select> -->
								</el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="还款来源：">
									<el-input v-model="allInfo.paymentincome"></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="法人信用信息：">
									<el-input v-model="allInfo.legalinfo"></el-input>
								</el-form-item>
							</el-col>
						</el-row>
						<el-row :gutter="30">
							<el-col>
								<el-form-item label="经营区域：">
									<el-input v-model="allInfo.operatingarea" type="textarea" :rows="2"></el-input>
								</el-form-item>
							</el-col>
							<el-col>
								<el-form-item label="股东信息：">
									<el-input v-model="allInfo.holderinfo" type="textarea" :rows="2"></el-input>
								</el-form-item>
							</el-col>
						</el-row>
					</div>
				</div>
				<div>
					<p class='common-title management-title'>线上借款信息-详细信息</p>
					<div>
						<el-row :gutter="30">
							<el-col :span="8">
								<el-form-item label="主营业务：">
									<el-input v-model="allInfo.mainbussiness"></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="从业年限：">
									<el-input v-model="allInfo.operationperiod"></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="经营概况：">
									<el-input v-model="allInfo.operationsum"></el-input>
								</el-form-item>
							</el-col>
						</el-row>
						<el-row :gutter="30">
							<el-col :span="8">
								<el-form-item label="账户监管描述：">
									<el-input v-model="allInfo.accountsup"></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="家庭财产保证描述：">
									<el-input v-model="allInfo.familyasset"></el-input>
								</el-form-item>
							</el-col>
						</el-row>
					</div>
				</div>
				<div>
					<p class='common-title management-title'>线上借款信息-征信信息</p>
					<div>
						<el-row :gutter="30">
							<el-col :span="8" >
								<el-form-item label="近六个月逾期金额（元）：" label-width="190px">
									<el-input v-model="allInfo.creditamount"></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="近六个月逾期笔数（笔）:" label-width="190px">
									<el-input v-model="allInfo.countnum"></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="其他平台借款情况:">
									<el-input v-model="allInfo.otherloan"></el-input>
								</el-form-item>
							</el-col>
						</el-row>
					</div>
				</div>
				<div>
					<p class='common-title management-title'>线上借款信息-联合担保信息</p>
					<div style="padding-left: 40px;">
						<p class='common-title management-title'>个人担保信息</p>
						<el-table :data="allInfo.personalGuaranteearr" border class="g-table" ref="table" style="margin-top:10px;">
							<el-table-column prop="name" label="担保方名称">
							</el-table-column>
							<el-table-column prop="relationdesc" label="与申请人关系" :formatter="(row) => $dict.findDictionaryId('ApplicantRelationship',row.relationdesc)">
							</el-table-column>
							<el-table-column prop="idtypedesc" label="证件类型" :formatter="(row) => $dict.findDictionaryId('CertificateType',row.idtypedesc)">
							</el-table-column>
							<el-table-column prop="idnumber" label="证件号码">
							</el-table-column>
							<el-table-column prop="phone" label="手机号码">
							</el-table-column>
							<el-table-column prop="address2" label="联系地址">
							</el-table-column>
							<el-table-column prop="rmk" label="备注">
							</el-table-column>
						</el-table>
						<p class='common-title management-title'>机构担保信息</p>
						<el-table :data="allInfo.mechanismGuaranteearr" border class="g-table" ref="table" style="margin-top:10px;">
							<el-table-column prop="name" label="担保方名称">
							</el-table-column>
							<el-table-column prop="relationdesc" label="与申请人关系" :formatter="(row) => $dict.findDictionaryId('ApplicantRelationship',row.relationdesc)">
							</el-table-column>
							<el-table-column prop="idtypedesc" label="证件类型" :formatter="(row) => $dict.findDictionaryId('CertificateType',row.idtypedesc)">
							</el-table-column>
							<el-table-column prop="idnumber" label="证件号码">
							</el-table-column>
							<el-table-column prop="phone" label="手机号码">
							</el-table-column>
							<el-table-column prop="address2" label="联系地址">
							</el-table-column>
							<el-table-column prop="rmk" label="备注">
							</el-table-column>
						</el-table>
						<p class='common-title management-title'>家庭担保信息</p>
						<el-table :data="allInfo.familyguaranteearr" border class="g-table" ref="table" style="margin-top:10px;">
							<el-table-column prop="name" label="担保方名称">
							</el-table-column>
							<el-table-column prop="relationdesc" label="与申请人关系" :formatter="(row) => $dict.findDictionaryId('ApplicantRelationship',row.relationdesc)">
							</el-table-column>
							<el-table-column prop="idtypedesc" label="证件类型" :formatter="(row) => $dict.findDictionaryId('CertificateType',row.idtypedesc)">
							</el-table-column>
							<el-table-column prop="idnumber" label="证件号码">
							</el-table-column>
							<el-table-column prop="phone" label="手机号码">
							</el-table-column>
							<el-table-column prop="address2" label="联系地址">
							</el-table-column>
							<!-- <el-table-column prop="rmk" label="备注">
							</el-table-column> -->
							<el-table-column label="操作" width="120">
								<template slot-scope="scope">
									<div class="actions">
										<el-button type="text" @click="editInfo(scope.row, scope.$index)">编辑</el-button>
										<el-button type="text" @click="removeInfo(scope.row, scope.$index)">删除</el-button>
									</div>
								</template>
							</el-table-column>
						</el-table>
						<el-button class="common-button" @click="addInfo('familyguaranteeData')"><i class="el-icon-plus"></i>新增家庭担保信息</el-button>
					</div>
				</div>
				<div>
					<p class='common-title management-title'>影像信息</p>
					<!-- attinfo -->
					<!-- attname  附件名称
					imgurl  附件地址
					atttypid  附件类型 -->
					<div>
						
					</div>
				</div>
				<div>
					<p class='common-title management-title'>其他信息</p>
					<div>
						<el-row :gutter="30">
							<el-col>
								<el-form-item label="借款合同其他条款:">
									<el-input v-model="allInfo.cont_ext_cond" type="textarea" :rows="2"></el-input>
								</el-form-item>
							</el-col>
						</el-row>
					</div>
				</div>
			</div>
    </el-form>
		<div class="common-bottom-btn">
			<el-button @click='$router.back(-1)'>取消</el-button>
			<el-button type='primary' @click="submitForm('ruleForm')">项目推送</el-button>
		</div>
		<el-dialog title="新增家庭担保信息" :visible.sync="dialogFormVisible">
			<el-form :model="familyguaranteeData" label-width="110px" ref="familyguaranteeData">
				<el-row :gutter="20">
					<el-col :span="8">
						<el-form-item label="担保方名称" :rules='rules.realnameRule' prop='name'>
							<el-input v-model="familyguaranteeData.name"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="与申请人关系" :rules='rules.requiredSelectValue' prop='relationdesc'>
							<el-select v-model="familyguaranteeData.relationdesc">
								<el-option v-for="item in $dict.findDictData('ApplicantRelationship')"
                :key='item.id'
                :label='item.value'
                :value='item.name'></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="证件类型">
							<!-- <el-input v-model="familyguaranteeData.idtypedesc" readonly=""></el-input> -->
							<el-select v-model="familyguaranteeData.idtypedesc">
								<el-option v-for="item in $dict.findDictData('CertificateType')"
                :key='item.id'
                :label='item.value'
                :value='item.name'></el-option>
							</el-select>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row :gutter="20">
					<el-col :span="12">
						<el-form-item label="证件号码" :rules='rules.idCardRule' prop='idnumber'>
							<el-input v-model="familyguaranteeData.idnumber"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="手机号码" :rules='rules.phoneRule' prop='phone'>
							<el-input v-model="familyguaranteeData.phone"></el-input>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="24">
						<el-form-item label="联系地址" :rules='rules.requiredInputValue' prop='address2'>
							<el-input v-model="familyguaranteeData.address2"></el-input>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row>
					<el-form-item label='备注'>
						<el-input v-model='familyguaranteeData.rmk' type="textarea" :rows='4'></el-input>
					</el-form-item>
				</el-row>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取 消</el-button>
				<el-button type="primary" @click="saveInfo('familyguaranteeData')">确 定</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script>
import { assetsPushController } from "@/controller/syd/assetsPush_controller";
import Rules from "@/util/rules";
export default {
  data() {
    return {
      rules: Rules,
			id: this.$route.query.id,
			allInfo: {},
			list: [],
			familyguaranteeData: {},
			dialogFormVisible: false
    };
  },
  props: {
    // isDisabled: {
    //   type: Boolean,
    //   default: false
    // }
  },
  methods: {
		clearValidate (formName) {
			this.$nextTick(() => {
				this.$refs[formName].clearValidate()
			})
		},
		addInfo(formName) {
			this.dialogFormVisible = true
			this.familyguaranteeData = {
				idtypedesc: '身份证'
			}
			this.clearValidate(formName)
		},
		editInfo(row, $index) {
			this.dialogFormVisible = true
			this.familyguaranteeData = this.familyguaranteearr[$index];
		},
		removeInfo(row, $index) {
			this.familyguaranteearr.splice($index, 1);
		},
		addInfo_ensure() {
			this.addInfo.familyguaranteearr.push(this.familyguaranteeData)
		},
		saveInfo(formName) {
			this.$refs[formName].validate((valid) => {
				if (valid) {
					this.addInfo_ensure()
				} else {
					return false
				}
			})
		},
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
        } else {
          return false;
        }
      });
    },
		getPushData() {
			assetsPushController.getPushData(this.id).then(res => {
				if(res.status === 200) {
					this.allInfo = res.data
					console.log('this.allInfo--------->',this.allInfo)
				}
			})
		}
  },
  created() {
		this.getPushData()
	},
  mounted() {}
};
</script>

<style lang="scss" scoped>
.pb80 {
  padding-bottom: 80px;
}
.common-title.management-title {
  border: none;
}
// .el-checkbox + .el-checkbox {
//   margin-left: 22px;
// }

// .el-row {
//   padding-left: 70px;
// }
// .input__ {
//   width: 100px;
// }
// p {
//   padding-left: 24px;
// }

// .p-input {
//   border: 1px solid #dcdfe6;
//   border-radius: 4px;
//   line-height: 40px;
//   height: 42px;
//   padding-left: 16px;
// }
// .el-checkbox + .el-checkbox {
//   margin-left: 22px;
// }
// .el-form-item__label {
//   width: 200px !important;
// }
// .avatar-uploader .el-upload {
//   border: 1px dashed #d9d9d9;
//   border-radius: 6px;
//   cursor: pointer;
//   position: relative;
//   overflow: hidden;
// }
// .avatar-uploader .el-upload:hover {
//   border-color: #409eff;
// }
// .avatar-uploader-icon {
//   font-size: 28px;
//   color: #8c939d;
//   width: 178px;
//   height: 178px;
//   line-height: 178px;
//   text-align: center;
// }
// .avatar {
//   width: 178px;
//   height: 178px;
//   display: block;
// }
</style>
