-- 注意：该页面对应的前台目录为views/rmhn文件夹下
-- 如果你想更改到其他目录，请修改sql中component字段对应的值


INSERT INTO sys_permission(id, parent_id, name, url, component, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_route, is_leaf, keep_alive, hidden, hide_tab, description, status, del_flag, rule_flag, create_by, create_time, update_by, update_time, internal_or_external) 
VALUES ('2022102703375850330', NULL, 'rmhn_ys_sycy_main', '/rmhn/rmhnYsSycyMainList', 'rmhn/RmhnYsSycyMainList', NULL, NULL, 0, NULL, '1', 1.00, 0, NULL, 1, 1, 0, 0, 0, NULL, '1', 0, 0, 'admin', '2022-10-27 15:37:33', NULL, NULL, 0);

-- 权限控制sql
-- 新增
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2022102703375850331', '2022102703375850330', '添加rmhn_ys_sycy_main', NULL, NULL, 0, NULL, NULL, 2, 'org.jeecg.modules.ncss:rmhn_ys_sycy_main:add', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2022-10-27 15:37:33', NULL, NULL, 0, 0, '1', 0);
-- 编辑
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2022102703375850332', '2022102703375850330', '编辑rmhn_ys_sycy_main', NULL, NULL, 0, NULL, NULL, 2, 'org.jeecg.modules.ncss:rmhn_ys_sycy_main:edit', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2022-10-27 15:37:33', NULL, NULL, 0, 0, '1', 0);
-- 删除
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2022102703375850333', '2022102703375850330', '删除rmhn_ys_sycy_main', NULL, NULL, 0, NULL, NULL, 2, 'org.jeecg.modules.ncss:rmhn_ys_sycy_main:delete', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2022-10-27 15:37:33', NULL, NULL, 0, 0, '1', 0);
-- 批量删除
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2022102703375850334', '2022102703375850330', '批量删除rmhn_ys_sycy_main', NULL, NULL, 0, NULL, NULL, 2, 'org.jeecg.modules.ncss:rmhn_ys_sycy_main:deleteBatch', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2022-10-27 15:37:33', NULL, NULL, 0, 0, '1', 0);
-- 导出excel
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2022102703375850335', '2022102703375850330', '导出excel_rmhn_ys_sycy_main', NULL, NULL, 0, NULL, NULL, 2, 'org.jeecg.modules.ncss:rmhn_ys_sycy_main:exportXls', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2022-10-27 15:37:33', NULL, NULL, 0, 0, '1', 0);
-- 导入excel
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2022102703375850336', '2022102703375850330', '导入excel_rmhn_ys_sycy_main', NULL, NULL, 0, NULL, NULL, 2, 'org.jeecg.modules.ncss:rmhn_ys_sycy_main:importExcel', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2022-10-27 15:37:33', NULL, NULL, 0, 0, '1', 0);