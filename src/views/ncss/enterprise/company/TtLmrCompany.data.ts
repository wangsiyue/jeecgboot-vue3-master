import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '旧单位名称',
    align:"center",
    dataIndex: 'oldName'
   },
   {
    title: '新单位名称',
    align:"center",
    dataIndex: 'newName'
   },
   {
    title: '旧法人',
    align:"center",
    dataIndex: 'oldLegalPerson'
   },
   {
    title: '新法人',
    align:"center",
    dataIndex: 'newLegal'
   },
   {
    title: '许可证号码',
    align:"center",
    dataIndex: 'licenseNo'
   },
   {
    title: '范围及类型',
    align:"center",
    dataIndex: 'typeAndRange'
   },
   {
    title: '许可证生效日期',
    align:"center",
    dataIndex: 'licenseStartdate',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
   },
   {
    title: '许可证失效日期',
    align:"center",
    dataIndex: 'licenseEdndate',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
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
    title: '是否通过  0：否  1：是',
    align:"center",
    dataIndex: 'bePass'
   },
   {
    title: '不批准理由',
    align:"center",
    dataIndex: 'notPassReason'
   },
   {
    title: '经办人日期',
    align:"center",
    dataIndex: 'doDate',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
   },
   {
    title: '许可证审批机关',
    align:"center",
    dataIndex: 'licenseIssueOrgan'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
	{
      label: "批准文号",
      field: 'passNo',
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "旧单位名称",
      field: 'oldName',
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "新单位名称",
      field: 'newName',
      component: 'Input',
      colProps: {span: 6},
 	},
     {
      label: "许可证生效日期",
      field: "licenseStartdate",
      component: 'RangePicker',
      colProps: {span: 6},
	},
     {
      label: "许可证失效日期",
      field: "licenseEdndate",
      component: 'RangePicker',
      colProps: {span: 6},
	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '许可证变更主键',
    field: 'lmrCompanyId',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入许可证变更主键!'},
          ];
     },
  },
  {
    label: '申请编号',
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
    label: '旧单位名称',
    field: 'oldName',
    component: 'Input',
  },
  {
    label: '新单位名称',
    field: 'newName',
    component: 'Input',
  },
  {
    label: '旧单位地址',
    field: 'oldAddress',
    component: 'Input',
  },
  {
    label: '新单位地址',
    field: 'newAddress',
    component: 'Input',
  },
  {
    label: '旧法人',
    field: 'oldLegalPerson',
    component: 'Input',
  },
  {
    label: '旧法人证件类型',
    field: 'oldLegalPersonidType',
    component: 'Input',
  },
  {
    label: '旧法人证件号码',
    field: 'oldLegalPersonid',
    component: 'Input',
  },
  {
    label: '新法人',
    field: 'newLegal',
    component: 'Input',
  },
  {
    label: '新法人证件类型',
    field: 'newLegalPersonidType',
    component: 'Input',
  },
  {
    label: '新法人证件号码',
    field: 'newLegalPersonid',
    component: 'Input',
  },
  {
    label: '许可证号码',
    field: 'licenseNo',
    component: 'Input',
  },
  {
    label: '范围及类型',
    field: 'typeAndRange',
    component: 'Input',
  },
  {
    label: '许可证生效日期',
    field: 'licenseStartdate',
    component: 'DatePicker',
  },
  {
    label: '许可证失效日期',
    field: 'licenseEdndate',
    component: 'DatePicker',
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
    label: 'ATTACHMENT',
    field: 'attachment',
    component: 'Input',
  },
  {
    label: 'ATTACHEMENT_OTHERS',
    field: 'attachementOthers',
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
    label: '修改人',
    field: 'modifyUser',
    component: 'Input',
  },
  {
    label: '修改时间',
    field: 'modifyDate',
    component: 'DatePicker',
  },
  {
    label: '是否通过  0：否  1：是',
    field: 'bePass',
    component: 'InputNumber',
  },
  {
    label: '不批准理由',
    field: 'notPassReason',
    component: 'Input',
  },
  {
    label: '经办人',
    field: 'doPerson',
    component: 'Input',
  },
  {
    label: '经办人日期',
    field: 'doDate',
    component: 'DatePicker',
  },
  {
    label: 'REQUEST_SOURCE',
    field: 'requestSource',
    component: 'Input',
  },
  {
    label: 'REQUEST_SOURCE_ID',
    field: 'requestSourceId',
    component: 'Input',
  },
  {
    label: 'STATUS',
    field: 'status',
    component: 'Input',
  },
  {
    label: 'RETREAT_REASON',
    field: 'retreatReason',
    component: 'Input',
  },
  {
    label: 'USER_TYPE',
    field: 'userType',
    component: 'Input',
  },
  {
    label: 'LICENCE_ISSUING_AUTHORIT',
    field: 'licenceIssuingAuthorit',
    component: 'Input',
  },
  {
    label: 'USER_ID',
    field: 'userId',
    component: 'Input',
  },
  {
    label: 'INSTANCEID',
    field: 'instanceid',
    component: 'Input',
  },
  {
    label: 'YWID',
    field: 'ywid',
    component: 'Input',
  },
  {
    label: 'REGION_CODE_1',
    field: 'regionCode1',
    component: 'Input',
  },
  {
    label: '许可证审批机关',
    field: 'licenseIssueOrgan',
    component: 'Input',
  },
  {
    label: 'COMPANY_ID',
    field: 'companyId',
    component: 'Input',
  },
  {
    label: 'SUBMIT_DATE',
    field: 'submitDate',
    component: 'DatePicker',
  },
  {
    label: 'SUBMIT_USER',
    field: 'submitUser',
    component: 'Input',
  },
  {
    label: 'CERTIFICATE_DATE',
    field: 'certificateDate',
    component: 'DatePicker',
  },
  {
    label: 'OLD_MARK',
    field: 'oldMark',
    component: 'Input',
  },
  {
    label: 'OLD_LEGAL_PERSON_PHONE',
    field: 'oldLegalPersonPhone',
    component: 'Input',
  },
  {
    label: 'NEW_LEGAL_PERSON_PHONE',
    field: 'newLegalPersonPhone',
    component: 'Input',
  },
  {
    label: 'IS_DELETE',
    field: 'isDelete',
    component: 'InputNumber',
  },
  {
    label: 'PERMISSION_CODE_1',
    field: 'permissionCode1',
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