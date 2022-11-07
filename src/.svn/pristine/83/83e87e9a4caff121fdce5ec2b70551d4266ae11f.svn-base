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
    title: '出口单位名称',
    align:"center",
    dataIndex: 'exportCompanyName'
   },
   {
    title: '出口单位许可证',
    align:"center",
    dataIndex: 'exportcompanyLicenseno'
   },
   {
    title: '出口理由',
    align:"center",
    dataIndex: 'exportReason_dictText'
   },
   {
    title: '受理状态',
    align:"center",
    dataIndex: 'responseStatus_dictText'
   },
   {
    title: '出口委托单位名称',
    align:"center",
    dataIndex: 'entrustCompanyName'
   },
   {
    title: '出口委托单位许可证',
    align:"center",
    dataIndex: 'entrustCompanyLicenseno'
   },
   {
    title: '新增日期',
    align:"center",
    dataIndex: 'insertDate',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
   },
   {
    title: '使用国家',
    align:"center",
    dataIndex: 'nuclideReceiveCountry_dictText'
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
      label: "出口单位名称",
      field: 'exportCompanyName',
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "出口单位许可证",
      field: 'exportcompanyLicenseno',
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "出口理由",
      field: 'exportReason',
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
      label: "出口委托单位名称",
      field: 'entrustCompanyName',
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "出口委托单位许可证",
      field: 'entrustCompanyLicenseno',
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "新增日期",
      field: 'insertDate',
      component: 'DatePicker',
      colProps: {span: 6},
 	},
	{
      label: "使用国家",
      field: 'nuclideReceiveCountry',
      component: 'JDictSelectTag',
      componentProps:{
      },
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
    label: '批准文号',
    field: 'passNo',
    component: 'Input',
  },
  {
    label: '出口单位名称',
    field: 'exportCompanyName',
    component: 'Input',
  },
  {
    label: '出口单位许可证',
    field: 'exportcompanyLicenseno',
    component: 'Input',
  },
  {
    label: '产源国家',
    field: 'nuclideProduceCountry',
    component: 'Input',
  },
  {
    label: '出口国家',
    field: 'nuclideExportCountry',
    component: 'Input',
  },
  {
    label: '产源单位名称',
    field: 'nuclideManufacture',
    component: 'Input',
  },
  {
    label: '接收单位名称',
    field: 'nuclideReceiveCompany',
    component: 'Input',
  },
  {
    label: '出口理由',
    field: 'exportReason',
    component: 'JDictSelectTag',
    componentProps:{
        dictCode:""
     },
  },
  {
    label: '出口理由其他',
    field: 'exportReasonOthers',
    component: 'Input',
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
    label: '出口委托单位名称',
    field: 'entrustCompanyName',
    component: 'Input',
  },
  {
    label: '出口委托单位许可证',
    field: 'entrustCompanyLicenseno',
    component: 'Input',
  },
  {
    label: '出口委托单位通讯地址',
    field: 'entrustCompanyContactaddr',
    component: 'Input',
  },
  {
    label: '出口委托单位邮编',
    field: 'entrustCompanyPost',
    component: 'Input',
  },
  {
    label: '出口委托单位经办人',
    field: 'entrustCompanyDoperson',
    component: 'Input',
  },
  {
    label: '出口委托单位电话传真',
    field: 'entrustCompanyPhoneorfax',
    component: 'Input',
  },
  {
    label: '是否通过(审批)',
    field: 'bePass',
    component: 'InputNumber',
  },
  {
    label: '经办人',
    field: 'doPerson',
    component: 'Input',
  },
  {
    label: '经办日期',
    field: 'doDate',
    component: 'DatePicker',
  },
  {
    label: '来源',
    field: 'requestSource',
    component: 'InputNumber',
  },
  {
    label: '新增日期',
    field: 'insertDate',
    component: 'DatePicker',
  },
  {
    label: '使用国家',
    field: 'nuclideReceiveCountry',
    component: 'JDictSelectTag',
    componentProps:{
        dictCode:""
     },
  },
  {
    label: '审批日期',
    field: 'approvalDate',
    component: 'DatePicker',
  },
  {
    label: '审批人',
    field: 'approvalPerson',
    component: 'Input',
  },
  {
    label: '撤销理由',
    field: 'revokeReason',
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
