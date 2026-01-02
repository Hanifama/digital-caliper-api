-- Template wf-beam WF 194X150X6X9
INSERT INTO qc_template (qc_template_id, prodtype_id, size_id, profile, std_dimention, brand_merek, specification, name, status, created_by, created_dt, updated_by, updated_dt) VALUES
('TMP-wfgkuwyf', 'WF-BEAM', 'WF 194X150X6X9', 'WF 194X150X6X9', '194X150X6X9', 'WF-BEAM 194X150X6X9', 'WF 194X150X6X9', 'Template WF-BEAM 194X150X6X9', 'active', 'Akun Testing Manajer', '2025-11-08 13:00:00', 'Akun Testing Manajer', '2025-11-08 13:00:00');

INSERT INTO qc_template_data (input_code, qc_template_id, label, input_type, min_tolerance, t_lt_50_tolerance, nominal_tolerance, t_gt_50_tolerance, max_tolerance, actual_tolerance, order_numb, enabled, sound, position, group_name) VALUES
-- H-Top (1-3) - Width of Web
('H.H-top', 'TMP-wfgkuwyf', 'H(H-top)', 'number', 192, 193, 194, 195, 196, NULL, 1, true, '', 'H-Top', 'table'),
('C.H-top', 'TMP-wfgkuwyf', 'C(H-top)', 'number', 192, 193, 194, 195, 196, NULL, 2, true, '', 'H-Top', 'table'),
('T.H-top', 'TMP-wfgkuwyf', 'T(H-top)', 'number', 192, 193, 194, 195, 196, NULL, 3, true, '', 'H-Top', 'table'),

-- H-Bottom (4-6) - Width of Web
('H.H-bottom', 'TMP-wfgkuwyf', 'H(H-bottom)', 'number', 192, 193, 194, 195, 196, NULL, 4, true, '', 'H-Bottom', 'table'),
('C.H-bottom', 'TMP-wfgkuwyf', 'C(H-bottom)', 'number', 192, 193, 194, 195, 196, NULL, 5, true, '', 'H-Bottom', 'table'),
('T.H-bottom', 'TMP-wfgkuwyf', 'T(H-bottom)', 'number', 192, 193, 194, 195, 196, NULL, 6, true, '', 'H-Bottom', 'table'),

-- B1 (7-9) - Height of Flange
('H.B1', 'TMP-wfgkuwyf', 'H(B1)', 'number', 147.5, 148.75, 150, 151.25, 152.5, NULL, 7, true, '', 'B1', 'table'),
('C.B1', 'TMP-wfgkuwyf', 'C(B1)', 'number', 147.5, 148.75, 150, 151.25, 152.5, NULL, 8, true, '', 'B1', 'table'),
('T.B1', 'TMP-wfgkuwyf', 'T(B1)', 'number', 147.5, 148.75, 150, 151.25, 152.5, NULL, 9, true, '', 'B1', 'table'),

-- B2 (10-12) - Height of Flange
('H.B2', 'TMP-wfgkuwyf', 'H(B2)', 'number', 147.5, 148.75, 150, 151.25, 152.5, NULL, 10, true, '', 'B2', 'table'),
('C.B2', 'TMP-wfgkuwyf', 'C(B2)', 'number', 147.5, 148.75, 150, 151.25, 152.5, NULL, 11, true, '', 'B2', 'table'),
('T.B2', 'TMP-wfgkuwyf', 'T(B2)', 'number', 147.5, 148.75, 150, 151.25, 152.5, NULL, 12, true, '', 'B2', 'table'),

-- b1 (13-15) - Web Off Center (dengan tolerance serupa FormRight Web Off Center)
('H.b1', 'TMP-wfgkuwyf', 'H(b1)', 'number', -2.5, -1.25, 0, 1.25, 2.5, NULL, 13, true, '', 'b1', 'table'),
('C.b1', 'TMP-wfgkuwyf', 'C(b1)', 'number', -2.5, -1.25, 0, 1.25, 2.5, NULL, 14, true, '', 'b1', 'table'),
('T.b1', 'TMP-wfgkuwyf', 'T(b1)', 'number', -2.5, -1.25, 0, 1.25, 2.5, NULL, 15, true, '', 'b1', 'table'),

