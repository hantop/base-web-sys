<template>
	<div v-loading.fullscreen="loading" class="upload" :class="{'g-listpage__style' : !isDisabled}">
		<div v-if="!isDisabled" class="clearfix upload-title">
			<span>资料上传</span>
		</div>
		<el-alert v-if="!isDisabled"
			title="至少上传1张，每张不超过2MB。系统支持图片格式为：png、jpg、jpeg、bmp。"
			type="info"
			show-icon :closable="false">
		</el-alert>
		<el-form label-width="124px">
			<el-row>
				<el-form-item label="企业证件：">
					<el-upload v-if="!isDisabled" ref="enterpriseCertificate"
						class="upload-demo"
						:action="picAddress"
						:on-remove="handleRemove"
						:before-upload="beforeAvatarUpload"
						:on-preview="handlePictureCardPreview"
						list-type="picture"
						:data="enterpriseCertificate"
						:http-request="fileUpload"
						:multiple="isMultiple">
						<el-button size="small"><i class="el-icon-upload2"></i> 上传文件</el-button>
					</el-upload>
					<div v-for="(item,index) in enterpriseCertificateList" :key="item.id" class="view-img" @click="handlePictureCardPreview(item)">
						<img :src="item.url" alt="">
						<span v-text="item.resourceName"></span>
						<i v-if="!isDisabled" class="el-icon-close" @click.stop="removeImg(item,index,enterpriseCertificateList)"></i>
					</div>
				</el-form-item>
			</el-row>
			<el-row>
				<el-form-item label="企业征信报告：">
					<el-upload v-if="!isDisabled" ref="enterpriseCreditReport"
						class="upload-demo"
						:action="picAddress"
						:on-remove="handleRemove"
						:before-upload="beforeAvatarUpload"
						:on-preview="handlePictureCardPreview"
						list-type="picture"
						:data="enterpriseCreditReport"
						:http-request="fileUpload"
						:multiple="isMultiple">
						<el-button size="small"><i class="el-icon-upload2"></i> 上传文件</el-button>
					</el-upload>
					<div v-for="(item,index) in enterpriseCreditReportList" :key="item.id" class="view-img" @click="handlePictureCardPreview(item)">
						<img :src="item.url" alt="">
						<span v-text="item.resourceName"></span>
						<i v-if="!isDisabled" class="el-icon-close" @click.stop="removeImg(item,index,enterpriseCreditReportList)"></i>
					</div>
				</el-form-item>
			</el-row>
			<el-row>
				<el-form-item label="法人证件：">
					<el-upload v-if="!isDisabled" ref="legalCertificate"
						class="upload-demo"
						:action="picAddress"
						:on-remove="handleRemove"
						:before-upload="beforeAvatarUpload"
						:on-preview="handlePictureCardPreview"
						list-type="picture"
						:data="legalCertificate"
						:http-request="fileUpload"
						:multiple="isMultiple">
						<el-button size="small"><i class="el-icon-upload2"></i> 上传文件</el-button>
					</el-upload>
					<div v-for="(item,index) in legalCertificateList" :key="item.id" class="view-img" @click="handlePictureCardPreview(item)">
						<img :src="item.url" alt="">
						<span v-text="item.resourceName"></span>
						<i v-if="!isDisabled" class="el-icon-close" @click.stop="removeImg(item,index,legalCertificateList)"></i>
					</div>
				</el-form-item>
			</el-row>
			<el-row>
				<el-form-item label="法人征信报告：">
					<el-upload v-if="!isDisabled" ref="legalCreditReport"
						class="upload-demo"
						:action="picAddress"
						:on-remove="handleRemove"
						:before-upload="beforeAvatarUpload"
						:on-preview="handlePictureCardPreview"
						list-type="picture"
						:data="legalCreditReport"
						:http-request="fileUpload"
						:multiple="isMultiple">
						<el-button size="small"><i class="el-icon-upload2"></i> 上传文件</el-button>
					</el-upload>
					<div v-for="(item,index) in legalCreditReportList" :key="item.id" class="view-img" @click="handlePictureCardPreview(item)">
						<img :src="item.url" alt="">
						<span v-text="item.resourceName"></span>
						<i v-if="!isDisabled" class="el-icon-close" @click.stop="removeImg(item,index,legalCreditReportList)"></i>
					</div>
				</el-form-item>
			</el-row>
			<el-row>
				<div class="line"></div>
			</el-row>
			<el-row>
				<el-form-item label="担保人证件：">
					<el-upload v-if="!isDisabled" ref="guarantorCertificate"
						class="upload-demo"
						:action="picAddress"
						:on-remove="handleRemove"
						:before-upload="beforeAvatarUpload"
						:on-preview="handlePictureCardPreview"
						list-type="picture"
						:data="guarantorCertificate"
						:http-request="fileUpload"
						:multiple="isMultiple">
						<el-button size="small"><i class="el-icon-upload2"></i> 上传文件</el-button>
					</el-upload>
					<div v-for="(item,index) in guarantorCertificateList" :key="item.id" class="view-img" @click="handlePictureCardPreview(item)">
						<img :src="item.url" alt="">
						<span v-text="item.resourceName"></span>
						<i v-if="!isDisabled" class="el-icon-close" @click.stop="removeImg(item,index,guarantorCertificateList)"></i>
					</div>
				</el-form-item>
			</el-row>
			<el-row>
				<el-form-item label="担保人征信报告：">
					<el-upload v-if="!isDisabled" ref="guarantorCreditReport"
						class="upload-demo"
						:action="picAddress"
						:on-remove="handleRemove"
						:before-upload="beforeAvatarUpload"
						:on-preview="handlePictureCardPreview"
						list-type="picture"
						:data="guarantorCreditReport"
						:http-request="fileUpload"
						:multiple="isMultiple">
						<el-button size="small"><i class="el-icon-upload2"></i> 上传文件</el-button>
					</el-upload>
					<div v-for="(item,index) in guarantorCreditReportList" :key="item.id" class="view-img" @click="handlePictureCardPreview(item)">
						<img :src="item.url" alt="">
						<span v-text="item.resourceName"></span>
						<i v-if="!isDisabled" class="el-icon-close" @click.stop="removeImg(item,index,guarantorCreditReportList)"></i>
					</div>
				</el-form-item>
			</el-row>
			<el-row>
				<el-form-item label="结婚证/户口本：">
					<el-upload v-if="!isDisabled" ref="householdRegister"
						class="upload-demo"
						:action="picAddress"
						:on-remove="handleRemove"
						:before-upload="beforeAvatarUpload"
						:on-preview="handlePictureCardPreview"
						list-type="picture"
						:data="householdRegister"
						:http-request="fileUpload"
						:multiple="isMultiple">
						<el-button size="small"><i class="el-icon-upload2"></i> 上传文件</el-button>
					</el-upload>
					<div v-for="(item,index) in householdRegisterList" :key="item.id" class="view-img" @click="handlePictureCardPreview(item)">
						<img :src="item.url" alt="">
						<span v-text="item.resourceName"></span>
						<i v-if="!isDisabled" class="el-icon-close" @click.stop="removeImg(item,index,householdRegisterList)"></i>
					</div>
				</el-form-item>
			</el-row>
			<el-row>
				<el-form-item label="房产证：">
					<el-upload v-if="!isDisabled" ref="houseCertificate"
						class="upload-demo"
						:action="picAddress"
						:on-remove="handleRemove"
						:before-upload="beforeAvatarUpload"
						:on-preview="handlePictureCardPreview"
						list-type="picture"
						:data="houseCertificate"
						:http-request="fileUpload"
						:multiple="isMultiple">
						<el-button size="small"><i class="el-icon-upload2"></i> 上传文件</el-button>
					</el-upload>
					<div v-for="(item,index) in houseCertificateList" :key="item.id" class="view-img" @click="handlePictureCardPreview(item)">
						<img :src="item.url" alt="">
						<span v-text="item.resourceName"></span>
						<i v-if="!isDisabled" class="el-icon-close" @click.stop="removeImg(item,index,houseCertificateList)"></i>
					</div>
				</el-form-item>
			</el-row>
			<el-row>
				<el-form-item label="行驶证：">
					<el-upload v-if="!isDisabled" ref="drivingLicense"
						class="upload-demo"
						:action="picAddress"
						:on-remove="handleRemove"
						:before-upload="beforeAvatarUpload"
						:on-preview="handlePictureCardPreview"
						list-type="picture"
						:data="drivingLicense"
						:http-request="fileUpload"
						:multiple="isMultiple">
						<el-button size="small"><i class="el-icon-upload2"></i> 上传文件</el-button>
					</el-upload>
					<div v-for="(item,index) in drivingLicenseList" :key="item.id" class="view-img" @click="handlePictureCardPreview(item)">
						<img :src="item.url" alt="">
						<span v-text="item.resourceName"></span>
						<i v-if="!isDisabled" class="el-icon-close" @click.stop="removeImg(item,index,drivingLicenseList)"></i>
					</div>
				</el-form-item>
			</el-row>
			<el-row>
				<el-form-item label="其他：">
					<el-upload v-if="!isDisabled" ref="others"
						class="upload-demo"
						:action="picAddress"
						:on-remove="handleRemove"
						:before-upload="beforeAvatarUpload"
						:on-preview="handlePictureCardPreview"
						list-type="picture"
						:data="others"
						:http-request="fileUpload"
						:multiple="isMultiple">
						<el-button size="small"><i class="el-icon-upload2"></i> 上传文件</el-button>
					</el-upload>
					<div v-for="(item,index) in othersList" :key="item.id" class="view-img" @click="handlePictureCardPreview(item)">
						<img :src="item.url" alt="">
						<span v-text="item.resourceName"></span>
						<i v-if="!isDisabled" class="el-icon-close" @click="removeImg(item,index,othersList)"></i>
					</div>
				</el-form-item>
			</el-row>
		</el-form>
		<el-dialog :visible.sync="dialogVisible">
			<img width="100%" :src="dialogImageUrl" alt="">
		</el-dialog>
		<el-row v-if="!isDisabled">
			<el-button type='primary' @click="saveInfo">提交</el-button>
			<el-button @click='cancel'>取消</el-button>
		</el-row>
	</div>
