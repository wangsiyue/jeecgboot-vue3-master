import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
import {JVxeTypes,JVxeColumn} from '/@/components/jeecg/JVxeTable/types'
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '测点名称',
    align:"center",
    dataIndex: 'detectsite'
   },
   {
    title: '测点地址',
    align:"center",
    dataIndex: 'address'
   },
   {
    title: '监测结论',
    align:"center",
    dataIndex: 'conclusion'
   },
   {
    title: '经度',
    align:"center",
    dataIndex: 'longitude'
   },
   {
    title: '纬度',
    align:"center",
    dataIndex: 'latitude'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
	{
      label: "测点名称",
      field: "detectsite",
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "测点地址",
      field: "address",
      component: 'Input',
      colProps: {span: 6},
 	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '测点名称',
    field: 'detectsite',
    component: 'Input',
  },
  {
    label: '测点地址',
    field: 'address',
    component: 'Input',
  },
  {
    label: '监测结论',
    field: 'conclusion',
    component: 'InputTextArea',
  },
  {
    label: '经度',
    field: 'longitude',
    component: 'Input',
  },
  {
    label: '纬度',
    field: 'latitude',
    component: 'Input',
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
export const electromagneticRadiationMonitoringDetailColumns: JVxeColumn[] = [
    {
      title: '监测点位描述',
      key: 'description',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '垂直',
      key: 'vertical',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '水平',
      key: 'level',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '电场强度E（V/m）',
      key: 'intensity',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
    },
    {
      title: '功率密度S（μW/cm2）',
      key: 'density',
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