import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '区域',
    align:"center",
    dataIndex: 'region'
   },
   {
    title: '实验室房间号',
    align:"center",
    dataIndex: 'roomNumber'
   },
   {
    title: '实验室名称',
    align:"center",
    dataIndex: 'laboratoryName'
   },
   {
    title: '主要仪器设备',
    align:"center",
    dataIndex: 'equipment'
   },
   {
    title: '负责人',
    align:"center",
    dataIndex: 'personLiable'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
	{
      label: "区域",
      field: 'region',
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "实验室房间号",
      field: 'roomNumber',
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "实验室名称",
      field: 'laboratoryName',
      component: 'Input',
      colProps: {span: 6},
 	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '区域',
    field: 'region',
    component: 'Input',
  },
  {
    label: '实验室房间号',
    field: 'roomNumber',
    component: 'Input',
  },
  {
    label: '实验室名称',
    field: 'laboratoryName',
    component: 'Input',
  },
  {
    label: '主要仪器设备',
    field: 'equipment',
    component: 'Input',
  },
  {
    label: '负责人',
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