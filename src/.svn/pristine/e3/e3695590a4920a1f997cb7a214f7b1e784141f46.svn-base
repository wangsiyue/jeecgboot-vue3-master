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
    title: '探头号',
    align:"center",
    dataIndex: 'tth'
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
    title: '备注',
    align:"center",
    dataIndex: 'bz'
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
    title: '取样量1',
    align:"center",
    dataIndex: 'qyl1'
   },
   {
    title: '取样量2',
    align:"center",
    dataIndex: 'qyl2'
   },
   {
    title: '示踪剂加入量1',
    align:"center",
    dataIndex: 'szjjrl1'
   },
   {
    title: '示踪剂加入量2',
    align:"center",
    dataIndex: 'szjjrl2'
   },
   {
    title: '测量开始时间1',
    align:"center",
    dataIndex: 'clkssj1'
   },
   {
    title: '测量开始时间2',
    align:"center",
    dataIndex: 'clkssj2'
   },
   {
    title: '测量时间1',
    align:"center",
    dataIndex: 'clsj1'
   },
   {
    title: '测量时间2',
    align:"center",
    dataIndex: 'clsj2'
   },
   {
    title: '示踪剂计数1',
    align:"center",
    dataIndex: 'szjjs1'
   },
   {
    title: '示踪剂计数2',
    align:"center",
    dataIndex: 'szjjs2'
   },
   {
    title: '计数1',
    align:"center",
    dataIndex: 'js1'
   },
   {
    title: '计数2',
    align:"center",
    dataIndex: 'js2'
   },
   {
    title: '比活度1',
    align:"center",
    dataIndex: 'bhd1'
   },
   {
    title: '比活度2',
    align:"center",
    dataIndex: 'bhd2'
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
    label: '探头号',
    field: 'tth',
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
    label: '备注',
    field: 'bz',
    component: 'Input',
  },
  {
    label: '参考日期',
    field: 'ckrq',
    component: 'DatePicker',
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
    label: '取样量1',
    field: 'qyl1',
    component: 'Input',
  },
  {
    label: '取样量2',
    field: 'qyl2',
    component: 'Input',
  },
  {
    label: '示踪剂加入量1',
    field: 'szjjrl1',
    component: 'Input',
  },
  {
    label: '示踪剂加入量2',
    field: 'szjjrl2',
    component: 'Input',
  },
  {
    label: '测量开始时间1',
    field: 'clkssj1',
    component: 'Input',
  },
  {
    label: '测量开始时间2',
    field: 'clkssj2',
    component: 'Input',
  },
  {
    label: '测量时间1',
    field: 'clsj1',
    component: 'Input',
  },
  {
    label: '测量时间2',
    field: 'clsj2',
    component: 'Input',
  },
  {
    label: '示踪剂计数1',
    field: 'szjjs1',
    component: 'Input',
  },
  {
    label: '示踪剂计数2',
    field: 'szjjs2',
    component: 'Input',
  },
  {
    label: '计数1',
    field: 'js1',
    component: 'Input',
  },
  {
    label: '计数2',
    field: 'js2',
    component: 'Input',
  },
  {
    label: '比活度1',
    field: 'bhd1',
    component: 'Input',
  },
  {
    label: '比活度2',
    field: 'bhd2',
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