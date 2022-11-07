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
    title: '任务编号',
    align:"center",
    dataIndex: 'rwbh'
   },
   {
    title: '存档编号',
    align:"center",
    dataIndex: 'cdbh'
   },
   {
    title: '采样地点',
    align:"center",
    dataIndex: 'cydd'
   },
   {
    title: '经纬度',
    align:"center",
    dataIndex: 'jwd'
   },
   {
    title: '采样器型号',
    align:"center",
    dataIndex: 'cyqxh'
   },
   {
    title: '采样器编号',
    align:"center",
    dataIndex: 'cyqbh'
   },
   {
    title: '备注',
    align:"center",
    dataIndex: 'bz'
   },
   {
    title: '换算公式',
    align:"center",
    dataIndex: 'hsgs'
   },
   {
    title: '采样人',
    align:"center",
    dataIndex: 'cyr'
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
    title: '日期',
    align:"center",
    dataIndex: 'rq',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
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
	{
      label: "任务编号",
      field: "rwbh",
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
    label: '任务编号',
    field: 'rwbh',
    component: 'Input',
  },
  {
    label: '存档编号',
    field: 'cdbh',
    component: 'Input',
  },
  {
    label: '采样地点',
    field: 'cydd',
    component: 'Input',
  },
  {
    label: '经纬度',
    field: 'jwd',
    component: 'Input',
  },
  {
    label: '采样器型号',
    field: 'cyqxh',
    component: 'Input',
  },
  {
    label: '采样器编号',
    field: 'cyqbh',
    component: 'Input',
  },
  {
    label: '备注',
    field: 'bz',
    component: 'Input',
  },
  {
    label: '换算公式',
    field: 'hsgs',
    component: 'Input',
  },
  {
    label: '采样人',
    field: 'cyr',
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
    label: '日期',
    field: 'rq',
    component: 'DatePicker',
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
export const rmhnYsKqypcjdDetailColumns: JVxeColumn[] = [
    {
      title: '样品名称',
      key: 'ypmc',
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
      title: '滤膜序号',
      key: 'lmxh',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '采样开始时间',
      key: 'cykssj',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '采样结束时间',
      key: 'cyjssj',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '累积采样时间',
      key: 'ljcysj',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '采样体积',
      key: 'cytj',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '标态体积',
      key: 'bttj',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '风 向',
      key: 'fx',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '风 速(m/s)',
      key: 'fs',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '温度（℃）',
      key: 'wd',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '湿度（%）',
      key: 'sd',
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
    {
      title: '气压',
      key: 'qy',
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