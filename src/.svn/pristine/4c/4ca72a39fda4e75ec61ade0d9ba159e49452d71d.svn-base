import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';

export const columns: BasicColumn[] = [
    {
    title: '任务名称',
    dataIndex: 'taskName'
   },
   {
    title: '被检查单位ID',
    dataIndex: 'companyId'
   },
   {
    title: '被检查单位名称',
    dataIndex: 'companyName'
   },
   {
    title: '检查类型',
    dataIndex: 'checkType'
   },
   {
    title: '任务编号',
    dataIndex: 'taskNum'
   },
   {
    title: '任务内容',
    dataIndex: 'taskContent'
   },
   {
    title: '任务下达人',
    dataIndex: 'taskAllotPerson'
   },
   {
    title: '任务下达时间',
    dataIndex: 'taskAllotDate'
   },
   {
    title: '要求完成时间',
    dataIndex: 'taskAskFinishDate'
   },
   {
    title: '检查机构',
    dataIndex: 'checkOrg'
   },
   {
    title: '执行人',
    dataIndex: 'taskExecutePerson'
   },
   {
    title: '执行时间',
    dataIndex: 'taskExecuteDate'
   },
   {
    title: '检查日期',
    dataIndex: 'checkDate'
   },
   {
    title: '状态',
    dataIndex: 'status'
   },
   {
    title: '备注',
    dataIndex: 'remake'
   },
];

export const searchFormSchema: FormSchema[] = [
 {
    label: '任务名称',
    field: 'taskName',
    component: 'Input'
  },
 {
    label: '被检查单位ID',
    field: 'companyId',
    component: 'Input'
  },
];

export const formSchema: FormSchema[] = [
  // TODO 主键隐藏字段，目前写死为ID
  {label: '', field: 'id', component: 'Input', show: false},
  {
    label: '任务名称',
    field: 'taskName',
    component: 'Input',
  },
  {
    label: '被检查单位ID',
    field: 'companyId',
    component: 'Input',
  },
  {
    label: '被检查单位名称',
    field: 'companyName',
    component: 'Input',
  },
  {
    label: '检查类型',
    field: 'checkType',
    component: 'Input',
  },
  {
    label: '任务编号',
    field: 'taskNum',
    component: 'Input',
  },
  {
    label: '任务内容',
    field: 'taskContent',
    component: 'Input',
  },
  {
    label: '任务下达人',
    field: 'taskAllotPerson',
    component: 'Input',
  },
  {
    label: '任务下达时间',
    field: 'taskAllotDate',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
      valueFormat: 'YYYY-MM-DD hh:mm:ss',
    },
  },
  {
    label: '要求完成时间',
    field: 'taskAskFinishDate',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
      valueFormat: 'YYYY-MM-DD hh:mm:ss',
    },
  },
  {
    label: '检查机构',
    field: 'checkOrg',
    component: 'Input',
  },
  {
    label: '执行人',
    field: 'taskExecutePerson',
    component: 'Input',
  },
  {
    label: '执行时间',
    field: 'taskExecuteDate',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
      valueFormat: 'YYYY-MM-DD hh:mm:ss',
    },
  },
  {
    label: '检查日期',
    field: 'checkDate',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
      valueFormat: 'YYYY-MM-DD hh:mm:ss',
    },
  },
  {
    label: '状态',
    field: 'status',
    component: 'InputNumber',
  },
  {
    label: '备注',
    field: 'remake',
    component: 'Input',
  },
];
