-- 注意：该页面对应的前台目录为views/nonseal文件夹下
-- 如果你想更改到其他目录，请修改sql中component字段对应的值


INSERT INTO sys_permission(id, parent_id, name, url, component, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_route, is_leaf, keep_alive, hidden, hide_tab, description, status, del_flag, rule_flag, create_by, create_time, update_by, update_time, internal_or_external) 
VALUES ('2022093001416920030', NULL, '非密封放射性物质出口', '/nonseal/ttReqNonsealExportList', 'nonseal/TtReqNonsealExportList', NULL, NULL, 0, NULL, '1', 1.00, 0, NULL, 1, 1, 0, 0, 0, NULL, '1', 0, 0, 'admin', '2022-09-30 01:41:03', NULL, NULL, 0);

-- 权限控制sql
-- 新增
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2022093001416920031', '2022093001416920030', '添加非密封放射性物质出口', NULL, NULL, 0, NULL, NULL, 2, 'org.jeecg.modules.ncss:tt_req_nonseal_export:add', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2022-09-30 01:41:03', NULL, NULL, 0, 0, '1', 0);
-- 编辑
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2022093001416920032', '2022093001416920030', '编辑非密封放射性物质出口', NULL, NULL, 0, NULL, NULL, 2, 'org.jeecg.modules.ncss:tt_req_nonseal_export:edit', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2022-09-30 01:41:03', NULL, NULL, 0, 0, '1', 0);
-- 删除
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2022093001416920033', '2022093001416920030', '删除非密封放射性物质出口', NULL, NULL, 0, NULL, NULL, 2, 'org.jeecg.modules.ncss:tt_req_nonseal_export:delete', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2022-09-30 01:41:03', NULL, NULL, 0, 0, '1', 0);
-- 批量删除
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2022093001416920034', '2022093001416920030', '批量删除非密封放射性物质出口', NULL, NULL, 0, NULL, NULL, 2, 'org.jeecg.modules.ncss:tt_req_nonseal_export:deleteBatch', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2022-09-30 01:41:03', NULL, NULL, 0, 0, '1', 0);
-- 导出excel
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2022093001416920035', '2022093001416920030', '导出excel_非密封放射性物质出口', NULL, NULL, 0, NULL, NULL, 2, 'org.jeecg.modules.ncss:tt_req_nonseal_export:exportXls', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2022-09-30 01:41:03', NULL, NULL, 0, 0, '1', 0);
-- 导入excel
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2022093001416920036', '2022093001416920030', '导入excel_非密封放射性物质出口', NULL, NULL, 0, NULL, NULL, 2, 'org.jeecg.modules.ncss:tt_req_nonseal_export:importExcel', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2022-09-30 01:41:03', NULL, NULL, 0, 0, '1', 0);