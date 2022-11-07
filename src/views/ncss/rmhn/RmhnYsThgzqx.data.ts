import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '标准溶液名称',
    align:"center",
    dataIndex: 'bzrymc'
   },
   {
    title: '标准溶液编号',
    align:"center",
    dataIndex: 'bzrybh'
   },
   {
    title: '标准溶液来源',
    align:"center",
    dataIndex: 'bzryly'
   },
   {
    title: '标准溶液浓度',
    align:"center",
    dataIndex: 'bzrynd'
   },
   {
    title: '参考日期',
    align:"center",
    dataIndex: 'ckrq',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
   },
   {
    title: '刻度日期',
    align:"center",
    dataIndex: 'kdrq',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
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
    title: 'Th(mg)',
    align:"center",
    dataIndex: 'th'
   },
   {
    title: 'OD值',
    align:"center",
    dataIndex: 'od'
   },
   {
    title: '线性关系',
    align:"center",
    dataIndex: 'xxgx'
   },
   {
    title: '相关系数',
    align:"center",
    dataIndex: 'xgxs'
   },
   {
    title: '备注',
    align:"center",
    dataIndex: 'ccjl'
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
      label: "标准溶液名称",
      field: 'bzrymc',
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "标准溶液编号",
      field: 'bzrybh',
      component: 'Input',
      colProps: {span: 6},
 	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '标准溶液名称',
    field: 'bzrymc',
    component: 'Input',
  },
  {
    label: '标准溶液编号',
    field: 'bzrybh',
    component: 'Input',
  },
  {
    label: '标准溶液来源',
    field: 'bzryly',
    component: 'Input',
  },
  {
    label: '标准溶液浓度',
    field: 'bzrynd',
    component: 'Input',
  },
  {
    label: '参考日期',
    field: 'ckrq',
    component: 'DatePicker',
  },
  {
    label: '刻度日期',
    field: 'kdrq',
    component: 'DatePicker',
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
    label: 'Th(mg)',
    field: 'th',
    component: 'Input',
  },
  {
    label: 'OD值',
    field: 'od',
    component: 'Input',
  },
  {
    label: '线性关系',
    field: 'xxgx',
    component: 'Input',
  },
  {
    label: '相关系数',
    field: 'xgxs',
    component: 'Input',
  },
  {
    label: '备注',
    field: 'ccjl',
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



/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}