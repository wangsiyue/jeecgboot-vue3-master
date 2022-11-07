import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '序号',
    align:"center",
    dataIndex: 'seq'
   },
   {
    title: '编号',
    align:"center",
    dataIndex: 'code'
   },
   {
    title: '名称',
    align:"center",
    dataIndex: 'name'
   },
   {
    title: '模板文件',
    align:"center",
    dataIndex: 'url',
    slots: { customRender: 'fileSlot' },
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
	{
      label: "编号",
      field: 'code',
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "名称",
      field: 'name',
      component: 'Input',
      colProps: {span: 6},
 	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '序号',
    field: 'seq',
    component: 'InputNumber',
  },
  {
    label: '编号',
    field: 'code',
    component: 'Input',
  },
  {
    label: '名称',
    field: 'name',
    component: 'Input',
  },
  {
    label: '模板文件',
    field: 'url',
    component: 'JUpload',
    componentProps:{
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