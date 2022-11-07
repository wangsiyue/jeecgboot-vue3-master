import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: 'ph测量仪器',
    align:"center",
    dataIndex: 'phclyq'
   },
   {
    title: 'ph仪器编号',
    align:"center",
    dataIndex: 'phyqbh'
   },
   {
    title: 'ph测量值1',
    align:"center",
    dataIndex: 'phclz1'
   },
   {
    title: 'ph测量值2',
    align:"center",
    dataIndex: 'phclz2'
   },
   {
    title: 'ph测量值3',
    align:"center",
    dataIndex: 'phclz3'
   },
   {
    title: 'ph平均值',
    align:"center",
    dataIndex: 'phpjz'
   },
   {
    title: 'ph技术指标',
    align:"center",
    dataIndex: 'phjszb'
   },
   {
    title: 'ph结论',
    align:"center",
    dataIndex: 'phjl'
   },
   {
    title: '电导率测量仪器',
    align:"center",
    dataIndex: 'ddlclyq'
   },
   {
    title: '电导率仪器编号',
    align:"center",
    dataIndex: 'ddlyqbh'
   },
   {
    title: '电导率测量值1',
    align:"center",
    dataIndex: 'ddlclz1'
   },
   {
    title: '电导率测量值2',
    align:"center",
    dataIndex: 'ddlclz2'
   },
   {
    title: '电导率测量值3',
    align:"center",
    dataIndex: 'ddlclz3'
   },
   {
    title: '电导率平均值',
    align:"center",
    dataIndex: 'ddlpjz'
   },
   {
    title: '电导率技术指标',
    align:"center",
    dataIndex: 'ddljszb'
   },
   {
    title: '电导率结论',
    align:"center",
    dataIndex: 'ddljl'
   },
   {
    title: '备注',
    align:"center",
    dataIndex: 'bz'
   },
   {
    title: '测量结论',
    align:"center",
    dataIndex: 'cljl'
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
      label: "ph测量仪器",
      field: 'phclyq',
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "ph仪器编号",
      field: 'phyqbh',
      component: 'Input',
      colProps: {span: 6},
 	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: 'ph测量仪器',
    field: 'phclyq',
    component: 'Input',
  },
  {
    label: 'ph仪器编号',
    field: 'phyqbh',
    component: 'Input',
  },
  {
    label: 'ph测量值1',
    field: 'phclz1',
    component: 'Input',
  },
  {
    label: 'ph测量值2',
    field: 'phclz2',
    component: 'Input',
  },
  {
    label: 'ph测量值3',
    field: 'phclz3',
    component: 'Input',
  },
  {
    label: 'ph平均值',
    field: 'phpjz',
    component: 'Input',
  },
  {
    label: 'ph技术指标',
    field: 'phjszb',
    component: 'Input',
  },
  {
    label: 'ph结论',
    field: 'phjl',
    component: 'Input',
  },
  {
    label: '电导率测量仪器',
    field: 'ddlclyq',
    component: 'Input',
  },
  {
    label: '电导率仪器编号',
    field: 'ddlyqbh',
    component: 'Input',
  },
  {
    label: '电导率测量值1',
    field: 'ddlclz1',
    component: 'Input',
  },
  {
    label: '电导率测量值2',
    field: 'ddlclz2',
    component: 'Input',
  },
  {
    label: '电导率测量值3',
    field: 'ddlclz3',
    component: 'Input',
  },
  {
    label: '电导率平均值',
    field: 'ddlpjz',
    component: 'Input',
  },
  {
    label: '电导率技术指标',
    field: 'ddljszb',
    component: 'Input',
  },
  {
    label: '电导率结论',
    field: 'ddljl',
    component: 'Input',
  },
  {
    label: '备注',
    field: 'bz',
    component: 'Input',
  },
  {
    label: '测量结论',
    field: 'cljl',
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