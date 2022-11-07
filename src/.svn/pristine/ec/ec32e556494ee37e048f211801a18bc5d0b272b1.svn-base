import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '批准文号',
    align:"center",
    dataIndex: 'passNo'
   },
   {
    title: '单位名称',
    align:"center",
    dataIndex: 'companyName'
   },
   {
    title: '单位许可证',
    align:"center",
    dataIndex: 'companyLicenseno'
   },
   {
    title: '辐射安全负责人',
    align:"center",
    dataIndex: 'radialSafePrincipal'
   },
   {
    title: '辐射安全负责人联系电话',
    align:"center",
    dataIndex: 'radialSafeprincipalPhone'
   },
   {
    title: '项目负责人',
    align:"center",
    dataIndex: 'projectPrincipal'
   },
   {
    title: '异地工作内容',
    align:"center",
    dataIndex: 'strangeUseContent'
   },
   {
    title: '计划作业详细地址',
    align:"center",
    dataIndex: 'inDetailAddr'
   },
   {
    title: '接收单位',
    align:"center",
    dataIndex: 'inCompanyName'
   },
   {
    title: '单位经办人',
    align:"center",
    dataIndex: 'companyDoperson'
   },
   {
    title: '受理状态',
    align:"center",
    dataIndex: 'responseStatus'
   },
   {
    title: '新增人',
    align:"center",
    dataIndex: 'insertUser'
   },
   {
    title: '新增时间',
    align:"center",
    dataIndex: 'insertDate',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
   },
   {
    title: '移入地备案标志',
    align:"center",
    dataIndex: 'beinBackup'
   },
   {
    title: '移入地备案时间',
    align:"center",
    dataIndex: 'inBackupDate',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
   },
   {
    title: '移出地备案人',
    align:"center",
    dataIndex: 'outBackupDoPerson'
   },
   {
    title: '移出地备案时间',
    align:"center",
    dataIndex: 'outBackupDate',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
   },
   {
    title: '移出地备案注销人',
    align:"center",
    dataIndex: 'outLogoutDoPerson'
   },
   {
    title: '备份状态',
    align:"center",
    dataIndex: 'backupStatus'
   },
   {
    title: '退回理由',
    align:"center",
    dataIndex: 'retreatReason'
   },
   {
    title: '移出地备案是否通过 1通过 0不通过',
    align:"center",
    dataIndex: 'bePass'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
	{
      label: "单位名称",
      field: 'companyName',
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "单位许可证",
      field: 'companyLicenseno',
      component: 'Input',
      colProps: {span: 6},
 	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '放射源异地使用主键',
    field: 'strangeUseId',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入放射源异地使用主键!'},
          ];
     },
  },
  {
    label: '申请文号',
    field: 'requestNo',
    component: 'Input',
  },
  {
    label: '受理编号',
    field: 'responseNo',
    component: 'Input',
  },
  {
    label: '批准文号',
    field: 'passNo',
    component: 'Input',
  },
  {
    label: '单位名称',
    field: 'companyName',
    component: 'Input',
  },
  {
    label: '单位许可证',
    field: 'companyLicenseno',
    component: 'Input',
  },
  {
    label: '单位通讯地址',
    field: 'companyContactaddr',
    component: 'Input',
  },
  {
    label: '单位邮编',
    field: 'companyPost',
    component: 'Input',
  },
  {
    label: '辐射安全负责人',
    field: 'radialSafePrincipal',
    component: 'Input',
  },
  {
    label: '辐射安全负责人联系电话',
    field: 'radialSafeprincipalPhone',
    component: 'Input',
  },
  {
    label: '项目负责人',
    field: 'projectPrincipal',
    component: 'Input',
  },
  {
    label: '项目负责人联系电话',
    field: 'projectPrincipalPhone',
    component: 'Input',
  },
  {
    label: '异地工作内容',
    field: 'strangeUseContent',
    component: 'Input',
  },
  {
    label: '计划作业所在省份',
    field: 'inProvince',
    component: 'Input',
  },
  {
    label: '计划作业所在市区',
    field: 'inCity',
    component: 'Input',
  },
  {
    label: '计划作业所在县',
    field: 'inDistrict',
    component: 'Input',
  },
  {
    label: '计划作业详细地址',
    field: 'inDetailAddr',
    component: 'Input',
  },
  {
    label: '计划作业开始时间',
    field: 'inStartDate',
    component: 'DatePicker',
  },
  {
    label: '计划作业截止日期',
    field: 'inEndDate',
    component: 'DatePicker',
  },
  {
    label: '接收单位',
    field: 'inCompanyName',
    component: 'Input',
  },
  {
    label: '单位经办人',
    field: 'companyDoperson',
    component: 'Input',
  },
  {
    label: '单位经办人电话',
    field: 'companyDopersonPhone',
    component: 'Input',
  },
  {
    label: '附件',
    field: 'attachment',
    component: 'Input',
  },
  {
    label: '附件其他 ',
    field: 'attachmentOthers',
    component: 'Input',
  },
  {
    label: '受理状态',
    field: 'responseStatus',
    component: 'InputNumber',
  },
  {
    label: '新增人',
    field: 'insertUser',
    component: 'Input',
  },
  {
    label: '新增时间',
    field: 'insertDate',
    component: 'DatePicker',
  },
  {
    label: '新增人',
    field: 'modifyUser',
    component: 'Input',
  },
  {
    label: '新增时间',
    field: 'modifyDate',
    component: 'DatePicker',
  },
  {
    label: 'FILING_NO',
    field: 'filingNo',
    component: 'Input',
  },
  {
    label: '移入地备案标志',
    field: 'beinBackup',
    component: 'Input',
  },
  {
    label: '移入地备案人',
    field: 'inBackupDoPerson',
    component: 'Input',
  },
  {
    label: '移入地备案时间',
    field: 'inBackupDate',
    component: 'DatePicker',
  },
  {
    label: '移出地备案标志',
    field: 'beOutBackup',
    component: 'InputNumber',
  },
  {
    label: '移出地备案人',
    field: 'outBackupDoPerson',
    component: 'Input',
  },
  {
    label: '移出地备案时间',
    field: 'outBackupDate',
    component: 'DatePicker',
  },
  {
    label: '移入地备案注销标志',
    field: 'beinLogout',
    component: 'Input',
  },
  {
    label: '移入地备案注销人',
    field: 'inLogoutDoPerson',
    component: 'Input',
  },
  {
    label: '移入地备案注销时间',
    field: 'inLogoutDate',
    component: 'DatePicker',
  },
  {
    label: '移出地备案注销标志',
    field: 'beOutLogout',
    component: 'InputNumber',
  },
  {
    label: '移出地备案注销人',
    field: 'outLogoutDoPerson',
    component: 'Input',
  },
  {
    label: '移出地备案注销时间',
    field: 'outLogoutDate',
    component: 'DatePicker',
  },
  {
    label: '需求来源',
    field: 'requestSource',
    component: 'Input',
  },
  {
    label: '需求来源id',
    field: 'requestSourceId',
    component: 'Input',
  },
  {
    label: '备份状态',
    field: 'backupStatus',
    component: 'InputNumber',
  },
  {
    label: '退回理由',
    field: 'retreatReason',
    component: 'Input',
  },
  {
    label: '连续异地使用id',
    field: 'continuousId',
    component: 'Input',
  },
  {
    label: '移出地备案是否通过 1通过 0不通过',
    field: 'bePass',
    component: 'InputNumber',
  },
  {
    label: '移入地不同意理由',
    field: 'inNotPassReason',
    component: 'Input',
  },
  {
    label: '移出地不同意理由',
    field: 'outNotPassReason',
    component: 'Input',
  },
  {
    label: '备注',
    field: 'mark',
    component: 'Input',
  },
  {
    label: '用户ID',
    field: 'userId',
    component: 'Input',
  },
  {
    label: '撤销理由',
    field: 'revokeDeclare',
    component: 'Input',
  },
  {
    label: '撤销原因',
    field: 'revokeReason',
    component: 'Input',
  },
  {
    label: '单位instanceid',
    field: 'companyInstanceid',
    component: 'Input',
  },
  {
    label: '业务id',
    field: 'ywid',
    component: 'Input',
  },
  {
    label: '移出地区域编码',
    field: 'regionCode1',
    component: 'Input',
  },
  {
    label: '移入地区域编码',
    field: 'regionCode2',
    component: 'Input',
  },
  {
    label: 'OLD_MARK',
    field: 'oldMark',
    component: 'Input',
  },
  {
    label: 'IS_DELETE',
    field: 'isDelete',
    component: 'InputNumber',
  },
  {
    label: 'UPDATETIME',
    field: 'updatetime',
    component: 'DatePicker',
  },
  {
    label: 'PERMISSION_CODE_1',
    field: 'permissionCode1',
    component: 'Input',
  },
  {
    label: 'PERMISSION_CODE_2',
    field: 'permissionCode2',
    component: 'Input',
  },
	// TODO 主键隐藏字段，目前写死为ID
	{
	  label: '',
	  field: 'id',
	  component: 'Input',
	  show: false
	},
];



/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}