-- b3 (16-18) - Web Off Center (dengan tolerance serupa FormRight Web Off Center)
('H.b3', 'TMP-wfgkuwyf', 'H(b3)', 'number', -2.5, -1.25, 0, 1.25, 2.5, NULL, 16, true, '', 'b3', 'table'),
('C.b3', 'TMP-wfgkuwyf', 'C(b3)', 'number', -2.5, -1.25, 0, 1.25, 2.5, NULL, 17, true, '', 'b3', 'table'),
('T.b3', 'TMP-wfgkuwyf', 'T(b3)', 'number', -2.5, -1.25, 0, 1.25, 2.5, NULL, 18, true, '', 'b3', 'table'),

-- b2 (19-21) - Web Off Center (dengan tolerance serupa FormRight Web Off Center)
('H.b2', 'TMP-wfgkuwyf', 'H(b2)', 'number', -2.5, -1.25, 0, 1.25, 2.5, NULL, 19, true, '', 'b2', 'table'),
('C.b2', 'TMP-wfgkuwyf', 'C(b2)', 'number', -2.5, -1.25, 0, 1.25, 2.5, NULL, 20, true, '', 'b2', 'table'),
('T.b2', 'TMP-wfgkuwyf', 'T(b2)', 'number', -2.5, -1.25, 0, 1.25, 2.5, NULL, 21, true, '', 'b2', 'table'),

-- b4 (22-24) - Web Off Center (dengan tolerance serupa FormRight Web Off Center)
('H.b4', 'TMP-wfgkuwyf', 'H(b4)', 'number', -2.5, -1.25, 0, 1.25, 2.5, NULL, 22, true, '', 'b4', 'table'),
('C.b4', 'TMP-wfgkuwyf', 'C(b4)', 'number', -2.5, -1.25, 0, 1.25, 2.5, NULL, 23, true, '', 'b4', 'table'),
('T.b4', 'TMP-wfgkuwyf', 'T(b4)', 'number', -2.5, -1.25, 0, 1.25, 2.5, NULL, 24, true, '', 'b4', 'table'),

-- b1-b2/2 (25-27) - Web Off Center
('H.b1-b2/2', 'TMP-wfgkuwyf', 'H(b1-b2/2)', 'number', -2.5, -1.25, 0, 1.25, 2.5, NULL, 25, true, '', 'b1-b2/2', 'table'),
('C.b1-b2/2', 'TMP-wfgkuwyf', 'C(b1-b2/2)', 'number', -2.5, -1.25, 0, 1.25, 2.5, NULL, 26, true, '', 'b1-b2/2', 'table'),
('T.b1-b2/2', 'TMP-wfgkuwyf', 'T(b1-b2/2)', 'number', -2.5, -1.25, 0, 1.25, 2.5, NULL, 27, true, '', 'b1-b2/2', 'table'),

-- b3-b4/2 (28-30) - Web Off Center
('H.b3-b4/2', 'TMP-wfgkuwyf', 'H(b3-b4/2)', 'number', -2.5, -1.25, 0, 1.25, 2.5, NULL, 28, true, '', 'b3-b4/2', 'table'),
('C.b3-b4/2', 'TMP-wfgkuwyf', 'C(b3-b4/2)', 'number', -2.5, -1.25, 0, 1.25, 2.5, NULL, 29, true, '', 'b3-b4/2', 'table'),
('T.b3-b4/2', 'TMP-wfgkuwyf', 'T(b3-b4/2)', 'number', -2.5, -1.25, 0, 1.25, 2.5, NULL, 30, true, '', 'b3-b4/2', 'table'),

