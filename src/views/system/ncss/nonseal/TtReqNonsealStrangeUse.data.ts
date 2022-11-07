import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '申请文号',
    align:"center",
    dataIndex: 'requestNo'
   },
   {
    title: '受理文号',
    align:"center",
    dataIndex: 'responseNo'
   },
   {
    title: '批准文号',
    align:"center",
    dataIndex: 'passNo'
   },
   {
    title: '移出地单位名称',
    align:"center",
    dataIndex: 'companyName'
   },
   {
    title: '移出地单位许可证',
    align:"center",
    dataIndex: 'companyLicenseno'
   },
   {
    title: '异地使用作业',
    align:"center",
    dataIndex: 'strangeUseContent'
   },
   {
    title: '计划作业开始时间',
    align:"center",
    dataIndex: 'inStartDate',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
   },
   {
    title: '计划作业结束时间',
    align:"center",
    dataIndex: 'inEndDate',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
   },
   {
    title: '接受单位名称',
    align:"center",
    dataIndex: 'inCompanyName'
   },
   {
    title: '经办人',
    align:"center",
    dataIndex: 'companyDoperson'
   },
   {
    title: '经办人电话',
    align:"center",
    dataIndex: 'companyDopersonPhone'
   },
   {
    title: '审批单状态',
    align:"center",
    dataIndex: 'responseStatus_dictText'
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
    title: '移入地单位区域编码',
    align:"center",
    dataIndex: 'regionCode1_dictText'
   },
   {
    title: '移出地单位区域编码',
    align:"center",
    dataIndex: 'regionCode2_dictText'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
	{
      label: "申请文号",
      field: 'requestNo',
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "受理文号",
      field: 'responseNo',
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "批准文号",
      field: 'passNo',
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "接受单位名称",
      field: 'inCompanyName',
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "审批单状态",
      field: 'responseStatus',
      component: 'JDictSelectTag',
      componentProps:{
      },
      colProps: {span: 6},
 	},
	{
      label: "新增日期",
      field: 'insertDate',
      component: 'DatePicker',
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
    label: '受理文号',
    field: 'responseNo',
    component: 'Input',
  },
  {
    label: '批准文号',
    field: 'passNo',
    component: 'Input',
  },
  {
    label: '移出地单位名称',
    field: 'companyName',
    component: 'Input',
  },
  {
    label: '移出地单位许可证',
    field: 'companyLicenseno',
    component: 'Input',
  },
  {
    label: '移出地单位通信地址',
    field: 'companyContactaddr',
    component: 'Input',
  },
  {
    label: '移出地单位邮编',
    field: 'companyPost',
    component: 'Input',
  },
  {
    label: '辐射安全负责人',
    field: 'radialSafePrincipal',
    component: 'Input',
  },
  {
    label: '辐射安全负责人电话',
    field: 'radialSafeprincipalPhone',
    component: 'Input',
  },
  {
    label: '项目负责人',
    field: 'projectPrincipal',
    component: 'Input',
  },
  {
    label: '项目负责人电话',
    field: 'projectPrincipalPhone',
    component: 'Input',
  },
  {
    label: '异地使用作业',
    field: 'strangeUseContent',
    component: 'Input',
  },
  {
    label: '作业详细地址',
    field: 'inDetailAddr',
    component: 'Input',
  },
  {
    label: '计划作业开始时间',
    field: 'inStartDate',
    component: 'DatePicker',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入计划作业开始时间!'},
          ];
     },
  },
  {
    label: '计划作业结束时间',
    field: 'inEndDate',
    component: 'DatePicker',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入计划作业结束时间!'},
          ];
     },
  },
  {
    label: '接受单位名称',
    field: 'inCompanyName',
    component: 'Input',
  },
  {
    label: '经办人',
    field: 'companyDoperson',
    component: 'Input',
  },
  {
    label: '经办人电话',
    field: 'companyDopersonPhone',
    component: 'Input',
  },
  {
    label: '审批单状态',
    field: 'responseStatus',
    component: 'JDictSelectTag',
    componentProps:{
        dictCode:""
     },
  },
  {
    label: '移入地备案标示',
    field: 'beinBackup',
    component: 'Input',
  },
  {
    label: '移入地备案人',
    field: 'inbackupDoperson',
    component: 'Input',
  },
  {
    label: '移入地备案时间',
    field: 'inbackupDate',
    component: 'DatePicker',
  },
  {
    label: '移出地备案标示',
    field: 'beoutBackup',
    component: 'Input',
  },
  {
    label: '移出地备案人',
    field: 'outbackDoperson',
    component: 'Input',
  },
  {
    label: '移出地备案时间',
    field: 'outbackupDate',
    component: 'DatePicker',
  },
  {
    label: '新增日期',
    field: 'insertDate',
    component: 'DatePicker',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入新增日期!'},
          ];
     },
  },
  {
    label: '移入地单位区域编码',
    field: 'regionCode1',
    component: 'JDictSelectTag',
    componentProps:{
        dictCode:""
     },
  },
  {
    label: '移出地单位区域编码',
    field: 'regionCode2',
    component: 'JDictSelectTag',
    componentProps:{
        dictCode:""
     },
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