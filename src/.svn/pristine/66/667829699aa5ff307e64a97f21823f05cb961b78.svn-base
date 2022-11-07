import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '任务名称',
    align:"center",
    dataIndex: 'rwmc'
   },
   {
    title: '样品名称',
    align:"center",
    dataIndex: 'ypmc'
   },
   {
    title: '样品编号',
    align:"center",
    dataIndex: 'ypbh'
   },
   {
    title: '仪器名称',
    align:"center",
    dataIndex: 'yqmc'
   },
   {
    title: '仪器编号',
    align:"center",
    dataIndex: 'yqbh'
   },
   {
    title: '样品分析日期',
    align:"center",
    dataIndex: 'ypfxrq'
   },
   {
    title: '校正因子',
    align:"center",
    dataIndex: 'jzyz'
   },
   {
    title: '样品体积',
    align:"center",
    dataIndex: 'yptj'
   },
   {
    title: '备注',
    align:"center",
    dataIndex: 'bz'
   },
   {
    title: '分析人',
    align:"center",
    dataIndex: 'fxr'
   },
   {
    title: '校核人',
    align:"center",
    dataIndex: 'jhr'
   },
   {
    title: '校核日期',
    align:"center",
    dataIndex: 'jhrq',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
   },
   {
    title: '本底计数时间',
    align:"center",
    dataIndex: 'bdjssj'
   },
   {
    title: '本底计数率',
    align:"center",
    dataIndex: 'bdjsl'
   },
   {
    title: '分离时刻',
    align:"center",
    dataIndex: 'flsk'
   },
   {
    title: '测量时刻',
    align:"center",
    dataIndex: 'clsk'
   },
   {
    title: '衰变校正',
    align:"center",
    dataIndex: 'sbjz'
   },
   {
    title: '样品计数时间',
    align:"center",
    dataIndex: 'ypjssj'
   },
   {
    title: '样品总计数率',
    align:"center",
    dataIndex: 'ypzjsl'
   },
   {
    title: '铅-210比活度',
    align:"center",
    dataIndex: 'bhd'
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
      label: "任务名称",
      field: 'rwmc',
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "样品名称",
      field: 'ypmc',
      component: 'Input',
      colProps: {span: 6},
 	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '任务名称',
    field: 'rwmc',
    component: 'Input',
  },
  {
    label: '样品名称',
    field: 'ypmc',
    component: 'Input',
  },
  {
    label: '样品编号',
    field: 'ypbh',
    component: 'Input',
  },
  {
    label: '仪器名称',
    field: 'yqmc',
    component: 'Input',
  },
  {
    label: '仪器编号',
    field: 'yqbh',
    component: 'Input',
  },
  {
    label: '样品分析日期',
    field: 'ypfxrq',
    component: 'Input',
  },
  {
    label: '校正因子',
    field: 'jzyz',
    component: 'Input',
  },
  {
    label: '样品体积',
    field: 'yptj',
    component: 'Input',
  },
  {
    label: '备注',
    field: 'bz',
    component: 'Input',
  },
  {
    label: '分析人',
    field: 'fxr',
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
    component: 'DatePicker',
  },
  {
    label: '本底计数时间',
    field: 'bdjssj',
    component: 'Input',
  },
  {
    label: '本底计数率',
    field: 'bdjsl',
    component: 'Input',
  },
  {
    label: '分离时刻',
    field: 'flsk',
    component: 'Input',
  },
  {
    label: '测量时刻',
    field: 'clsk',
    component: 'Input',
  },
  {
    label: '衰变校正',
    field: 'sbjz',
    component: 'Input',
  },
  {
    label: '样品计数时间',
    field: 'ypjssj',
    component: 'Input',
  },
  {
    label: '样品总计数率',
    field: 'ypzjsl',
    component: 'Input',
  },
  {
    label: '铅-210比活度',
    field: 'bhd',
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