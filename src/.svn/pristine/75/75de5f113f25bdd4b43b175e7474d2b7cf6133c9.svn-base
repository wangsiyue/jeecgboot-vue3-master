import {defHttp} from '/@/utils/http/axios';
import { useMessage } from "/@/hooks/web/useMessage";

const { createConfirm } = useMessage();

enum Api {
  list = '/rmhn/rmhnYsYsz3hMain/list',
  save='/rmhn/rmhnYsYsz3hMain/add',
  edit='/rmhn/rmhnYsYsz3hMain/edit',
  deleteOne = '/rmhn/rmhnYsYsz3hMain/delete',
  deleteBatch = '/rmhn/rmhnYsYsz3hMain/deleteBatch',
  importExcel = '/rmhn/rmhnYsYsz3hMain/importExcel',
  exportXls = '/rmhn/rmhnYsYsz3hMain/exportXls',
  rmhnYsYsz3hDetailList = '/rmhn/rmhnYsYsz3hMain/queryRmhnYsYsz3hDetailByMainId',
}
/**
 * 导出api
 * @param params
 */
export const getExportUrl = Api.exportXls;

/**
 * 导入api
 */
export const getImportUrl = Api.importExcel;
/**
 * 查询子表数据
 * @param params
 */
export const rmhnYsYsz3hDetailList = Api.rmhnYsYsz3hDetailList;
/**
 * 列表接口
 * @param params
 */
export const list = (params) =>
  defHttp.get({url: Api.list, params});

/**
 * 删除单个
 */
export const deleteOne = (params,handleSuccess) => {
  return defHttp.delete({url: Api.deleteOne, params}, {joinParamsToUrl: true}).then(() => {
    handleSuccess();
  });
}
/**
 * 批量删除
 * @param params
 */
export const batchDelete = (params, handleSuccess) => {
  createConfirm({
    iconType: 'warning',
    title: '确认删除',
    content: '是否删除选中数据',
    okText: '确认',
    cancelText: '取消',
    onOk: () => {
      return defHttp.delete({url: Api.deleteBatch, data: params}, {joinParamsToUrl: true}).then(() => {
        handleSuccess();
      });
    }
  });
}
/**
 * 保存或者更新
 * @param params
 */
export const saveOrUpdate = (params, isUpdate) => {
  let url = isUpdate ? Api.edit : Api.save;
  return defHttp.post({url: url, params});
}
