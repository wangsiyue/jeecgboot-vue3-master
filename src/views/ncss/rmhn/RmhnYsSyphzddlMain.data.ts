import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
import {JVxeTypes,JVxeColumn} from '/@/components/jeecg/JVxeTable/types'
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '测量仪器',
    align:"center",
    dataIndex: 'clyq'
   },
   {
    title: '仪器型号',
    align:"center",
    dataIndex: 'yqxh'
   },
   {
    title: '仪器编号',
    align:"center",
    dataIndex: 'yqbh'
   },
   {
    title: '计量检定证书编号',
    align:"center",
    dataIndex: 'jljdzsbh'
   },
   {
    title: '有效期至',
    align:"center",
    dataIndex: 'yxqz',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
   },
   {
    title: '检验依据',
    align:"center",
    dataIndex: 'jyyj'
   },
   {
    title: '环境温度T',
    align:"center",
    dataIndex: 'hjwd'
   },
   {
    title: '环境湿度H',
    align:"center",
    dataIndex: 'hjsd'
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
      label: "测量仪器",
      field: "clyq",
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "仪器型号",
      field: "yqxh",
      component: 'Input',
      colProps: {span: 6},
 	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '测量仪器',
    field: 'clyq',
    component: 'Input',
  },
  {
    label: '仪器型号',
    field: 'yqxh',
    component: 'Input',
  },
  {
    label: '仪器编号',
    field: 'yqbh',
    component: 'Input',
  },
  {
    label: '计量检定证书编号',
    field: 'jljdzsbh',
    component: 'Input',
  },
  {
    label: '有效期至',
    field: 'yxqz',
    component: 'DatePicker',
  },
  {
    label: '检验依据',
    field: 'jyyj',
    component: 'Input',
  },
  {
    label: '环境温度T',
    field: 'hjwd',
    component: 'Input',
  },
  {
    label: '环境湿度H',
    field: 'hjsd',
    component: 'Input',
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
export const rmhnYsSyphzddlDetailColumns: JVxeColumn[] = [
    {
      title: '编号',
      key: 'bh',
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
      title: 'ph',
      key: 'ph',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '电导率(μs/cm)',
      key: 'ddll',
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


/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
// 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}