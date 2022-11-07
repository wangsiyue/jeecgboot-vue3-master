-- 注意：该页面对应的前台目录为views/haqgl文件夹下
-- 如果你想更改到其他目录，请修改sql中component字段对应的值


INSERT INTO sys_permission(id, parent_id, name, url, component, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_route, is_leaf, keep_alive, hidden, hide_tab, description, status, del_flag, rule_flag, create_by, create_time, update_by, update_time, internal_or_external) 
VALUES ('202210250530310440', NULL, 'tt_lr_radialset_record', '/haqgl/ttLrRadialsetRecord1List', 'haqgl/TtLrRadialsetRecord1List', NULL, NULL, 0, NULL, '1', 1.00, 0, NULL, 1, 1, 0, 0, 0, NULL, '1', 0, 0, 'admin', '2022-10-25 17:30:44', NULL, NULL, 0);

-- 权限控制sql
-- 新增
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('202210250530320441', '202210250530310440', '添加tt_lr_radialset_record', NULL, NULL, 0, NULL, NULL, 2, 'org.jeecg.modules.ncss:tt_lr_radialset_record:add', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2022-10-25 17:30:44', NULL, NULL, 0, 0, '1', 0);
-- 编辑
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('202210250530320442', '202210250530310440', '编辑tt_lr_radialset_record', NULL, NULL, 0, NULL, NULL, 2, 'org.jeecg.modules.ncss:tt_lr_radialset_record:edit', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2022-10-25 17:30:44', NULL, NULL, 0, 0, '1', 0);
-- 删除
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('202210250530320443', '202210250530310440', '删除tt_lr_radialset_record', NULL, NULL, 0, NULL, NULL, 2, 'org.jeecg.modules.ncss:tt_lr_radialset_record:delete', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2022-10-25 17:30:44', NULL, NULL, 0, 0, '1', 0);
-- 批量删除
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('202210250530320444', '202210250530310440', '批量删除tt_lr_radialset_record', NULL, NULL, 0, NULL, NULL, 2, 'org.jeecg.modules.ncss:tt_lr_radialset_record:deleteBatch', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2022-10-25 17:30:44', NULL, NULL, 0, 0, '1', 0);
-- 导出excel
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('202210250530320445', '202210250530310440', '导出excel_tt_lr_radialset_record', NULL, NULL, 0, NULL, NULL, 2, 'org.jeecg.modules.ncss:tt_lr_radialset_record:exportXls', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2022-10-25 17:30:44', NULL, NULL, 0, 0, '1', 0);
-- 导入excel
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('202210250530320446', '202210250530310440', '导入excel_tt_lr_radialset_record', NULL, NULL, 0, NULL, NULL, 2, 'org.jeecg.modules.ncss:tt_lr_radialset_record:importExcel', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2022-10-25 17:30:44', NULL, NULL, 0, 0, '1', 0);