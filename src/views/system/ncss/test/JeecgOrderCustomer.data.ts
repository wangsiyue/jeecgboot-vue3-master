import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '客户名',
    align:"center",
    dataIndex: 'name'
   },
   {
    title: '性别',
    align:"center",
    dataIndex: 'sex_dictText'
   },
   {
    title: '身份证号码',
    align:"center",
    dataIndex: 'idcard'
   },
   {
    title: '身份证扫描件',
    align:"center",
    dataIndex: 'idcardPic'
   },
   {
    title: '电话1',
    align:"center",
    dataIndex: 'telphone'
   },
   {
    title: '外键',
    align:"center",
    dataIndex: 'orderId'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
	{
      label: "客户名",
      field: 'name',
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "性别",
      field: 'sex',
      component: 'JDictSelectTag',
      componentProps:{
      },
      colProps: {span: 6},
 	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '客户名',
    field: 'name',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入客户名!'},
          ];
     },
  },
  {
    label: '性别',
    field: 'sex',
    component: 'JDictSelectTag',
    componentProps:{
        dictCode:""
     },
  },
  {
    label: '身份证号码',
    field: 'idcard',
    component: 'Input',
  },
  {
    label: '身份证扫描件',
    field: 'idcardPic',
    component: 'Input',
  },
  {
    label: '电话1',
    field: 'telphone',
    component: 'Input',
  },
  {
    label: '外键',
    field: 'orderId',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入外键!'},
          ];
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