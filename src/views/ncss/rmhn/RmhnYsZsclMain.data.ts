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
    title: '声环境功能区类别',
    align:"center",
    dataIndex: 'shjgnqlb'
   },
   {
    title: '监测时间',
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
    title: '测量仪器型号/编号',
    align:"center",
    dataIndex: 'clyqxh'
   },
   {
    title: '校准仪器型号/编号',
    align:"center",
    dataIndex: 'jzyqxh'
   },
   {
    title: '仪器校准值(测前)',
    align:"center",
    dataIndex: 'yqjzzq'
   },
   {
    title: '仪器校准值（测后）',
    align:"center",
    dataIndex: 'yqjzzh'
   },
   {
    title: '测量工况',
    align:"center",
    dataIndex: 'clgk'
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
    title: '审核人',
    align:"center",
    dataIndex: 'shr'
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
    title: '测量日期',
    align:"center",
    dataIndex: 'clrq',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
   },
   {
    title: '审核日期',
    align:"center",
    dataIndex: 'shrq',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
   },
   {
    title: '备注',
    align:"center",
    dataIndex: 'bz'
   },
   {
    title: '测点示意图',
    align:"center",
    dataIndex: 'cdsyt'
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
    label: '声环境功能区类别',
    field: 'shjgnqlb',
    component: 'Input',
  },
  {
    label: '监测时间',
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
    label: '测量仪器型号/编号',
    field: 'clyqxh',
    component: 'Input',
  },
  {
    label: '校准仪器型号/编号',
    field: 'jzyqxh',
    component: 'Input',
  },
  {
    label: '仪器校准值(测前)',
    field: 'yqjzzq',
    component: 'Input',
  },
  {
    label: '仪器校准值（测后）',
    field: 'yqjzzh',
    component: 'Input',
  },
  {
    label: '测量工况',
    field: 'clgk',
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
    label: '审核人',
    field: 'shr',
    component: 'Input',
  },
  {
    label: '校核日期',
    field: 'jhrq',
    component: 'DatePicker',
  },
  {
    label: '测量日期',
    field: 'clrq',
    component: 'DatePicker',
  },
  {
    label: '审核日期',
    field: 'shrq',
    component: 'DatePicker',
  },
  {
    label: '备注',
    field: 'bz',
    component: 'Input',
  },
  {
    label: '测点示意图',
    field: 'cdsyt',
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
export const rmhnYsZsclDetailColumns: JVxeColumn[] = [
    {
      title: '测点编号',
      key: 'cdbh',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '点位名',
      key: 'dwm',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '测量值昼间',
      key: 'clzzj',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '测量值夜间',
      key: 'clzyj',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '背景测量值昼间',
      key: 'bjclzzj',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '背景测量值夜间',
      key: 'bjclzyj',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '修正昼间',
      key: 'xzzj',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '修正夜间',
      key: 'xzyj',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '主要声源',
      key: 'zysy',
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