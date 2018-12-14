<template>
	<div class="common-box">
		<!-- <div class="common-container pb80">
			<div>
				<p class='common-title management-title'>基本信息</p>
				<div>
					<el-form label-position='left' :model='companyOperationInfo' ref='ruleForm' label-width="165px">
						<el-row>
							<el-col :span="8">
								<el-form-item label="借款主体类型" :rules='rules.requiredInputFigure' prop='monthlyOperatingIncome'>
									<el-input v-model='companyOperationInfo.monthlyOperatingIncome' :disabled="isDisabled"></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="借款主体名称">
									<el-input v-model='companyOperationInfo.monthlyOperatingIncome' :disabled="isDisabled"></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="借款主体证件类型">
									<el-input v-model='companyOperationInfo.monthlyOperatingIncome' :disabled="isDisabled"></el-input>
								</el-form-item>
							</el-col>
						</el-row>
						<el-row>
							<el-col :span="8">
								<el-form-item label="借款主体证件号码" :rules='rules.requiredInputFigure' prop='grossGargin'>
									<el-input v-model='companyOperationInfo.grossGargin' :disabled="isDisabled"></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="注册资本金" :rules='rules.requiredInputFigure' prop='netMargin'>
									<el-input v-model='companyOperationInfo.netMargin' :disabled="isDisabled"></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="实缴资本金" :rules='rules.requiredInputFigure' prop='netMargin'>
									<el-input v-model='companyOperationInfo.netMargin' :disabled="isDisabled"></el-input>
								</el-form-item>
							</el-col>
						</el-row>
						<el-row>
							<el-col :span="8">
								<el-form-item label='注册地址'>
									<el-cascader :disabled="isDisabled"
										:props="{value: 'id',label: 'name'}"
										:options="$dict.getDictData('Area')"
										v-model='corporationInfo.addressList'
									></el-cascader>
								</el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label='详细地址'>
									<el-input v-model='corporationInfo.address' placeholder="详细地址" :disabled="isDisabled"></el-input>
								</el-form-item>
							</el-col>
						</el-row>
						<el-row>
							<el-col :span="8">
								<el-form-item label='实际经营地址'>
									<el-cascader :disabled="isDisabled"
										:props="{value: 'id',label: 'name'}"
										:options="$dict.getDictData('Area')"
										v-model='corporationInfo.censusAddressList'
									></el-cascader>
								</el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label='详细地址'>
									<el-input v-model='corporationInfo.censusAddress' placeholder="详细地址" width="300px" :disabled="isDisabled"></el-input>
								</el-form-item>
							</el-col>
						</el-row>
						<el-row>
							<el-col :span="16">
								<el-form-item label="备注" >
									<el-input :disabled="isDisabled"
										:rows="4"
										v-model="companyform.companyUpdateRequest.otherInformation"
										type="textarea"
										style="width: 88%"/>
								</el-form-item>
							</el-col>
						</el-row>
					</el-form>
				</div>
			</div>
			<div>
				<p class='common-title management-title'>项目信息</p>
				<div class="content">
					<el-form label-position='left' :model='orderResponse' label-width="100px">
						<el-row>
							<el-col :span="8">
								<el-form-item label="借款金额：">
									<span v-text="orderResponse.projectAmount + '（万元）'"></span>
								</el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="借款期限：">
									<span v-text="orderResponse.projectTerm"> </span>
									<span v-text="$dict.findDictionaryName(orderResponse.projectTermUnit)"></span>
								</el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="执行费率：">
									<span v-text="orderResponse.projectRate"></span>
									<span v-if="orderResponse.projectRate">% /</span>
									<span v-text="orderResponse.feeplanId === 1 ? $dict.findDictionaryName(orderResponse.projectrateUnit) : '月'"></span>
								</el-form-item>
							</el-col>
						</el-row>
						<el-row>
							<el-col :span="8">
								<el-form-item label="借款用途：">
									<span v-text="$dict.findDictionaryName(orderResponse.usage)"></span>
								</el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="还款方式：">
									<span v-text="$dict.findDictionaryName(orderResponse.paymentplanId)"></span>
								</el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="管理费率：">
									<span v-text="orderResponse.managementRate"></span>
									<span v-if="orderResponse.managementRate">% /</span>
									<span v-text="$dict.findDictionaryName(orderResponse.projectrateUnit)"></span>
								</el-form-item>
							</el-col>


							<el-col :span="8">
								<el-form-item label="费用方案：">
									<span v-text="orderResponse.feeplanId === 1 ? '默认方案' : '管理费方案'"></span>
								</el-form-item>
							</el-col>
							
							
						</el-row>
						<el-row>
							<el-col :span="8">
								<el-form-item label="最短收息期：">
									<span v-text="orderResponse.minday"> </span>
									<span v-text="$dict.findDictionaryName(orderResponse.mindayUnit)"> </span>
								</el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="费用收取方式">
									<span v-text="orderResponse.minday"> </span>
									<span v-text="$dict.findDictionaryName(orderResponse.mindayUnit)"> </span>
								</el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="借款总费用">
									<span v-text="orderResponse.minday"> </span>
									<span v-text="$dict.findDictionaryName(orderResponse.mindayUnit)"> </span>
								</el-form-item>
							</el-col>

							<el-col :span="8">
								<el-form-item label="担保方式：">
									<span v-text="orderResponse.guaranteeCode == 3 ? '有担保' : '无担保'"></span>
								</el-form-item>
							</el-col>
							
						</el-row>
						<el-row>
							<el-col :span="8">
								<el-form-item label="放款手续费">
									<span v-text="orderResponse.minday"> </span>
									<span v-text="$dict.findDictionaryName(orderResponse.mindayUnit)"> </span>
								</el-form-item>
							</el-col>
						</el-row>
					</el-form>
				</div>
			</div>
		</div>	 -->
		<el-form label-position='left' class="common-container pb80" :model="form">
			<div>
				<p class='common-title management-title'>业务网点信息</p>
				<el-row>
					<el-col :span="8">
						<el-form-item label="客户经理名称:">
							<span >陈淸玉</span>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="联系方式:">
							<span >1523123456789</span>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="所属网点:">
							<span >上海</span>
						</el-form-item>
					</el-col>
				</el-row>
				<p class='common-title management-title'>基础资料</p>
				<span style="padding-left: 48px">分类 : 自然人</span>
				<el-row>
					<el-col :span="8">
						<el-form-item label="名称:" size="small">
							<el-input class="input__pos"  ></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="证件类型:" size="small">
							<el-input class="input__pos"  ></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="证件号码:" size="small">
							<el-input class="input__pos"  ></el-input>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="8">
						<el-form-item label="身份证地址:" size="small">
							<el-input class="input__pos"  >身份证上原户籍详细地址</el-input>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="现居住地址:" size="small">
							<el-input class="input__pos"  >现实际居住详细地址</el-input>
						</el-form-item>

					</el-col>
					<el-col :span="8">
						<el-form-item label="性别:" size="small">
							<el-input class="input__pos"  >现实际居住详细地址</el-input>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="8">
						<el-form-item label="年龄:" size="small">
							<el-input class="input__pos"  ></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="最高学历:" size="small">
							<el-select v-model="Education.value" placeholder="请选择" size="small" style="width: 200px">
								<el-option
									v-for="item in Education"
									:key="item.value"
									:label="item.label"
									:value="item.value">
								</el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="婚姻状况:" size="small">
							<el-select v-model="Marriage.value" placeholder="请选择" size="small" style="width: 200px">
								<el-option
									v-for="item in Marriage"
									:key="item.value"
									:label="item.label"
									:value="item.value">
								</el-option>
							</el-select>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="8">
						<el-form-item label="备注:" size="small">
							<el-input  type="textarea" placeholder="请输入内容"  :rows="2"></el-input>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="8">
						<el-form-item label=" 自然人：企业名称全称" size="small">
							<el-input class="input__pos"  ></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="统一社会信用代码" size="small">
							<el-input class="input__pos"  ></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="统一社会信用代码号码 " size="small">
							<el-input class="input__pos"  ></el-input>
						</el-form-item>
					</el-col>
				</el-row>
				<span style="padding-left: 48px"> 分类:企业</span>
				<el-row>
					<el-col :span="8">
						<el-form-item label="成立时间:" size="small">
							<div class="block">
								<el-date-picker
									v-model="value1"
									type="date"
									placeholder="选择日期"
									:picker-options="pickerOptions1">
								</el-date-picker>
							</div>
						</el-form-item>
					</el-col>
					<el-col :span="8">
							<el-form-item label="注册资本:" size="small">
								<el-input class="input__pos" placeholder="请输入内容" >
									<template slot="append" >万</template>
								</el-input>
							</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="企业注册资本:" size="small">
							<el-input class="input__pos" placeholder="请输入内容" >
								<template slot="append" >万</template>
							</el-input>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="8">
						<el-form-item label="企业实缴资本:" size="small">
							<el-input class="input__pos" placeholder="请输入内容" >
								<template slot="append" >万</template>
							</el-input>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="主体注册地址:" size="small">
							<el-input class="input__pos"  ></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="主体现地址:" size="small">
							<el-input class="input__pos"  ></el-input>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="8">
						<el-form-item label="备注:" size="small">
							<el-input  type="textarea" placeholder="请输入内容"  :rows="2"></el-input>
						</el-form-item>
					</el-col>
				</el-row>
				<p class='common-title management-title'>项目信息</p>
				<el-row>
					<el-col :span="8">
						<el-form-item label="产品类型: " size="small">
							<el-select v-model="project.value" placeholder="请选择" size="small" style="width: 200px">
								<el-option
									v-for="item in project"
									:key="item.value"
									:label="item.label"
									:value="item.value">
								</el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="借款金额:" size="small">
							<el-input class="input__pos" placeholder="请输入内容" >
								<template slot="append" >元</template>
							</el-input>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="执行费率%:" size="small">
							<el-input class="input__pos" type="number" ></el-input>
							<el-select  v-model="Company.value" placeholder='请选择' class="input__" >
								<el-option
								v-for="item in Company"
									:key="item.value"
									:label="item.label"
									:value="item.value">
								</el-option>
							</el-select>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="8">
						<el-form-item label="借款期限:" size="small">
							<el-input class="input__pos" type="number" ></el-input>
							<el-select  v-model="LoanUnit.value" placeholder='请选择' class="input__" >
								<el-option
									v-for="item in LoanUnit"
									:key="item.value"
									:label="item.label"
									:value="item.value">
								</el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="费用方案:" >
							<el-radio v-model="radio" label="1">默认方案</el-radio>
							<el-radio v-model="radio" label="2">技术服务费方案</el-radio>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="借款用途:" size="small">
							<el-select  placeholder='请选择' v-model="purpose.value" >
								<el-option
									v-for="item in purpose"
									:key="item.value"
									:label="item.label"
									:value="item.value">
								</el-option>
							</el-select>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="8">
						<el-form-item label="还款方式:" size="small">
							<el-select  placeholder='请选择'  v-model="LendingMethod.value">
								<el-option
									v-for="item in LendingMethod"
									:key="item.value"
									:label="item.label"
									:value="item.value">
								</el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="最短收息期:" size="small">
							<el-input class="input__pos" type="number" ></el-input>
							<el-select  placeholder='请选择' class="input__"  v-model="minimum.value">
								<el-option
									v-for="item in opt"
									:key="item.value"
									:label="item.label"
									:value="item.value">
								</el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="费用收取方式:" size="small">
							<el-select  placeholder='请选择' v-model="Collect.value">
								<el-option
									v-for="item in Collect"
									:key="item.value"
									:label="item.label"
									:value="item.value">
								</el-option>
							</el-select>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="8">
						<el-form-item label="放款手续费%:" size="small">
							<el-input class="input__pos" placeholder="请输入内容" >
								<template slot="append" >%</template>
							</el-input>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="借款总费用:" size="small">
							<el-input  placeholder="请输入内容" class="input__pos"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="还款保障措施:">
							<el-checkbox-group v-model="checkList">
								<el-checkbox label="第三方担保 "></el-checkbox>
								<el-checkbox label="账户监管"></el-checkbox>
								<el-checkbox label="家庭成员连带责任担保"></el-checkbox>
							</el-checkbox-group>

						</el-form-item>
					</el-col>
				</el-row>
				<p class='common-title management-title'>线上借款信息-基础信息</p>
				<span>自然人</span>
				<el-row>
					<el-col :span="8">
						<el-form-item label="借款人说明:" size="small">
							<el-input  placeholder="请输入内容" class="input__pos"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="借款人收入/负债情况:" size="small">
							<el-input  placeholder="请输入内容" class="input__pos"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="工作性质:" size="small">
							<el-select  placeholder='请选择' v-model="value">
								<el-option
									v-for="item in opt"
									:key="item.value"
									:label="item.label"
									:value="item.value">
								</el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="工作性质:" size="small">
							<el-input  placeholder="请输入内容" class="input__pos"></el-input>
						</el-form-item>
					</el-col>
				</el-row>
				<span>企业</span>
				<el-row>
					<el-col :span="8">
						<el-form-item label="借款人说明:" size="small">
							<el-input  placeholder="请输入内容" class="input__pos"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="借款人收入/负债情况:" size="small">
							<el-input  placeholder="请输入内容" class="input__pos"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="所属行业:" size="small">
							<el-select  placeholder='请选择' v-model="value">
								<el-option
									v-for="item in opt"
									:key="item.value"
									:label="item.label"
									:value="item.value">
								</el-option>
							</el-select>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="8">
						<el-form-item label="还款来源:" size="small">
							<el-input  placeholder="请输入内容" class="input__pos"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="法人信用信息:" size="small">
							<el-input  placeholder="请输入内容" class="input__pos"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="经营区域:" size="small">
							<el-input  placeholder="请输入内容" class="input__pos"></el-input>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row>
					<el-col>
						<el-form-item label="股东信息:" size="small">
							<el-input  placeholder="请输入内容" class="input__pos"></el-input>
						</el-form-item>
					</el-col>
				</el-row>
				<p class='common-title management-title'>线上借款信息-详细信息</p>
				<el-row>
					<el-col :span="8" >
						<el-form-item label="产品类型:" size="small">
							<el-select v-model="value" placeholder="请选择" size="small" style="width: 200px">
								<el-option
									v-for="item in opt"
									:key="item.value"
									:label="item.label"
									:value="item.value">
								</el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="担保机构信息:" size="small">
							<el-select v-model="value" placeholder="请选择" size="small">
								<el-option
									v-for="item in option"
									:key="item.value"
									:label="item.label"
									:value="item.value">
								</el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="担保机构信息:" size="small">
							<el-select v-model="value" placeholder="请选择" size="small">
								<el-option
									v-for="item in optionvalue"
									:key="item.value"
									:label="item.label"
									:value="item.value">
								</el-option>
							</el-select>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row >
					<el-col :span="8">
						<el-form-item label="主营业务:" size="small">
							<el-input   class="input__pos" placeholder="请输入内容" />
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="从业年限:" size="small">
							<el-input  class="input__pos"  placeholder="请输入内容" />
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="经营概况:" size="small">
							<el-input   class="input__pos" placeholder="请输入内容" />
						</el-form-item>
					</el-col>
				</el-row>
				<p class='common-title management-title'>线上借款信息-征信信息</p>
				<el-row>
					<el-col :span="8" >
						<el-form-item label="近六个月逾期金额（元）:" size="small">
							<el-input  placeholder="请输入内容" class="input__pos"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="近六个月逾期笔数（笔）:" size="small">
							<el-input  placeholder="请输入内容" class="input__pos"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="其他平台借款情况:" size="small">
							<el-input  type="textarea" placeholder="请输入内容" class="input__pos" :rows="2"></el-input>
						</el-form-item>
					</el-col>
				</el-row>
				<p class='common-title management-title'>线上借款信息-联合担保信息</p>
				<el-row>
					<el-col :span="8" >
						<el-form-item label="自然人担保信息:" size="small">
							<el-select v-model="value" placeholder="请选择" size="small">
								<el-option
									v-for="item in options"
									:key="item.value"
									:label="item.label"
									:value="item.value">
								</el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="担保机构信息:" size="small">
							<el-select v-model="value" placeholder="请选择" size="small">
								<el-option
									v-for="item in option"
									:key="item.value"
									:label="item.label"
									:value="item.value">
								</el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="家庭成员个人担保信息:" size="small">
							<el-select v-model="value" placeholder="请选择" size="small">
								<el-option
									v-for="item in optionvalue"
									:key="item.value"
									:label="item.label"
									:value="item.value">
								</el-option>
							</el-select>
						</el-form-item>
					</el-col>
				</el-row>
				<p class='common-title management-title'>影像信息</p>
				<el-row>
					<el-col :span="8" >
						<el-form-item label="标题">
							<el-select v-model="value" placeholder="请选择" size="small">
								<el-option
									v-for="item in optionvalue"
									:key="item.value"
									:label="item.label"
									:value="item.value">
								</el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-upload
							action="https://jsonplaceholder.typicode.com/posts/"
							list-type="picture-card"
							:on-preview="handlePictureCardPreview"
							:on-remove="handleRemove">
							<i class="el-icon-plus"></i>
						</el-upload>
						<el-dialog :visible.sync="dialogVisible">
							<img width="100%" :src="dialogImageUrl" alt="">
						</el-dialog>

					</el-col>
				</el-row>
				<p class='common-title management-title'>其他信息</p>
				<el-row>
					<el-col :span="8" >
						<el-form-item label="借款合同其他条约:">
							<el-input  type="textarea" placeholder="请输入内容"  :rows="2"></el-input>
						</el-form-item>
					</el-col>
				</el-row>
			</div>
    </el-form>
		<div class="common-bottom-btn">
			<el-button @click='$router.back(-1)'>取消</el-button>
			<el-button type='primary' @click="submitForm('ruleForm')">项目推送</el-button>
		</div>
	</div>
