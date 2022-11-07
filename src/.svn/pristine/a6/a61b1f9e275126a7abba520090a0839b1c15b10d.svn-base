import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '对接省份',
    align:"center",
    dataIndex: 'fdictlabel'
   },
   {
    title: '环保投资（万元）',
    align:"center",
    dataIndex: 'fenvironinvest'
   },
   {
    title: '登记时间',
    align:"center",
    dataIndex: 'forderdate'
   },
   {
    title: '经度',
    align:"center",
    dataIndex: 'flongitude'
   },
   {
    title: '行政区编码',
    align:"center",
    dataIndex: 'fregioncode'
   },
   {
    title: '批复文号',
    align:"center",
    dataIndex: 'fapprovalcode'
   },
   {
    title: '批复时间',
    align:"center",
    dataIndex: 'fapprovaldate'
   },
   {
    title: '环评文件类别',
    align:"center",
    dataIndex: 'fbdictlabel'
   },
   {
    title: '更新时间',
    align:"center",
    dataIndex: 'fupdatetimepush'
   },
   {
    title: '项目地址',
    align:"center",
    dataIndex: 'fprojectaddress'
   },
   {
    title: '总投资（万元）',
    align:"center",
    dataIndex: 'fprojectinvest'
   },
   {
    title: '评价单位',
    align:"center",
    dataIndex: 'fevaluationunit'
   },
   {
    title: '建设单位企业名称',
    align:"center",
    dataIndex: 'fconstructunitname'
   },
   {
    title: '项目级别',
    align:"center",
    dataIndex: 'fprojectlevel'
   },
   {
    title: '项目所属地区',
    align:"center",
    dataIndex: 'fedictlabel'
   },
   {
    title: '纬度',
    align:"center",
    dataIndex: 'flatitude'
   },
   {
    title: '受理时间',
    align:"center",
    dataIndex: 'facceptancedate'
   },
   {
    title: '项目名称',
    align:"center",
    dataIndex: 'fprojectname'
   },
   {
    title: '建设项目编号',
    align:"center",
    dataIndex: 'fconstructionid'
   },
   {
    title: '企业代码',
    align:"center",
    dataIndex: 'fentercode'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
	{
      label: "批复文号",
      field: 'fapprovalcode',
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "评价单位",
      field: 'fevaluationunit',
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "项目名称",
      field: 'fprojectname',
      component: 'Input',
      colProps: {span: 6},
 	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '对接省份',
    field: 'fdictlabel',
    component: 'Input',
  },
  {
    label: '环保投资（万元）',
    field: 'fenvironinvest',
    component: 'Input',
  },
  {
    label: '登记时间',
    field: 'forderdate',
    component: 'Input',
  },
  {
    label: '经度',
    field: 'flongitude',
    component: 'Input',
  },
  {
    label: '行政区编码',
    field: 'fregioncode',
    component: 'Input',
  },
  {
    label: '批复文号',
    field: 'fapprovalcode',
    component: 'Input',
  },
  {
    label: '批复时间',
    field: 'fapprovaldate',
    component: 'Input',
  },
  {
    label: '环评文件类别',
    field: 'fbdictlabel',
    component: 'Input',
  },
  {
    label: '更新时间',
    field: 'fupdatetimepush',
    component: 'Input',
  },
  {
    label: '项目地址',
    field: 'fprojectaddress',
    component: 'Input',
  },
  {
    label: '总投资（万元）',
    field: 'fprojectinvest',
    component: 'Input',
  },
  {
    label: '评价单位',
    field: 'fevaluationunit',
    component: 'Input',
  },
  {
    label: '建设单位企业名称',
    field: 'fconstructunitname',
    component: 'Input',
  },
  {
    label: '项目级别',
    field: 'fprojectlevel',
    component: 'Input',
  },
  {
    label: '项目所属地区',
    field: 'fedictlabel',
    component: 'Input',
  },
  {
    label: '纬度',
    field: 'flatitude',
    component: 'Input',
  },
  {
    label: '受理时间',
    field: 'facceptancedate',
    component: 'Input',
  },
  {
    label: '项目名称',
    field: 'fprojectname',
    component: 'Input',
  },
  {
    label: '建设项目编号',
    field: 'fconstructionid',
    component: 'Input',
  },
  {
    label: '企业代码',
    field: 'fentercode',
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



/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}