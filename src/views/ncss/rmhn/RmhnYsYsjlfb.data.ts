import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '样品/测点描述',
    align:"center",
    dataIndex: 'ypcdms'
   },
   {
    title: '测量方法标准',
    align:"center",
    dataIndex: 'clffbz'
   },
   {
    title: '仪器状态',
    align:"center",
    dataIndex: 'yqzt'
   },
   {
    title: '测量日期',
    align:"center",
    dataIndex: 'clrq'
   },
   {
    title: '检定日期',
    align:"center",
    dataIndex: 'jdrq'
   },
   {
    title: '计算过程',
    align:"center",
    dataIndex: 'jsgc'
   },
   {
    title: '不确定度',
    align:"center",
    dataIndex: 'bqdd'
   },
   {
    title: '测量结果',
    align:"center",
    dataIndex: 'cljg'
   },
   {
    title: '注',
    align:"center",
    dataIndex: 'zhu'
   },
   {
    title: '结论',
    align:"center",
    dataIndex: 'jl'
   },
   {
    title: '备注',
    align:"center",
    dataIndex: 'bz'
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
    title: '计算公式',
    align:"center",
    dataIndex: 'jsgs'
   },
   {
    title: '分类（化学、物理）',
    align:"center",
    dataIndex: 'type'
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
      label: "样品/测点描述",
      field: 'ypcdms',
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "测量方法标准",
      field: 'clffbz',
      component: 'Input',
      colProps: {span: 6},
 	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '样品/测点描述',
    field: 'ypcdms',
    component: 'Input',
  },
  {
    label: '测量方法标准',
    field: 'clffbz',
    component: 'Input',
  },
  {
    label: '仪器状态',
    field: 'yqzt',
    component: 'Input',
  },
  {
    label: '测量日期',
    field: 'clrq',
    component: 'Input',
  },
  {
    label: '检定日期',
    field: 'jdrq',
    component: 'Input',
  },
  {
    label: '计算过程',
    field: 'jsgc',
    component: 'Input',
  },
  {
    label: '不确定度',
    field: 'bqdd',
    component: 'Input',
  },
  {
    label: '测量结果',
    field: 'cljg',
    component: 'Input',
  },
  {
    label: '注',
    field: 'zhu',
    component: 'Input',
  },
  {
    label: '结论',
    field: 'jl',
    component: 'Input',
  },
  {
    label: '备注',
    field: 'bz',
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
    label: '计算公式',
    field: 'jsgs',
    component: 'Input',
  },
  {
    label: '分类（化学、物理）',
    field: 'type',
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