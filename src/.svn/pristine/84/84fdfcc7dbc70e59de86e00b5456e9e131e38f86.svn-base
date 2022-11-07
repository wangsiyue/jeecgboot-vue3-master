import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
import {JVxeTypes,JVxeColumn} from '/@/components/jeecg/JVxeTable/types'
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '项目名称',
    align:"center",
    dataIndex: 'xmmc'
   },
   {
    title: '地点',
    align:"center",
    dataIndex: 'dd'
   },
   {
    title: '日期',
    align:"center",
    dataIndex: 'jcsj'
   },
   {
    title: '天气',
    align:"center",
    dataIndex: 'tq'
   },
   {
    title: '风速',
    align:"center",
    dataIndex: 'fs'
   },
   {
    title: '仪器型号与编号',
    align:"center",
    dataIndex: 'clyq'
   },
   {
    title: '刻度系数',
    align:"center",
    dataIndex: 'yqxh'
   },
   {
    title: '效率因子',
    align:"center",
    dataIndex: 'yqbh'
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
    dataIndex: 'jhrq',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
   },
   {
    title: '复核人',
    align:"center",
    dataIndex: 'fhr'
   },
   {
    title: '分析人',
    align:"center",
    dataIndex: 'fxr'
   },
   {
    title: '分析日期',
    align:"center",
    dataIndex: 'fxrq'
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
      label: "项目名称",
      field: "xmmc",
      component: 'Input',
      colProps: {span: 6},
 	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '项目名称',
    field: 'xmmc',
    component: 'Input',
  },
  {
    label: '地点',
    field: 'dd',
    component: 'Input',
  },
  {
    label: '日期',
    field: 'jcsj',
    component: 'Input',
  },
  {
    label: '天气',
    field: 'tq',
    component: 'Input',
  },
  {
    label: '风速',
    field: 'fs',
    component: 'Input',
  },
  {
    label: '仪器型号与编号',
    field: 'clyq',
    component: 'Input',
  },
  {
    label: '刻度系数',
    field: 'yqxh',
    component: 'Input',
  },
  {
    label: '效率因子',
    field: 'yqbh',
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
    component: 'DatePicker',
  },
  {
    label: '复核人',
    field: 'fhr',
    component: 'Input',
  },
  {
    label: '分析人',
    field: 'fxr',
    component: 'Input',
  },
  {
    label: '分析日期',
    field: 'fxrq',
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
//子表单数据
//子表表格配置
export const rmhnYsZzjlDetail2Columns: JVxeColumn[] = [
    {
      title: '测点简述',
      key: 'cdjs',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '读数值',
      key: 'dsz',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '测量值',
      key: 'clz',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '备注',
      key: 'bz',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
  ]
export const rmhnYsZzjlDetail1Columns: JVxeColumn[] = [
    {
      title: '点位名',
      key: 'dwm',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '测量值1',
      key: 'clz1',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '测量值2',
      key: 'clz2',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '测量值3',
      key: 'clz3',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '测量值4',
      key: 'clz4',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '测量值5',
      key: 'clz5',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '测量值6',
      key: 'clz6',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '测量值7',
      key: 'clz7',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '测量值8',
      key: 'clz8',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '测量值9',
      key: 'clz9',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '测量值10',
      key: 'clz10',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
  ]


/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
// 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}