</template>

<script>
import { ftpFileController } from "@/controller/common/file_controller";
import { resourceController } from "@/controller/common/resource_controller";
import { customerInfoController } from "@/controller/common/customerInfo_controller";
export default {
  data() {
    return {
      loading: false,
      picAddress: "",
			isMultiple: true,
			orderId: "",
			customerId: "",
			imgInfo: [],
			enterpriseCertificate: {category:"enterpriseCertificate"},
			enterpriseCreditReport: {category:"enterpriseCreditReport"},
			legalCertificate: {category:"legalCertificate"},
			legalCreditReport: {category:"legalCreditReport"},
			guarantorCertificate: {category:"guarantorCertificate"},
			guarantorCreditReport: {category:"guarantorCreditReport"},
			householdRegister: {category:"householdRegister"},
			houseCertificate: {category:"houseCertificate"},
			drivingLicense: {category:"drivingLicense"},
			others: {category:"others"},
			imgList: [],
			enterpriseCertificateList: [],
			enterpriseCreditReportList: [],
			legalCertificateList: [],
			legalCreditReportList: [],
			guarantorCertificateList: [],
			guarantorCreditReportList: [],
			householdRegisterList: [],
			houseCertificateList: [],
			drivingLicenseList: [],
			othersList: [],
			dialogVisible: false,
			dialogImageUrl: "",
			imgNum: 0
    };
	},
	created() {
		this.orderId = this.$route.query.orderId
		this.customerId = this.$route.query.customerId
		this.queryResource()
	},
	props: {
    isDisabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    beforeAvatarUpload(file) {
      const imgType =
        file.type === "image/jpg" ||
        file.type === "image/jpeg" ||
        file.type === "image/png" ||
        file.type === "image/bmp";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!imgType) {
        this.$message.error("图片只能是 png、jpg、jpeg、bmp 格式!");
      }
      if (!isLt2M) {
        this.$message.error("图片大小不能超过 2MB!");
      }
      return imgType && isLt2M;
    },
    fileUpload(param) {
			let data = {}
			data.category =  param.data.category
			data.ownerId = this.orderId
			data.ownerType = "order"

      var imgObj = param.file;
      var file = new FormData();
			file.append("file", imgObj);

      ftpFileController.upload(file).then(res => {
        if (res.status === 200) {
					imgObj.id = res.data.id
					data.resourceId = res.data.newName
					data.resourceName = res.data.oldName
					data.resourceUrl = res.data.url

					this.imgInfo.push(imgObj);
					resourceController.saveResource(data).then(res =>{
						if(res.status === 200) {
							imgObj.id = res.data
							this.imgNum++
							this.$message.success("上传成功！");
						} else {
							this.$message.error("文件上传失败！");
							this.$refs[data.category].clearFiles()
						}
					})
				} else {
					this.$message.error("文件上传失败！");
					this.$refs[data.category].clearFiles()
          
				}
      });
		},
    handleRemove(file, fileList) {
			let index
      for (var i = 0; i < this.imgInfo.length; i++) {
        if (this.imgInfo[i].uid === file.uid) {
					var resourceId = this.imgInfo[i].resourceId;
					var id = this.imgInfo[i].id;
					index = i
        }
			}
      this.delete(resourceId,id,index,this.imgInfo)
		},
		removeImg(item,index,list) {
			this.delete(item.resourceUrl, item.id,index,list)
		},
		delete(resourceUrl, id,index,list) {
			ftpFileController.delete(resourceUrl).then(res => {
				if(res.status === 200) {
					resourceController.deleteResource({id: id}).then(res =>{
						if(res.status === 200) {
							this.$message.success("删除成功！");
							this.imgNum--
							list.splice(index, 1);
						}
					})
				}
			});
		},
		queryResource() {
			let data = {
				ownerId: this.orderId,
				ownerType: "order",
			}
			resourceController.queryResource(data).then(res => {
				this.imgList = res.data
				this.imgList.forEach(v => {
					if(v.category === "enterpriseCertificate") {
						this.enterpriseCertificateList.push(v)
					} else if(v.category === "enterpriseCreditReport") {
						this.enterpriseCreditReportList.push(v)
					} else if(v.category === "legalCertificate") {
						this.legalCertificateList.push(v)
					} else if(v.category === "legalCreditReport") {
						this.legalCreditReportList.push(v)
					} else if(v.category === "guarantorCertificate") {
						this.guarantorCertificateList.push(v)
					} else if(v.category === "guarantorCreditReport") {
						this.guarantorCreditReportList.push(v)
					} else if(v.category === "householdRegister") {
						this.householdRegisterList.push(v)
					} else if(v.category === "houseCertificate") {
						this.houseCertificateList.push(v)
					} else if(v.category === "drivingLicense") {
						this.drivingLicenseList.push(v)
					} else if(v.category === "others") {
						this.othersList.push(v)
					}
					v.url = ftpFileController.view()+ v.resourceUrl
				})
			})
		},
		handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
		},
		cancel() {
			this.$router.back(-1)
		},
		saveInfo() {
			if(this.imgNum > 0) {
				customerInfoController.confirmResource({customerId:this.customerId}).then( res => {
					if(res.status === 200) {
						this.$message.success("提交成功！");
						this.$router.back(-1)
					}
				})
			} else {
				this.$message.info('请至少上传一张图片')
			}
			
		}
  }
};
</script>

