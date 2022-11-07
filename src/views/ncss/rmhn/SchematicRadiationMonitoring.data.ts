import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '项目名称',
    align:"center",
    dataIndex: 'entryName'
   },
   {
    title: '测量地点',
    align:"center",
    dataIndex: 'measurementLocation'
   },
   {
    title: '图表',
    align:"center",
    dataIndex: 'chart'
   },
   {
    title: '备注',
    align:"center",
    dataIndex: 'remark'
   },
   {
    title: '绘图人',
    align:"center",
    dataIndex: 'drafter'
   },
   {
    title: '校核人',
    align:"center",
    dataIndex: 'checker'
   },
   {
    title: '校核日期',
    align:"center",
    dataIndex: 'checkDate'
   },
   {
    title: '上传人',
    align:"center",
    dataIndex: 'uploader'
   },
   {
    title: '上传时间',
    align:"center",
    dataIndex: 'uploadTime'
   },
   {
    title: '上传图片',
    align:"center",
    dataIndex: 'uploadPictures',
    slots: { customRender: 'fileSlot' },
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
	{
      label: "项目名称",
      field: 'entryName',
      component: 'Input',
      colProps: {span: 6},
 	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '项目名称',
    field: 'entryName',
    component: 'Input',
  },
  {
    label: '测量地点',
    field: 'measurementLocation',
    component: 'Input',
  },
  {
    label: '图表',
    field: 'chart',
    component: 'Input',
  },
  {
    label: '备注',
    field: 'remark',
    component: 'Input',
  },
  {
    label: '绘图人',
    field: 'drafter',
    component: 'Input',
  },
  {
    label: '校核人',
    field: 'checker',
    component: 'InputNumber',
  },
  {
    label: '校核日期',
    field: 'checkDate',
    component: 'Input',
  },
  {
    label: '上传人',
    field: 'uploader',
    component: 'Input',
  },
  {
    label: '上传时间',
    field: 'uploadTime',
    component: 'InputNumber',
  },
  {
    label: '上传图片',
    field: 'uploadPictures',
    component: 'JUpload',
    componentProps:{
     },
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