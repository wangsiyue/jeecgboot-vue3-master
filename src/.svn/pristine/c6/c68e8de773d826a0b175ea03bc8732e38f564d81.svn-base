import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '测量时长',
    align:"center",
    dataIndex: 'clsc'
   },
   {
    title: '本底总计数',
    align:"center",
    dataIndex: 'bdzjs'
   },
   {
    title: '计数率',
    align:"center",
    dataIndex: 'jsl'
   },
   {
    title: '测量人/日期',
    align:"center",
    dataIndex: 'clr'
   },
   {
    title: '校核人/日期',
    align:"center",
    dataIndex: 'jhr'
   },
   {
    title: '峰位P',
    align:"center",
    dataIndex: 'fwp'
   },
   {
    title: 'PP',
    align:"center",
    dataIndex: 'pp'
   },
   {
    title: '净峰面积',
    align:"center",
    dataIndex: 'jfmj'
   },
   {
    title: '峰效率',
    align:"center",
    dataIndex: 'fxl'
   },
   {
    title: '峰效率均值',
    align:"center",
    dataIndex: 'fxljz'
   },
   {
    title: '峰效率标准差',
    align:"center",
    dataIndex: 'fxlbzc'
   },
   {
    title: 'FWHM',
    align:"center",
    dataIndex: 'fwhm'
   },
   {
    title: '半高宽均值',
    align:"center",
    dataIndex: 'bgkjz'
   },
   {
    title: '半高宽标准差',
    align:"center",
    dataIndex: 'bgkbzc'
   },
   {
    title: '峰顶计数',
    align:"center",
    dataIndex: 'fdjs'
   },
   {
    title: '总计数',
    align:"center",
    dataIndex: 'zjs'
   },
   {
    title: '总道数',
    align:"center",
    dataIndex: 'zds'
   },
   {
    title: '峰康比',
    align:"center",
    dataIndex: 'fkb'
   },
   {
    title: '峰康比均值',
    align:"center",
    dataIndex: 'fkbjz'
   },
   {
    title: '峰康比标准差',
    align:"center",
    dataIndex: 'fkbbzz'
   },
   {
    title: '测量人/日期2',
    align:"center",
    dataIndex: 'clr2'
   },
   {
    title: '校核人/日期2',
    align:"center",
    dataIndex: 'jhr2'
   },
   {
    title: '净面积',
    align:"center",
    dataIndex: 'jmj'
   },
   {
    title: '效率值',
    align:"center",
    dataIndex: 'xlz'
   },
   {
    title: '测量人/日期3',
    align:"center",
    dataIndex: 'clr3'
   },
   {
    title: '校核人/日期3',
    align:"center",
    dataIndex: 'jhr3'
   },
   {
    title: '本底散点图',
    align:"center",
    dataIndex: 'bdsdt'
   },
   {
    title: '单次效率值散点图',
    align:"center",
    dataIndex: 'dcxlzsdt'
   },
   {
    title: '连续12个月分辨率散点图',
    align:"center",
    dataIndex: 'lxsdt'
   },
   {
    title: '连续12个月峰康比散点图',
    align:"center",
    dataIndex: 'lxfkbsdt'
   },
   {
    title: '效率柱状图',
    align:"center",
    dataIndex: 'xlzzt'
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
      label: "测量时长",
      field: 'clsc',
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "本底总计数",
      field: 'bdzjs',
      component: 'Input',
      colProps: {span: 6},
 	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '测量时长',
    field: 'clsc',
    component: 'Input',
  },
  {
    label: '本底总计数',
    field: 'bdzjs',
    component: 'Input',
  },
  {
    label: '计数率',
    field: 'jsl',
    component: 'Input',
  },
  {
    label: '测量人/日期',
    field: 'clr',
    component: 'Input',
  },
  {
    label: '校核人/日期',
    field: 'jhr',
    component: 'Input',
  },
  {
    label: '峰位P',
    field: 'fwp',
    component: 'Input',
  },
  {
    label: 'PP',
    field: 'pp',
    component: 'Input',
  },
  {
    label: '净峰面积',
    field: 'jfmj',
    component: 'Input',
  },
  {
    label: '峰效率',
    field: 'fxl',
    component: 'Input',
  },
  {
    label: '峰效率均值',
    field: 'fxljz',
    component: 'Input',
  },
  {
    label: '峰效率标准差',
    field: 'fxlbzc',
    component: 'Input',
  },
  {
    label: 'FWHM',
    field: 'fwhm',
    component: 'Input',
  },
  {
    label: '半高宽均值',
    field: 'bgkjz',
    component: 'Input',
  },
  {
    label: '半高宽标准差',
    field: 'bgkbzc',
    component: 'Input',
  },
  {
    label: '峰顶计数',
    field: 'fdjs',
    component: 'Input',
  },
  {
    label: '总计数',
    field: 'zjs',
    component: 'Input',
  },
  {
    label: '总道数',
    field: 'zds',
    component: 'Input',
  },
  {
    label: '峰康比',
    field: 'fkb',
    component: 'Input',
  },
  {
    label: '峰康比均值',
    field: 'fkbjz',
    component: 'Input',
  },
  {
    label: '峰康比标准差',
    field: 'fkbbzz',
    component: 'Input',
  },
  {
    label: '测量人/日期2',
    field: 'clr2',
    component: 'Input',
  },
  {
    label: '校核人/日期2',
    field: 'jhr2',
    component: 'Input',
  },
  {
    label: '净面积',
    field: 'jmj',
    component: 'Input',
  },
  {
    label: '效率值',
    field: 'xlz',
    component: 'Input',
  },
  {
    label: '测量人/日期3',
    field: 'clr3',
    component: 'Input',
  },
  {
    label: '校核人/日期3',
    field: 'jhr3',
    component: 'Input',
  },
  {
    label: '本底散点图',
    field: 'bdsdt',
    component: 'Input',
  },
  {
    label: '单次效率值散点图',
    field: 'dcxlzsdt',
    component: 'Input',
  },
  {
    label: '连续12个月分辨率散点图',
    field: 'lxsdt',
    component: 'Input',
  },
  {
    label: '连续12个月峰康比散点图',
    field: 'lxfkbsdt',
    component: 'Input',
  },
  {
    label: '效率柱状图',
    field: 'xlzzt',
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