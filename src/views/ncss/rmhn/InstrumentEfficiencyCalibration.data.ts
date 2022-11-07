import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
import {JVxeTypes,JVxeColumn} from '/@/components/jeecg/JVxeTable/types'
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '标准源名称',
    align:"center",
    dataIndex: 'standardSourceName'
   },
   {
    title: '标准源编号',
    align:"center",
    dataIndex: 'standardSourceNo'
   },
   {
    title: '标准源来源',
    align:"center",
    dataIndex: 'standardSource'
   },
   {
    title: '标准源活度',
    align:"center",
    dataIndex: 'standardSourceActivity'
   },
   {
    title: '参考日期',
    align:"center",
    dataIndex: 'referenceDate'
   },
   {
    title: '刻度日期',
    align:"center",
    dataIndex: 'scaleDate'
   },
   {
    title: '仪器名称',
    align:"center",
    dataIndex: 'instrumentName'
   },
   {
    title: '仪器型号',
    align:"center",
    dataIndex: 'instrumentModel'
   },
   {
    title: '仪器编号',
    align:"center",
    dataIndex: 'instrumentNo'
   },
   {
    title: '分析人',
    align:"center",
    dataIndex: 'analyst'
   },
   {
    title: '校核人',
    align:"center",
    dataIndex: 'checker'
   },
   {
    title: '校核日期',
    align:"center",
    dataIndex: 'checkeDate'
   },
   {
    title: '备注',
    align:"center",
    dataIndex: 'remark'
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
      label: "标准源名称",
      field: "standardSourceName",
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "标准源编号",
      field: "standardSourceNo",
      component: 'Input',
      colProps: {span: 6},
 	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '标准源名称',
    field: 'standardSourceName',
    component: 'Input',
  },
  {
    label: '标准源编号',
    field: 'standardSourceNo',
    component: 'Input',
  },
  {
    label: '标准源来源',
    field: 'standardSource',
    component: 'Input',
  },
  {
    label: '标准源活度',
    field: 'standardSourceActivity',
    component: 'Input',
  },
  {
    label: '参考日期',
    field: 'referenceDate',
    component: 'Input',
  },
  {
    label: '刻度日期',
    field: 'scaleDate',
    component: 'Input',
  },
  {
    label: '仪器名称',
    field: 'instrumentName',
    component: 'Input',
  },
  {
    label: '仪器型号',
    field: 'instrumentModel',
    component: 'Input',
  },
  {
    label: '仪器编号',
    field: 'instrumentNo',
    component: 'Input',
  },
  {
    label: '分析人',
    field: 'analyst',
    component: 'InputNumber',
  },
  {
    label: '校核人',
    field: 'checker',
    component: 'InputNumber',
  },
  {
    label: '校核日期',
    field: 'checkeDate',
    component: 'InputNumber',
  },
  {
    label: '备注',
    field: 'remark',
    component: 'InputNumber',
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
export const instrumentEfficiencyCalibrationDetailsColumns: JVxeColumn[] = [
    {
      title: '序号',
      key: 'serialNo',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '刻度项目',
      key: 'scaleItems',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '总α1',
      key: 'a1One',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '总α2',
      key: 'a2Two',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '总a3',
      key: 'b1Three',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '总a4',
      key: 'b2Four',
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