-- t1 (31-33) - Flange Thickness
('H.t1', 'TMP-wfgkuwyf', 'H(t1)', 'number', 7.5, 8.25, 9, 9.75, 10.5, NULL, 31, true, '', 't1', 'table'),
('C.t1', 'TMP-wfgkuwyf', 'C(t1)', 'number', 7.5, 8.25, 9, 9.75, 10.5, NULL, 32, true, '', 't1', 'table'),
('T.t1', 'TMP-wfgkuwyf', 'T(t1)', 'number', 7.5, 8.25, 9, 9.75, 10.5, NULL, 33, true, '', 't1', 'table'),

-- t3 (34-36) - Flange Thickness
('H.t3', 'TMP-wfgkuwyf', 'H(t3)', 'number', 7.5, 8.25, 9, 9.75, 10.5, NULL, 34, true, '', 't3', 'table'),
('C.t3', 'TMP-wfgkuwyf', 'C(t3)', 'number', 7.5, 8.25, 9, 9.75, 10.5, NULL, 35, true, '', 't3', 'table'),
('T.t3', 'TMP-wfgkuwyf', 'T(t3)', 'number', 7.5, 8.25, 9, 9.75, 10.5, NULL, 36, true, '', 't3', 'table'),

-- t2 (37-39) - Flange Thickness
('H.t2', 'TMP-wfgkuwyf', 'H(t2)', 'number', 7.5, 8.25, 9, 9.75, 10.5, NULL, 37, true, '', 't2', 'table'),
('C.t2', 'TMP-wfgkuwyf', 'C(t2)', 'number', 7.5, 8.25, 9, 9.75, 10.5, NULL, 38, true, '', 't2', 'table'),
('T.t2', 'TMP-wfgkuwyf', 'T(t2)', 'number', 7.5, 8.25, 9, 9.75, 10.5, NULL, 39, true, '', 't2', 'table'),

-- t4 (40-42) - Flange Thickness
('H.t4', 'TMP-wfgkuwyf', 'H(t4)', 'number', 7.5, 8.25, 9, 9.75, 10.5, NULL, 40, true, '', 't4', 'table'),
('C.t4', 'TMP-wfgkuwyf', 'C(t4)', 'number', 7.5, 8.25, 9, 9.75, 10.5, NULL, 41, true, '', 't4', 'table'),
('T.t4', 'TMP-wfgkuwyf', 'T(t4)', 'number', 7.5, 8.25, 9, 9.75, 10.5, NULL, 42, true, '', 't4', 'table'),

-- t5 (43-45) - Web Thickness
('H.t5', 'TMP-wfgkuwyf', 'H(t5)', 'number', 5, 5.65, 6.3, 6.95, 7.6, NULL, 43, true, '', 't5', 'table'),
('C.t5', 'TMP-wfgkuwyf', 'C(t5)', 'number', 5, 5.65, 6.3, 6.95, 7.6, NULL, 44, true, '', 't5', 'table'),
('T.t5', 'TMP-wfgkuwyf', 'T(t5)', 'number', 5, 5.65, 6.3, 6.95, 7.6, NULL, 45, true, '', 't5', 'table'),

-- t6 (NULL) - Web Thickness dengan order_numb NULL
('H.t6', 'TMP-wfgkuwyf', 'H(t6)', 'number', 5, 5.65, 6.3, 6.95, 7.6, NULL, NULL, true, '', 't6', 'table'),
('C.t6', 'TMP-wfgkuwyf', 'C(t6)', 'number', 5, 5.65, 6.3, 6.95, 7.6, NULL, NULL, true, '', 't6', 'table'),
('T.t6', 'TMP-wfgkuwyf', 'T(t6)', 'number', 5, 5.65, 6.3, 6.95, 7.6, NULL, NULL, true, '', 't6', 'table'),

