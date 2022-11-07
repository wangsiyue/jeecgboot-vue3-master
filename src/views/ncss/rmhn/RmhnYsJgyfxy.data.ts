import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: 'N0',
    align:"center",
    dataIndex: 'n0'
   },
   {
    title: 'N1',
    align:"center",
    dataIndex: 'n1'
   },
   {
    title: 'N2',
    align:"center",
    dataIndex: 'n2'
   },
   {
    title: 'Ci（μg/L）',
    align:"center",
    dataIndex: 'ci'
   },
   {
    title: '加入量（μg/L）',
    align:"center",
    dataIndex: 'jrl'
   },
   {
    title: '备注',
    align:"center",
    dataIndex: 'bz'
   },
   {
    title: '统一备注',
    align:"center",
    dataIndex: 'tybz'
   },
   {
    title: '测量人',
    align:"center",
    dataIndex: 'clr'
   },
   {
    title: '校核人',
    align:"center",
    dataIndex: 'jhr'
   },
   {
    title: '校核日期',
    align:"center",
    dataIndex: 'jhrq'
   },
   {
    title: '文件',
    align:"center",
    dataIndex: 'pdftp',
    slots: { customRender: 'fileSlot' },
   },
   {
    title: '上传人',
    align:"center",
    dataIndex: 'scr'
   },
   {
    title: '上传时间',
    align:"center",
    dataIndex: 'scsj',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
	{
      label: "测量人",
      field: 'clr',
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "校核人",
      field: 'jhr',
      component: 'Input',
      colProps: {span: 6},
 	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: 'N0',
    field: 'n0',
    component: 'Input',
  },
  {
    label: 'N1',
    field: 'n1',
    component: 'Input',
  },
  {
    label: 'N2',
    field: 'n2',
    component: 'Input',
  },
  {
    label: 'Ci（μg/L）',
    field: 'ci',
    component: 'Input',
  },
  {
    label: '加入量（μg/L）',
    field: 'jrl',
    component: 'Input',
  },
  {
    label: '备注',
    field: 'bz',
    component: 'Input',
  },
  {
    label: '统一备注',
    field: 'tybz',
    component: 'Input',
  },
  {
    label: '测量人',
    field: 'clr',
    component: 'Input',
  },
  {
    label: '校核人',
    field: 'jhr',
    component: 'Input',
  },
  {
    label: '校核日期',
    field: 'jhrq',
    component: 'Input',
  },
  {
    label: '文件',
    field: 'pdftp',
    component: 'JUpload',
    componentProps:{
     },
  },
  {
    label: '上传人',
    field: 'scr',
    component: 'Input',
  },
  {
    label: '上传时间',
    field: 'scsj',
    component: 'DatePicker',
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