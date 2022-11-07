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
    dataIndex: 'transferReason_dictText'
   },
   {
    title: '受理状态',
    align:"center",
    dataIndex: 'responseStatus_dictText'
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
    title: '审批日期',
    align:"center",
    dataIndex: 'approvalDate',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
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
	{
      label: "转入单位许可证",
      field: 'incompanyLicenseno',
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "转入理由",
      field: 'transferReason',
      component: 'JDictSelectTag',
      componentProps:{
      },
      colProps: {span: 6},
 	},
	{
      label: "受理状态",
      field: 'responseStatus',
      component: 'JDictSelectTag',
      componentProps:{
      },
      colProps: {span: 6},
 	},
	{
      label: "新增时间",
      field: 'insertDate',
      component: 'DatePicker',
      colProps: {span: 6},
 	},
	{
      label: "审批日期",
      field: 'approvalDate',
      component: 'DatePicker',
      colProps: {span: 6},
 	},
];
//表单数据
export const formSchema: FormSchema[] = [
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
    label: '转入理由',
    field: 'transferReason',
    component: 'JDictSelectTag',
    componentProps:{
        dictCode:""
     },
  },
  {
    label: '受理状态',
    field: 'responseStatus',
    component: 'JDictSelectTag',
    componentProps:{
        dictCode:""
     },
  },
  {
    label: '是否通过（审批）',
    field: 'bePass',
    component: 'InputNumber',
  },
  {
    label: '不通过原因',
    field: 'nopassReason',
    component: 'Input',
  },
  {
    label: '经办人',
    field: 'doPerson',
    component: 'Input',
  },
  {
    label: '经办时间',
    field: 'doDate',
    component: 'DatePicker',
  },
  {
    label: '新增时间',
    field: 'insertDate',
    component: 'DatePicker',
  },
  {
    label: '审批日期',
    field: 'approvalDate',
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