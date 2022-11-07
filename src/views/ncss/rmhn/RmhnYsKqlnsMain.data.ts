import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
import {JVxeTypes,JVxeColumn} from '/@/components/jeecg/JVxeTable/types'
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '液闪型号及编号',
    align:"center",
    dataIndex: 'code'
   },
   {
    title: '任务名称',
    align:"center",
    dataIndex: 'name'
   },
   {
    title: '测量室温度',
    align:"center",
    dataIndex: 'clswd'
   },
   {
    title: '加入闪烁液类型即体积',
    align:"center",
    dataIndex: 'tj'
   },
   {
    title: '计数时间',
    align:"center",
    dataIndex: 'jssj'
   },
   {
    title: '计数方式',
    align:"center",
    dataIndex: 'jsfs'
   },
   {
    title: '本底计数率',
    align:"center",
    dataIndex: 'bdjsl'
   },
   {
    title: '探测效率',
    align:"center",
    dataIndex: 'tcxl'
   },
   {
    title: '探测下限',
    align:"center",
    dataIndex: 'tcxx'
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
      label: "液闪型号及编号",
      field: "code",
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "任务名称",
      field: "name",
      component: 'Input',
      colProps: {span: 6},
 	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '液闪型号及编号',
    field: 'code',
    component: 'Input',
  },
  {
    label: '任务名称',
    field: 'name',
    component: 'Input',
  },
  {
    label: '测量室温度',
    field: 'clswd',
    component: 'Input',
  },
  {
    label: '加入闪烁液类型即体积',
    field: 'tj',
    component: 'Input',
  },
  {
    label: '计数时间',
    field: 'jssj',
    component: 'Input',
  },
  {
    label: '计数方式',
    field: 'jsfs',
    component: 'Input',
  },
  {
    label: '本底计数率',
    field: 'bdjsl',
    component: 'Input',
  },
  {
    label: '探测效率',
    field: 'tcxl',
    component: 'Input',
  },
  {
    label: '探测下限',
    field: 'tcxx',
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
export const rmhnYsKqlnsDetailColumns: JVxeColumn[] = [
    {
      title: '采样地点',
      key: 'cydd',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '样品编号',
      key: 'ypbh',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '采样日期',
      key: 'cyrq',
      type: JVxeTypes.date,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '制样日期',
      key: 'zyrq',
      type: JVxeTypes.date,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '采样温度（℃）',
      key: 'cywd',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '相对湿度（%）',
      key: 'xdsd',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '水蒸气密度（g/m3）',
      key: 'szqmd',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '电导率（μs/cm）',
      key: 'ddll',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '测量日期',
      key: 'clrq',
      type: JVxeTypes.date,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '测量用水量（g）',
      key: 'clysl',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '计数率（cpm）',
      key: 'jsl',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '水中氚活度浓度（Bq/L）',
      key: 'szchdnd',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '气氚活度浓度(mBqm3)',
      key: 'qcndhd',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '备注',
      key: 'pdftp',
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