<style lang="scss">
.upload {
	.upload-title {
		font-size: 16px;
		padding-bottom: 20px;
    margin-bottom: 20px;
		border-bottom: 1px solid #E6E6E6;
	}
	.el-alert.el-alert--info {
		margin-bottom: 14px;
		background-color: #E6F7FF;
		border: 1px solid #BAE7FF;
		.el-icon-info {
			color: #1890FF;
		}
	}
	.el-upload-list--picture {
		overflow: hidden;
		.el-upload-list__item {
			float: left;
			width: 230px;
			margin-right: 10px;
		}
	}
	.line {
		height: 16px;
		border-top: 1px solid #e6e6e6;
	}
	.view-img {
		float: left;
    width: 230px;
    margin-right: 10px;
		color: #606266;
		border: 1px solid #c0ccda;
    border-radius: 6px;
		margin-top: 10px;
    padding: 10px 10px 10px 90px;
    height: 92px;
		position: relative;
		img {
			width: 70px;
			height: 70px;
			vertical-align: middle;
			float: left;
			position: relative;
			z-index: 1;
			margin-left: -80px;
		}
		span {
			display: block;
    	margin-top: 20px;
			margin-right: 40px;
			overflow: hidden;
			padding-left: 4px;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
		.el-icon-close {
			display: none;
			width: 14px;
			height: 14px;
			position: absolute;
			top: 5px;
			right: 5px;
			cursor: pointer;
			opacity: .75;
		}
	}
	.view-img:hover {
		.el-icon-close {
			display: block;
		}
	}
}
</style>
