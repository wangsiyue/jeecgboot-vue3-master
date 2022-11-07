import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '文件编号',
    align:"center",
    dataIndex: 'code'
   },
   {
    title: '批准日期',
    align:"center",
    dataIndex: 'pzDate'
   },
   {
    title: '颁布日期',
    align:"center",
    dataIndex: 'bbDate'
   },
   {
    title: '编写',
    align:"center",
    dataIndex: 'bx'
   },
   {
    title: '审核',
    align:"center",
    dataIndex: 'sh'
   },
   {
    title: '审定',
    align:"center",
    dataIndex: 'sd'
   },
   {
    title: '批准',
    align:"center",
    dataIndex: 'pz'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
	{
      label: "文件编号",
      field: 'code',
      component: 'Input',
      colProps: {span: 6},
 	},
     {
      label: "批准日期",
      field: "pzDate",
      component: 'Input', //TODO 范围查询
      colProps: {span: 6},
	},
     {
      label: "颁布日期",
      field: "bbDate",
      component: 'Input', //TODO 范围查询
      colProps: {span: 6},
	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '文件编号',
    field: 'code',
    component: 'Input',
  },
  {
    label: '批准日期',
    field: 'pzDate',
    component: 'Input',
  },
  {
    label: '颁布日期',
    field: 'bbDate',
    component: 'Input',
  },
  {
    label: '编写',
    field: 'bx',
    component: 'Input',
  },
  {
    label: '审核',
    field: 'sh',
    component: 'Input',
  },
  {
    label: '审定',
    field: 'sd',
    component: 'Input',
  },
  {
    label: '批准',
    field: 'pz',
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