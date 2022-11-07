import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '测量次数1',
    align:"center",
    dataIndex: 'clcs1'
   },
   {
    title: '测量时间1',
    align:"center",
    dataIndex: 'clsj1'
   },
   {
    title: '平均值1',
    align:"center",
    dataIndex: 'pjz1'
   },
   {
    title: '标准差1',
    align:"center",
    dataIndex: 'bzc1'
   },
   {
    title: 'X1',
    align:"center",
    dataIndex: 'x1'
   },
   {
    title: 'X2',
    align:"center",
    dataIndex: 'x2'
   },
   {
    title: 'X3',
    align:"center",
    dataIndex: 'x3'
   },
   {
    title: '是否发现不满足泊松检验1',
    align:"center",
    dataIndex: 'sffx1'
   },
   {
    title: '测量日期1',
    align:"center",
    dataIndex: 'lcrq1'
   },
   {
    title: '测量人1',
    align:"center",
    dataIndex: 'lcr1'
   },
   {
    title: '审核人1',
    align:"center",
    dataIndex: 'shr1'
   },
   {
    title: '测量次数2',
    align:"center",
    dataIndex: 'clcs2'
   },
   {
    title: '测量时间2',
    align:"center",
    dataIndex: 'clsj2'
   },
   {
    title: '平均值2',
    align:"center",
    dataIndex: 'pjz2'
   },
   {
    title: '标准差2',
    align:"center",
    dataIndex: 'bzc2'
   },
   {
    title: 'X21',
    align:"center",
    dataIndex: 'x21'
   },
   {
    title: 'X22',
    align:"center",
    dataIndex: 'x22'
   },
   {
    title: 'X23',
    align:"center",
    dataIndex: 'x23'
   },
   {
    title: '是否发现不满足泊松检验2',
    align:"center",
    dataIndex: 'sffx2'
   },
   {
    title: '测量日期2',
    align:"center",
    dataIndex: 'lcrq2'
   },
   {
    title: '测量人2',
    align:"center",
    dataIndex: 'lcr2'
   },
   {
    title: '审核人2',
    align:"center",
    dataIndex: 'shr2'
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
      label: "测量次数1",
      field: 'clcs1',
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "测量时间1",
      field: 'clsj1',
      component: 'Input',
      colProps: {span: 6},
 	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '测量次数1',
    field: 'clcs1',
    component: 'Input',
  },
  {
    label: '测量时间1',
    field: 'clsj1',
    component: 'Input',
  },
  {
    label: '平均值1',
    field: 'pjz1',
    component: 'Input',
  },
  {
    label: '标准差1',
    field: 'bzc1',
    component: 'Input',
  },
  {
    label: 'X1',
    field: 'x1',
    component: 'Input',
  },
  {
    label: 'X2',
    field: 'x2',
    component: 'Input',
  },
  {
    label: 'X3',
    field: 'x3',
    component: 'Input',
  },
  {
    label: '是否发现不满足泊松检验1',
    field: 'sffx1',
    component: 'Input',
  },
  {
    label: '测量日期1',
    field: 'lcrq1',
    component: 'Input',
  },
  {
    label: '测量人1',
    field: 'lcr1',
    component: 'Input',
  },
  {
    label: '审核人1',
    field: 'shr1',
    component: 'Input',
  },
  {
    label: '测量次数2',
    field: 'clcs2',
    component: 'Input',
  },
  {
    label: '测量时间2',
    field: 'clsj2',
    component: 'Input',
  },
  {
    label: '平均值2',
    field: 'pjz2',
    component: 'Input',
  },
  {
    label: '标准差2',
    field: 'bzc2',
    component: 'Input',
  },
  {
    label: 'X21',
    field: 'x21',
    component: 'Input',
  },
  {
    label: 'X22',
    field: 'x22',
    component: 'Input',
  },
  {
    label: 'X23',
    field: 'x23',
    component: 'Input',
  },
  {
    label: '是否发现不满足泊松检验2',
    field: 'sffx2',
    component: 'Input',
  },
  {
    label: '测量日期2',
    field: 'lcrq2',
    component: 'Input',
  },
  {
    label: '测量人2',
    field: 'lcr2',
    component: 'Input',
  },
  {
    label: '审核人2',
    field: 'shr2',
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