-- 注意：该页面对应的前台目录为views/radia文件夹下
-- 如果你想更改到其他目录，请修改sql中component字段对应的值


INSERT INTO sys_permission(id, parent_id, name, url, component, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_route, is_leaf, keep_alive, hidden, hide_tab, description, status, del_flag, rule_flag, create_by, create_time, update_by, update_time, internal_or_external) 
VALUES ('2022102003582150220', NULL, 'tt_req_nuclide_export', '/radia/ttReqNuclideExportList', 'radia/TtReqNuclideExportList', NULL, NULL, 0, NULL, '1', 1.00, 0, NULL, 1, 1, 0, 0, 0, NULL, '1', 0, 0, 'admin', '2022-10-20 15:58:22', NULL, NULL, 0);

-- 权限控制sql
-- 新增
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2022102003582160221', '2022102003582150220', '添加tt_req_nuclide_export', NULL, NULL, 0, NULL, NULL, 2, 'org.jeecg.modules.ncss:tt_req_nuclide_export:add', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2022-10-20 15:58:22', NULL, NULL, 0, 0, '1', 0);
-- 编辑
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2022102003582160222', '2022102003582150220', '编辑tt_req_nuclide_export', NULL, NULL, 0, NULL, NULL, 2, 'org.jeecg.modules.ncss:tt_req_nuclide_export:edit', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2022-10-20 15:58:22', NULL, NULL, 0, 0, '1', 0);
-- 删除
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2022102003582160223', '2022102003582150220', '删除tt_req_nuclide_export', NULL, NULL, 0, NULL, NULL, 2, 'org.jeecg.modules.ncss:tt_req_nuclide_export:delete', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2022-10-20 15:58:22', NULL, NULL, 0, 0, '1', 0);
-- 批量删除
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2022102003582160224', '2022102003582150220', '批量删除tt_req_nuclide_export', NULL, NULL, 0, NULL, NULL, 2, 'org.jeecg.modules.ncss:tt_req_nuclide_export:deleteBatch', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2022-10-20 15:58:22', NULL, NULL, 0, 0, '1', 0);
-- 导出excel
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2022102003582160225', '2022102003582150220', '导出excel_tt_req_nuclide_export', NULL, NULL, 0, NULL, NULL, 2, 'org.jeecg.modules.ncss:tt_req_nuclide_export:exportXls', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2022-10-20 15:58:22', NULL, NULL, 0, 0, '1', 0);
-- 导入excel
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2022102003582160226', '2022102003582150220', '导入excel_tt_req_nuclide_export', NULL, NULL, 0, NULL, NULL, 2, 'org.jeecg.modules.ncss:tt_req_nuclide_export:importExcel', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2022-10-20 15:58:22', NULL, NULL, 0, 0, '1', 0);