import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '任务名称',
    align:"center",
    dataIndex: 'taskName'
   },
   {
    title: '任务内容',
    align:"center",
    dataIndex: 'taskContent'
   },
   {
    title: '任务结束日期',
    align:"center",
    dataIndex: 'endDate'
   },
   {
    title: '任务完成日期',
    align:"center",
    dataIndex: 'completionDate'
   },
   {
    title: '任务状态',
    align:"center",
    dataIndex: 'state'
   },
   {
    title: '负责人',
    align:"center",
    dataIndex: 'person'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
	{
      label: "任务名称",
      field: 'taskName',
      component: 'Input',
      colProps: {span: 6},
 	},
     {
      label: "任务完成日期",
      field: "completionDate",
      component: 'RangePicker',
      componentProps: {
          showTime:true
      },
      colProps: {span: 6},
	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '任务名称',
    field: 'taskName',
    component: 'Input',
  },
  {
    label: '任务内容',
    field: 'taskContent',
    component: 'Input',
  },
  {
    label: '任务结束日期',
    field: 'endDate',
    component: 'DatePicker',
    componentProps: {
       showTime: true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
     },
  },
  {
    label: '任务完成日期',
    field: 'completionDate',
    component: 'DatePicker',
    componentProps: {
       showTime: true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
     },
  },
  {
    label: '任务状态',
    field: 'state',
    component: 'Input',
  },
  {
    label: '负责人',
    field: 'person',
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