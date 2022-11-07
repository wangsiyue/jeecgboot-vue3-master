import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '时间',
    align:"center",
    dataIndex: 'comparisonTime'
   },
   {
    title: '范围',
    align:"center",
    dataIndex: 'comparisonRange'
   },
   {
    title: '内容',
    align:"center",
    dataIndex: 'comparisonContent'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
	{
      label: "时间",
      field: 'comparisonTime',
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "范围",
      field: 'comparisonRange',
      component: 'Input',
      colProps: {span: 6},
 	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '时间',
    field: 'comparisonTime',
    component: 'Input',
  },
  {
    label: '范围',
    field: 'comparisonRange',
    component: 'Input',
  },
  {
    label: '内容',
    field: 'comparisonContent',
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