import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';

export const columns: BasicColumn[] = [
    {
    title: 'companyid',
    dataIndex: 'companyid'
   },
   {
    title: 'createdate',
    dataIndex: 'createdate'
   },
   {
    title: 'hour',
    dataIndex: 'hour'
   },
   {
    title: 'intervaldescr',
    dataIndex: 'intervaldescr'
   },
   {
    title: 'intervaltype',
    dataIndex: 'intervaltype'
   },
   {
    title: 'mileage',
    dataIndex: 'mileage'
   },
   {
    title: 'mileage1',
    dataIndex: 'mileage1'
   },
   {
    title: 'mileage2',
    dataIndex: 'mileage2'
   },
   {
    title: 'plateno',
    dataIndex: 'plateno'
   },
   {
    title: 'staticdate',
    dataIndex: 'staticdate'
   },
   {
    title: 'vehicleid',
    dataIndex: 'vehicleid'
   },
   {
    title: 'gas1',
    dataIndex: 'gas1'
   },
   {
    title: 'gas2',
    dataIndex: 'gas2'
   },
   {
    title: 'gas',
    dataIndex: 'gas'
   },
   {
    title: 'deleted',
    dataIndex: 'deleted'
   },
   {
    title: 'owner',
    dataIndex: 'owner'
   },
   {
    title: 'remark',
    dataIndex: 'remark'
   },
];

export const searchFormSchema: FormSchema[] = [
 {
    label: 'companyid',
    field: 'companyid',
    component: 'Input'
  },
 {
    label: 'createdate',
    field: 'createdate',
    component: 'TimePicker'
  },
];

export const formSchema: FormSchema[] = [
  // TODO 主键隐藏字段，目前写死为ID
  {label: '', field: 'id', component: 'Input', show: false},
  {
    label: 'companyid',
    field: 'companyid',
    component: 'Input',
  },
  {
    label: 'createdate',
    field: 'createdate',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
      valueFormat: 'YYYY-MM-DD hh:mm:ss',
    },
  },
  {
    label: 'hour',
    field: 'hour',
    component: 'InputNumber',
  },
  {
    label: 'intervaldescr',
    field: 'intervaldescr',
    component: 'Input',
  },
  {
    label: 'intervaltype',
    field: 'intervaltype',
    component: 'InputNumber',
  },
  {
    label: 'mileage',
    field: 'mileage',
    component: 'InputNumber',
  },
  {
    label: 'mileage1',
    field: 'mileage1',
    component: 'InputNumber',
  },
  {
    label: 'mileage2',
    field: 'mileage2',
    component: 'InputNumber',
  },
  {
    label: 'plateno',
    field: 'plateno',
    component: 'Input',
  },
  {
    label: 'staticdate',
    field: 'staticdate',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
      valueFormat: 'YYYY-MM-DD hh:mm:ss',
    },
  },
  {
    label: 'vehicleid',
    field: 'vehicleid',
    component: 'InputNumber',
  },
  {
    label: 'gas1',
    field: 'gas1',
    component: 'InputNumber',
  },
  {
    label: 'gas2',
    field: 'gas2',
    component: 'InputNumber',
  },
  {
    label: 'gas',
    field: 'gas',
    component: 'InputNumber',
  },
  {
    label: 'deleted',
    field: 'deleted',
    component: 'Input',
  },
  {
    label: 'owner',
    field: 'owner',
    component: 'Input',
  },
  {
    label: 'remark',
    field: 'remark',
    component: 'Input',
  },
];
