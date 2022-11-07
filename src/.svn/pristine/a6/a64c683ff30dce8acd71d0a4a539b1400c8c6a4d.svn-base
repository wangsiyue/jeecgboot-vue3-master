import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
import {JVxeTypes,JVxeColumn} from '/@/components/jeecg/JVxeTable/types'
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '任务名称',
    align:"center",
    dataIndex: 'rwmc'
   },
   {
    title: '室温',
    align:"center",
    dataIndex: 'sw'
   },
   {
    title: '湿度',
    align:"center",
    dataIndex: 'sd'
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
    title: '监测元素',
    align:"center",
    dataIndex: 'jcys'
   },
   {
    title: '监测地点',
    align:"center",
    dataIndex: 'jcdd'
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
    title: '分析日期',
    align:"center",
    dataIndex: 'fxrq',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
   },
   {
    title: '备注',
    align:"center",
    dataIndex: 'ccjl'
   },
   {
    title: '计算公式',
    align:"center",
    dataIndex: 'jsgs'
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
      field: "rwmc",
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
    label: '室温',
    field: 'sw',
    component: 'Input',
  },
  {
    label: '湿度',
    field: 'sd',
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
    label: '监测元素',
    field: 'jcys',
    component: 'Input',
  },
  {
    label: '监测地点',
    field: 'jcdd',
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
    label: '分析日期',
    field: 'fxrq',
    component: 'DatePicker',
  },
  {
    label: '备注',
    field: 'ccjl',
    component: 'Input',
  },
  {
    label: '计算公式',
    field: 'jsgs',
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
export const rmhnYsSyyzxsfgDetailColumns: JVxeColumn[] = [
    {
      title: '编号',
      key: 'bh',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '存贮文件号',
      key: 'czwjh',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '样品名称',
      key: 'ypmc',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '取样量(mL)',
      key: 'qyl',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '定容量(mL)',
      key: 'drl',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '稀释倍数',
      key: 'xsbs',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '空白值',
      key: 'kbz',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '样品净吸光度',
      key: 'ypjxgd',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '样品测量浓度(mg/L)',
      key: 'ypclnd',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '实际浓度(mg/L)',
      key: 'sjnd',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '放射性比活度（Bq/L）',
      key: 'fsxbhd',
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