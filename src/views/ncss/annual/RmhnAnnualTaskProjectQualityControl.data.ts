import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '质控内容',
    align:"center",
    dataIndex: 'controlContent'
   },
   {
    title: '监测项目',
    align:"center",
    dataIndex: 'inspectionProject'
   },
   {
    title: '质控频次',
    align:"center",
    dataIndex: 'controlFrequency'
   },
   {
    title: '质控时间',
    align:"center",
    dataIndex: 'controlTime'
   },
   {
    title: '责任人',
    align:"center",
    dataIndex: 'personLiable'
   },
   {
    title: '备注',
    align:"center",
    dataIndex: 'remarks'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
	{
      label: "质控内容",
      field: 'controlContent',
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
    label: '质控内容',
    field: 'controlContent',
    component: 'Input',
  },
  {
    label: '监测项目',
    field: 'inspectionProject',
    component: 'Input',
  },
  {
    label: '质控频次',
    field: 'controlFrequency',
    component: 'Input',
  },
  {
    label: '质控时间',
    field: 'controlTime',
    component: 'Input',
  },
  {
    label: '责任人',
    field: 'personLiable',
    component: 'Input',
  },
  {
    label: '备注',
    field: 'remarks',
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