-- t7 (NULL) - Web Thickness dengan order_numb NULL
('H.t7', 'TMP-wfgkuwyf', 'H(t7)', 'number', 5, 5.65, 6.3, 6.95, 7.6, NULL, NULL, true, '', 't7', 'table'),
('C.t7', 'TMP-wfgkuwyf', 'C(t7)', 'number', 5, 5.65, 6.3, 6.95, 7.6, NULL, NULL, true, '', 't7', 'table'),
('T.t7', 'TMP-wfgkuwyf', 'T(t7)', 'number', 5, 5.65, 6.3, 6.95, 7.6, NULL, NULL, true, '', 't7', 'table'),

-- FormRight (46-54)
('height.of.flange', 'TMP-wfgkuwyf', 'Height of Flange', 'number', 147.5, 148.75, 150, 151.25, 152.5, 0, 46, true, '', 'FormRight', 'Height of Flange'),
('flange.thickness', 'TMP-wfgkuwyf', 'Flange Thickness', 'number', 7.5, 8.25, 9, 9.75, 10.5, 0, 47, true, '', 'FormRight', 'Flange Thickness'),
('width.of.web', 'TMP-wfgkuwyf', 'Width of Web', 'number', 192, 193, 194, 195, 196, 0, 48, true, '', 'FormRight', 'Width of Web'),
('web.thickness', 'TMP-wfgkuwyf', 'Web Thickness', 'number', 5, 5.65, 6.3, 6.95, 7.6, 0, 49, true, '', 'FormRight', 'Web Thickness'),
('unit.weight', 'TMP-wfgkuwyf', 'Unit Weight (Kgm)', 'number', 28.2, 29.05, 29.9, 30.75, 31.6, 0, 50, true, '', 'FormRight', 'Unit Weight (Kgm)'),
('radius', 'TMP-wfgkuwyf', 'Radius', 'number', 0, 0, 8, 0, 0, 0, 51, true, '', 'FormRight', 'Radius'),
('web.off.center', 'TMP-wfgkuwyf', 'Web Off Center', 'number', -2.5, -1.25, 0, 1.25, 2.5, 0, 52, true, '', 'FormRight', 'Web Off Center'),
('os', 'TMP-wfgkuwyf', 'OS', 'number', 0, 0, 1.5, 0, 0, 0, 53, true, '', 'FormRight', 'OS'),
('cow', 'TMP-wfgkuwyf', 'CoW', 'number', 0, 0, 0, 0, 0, 2, 54, true, '', 'FormRight', 'CoW');

INSERT INTO qc_template_mapping (mapping_id, qc_template_id, group_name, position, order_numb) VALUES
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfgkuwyf', 'Width of Web', 'H-Top', 0),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfgkuwyf', 'Width of Web', 'H-Bottom', 1),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfgkuwyf', 'Height of Flange', 'B1', 0),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfgkuwyf', 'Height of Flange', 'B2', 1),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfgkuwyf', 'Flange Thickness', 't1', 0),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfgkuwyf', 'Flange Thickness', 't2', 1),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfgkuwyf', 'Flange Thickness', 't3', 2),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfgkuwyf', 'Flange Thickness', 't4', 3),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfgkuwyf', 'Web Thickness', 't5', 0),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfgkuwyf', 'Web Thickness', 't6', 1),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfgkuwyf', 'Web Thickness', 't7', 2),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfgkuwyf', 'Web Off Center', 'b1', 3),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfgkuwyf', 'Web Off Center', 'b2', 4),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfgkuwyf', 'Web Off Center', 'b3', 5),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfgkuwyf', 'Web Off Center', 'b4', 6),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfgkuwyf', 'Web Off Center', 'b1-b2/2', 7),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfgkuwyf', 'Web Off Center', 'b3-b4/2', 8),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfgkuwyf', 'Radius', '', 0),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfgkuwyf', 'CoW', '', 0),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfgkuwyf', 'OS', '', 0),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wfgkuwyf', 'Unit Weight (Kgm)', '', 0);