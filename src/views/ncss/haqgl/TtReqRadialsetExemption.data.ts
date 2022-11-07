import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '申请编号',
    align:"center",
    dataIndex: 'requestNo'
   },
   {
    title: '受理编号',
    align:"center",
    dataIndex: 'responseNo',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
   },
   {
    title: '批准文号',
    align:"center",
    dataIndex: 'passNo'
   },
   {
    title: '许可证号',
    align:"center",
    dataIndex: 'licenseNo'
   },
   {
    title: '单位名称',
    align:"center",
    dataIndex: 'companyName'
   },
   {
    title: '注册地址',
    align:"center",
    dataIndex: 'registAddr'
   },
   {
    title: '许可证到期时间',
    align:"center",
    dataIndex: 'licenseEnddate',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
   },


];
//查询数据
export const searchFormSchema: FormSchema[] = [
	{
      label: "受理编号",
      field: 'responseNo',
      component: 'DatePicker',
      colProps: {span: 6},
 	},
	{
      label: "许可证号",
      field: 'licenseNo',
      component: 'Input',
      colProps: {span: 6},
 	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '申请编号',
    field: 'requestNo',
    component: 'Input',
  },
  {
    label: '受理编号',
    field: 'responseNo',
    component: 'DatePicker',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入受理编号!'},
          ];
     },
  },
  {
    label: '批准文号',
    field: 'passNo',
    component: 'Input',
  },
  {
    label: '许可证号',
    field: 'licenseNo',
    component: 'Input',
  },
  {
    label: '单位名称',
    field: 'companyName',
    component: 'Input',
  },
  {
    label: '注册地址',
    field: 'registAddr',
    component: 'Input',
  },
  {
    label: '许可证到期时间',
    field: 'licenseEnddate',
    component: 'DatePicker',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入许可证到期时间!'},
          ];
     },
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