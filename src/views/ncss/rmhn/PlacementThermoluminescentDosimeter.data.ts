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
    dataIndex: 'taskName'
   },
   {
    title: 'TLD类型',
    align:"center",
    dataIndex: 'tldType'
   },
   {
    title: '规格',
    align:"center",
    dataIndex: 'specifications'
   },
   {
    title: '包装方式',
    align:"center",
    dataIndex: 'packagingMethod'
   },
   {
    title: '校核人',
    align:"center",
    dataIndex: 'checker'
   },
   {
    title: '备注',
    align:"center",
    dataIndex: 'remark'
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
      label: "任务名称",
      field: "taskName",
      component: 'Input',
      colProps: {span: 6},
 	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '任务名称',
    field: 'taskName',
    component: 'Input',
  },
  {
    label: 'TLD类型',
    field: 'tldType',
    component: 'Input',
  },
  {
    label: '规格',
    field: 'specifications',
    component: 'Input',
  },
  {
    label: '包装方式',
    field: 'packagingMethod',
    component: 'Input',
  },
  {
    label: '校核人',
    field: 'checker',
    component: 'InputNumber',
  },
  {
    label: '备注',
    field: 'remark',
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
//子表单数据
//子表表格配置
export const placementThermoluminescentDosimeterDetailsColumns: JVxeColumn[] = [
    {
      title: '序号',
      key: 'serialNo',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '点位名',
      key: 'pointName',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '布放时间',
      key: 'layingTime',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '布放人',
      key: 'placer',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '回收时间',
      key: 'recycleTime',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '回收人',
      key: 'recycler',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '备注',
      key: 'remark',
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