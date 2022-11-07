-- 注意：该页面对应的前台目录为views/rmhn文件夹下
-- 如果你想更改到其他目录，请修改sql中component字段对应的值


INSERT INTO sys_permission(id, parent_id, name, url, component, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_route, is_leaf, keep_alive, hidden, hide_tab, description, status, del_flag, rule_flag, create_by, create_time, update_by, update_time, internal_or_external) 
VALUES ('2022102703402990250', NULL, 'rmhn_ys_ysz3h_main', '/rmhn/rmhnYsYsz3hMainList', 'rmhn/RmhnYsYsz3hMainList', NULL, NULL, 0, NULL, '1', 1.00, 0, NULL, 1, 1, 0, 0, 0, NULL, '1', 0, 0, 'admin', '2022-10-27 15:40:25', NULL, NULL, 0);

-- 权限控制sql
-- 新增
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2022102703402990251', '2022102703402990250', '添加rmhn_ys_ysz3h_main', NULL, NULL, 0, NULL, NULL, 2, 'org.jeecg.modules.ncss:rmhn_ys_ysz3h_main:add', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2022-10-27 15:40:25', NULL, NULL, 0, 0, '1', 0);
-- 编辑
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2022102703402990252', '2022102703402990250', '编辑rmhn_ys_ysz3h_main', NULL, NULL, 0, NULL, NULL, 2, 'org.jeecg.modules.ncss:rmhn_ys_ysz3h_main:edit', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2022-10-27 15:40:25', NULL, NULL, 0, 0, '1', 0);
-- 删除
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2022102703402990253', '2022102703402990250', '删除rmhn_ys_ysz3h_main', NULL, NULL, 0, NULL, NULL, 2, 'org.jeecg.modules.ncss:rmhn_ys_ysz3h_main:delete', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2022-10-27 15:40:25', NULL, NULL, 0, 0, '1', 0);
-- 批量删除
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2022102703402990254', '2022102703402990250', '批量删除rmhn_ys_ysz3h_main', NULL, NULL, 0, NULL, NULL, 2, 'org.jeecg.modules.ncss:rmhn_ys_ysz3h_main:deleteBatch', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2022-10-27 15:40:25', NULL, NULL, 0, 0, '1', 0);
-- 导出excel
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2022102703402990255', '2022102703402990250', '导出excel_rmhn_ys_ysz3h_main', NULL, NULL, 0, NULL, NULL, 2, 'org.jeecg.modules.ncss:rmhn_ys_ysz3h_main:exportXls', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2022-10-27 15:40:25', NULL, NULL, 0, 0, '1', 0);
-- 导入excel
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2022102703402990256', '2022102703402990250', '导入excel_rmhn_ys_ysz3h_main', NULL, NULL, 0, NULL, NULL, 2, 'org.jeecg.modules.ncss:rmhn_ys_ysz3h_main:importExcel', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2022-10-27 15:40:25', NULL, NULL, 0, 0, '1', 0);