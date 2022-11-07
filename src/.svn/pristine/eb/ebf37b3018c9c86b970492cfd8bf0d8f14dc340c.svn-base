import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '核素名称',
    align:"center",
    dataIndex: 'nuclide'
   },
   {
    title: '出厂日期',
    align:"center",
    dataIndex: 'leavefactoryDate',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
   },
   {
    title: '出厂活度',
    align:"center",
    dataIndex: 'leavefactoryActivity'
   },
   {
    title: '活度幂',
    align:"center",
    dataIndex: 'power'
   },
   {
    title: '标号',
    align:"center",
    dataIndex: 'tab'
   },
   {
    title: '放射源编码',
    align:"center",
    dataIndex: 'code'
   },
   {
    title: '放射源类别',
    align:"center",
    dataIndex: 'category'
   },
   {
    title: '备注',
    align:"center",
    dataIndex: 'remark'
   },
   {
    title: '收贮日期',
    align:"center",
    dataIndex: 'takebackDate',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
   },
   {
    title: '贮存设施',
    align:"center",
    dataIndex: 'storeFacility'
   },
   {
    title: '区号',
    align:"center",
    dataIndex: 'sectionNo'
   },
   {
    title: '坑号',
    align:"center",
    dataIndex: 'holeNo'
   },
   {
    title: '盖号',
    align:"center",
    dataIndex: 'coverNo'
   },
   {
    title: '架号',
    align:"center",
    dataIndex: 'frameNo'
   },
   {
    title: '桶号',
    align:"center",
    dataIndex: 'bucketNo'
   },
   {
    title: '罐号',
    align:"center",
    dataIndex: 'containterNo'
   },
   {
    title: '表面剂量率(uSv/h)',
    align:"center",
    dataIndex: 'faceDoserate'
   },
   {
    title: '表面剂量率(uSv/h)幂',
    align:"center",
    dataIndex: 'faceDoseratePower'
   },
   {
    title: '一米处剂量率(uSv/h)',
    align:"center",
    dataIndex: 'oneMeterDoserate'
   },
   {
    title: '一米处剂量率(uSv/h)幂',
    align:"center",
    dataIndex: 'oneMeterDoseratePower'
   },
   {
    title: '表面α污染水平(Bq/Cm2)',
    align:"center",
    dataIndex: 'facePolluteLevela'
   },
   {
    title: '表面α污染水平(Bq/Cm2)幂',
    align:"center",
    dataIndex: 'facePolluteLevelaPower'
   },
   {
    title: '表面β污染水平(Bq/Cm2)',
    align:"center",
    dataIndex: 'facePolluteLevelb'
   },
   {
    title: '表面β污染水平(Bq/Cm2)幂',
    align:"center",
    dataIndex: 'facePolluteLevelbPower'
   },
   {
    title: '包装体积',
    align:"center",
    dataIndex: 'packageVol'
   },
   {
    title: '重量（Kg）',
    align:"center",
    dataIndex: 'weight'
   },
   {
    title: '测量人',
    align:"center",
    dataIndex: 'measurePerson'
   },
   {
    title: '送贮人/送贮单位',
    align:"center",
    dataIndex: 'deliveryPerson'
   },
   {
    title: '收贮人',
    align:"center",
    dataIndex: 'drawbackPerson'
   },
   {
    title: '发现人',
    align:"center",
    dataIndex: 'findPerson'
   },
   {
    title: '发现时间',
    align:"center",
    dataIndex: 'findDate',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
   },
   {
    title: '发现地点',
    align:"center",
    dataIndex: 'findPlace'
   },
   {
    title: '收贮经办人',
    align:"center",
    dataIndex: 'deliveryAgentDoperson'
   },
   {
    title: '是否是有主源',
    align:"center",
    dataIndex: 'beMaster'
   },
   {
    title: '插入时间',
    align:"center",
    dataIndex: 'insertDate',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
   },
   {
    title: '插入人',
    align:"center",
    dataIndex: 'insertUser'
   },
   {
    title: '是否历史',
    align:"center",
    dataIndex: 'beHistory'
   },
   {
    title: '用途',
    align:"center",
    dataIndex: 'useType'
   },
   {
    title: '状态',
    align:"center",
    dataIndex: 'status'
   },
   {
    title: '场所',
    align:"center",
    dataIndex: 'site'
   },
   {
    title: '去向',
    align:"center",
    dataIndex: 'destination'
   },
   {
    title: '送交单位的类型',
    align:"center",
    dataIndex: 'deliveryCompanyLicenseno'
   },
   {
    title: '其他用途',
    align:"center",
    dataIndex: 'useTypeOther'
   },
   {
    title: '产源国家',
    align:"center",
    dataIndex: 'country'
   },
   {
    title: '产源单位',
    align:"center",
    dataIndex: 'manufacture'
   },
   {
    title: '净重',
    align:"center",
    dataIndex: 'newWeight'
   },
   {
    title: '毛重',
    align:"center",
    dataIndex: 'grossWeight'
   },
   {
    title: '走过流程数',
    align:"center",
    dataIndex: 'flowNumber'
   },
   {
    title: '最后更新日期',
    align:"center",
    dataIndex: 'updateDate',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
   },
   {
    title: '业务锁',
    align:"center",
    dataIndex: 'businessType'
   },
   {
    title: '数据来源',
    align:"center",
    dataIndex: 'dataSource'
   },
   {
    title: '许可证号',
    align:"center",
    dataIndex: 'licenseNo'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
	{
      label: "核素名称",
      field: 'nuclide',
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "放射源编码",
      field: 'code',
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "放射源类别",
      field: 'category',
      component: 'Input',
      colProps: {span: 6},
 	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '核素名称',
    field: 'nuclide',
    component: 'Input',
  },
  {
    label: '出厂日期',
    field: 'leavefactoryDate',
    component: 'DatePicker',
  },
  {
    label: '出厂活度',
    field: 'leavefactoryActivity',
    component: 'InputNumber',
  },
  {
    label: '活度幂',
    field: 'power',
    component: 'InputNumber',
  },
  {
    label: '标号',
    field: 'tab',
    component: 'Input',
  },
  {
    label: '放射源编码',
    field: 'code',
    component: 'Input',
  },
  {
    label: '放射源类别',
    field: 'category',
    component: 'Input',
  },
  {
    label: '备注',
    field: 'remark',
    component: 'Input',
  },
  {
    label: '收贮日期',
    field: 'takebackDate',
    component: 'DatePicker',
  },
  {
    label: '贮存设施',
    field: 'storeFacility',
    component: 'Input',
  },
  {
    label: '区号',
    field: 'sectionNo',
    component: 'Input',
  },
  {
    label: '坑号',
    field: 'holeNo',
    component: 'Input',
  },
  {
    label: '盖号',
    field: 'coverNo',
    component: 'Input',
  },
  {
    label: '架号',
    field: 'frameNo',
    component: 'Input',
  },
  {
    label: '桶号',
    field: 'bucketNo',
    component: 'Input',
  },
  {
    label: '罐号',
    field: 'containterNo',
    component: 'Input',
  },
  {
    label: '表面剂量率(uSv/h)',
    field: 'faceDoserate',
    component: 'InputNumber',
  },
  {
    label: '表面剂量率(uSv/h)幂',
    field: 'faceDoseratePower',
    component: 'InputNumber',
  },
  {
    label: '一米处剂量率(uSv/h)',
    field: 'oneMeterDoserate',
    component: 'InputNumber',
  },
  {
    label: '一米处剂量率(uSv/h)幂',
    field: 'oneMeterDoseratePower',
    component: 'InputNumber',
  },
  {
    label: '表面α污染水平(Bq/Cm2)',
    field: 'facePolluteLevela',
    component: 'InputNumber',
  },
  {
    label: '表面α污染水平(Bq/Cm2)幂',
    field: 'facePolluteLevelaPower',
    component: 'InputNumber',
  },
  {
    label: '表面β污染水平(Bq/Cm2)',
    field: 'facePolluteLevelb',
    component: 'InputNumber',
  },
  {
    label: '表面β污染水平(Bq/Cm2)幂',
    field: 'facePolluteLevelbPower',
    component: 'InputNumber',
  },
  {
    label: '包装体积',
    field: 'packageVol',
    component: 'InputNumber',
  },
  {
    label: '重量（Kg）',
    field: 'weight',
    component: 'InputNumber',
  },
  {
    label: '测量人',
    field: 'measurePerson',
    component: 'Input',
  },
  {
    label: '送贮人/送贮单位',
    field: 'deliveryPerson',
    component: 'Input',
  },
  {
    label: '收贮人',
    field: 'drawbackPerson',
    component: 'Input',
  },
  {
    label: '发现人',
    field: 'findPerson',
    component: 'Input',
  },
  {
    label: '发现时间',
    field: 'findDate',
    component: 'DatePicker',
  },
  {
    label: '发现地点',
    field: 'findPlace',
    component: 'Input',
  },
  {
    label: '收贮经办人',
    field: 'deliveryAgentDoperson',
    component: 'Input',
  },
  {
    label: '是否是有主源',
    field: 'beMaster',
    component: 'InputNumber',
  },
  {
    label: '插入时间',
    field: 'insertDate',
    component: 'DatePicker',
  },
  {
    label: '插入人',
    field: 'insertUser',
    component: 'Input',
  },
  {
    label: '是否历史',
    field: 'beHistory',
    component: 'InputNumber',
  },
  {
    label: '用途',
    field: 'useType',
    component: 'Input',
  },
  {
    label: '状态',
    field: 'status',
    component: 'Input',
  },
  {
    label: '场所',
    field: 'site',
    component: 'Input',
  },
  {
    label: '去向',
    field: 'destination',
    component: 'Input',
  },
  {
    label: '送交单位的类型',
    field: 'deliveryCompanyLicenseno',
    component: 'Input',
  },
  {
    label: '其他用途',
    field: 'useTypeOther',
    component: 'Input',
  },
  {
    label: '产源国家',
    field: 'country',
    component: 'Input',
  },
  {
    label: '产源单位',
    field: 'manufacture',
    component: 'Input',
  },
  {
    label: '净重',
    field: 'newWeight',
    component: 'InputNumber',
  },
  {
    label: '毛重',
    field: 'grossWeight',
    component: 'InputNumber',
  },
  {
    label: '走过流程数',
    field: 'flowNumber',
    component: 'InputNumber',
  },
  {
    label: '最后更新日期',
    field: 'updateDate',
    component: 'DatePicker',
  },
  {
    label: '业务锁',
    field: 'businessType',
    component: 'Input',
  },
  {
    label: '数据来源',
    field: 'dataSource',
    component: 'Input',
  },
  {
    label: '许可证号',
    field: 'licenseNo',
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