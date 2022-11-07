import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '单位名称',
    align:"center",
    dataIndex: 'name'
   },
   {
    title: '单位地址',
    align:"center",
    dataIndex: 'address'
   },
   {
    title: '法人',
    align:"center",
    dataIndex: 'legalPerson'
   },
   {
    title: '法人电话',
    align:"center",
    dataIndex: 'legalPersonPhone'
   },
   {
    title: '类型及范围',
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
    dataIndex: 'licenseEnddate',
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
    title: '许可证延期日期',
    align:"center",
    dataIndex: 'lcrDate',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
   },
   {
    title: '不批准理由',
    align:"center",
    dataIndex: 'notPassReason'
   },
   {
    title: '许可证审批机关',
    align:"center",
    dataIndex: 'licenseIssueOrgan'
   },
   {
    title: '提交日期',
    align:"center",
    dataIndex: 'submitDate',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
   },
   {
    title: '发证日期',
    align:"center",
    dataIndex: 'certificateDate',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
	{
      label: "单位名称",
      field: 'name',
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
      field: "licenseEnddate",
      component: 'RangePicker',
      colProps: {span: 6},
	},
     {
      label: "发证日期",
      field: "certificateDate",
      component: 'RangePicker',
      colProps: {span: 6},
	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '许可证延期主键',
    field: 'lcrCompanyId',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入许可证延期主键!'},
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
    label: '单位名称',
    field: 'name',
    component: 'Input',
  },
  {
    label: '单位地址',
    field: 'address',
    component: 'Input',
  },
  {
    label: '法人',
    field: 'legalPerson',
    component: 'Input',
  },
  {
    label: '法人电话',
    field: 'legalPersonPhone',
    component: 'Input',
  },
  {
    label: '法人证件类型',
    field: 'legalPersonType',
    component: 'InputNumber',
  },
  {
    label: '法人证件号码',
    field: 'legalPersonId',
    component: 'Input',
  },
  {
    label: '许可证号码',
    field: 'licenseNo',
    component: 'Input',
  },
  {
    label: '类型及范围',
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
    field: 'licenseEnddate',
    component: 'DatePicker',
  },
  {
    label: '经办人',
    field: 'companyDoperson',
    component: 'Input',
  },
  {
    label: '联系电话',
    field: 'companyDopersonPhone',
    component: 'Input',
  },
  {
    label: 'ATTACHMENT',
    field: 'attachment',
    component: 'Input',
  },
  {
    label: 'ATTACHMENT_OTHER',
    field: 'attachmentOther',
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
    label: '许可证延期日期',
    field: 'lcrDate',
    component: 'DatePicker',
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
    label: '单位id',
    field: 'instanceid',
    component: 'Input',
  },
  {
    label: '业务ud',
    field: 'ywid',
    component: 'Input',
  },
  {
    label: '许可证审批机关',
    field: 'licenseIssueOrgan',
    component: 'Input',
  },
  {
    label: '单位company_id',
    field: 'companyId',
    component: 'Input',
  },
  {
    label: '提交日期',
    field: 'submitDate',
    component: 'DatePicker',
  },
  {
    label: '提交人',
    field: 'submitUser',
    component: 'Input',
  },
  {
    label: 'USER_TYPE',
    field: 'userType',
    component: 'Input',
  },
  {
    label: '发证日期',
    field: 'certificateDate',
    component: 'DatePicker',
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
    label: 'NEW_LICENSE_NO',
    field: 'newLicenseNo',
    component: 'Input',
  },
  {
    label: 'PERMISSION_CODE_1',
    field: 'permissionCode1',
    component: 'Input',
  },
  {
    label: 'ACCEPT_DATE',
    field: 'acceptDate',
    component: 'DatePicker',
  },
  {
    label: '是否通过  0：否  1：是',
    field: 'bePass',
    component: 'InputNumber',
  },
  {
    label: 'doPersonCode',
    field: 'doPersonCode',
    component: 'Input',
  },
  {
    label: 'licenceIssuingAuthority',
    field: 'licenceIssuingAuthority',
    component: 'Input',
  },
  {
    label: 'acceptPersonCode',
    field: 'acceptPersonCode',
    component: 'Input',
  },
  {
    label: 'acceptPerson',
    field: 'acceptPerson',
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