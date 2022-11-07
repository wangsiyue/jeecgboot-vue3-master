import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';

export const columns: BasicColumn[] = [
   //  {
   //  title: '单位ID',
   //  dataIndex: 'companyId'
   // },
   {
    title: '单位名称',
    dataIndex: 'companyName'
   },
   {
    title: '事件编号',
    dataIndex: 'incidentSerialId'
   },
   {
    title: '事件地点',
    dataIndex: 'incidentAddr'
   },
   {
    title: '事件时间',
    dataIndex: 'incidentDate'
   },
   {
    title: '是否结案',
    dataIndex: 'closedStatus'
   },
   {
    title: '审批状态',
    dataIndex: 'status'
   },
   {
    title: '备注',
    dataIndex: 'remake'
   },
];

export const searchFormSchema: FormSchema[] = [
 {
    label: '单位ID',
    field: 'companyId',
    component: 'Input'
  },
 {
    label: '单位名称',
    field: 'companyName',
    component: 'Input'
  },
];

export const formSchema: FormSchema[] = [
  // TODO 主键隐藏字段，目前写死为ID
  {label: '', field: 'id', component: 'Input', show: false},
  // {
  //   label: '单位ID',
  //   field: 'companyId',
  //   component: 'Input',
  // },
  {
    label: '单位名称',
    field: 'companyName',
    component: 'Input',
  },
  {
    label: '事件编号',
    field: 'incidentSerialId',
    component: 'Input',
  },
  {
    label: '事件地点',
    field: 'incidentAddr',
    component: 'Input',
  },
  {
    label: '事件时间',
    field: 'incidentDate',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
      valueFormat: 'YYYY-MM-DD hh:mm:ss',
    },
  },
  {
    label: '是否结案',
    field: 'closedStatus',
    component: 'Input',
  },
  {
    label: '审批状态',
    field: 'status',
    component: 'Input',
  },
  {
    label: '备注',
    field: 'remake',
    component: 'Input',
  },
];