</template>

<script>
import { companyController } from "@/controller/syd/company_controller";
import Rules from "@/util/rules";
export default {
  data() {
    return {
			// rules: Rules,
			// leaseInfo: {
			// 	leaseAddressList: [],
			// 	companyId: ""
			// },	// 档口信息
			// companyId: "",
			// companyOperationInfo: {		// 企业经营信息
			// 	companyId: "",
			// 	mainBussinessArr: [], // 选中的经营品种
			// 	mainBussiness: "",		// 选中的经营品种-提交数据
			// 	businessModelArr: [], // 选中的经营模式
			// 	businessModel: "", // 选中的经营模式-提交数据
			// 	haveHignSeason: "", // 淡旺季
			// },
			// companyLeaseInfoList: [],	// 档口信息列表
			// companyPurchaseInfoRequest: {
			// 	companyId: "",
			// }, 	// 企业采购信息
			// companyAmountDueList: [],	// 应付信息
			// companyReceiveAdvanceList: [],	// 企业预收信息
			// companyInventoryList: [],	// 企业存货统计
			// companySaleRequest: {
			// 	companyId: "",
			// },	// 企业销售信息
			// companydueReceiveList: [],	// 企业应收
			// companyPrepanmentList: [],	// 预付信息
      // data: {},
			// dialogFormVisible: false,
			// otherId: "",
			// isEdit: false,
			// disabled: false,


			form: {},
			value1: '',
      pickerOptions1: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
      dialogImageUrl: '',
      dialogVisible: false,
      radio: '1',
      value: '',
      options: [{value: "担保方名称", lable: "1"}, {value: "担保类型", lable: "2"}, {value: "与申请人关系", lable: "3"}],
      option: [{value: "担保方名称", lable: "1"}, {value: "担保类型", lable: "2"}, {value: "与申请人关系", lable: "3"}],
      optionvalue: [{value: "担保方名称", lable: "1"}, {value: "担保类型", lable: "2"}, {value: "与申请人关系", lable: "3"}],
      opt: [{value: "农户贷", lable: "1"}, {value: "兴隆贷", lable: "2"}, {value: "货押贷", lable: "2"}],
      Education:[{value: "初中", lable: "1"}, {value: "高中", lable: "2"}, {value: "大专", lable: "3"},{value: "本科", lable: "4"},{value: "研究生", lable: "5"}],
      Marriage:[{value: "未婚", lable: "1"}, {value: "已婚", lable: "2"}],
      project:[{value: "产品A", lable: "1"},{value: "产品B", lable: "2"}],
      Company:[{value: "周", lable: "1"},{value: "天", lable: "2"},{value: "季", lable: "3"},{value: "年", lable: "4"}],
      LoanUnit:[{value: "周", lable: "1"},{value: "天", lable: "2"},{value: "季", lable: "3"},{value: "年", lable: "4"}],
      purpose:[{value: "买车", lable: "1"},{value: "买房", lable: "2"},{value: "开公司", lable: "3"}],
      LendingMethod:[{value: "一次性还本付息", lable: "1"},{value: "按期等额本金", lable: "2"},{value: "按期付息到期还本", lable: "3"}],
      minimum:[{value: "日", lable: "1"},{value: "月", lable: "2"},{value: "季", lable: "3"},{value: "年", lable: "4"}],
      Collect:[],

      checkList: [],
    };
	},
	props: {
		isDisabled: {
			type: Boolean,
			default: false
		},
		hasSubmit: {
			type: Boolean,
			default: false
		},
		isCheck: {
      type: Boolean,
      default: false
    },
	},
	methods: {
		// 新增一行-禁止添加多条空数据
		// addOneData(list) {
		// 	let data = {};
		// 	let hasEmpty
		// 	if(list.length > 0) {
		// 		list.forEach(v => {
		// 			for(let key in v) {
		// 				if(v[key] === '') {
		// 					delete v[key]
		// 				}
		// 			}
		// 			let arr = Object.keys(v)
		// 			if(!arr.length) {
		// 				hasEmpty = true
		// 				this.$message.warning('请勿添加多条空数据')
		// 				return false
		// 			}
		// 		})
		// 	} else {
		// 		hasEmpty = false
		// 	}
    //   if(!hasEmpty) {
		// 		list.push(data);
		// 	} else {
		// 		this.$message.warning('请勿添加多条空数据')
		// 	}
		// },
		// // 新增一行-保存时排除空数据
		// deleteEmptyData(list,strToNum1,strToNum2,strToNum3) {
		// 	list.forEach((v,i) => {
		// 		for(let key in v) {
		// 				if(v[key] === '') {
		// 					delete v[key]
		// 				}
		// 			}
		// 		let arr = Object.keys(v)
		// 		if(!arr.length) {
		// 			list.splice(i,1);
		// 		} else {
		// 			if(strToNum1) {
		// 				v[strToNum1] = v[strToNum1] ? v[strToNum1] - 0 : "";
		// 			}
		// 			if(strToNum2) {
		// 				v[strToNum2] = v[strToNum2] ? v[strToNum2] - 0 : "";
		// 			}
		// 			if(strToNum3) {
		// 				v[strToNum3] = v[strToNum3] ? v[strToNum3] - 0 : "";
		// 			}
		// 			v.companyId = this.companyId;
		// 		}
    //   });
		// },
		submitForm(formName) {
			this.$refs[formName].validate((valid) => {
				if (valid) {
				} else {
					return false
				}
			})
		},
		// initData() {
		// 	this.companyOperationInfo.companyId = this.companyId
		// 	this.companyPurchaseInfoRequest.companyId = this.companyId
		// 	this.companySaleRequest.companyId = this.companyId
		// 	// 处理数据
		// 	this.companyOperationInfo.mainBussiness = this.companyOperationInfo.mainBussinessArr.join(',')
		// 	this.companyOperationInfo.businessModel = this.companyOperationInfo.businessModelArr.join(',')

		// 	this.deleteEmptyData(this.companyAmountDueList,'money')
		// 	this.deleteEmptyData(this.companyReceiveAdvanceList,'money')
		// 	this.deleteEmptyData(this.companydueReceiveList,'money')
		// 	this.deleteEmptyData(this.companyInventoryList,'money','quantity','quantityUnit')
		// 	this.deleteEmptyData(this.companyPrepanmentList,'money')
		// 	this.companyOperationInfo.grossGargin = this.companyOperationInfo.grossGargin ? this.companyOperationInfo.grossGargin - 0 : ""
		// 	this.companyOperationInfo.inventoryAmount = this.companyOperationInfo.inventoryAmount ? this.companyOperationInfo.inventoryAmount - 0 : ""
		// 	this.companyOperationInfo.monthlyOperatingIncome = this.companyOperationInfo.monthlyOperatingIncome ? this.companyOperationInfo.monthlyOperatingIncome - 0 : ""
		// 	this.companyOperationInfo.monthlyShippingCosts = this.companyOperationInfo.monthlyShippingCosts ? this.companyOperationInfo.monthlyShippingCosts - 0 : ""
		// 	this.companyOperationInfo.monthlyWagesDisburse = this.companyOperationInfo.monthlyWagesDisburse ? this.companyOperationInfo.monthlyWagesDisburse - 0 : ""
		// 	this.companyOperationInfo.netMargin = this.companyOperationInfo.netMargin ? this.companyOperationInfo.netMargin - 0 : ""
		// 	this.companyOperationInfo.otherAmountDue = this.companyOperationInfo.otherAmountDue ? this.companyOperationInfo.otherAmountDue - 0 : ""
		// 	this.companyOperationInfo.otherAmountReceivable = this.companyOperationInfo.otherAmountReceivable ? this.companyOperationInfo.otherAmountReceivable - 0 : ""
		// 	this.companyOperationInfo.staffAmount =  this.companyOperationInfo.staffAmount ? this.companyOperationInfo.staffAmount - 0 : ""
		// 	this.companyPurchaseInfoRequest.montylyPurchaseMoney = this.companyPurchaseInfoRequest.montylyPurchaseMoney ? this.companyPurchaseInfoRequest.montylyPurchaseMoney - 0 : ""
		// 	this.companySaleRequest.saleSettlementPeriod = this.companySaleRequest.saleSettlementPeriod ? this.companySaleRequest.saleSettlementPeriod - 0 : ""

		// 	if(this.leaseInfo.leaseAddressList.length > 0) {
		// 		[
		// 			this.leaseInfo.leaseAddressProvince,
		// 			this.leaseInfo.leaseAddressCity,
		// 			this.leaseInfo.leaseAddressDistrict
		// 		] = this.leaseInfo.leaseAddressList
		// 	}

		// 	this.data.companyOperationInfo = this.companyOperationInfo
		// 	this.data.companyLeaseInfoList = this.companyLeaseInfoList
		// 	this.data.companyPurchaseInfoRequest = this.companyPurchaseInfoRequest
		// 	this.data.companyAmountDueList = this.companyAmountDueList
		// 	this.data.companyReceiveAdvanceList = this.companyReceiveAdvanceList
		// 	this.data.companyInventoryList = this.companyInventoryList
		// 	this.data.companySaleRequest = this.companySaleRequest
		// 	this.data.companydueReceiveList = this.companydueReceiveList
		// 	this.data.companyPrepanmentList = this.companyPrepanmentList
		// 	},
		// saveInfo() {
		// 	this.initData()
		// 	companyController.saveOrUpdateCompanyOperation(this.data).then(res => {
    //     if (res.status === 200) {
		// 			this.$message.success("保存成功！");
		// 			this.getCompanyOperation(this.companyId)
    //     }
    //   });
		// },
    // getCompanyOperation(params) {
    //   this.companyId = params
		// 	companyController.companyOperation(params).then(res => {
    //     if (res.status === 200) {
		// 			let data = res.data
		// 			if(data.companyOperationInfo) {
		// 				this.companyOperationInfo = {...this.companyOperationInfo, ...data.companyOperationInfo}		// 企业经营信息

		// 				let mainBussinessArr = this.companyOperationInfo.mainBussiness.split(",")
    //         this.companyOperationInfo.mainBussinessArr = mainBussinessArr.map(val => parseInt(val))
		// 				let businessModelArr = this.companyOperationInfo.businessModel.split(",")
    //         this.companyOperationInfo.businessModelArr = businessModelArr.map(val => parseInt(val))
		// 			}

		// 			this.companyLeaseInfoList = data.companyLeaseInfoEntityList	// 档口信息列表
		// 			this.companyLeaseInfoList.forEach( v=> {
		// 				v.leaseAddressProvince = v.leaseAddressProvince - 0
		// 				v.leaseAddressCity = v.leaseAddressCity - 0
		// 				v.leaseAddressDistrict = v.leaseAddressDistrict - 0
		// 				v.leaseAddressList = [
		// 					v.leaseAddressProvince, v.leaseAddressCity, v.leaseAddressDistrict
		// 				]
		// 			})
		// 			this.companyAmountDueList.length = 0
		// 			this.companyReceiveAdvanceList.length = 0
		// 			this.companyInventoryList.length = 0
		// 			this.companydueReceiveList.length = 0
		// 			this.companyPrepanmentList.length = 0
		// 			this.companyPurchaseInfoRequest.length = 0
		// 			this.companySaleRequest.length = 0
		// 			data.otherInfoEntityList.forEach(v => {
		// 				if(v.type === 1) {
		// 					this.companyAmountDueList.push(v) 	// 应付信息
		// 				} else if(v.type === 2) {
		// 					this.companyReceiveAdvanceList.push(v) 	// 企业预收信息
		// 				} else if(v.type === 3) {
		// 					this.companyInventoryList.push(v)  	// 企业存货统计
		// 				} else if(v.type === 4) {
		// 					this.companydueReceiveList.push(v)  	// 企业应收
		// 				} else if(v.type === 5) {
		// 					this.companyPrepanmentList.push(v)  	// 预付信息
		// 				} else if(v.type === 6) {
		// 					v.purchaseSettlementMode = v.purchaseSettlementMode ? v.purchaseSettlementMode - 0 : ''
		// 					this.companyPurchaseInfoRequest = v  	// 企业采购信息
		// 				} else if(v.type === 7) {
		// 					v.saleSettlementMode = v.saleSettlementMode ? v.saleSettlementMode - 0 : ''
		// 					v.saleSettlementIntervalUnit = v.saleSettlementIntervalUnit ? v.saleSettlementIntervalUnit - 0 : ''
		// 					this.companySaleRequest = v  	// 企业销售信息
		// 				}
		// 			})
		// 			this.companyInventoryList.forEach(v => {
		// 				v.quantityUnit = v.quantityUnit - 0
		// 			})
					

    //     }
    //   });
		// },
		// change() {
		// 	this.getOtherId()
		// },
		// getOtherId() {
		// 	this.$dict.findDictData('MainBussiness').forEach(v => {
		// 		if(v.value === '其他') {
		// 			this.otherId = v.id
		// 		}
		// 	})
		// },


		handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
	},
	created() {
    //FIXME 修改
    // this.hasSubmit = this.$route.query.state == 1 ?true : false;
		// this.getOtherId()
		// if(!this.isDisabled && !this.isCheck) {
		// 	this.companyId = this.$route.query.companyId - 0
		// 	this.leaseInfo.companyId = this.companyId
		// 	this.getCompanyOperation(this.companyId)
		// }


	},
	mounted() {
    this.formRef = this.$refs.companyOperationInfo;
  }
};
</script>

<style lang="scss" scoped>
.pb80 {
	padding-bottom: 80px;
}
.common-title.management-title {
  border: none;
}
.el-checkbox+.el-checkbox {
	margin-left: 22px;
}

.el-row{
  padding-left: 70px;
}
.input__{
  width: 100px;
}
p{
  padding-left: 24px;
}

.p-input {
	border:1px solid #dcdfe6;
	border-radius: 4px;
	line-height:40px;
	height:42px;
	padding-left: 16px;
}
.el-checkbox+.el-checkbox {
	margin-left: 22px;
}
.input__pos{
  width: 200px;
}
.el-form-item__label{
  width: 200px !important;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
