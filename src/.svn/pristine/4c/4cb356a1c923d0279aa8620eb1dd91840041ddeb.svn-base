import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '核素',
    align:"center",
    dataIndex: 'nuclideName'
   },
   {
    title: '类别 值内容：Ⅰ类 Ⅱ类 Ⅲ类 Ⅳ类 Ⅴ类',
    align:"center",
    dataIndex: 'nuclideCategory'
   },
   {
    title: '总活度 格式如：1.70E+4',
    align:"center",
    dataIndex: 'totalActivity'
   },
   {
    title: '活动类别 值内容：使用 销售 生产',
    align:"center",
    dataIndex: 'activeType'
   },
   {
    title: 'NAME',
    align:"center",
    dataIndex: 'name'
   },
   {
    title: 'UPDATETIME',
    align:"center",
    dataIndex: 'updatetime',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
   },
   {
    title: '工作场所code  说明：工作场所code来自TT_LR_SITE表',
    align:"center",
    dataIndex: 'siteCode'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '放射源活动种类和范围主键',
    field: 'activeRangeId',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入放射源活动种类和范围主键!'},
          ];
     },
  },
  {
    label: '许可证申请单位主键',
    field: 'companyId',
    component: 'Input',
  },
  {
    label: '核素',
    field: 'nuclideName',
    component: 'Input',
  },
  {
    label: '类别 值内容：Ⅰ类 Ⅱ类 Ⅲ类 Ⅳ类 Ⅴ类',
    field: 'nuclideCategory',
    component: 'Input',
  },
  {
    label: '总活度 格式如：1.70E+4',
    field: 'totalActivity',
    component: 'Input',
  },
  {
    label: '活动类别 值内容：使用 销售 生产',
    field: 'activeType',
    component: 'Input',
  },
  {
    label: 'NAME',
    field: 'name',
    component: 'Input',
  },
  {
    label: 'YWID',
    field: 'ywid',
    component: 'Input',
  },
  {
    label: 'REQUEIR_YWID',
    field: 'requeirYwid',
    component: 'Input',
  },
  {
    label: 'IS_DELETE',
    field: 'isDelete',
    component: 'InputNumber',
  },
  {
    label: 'UPDATETIME',
    field: 'updatetime',
    component: 'DatePicker',
  },
  {
    label: '工作场所code  说明：工作场所code来自TT_LR_SITE表',
    field: 'siteCode',
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