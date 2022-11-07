import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '监测类别',
    align:"center",
    dataIndex: 'inspectionCategory'
   },
   {
    title: '监测对象',
    align:"center",
    dataIndex: 'inspectionObject'
   },
   {
    title: '监测地点',
    align:"center",
    dataIndex: 'inspectionPlace'
   },
   {
    title: '监测项目',
    align:"center",
    dataIndex: 'inspectionProject'
   },
   {
    title: '监测频次',
    align:"center",
    dataIndex: 'inspectionFrequency'
   },
   {
    title: '采样时间',
    align:"center",
    dataIndex: 'samplingTime'
   },
   {
    title: '质控计划',
    align:"center",
    dataIndex: 'qualityControl'
   },
   {
    title: '报告频次',
    align:"center",
    dataIndex: 'reportingFrequency'
   },
   {
    title: '责任人',
    align:"center",
    dataIndex: 'personLiable'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
	{
      label: "监测类别",
      field: 'inspectionCategory',
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "监测对象",
      field: 'inspectionObject',
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "监测地点",
      field: 'inspectionPlace',
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "责任人",
      field: 'personLiable',
      component: 'Input',
      colProps: {span: 6},
 	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '监测类别',
    field: 'inspectionCategory',
    component: 'Input',
  },
  {
    label: '监测对象',
    field: 'inspectionObject',
    component: 'Input',
  },
  {
    label: '监测地点',
    field: 'inspectionPlace',
    component: 'Input',
  },
  {
    label: '监测项目',
    field: 'inspectionProject',
    component: 'Input',
  },
  {
    label: '监测频次',
    field: 'inspectionFrequency',
    component: 'Input',
  },
  {
    label: '采样时间',
    field: 'samplingTime',
    component: 'Input',
  },
  {
    label: '质控计划',
    field: 'qualityControl',
    component: 'Input',
  },
  {
    label: '报告频次',
    field: 'reportingFrequency',
    component: 'Input',
  },
  {
    label: '责任人',
    field: 'personLiable',
    component: 'Input',
  },
  {
    label: '编写人',
    field: 'prepared',
    component: 'Input',
  },
  {
    label: '审核人',
    field: 'reviewed',
    component: 'Input',
  },
  {
    label: '审定人',
    field: 'approved',
    component: 'Input',
  },
  {
    label: '批准人',
    field: 'ratify',
    component: 'Input',
  },
  {
    label: '状态',
    field: 'state',
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