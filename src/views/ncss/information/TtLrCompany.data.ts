import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '单位名称',
    align:"center",
    dataIndex: 'name'
   },
   {
    title: '所属区县',
    align:"center",
    dataIndex: 'district'
   },
   {
    title: '单位性质',
    align:"center",
    dataIndex: 'kind'
   },
   {
    title: '行业分类',
    align:"center",
    dataIndex: 'industryType'
   },
   {
    title: '许可证号',
    align:"center",
    dataIndex: 'licenseNo'
   },
   {
    title: '发证日期',
    align:"center",
    dataIndex: 'licenseStartDate',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
   },
   {
    title: '有效期至',
    align:"center",
    dataIndex: 'licenseEndDate',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
   },
   {
    title: '发证机关',
    align:"center",
    dataIndex: 'licenceIssuingAuthority'
   },
   {
    title: '创建日期',
    align:"center",
    dataIndex: 'createTime'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
	{
      label: "单位名称",
      field: 'name',
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "行业分类",
      field: 'industryType',
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "许可证号",
      field: 'licenseNo',
      component: 'Input',
      colProps: {span: 6},
 	},
     {
      label: "发证日期",
      field: "licenseStartDate",
      component: 'RangePicker',
      colProps: {span: 6},
	},
     {
      label: "有效期至",
      field: "licenseEndDate",
      component: 'RangePicker',
      colProps: {span: 6},
	},
	{
      label: "发证机关",
      field: 'licenceIssuingAuthority',
      component: 'JDictSelectTag',
      componentProps:{
        dictCode:"tt_zd_commoninfo,conname,concode,contype='fzjg'",
      },
      colProps: {span: 6},
 	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '单位名称',
    field: 'name',
    component: 'Input',
  },
  {
    label: '所属区县',
    field: 'district',
    component: 'Input',
  },
  {
    label: '单位性质',
    field: 'kind',
    component: 'Input',
  },
  {
    label: '行业分类',
    field: 'industryType',
    component: 'Input',
  },
  {
    label: '许可证号',
    field: 'licenseNo',
    component: 'Input',
  },
  {
    label: '发证日期',
    field: 'licenseStartDate',
    component: 'DatePicker',
  },
  {
    label: '有效期至',
    field: 'licenseEndDate',
    component: 'DatePicker',
  },
  {
    label: '发证机关',
    field: 'licenceIssuingAuthority',
    component: 'JDictSelectTag',
    componentProps:{
        dictCode:""
     },
  },
  {
    label: 'id',
    field: 'id',
    component: 'Input',
  },
  {
    label: '创建日期',
    field: 'createTime',
    component: 'DatePicker',
    componentProps: {
       showTime: true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
     },
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
