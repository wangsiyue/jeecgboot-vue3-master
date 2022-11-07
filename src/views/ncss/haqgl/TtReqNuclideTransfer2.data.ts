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
    title: '转出单位名称',
    align:"center",
    dataIndex: 'outCompany'
   },
   {
    title: '转出单位许可证',
    align:"center",
    dataIndex: 'outcompanyLicenseno'
   },
   {
    title: '转入单位名称',
    align:"center",
    dataIndex: 'incompanyName'
   },
   {
    title: '转入单位许可证',
    align:"center",
    dataIndex: 'incompanyLicenseno'
   },
   {
    title: '转入理由',
    align:"center",
    dataIndex: 'transferReason'
   },
   {
    title: '受理状态',
    align:"center",
    dataIndex: 'responseStatus'
   },
   {
    title: '审批人',
    align:"center",
    dataIndex: 'doPerson'
   },
   {
    title: '审批时间',
    align:"center",
    dataIndex: 'doDate',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
   },
   {
    title: '审批不通过理由',
    align:"center",
    dataIndex: 'notPassReason'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
	{
      label: "转出单位名称",
      field: 'outCompany',
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "转出单位许可证",
      field: 'outcompanyLicenseno',
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "转入单位名称",
      field: 'incompanyName',
      component: 'Input',
      colProps: {span: 6},
 	},
];
//表单数据
export const formSchema: FormSchema[] = [
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
    label: '转出单位名称',
    field: 'outCompany',
    component: 'Input',
  },
  {
    label: '转出单位许可证',
    field: 'outcompanyLicenseno',
    component: 'Input',
  },
  {
    label: '转出单位通讯地址',
    field: 'outcompanyContactaddr',
    component: 'Input',
  },
  {
    label: '转出单位经办人',
    field: 'outcompanyDoperson',
    component: 'Input',
  },
  {
    label: '转出单位电话传真',
    field: 'outcompanyPhoneorfax',
    component: 'Input',
  },
  {
    label: '转出单位邮政编码',
    field: 'outcompanyPost',
    component: 'Input',
  },
  {
    label: '转入单位名称',
    field: 'incompanyName',
    component: 'Input',
  },
  {
    label: '转入单位许可证',
    field: 'incompanyLicenseno',
    component: 'Input',
  },
  {
    label: '转入单位通讯地址',
    field: 'incompanyContactaddr',
    component: 'Input',
  },
  {
    label: '转入单位经办人',
    field: 'incompanyDoperson',
    component: 'Input',
  },
  {
    label: '转入单位电话传真',
    field: 'inconpanyPhoneorfax',
    component: 'Input',
  },
  {
    label: '转入单位邮政编码',
    field: 'incompanyPost',
    component: 'Input',
  },
  {
    label: '转入理由',
    field: 'transferReason',
    component: 'Input',
  },
  {
    label: '转入理由其他',
    field: 'transferReasonOthers',
    component: 'Input',
  },
  {
    label: '附件',
    field: 'attachment',
    component: 'Input',
  },
  {
    label: '附件其他',
    field: 'attachmentOthers',
    component: 'Input',
  },
  {
    label: '受理状态',
    field: 'responseStatus',
    component: 'InputNumber',
  },
  {
    label: '审批是否通过 1 通过0不通过',
    field: 'bePass',
    component: 'InputNumber',
  },
  {
    label: '审批人',
    field: 'doPerson',
    component: 'Input',
  },
  {
    label: '审批时间',
    field: 'doDate',
    component: 'DatePicker',
  },
  {
    label: '需求来源',
    field: 'requestSource',
    component: 'Input',
  },
  {
    label: '需求来源ID',
    field: 'requestSourceId',
    component: 'Input',
  },
  {
    label: '备份状态',
    field: 'backupStatus',
    component: 'InputNumber',
  },
  {
    label: '插入人',
    field: 'insertUser',
    component: 'Input',
  },
  {
    label: '插入时间',
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
    label: '审批不通过理由',
    field: 'notPassReason',
    component: 'Input',
  },
  {
    label: '退回理由',
    field: 'retreatReason',
    component: 'Input',
  },
  {
    label: '用户ID',
    field: 'userId',
    component: 'Input',
  },
  {
    label: '撤销状态',
    field: 'revokeDeclare',
    component: 'Input',
  },
  {
    label: '撤销理由',
    field: 'revokeReason',
    component: 'Input',
  },
  {
    label: '转出单位INSTANCEID',
    field: 'outCompanyInstanceid',
    component: 'Input',
  },
  {
    label: '转入单位INSTANCEID',
    field: 'inCompanyInstanceid',
    component: 'Input',
  },
  {
    label: '转入单位区域编码',
    field: 'regionCode1',
    component: 'Input',
  },
  {
    label: '转出单位区域编码',
    field: 'regionCode2',
    component: 'Input',
  },
  {
    label: '是否删除',
    field: 'isDelete',
    component: 'InputNumber',
  },
  {
    label: '更新时间',
    field: 'updatetime',
    component: 'DatePicker',
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