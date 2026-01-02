-- Template wf-beam WF 200X100X5.5X8
INSERT INTO qc_template (qc_template_id, prodtype_id, size_id, profile, std_dimention, brand_merek, specification, name, status, created_by, created_dt, updated_by, updated_dt) VALUES
('TMP-wffjtxwe', 'WF-BEAM', 'WF 200X100X5.5X8', 'WF 200X100X5.5X8', '200X100X5.5X8', 'WF-BEAM 200X100X5.5X8', 'WF 200X100X5.5X8', 'Template WF-BEAM 200X100X5.5X8', 'active', 'Akun Testing Manajer', '2025-11-08 13:00:00', 'Akun Testing Manajer', '2025-11-08 13:00:00');

INSERT INTO qc_template_data (input_code, qc_template_id, label, input_type, min_tolerance, t_lt_50_tolerance, nominal_tolerance, t_gt_50_tolerance, max_tolerance, actual_tolerance, order_numb, enabled, sound, position, group_name) VALUES
-- H-Top (1-3) - Width of Web
('H.H-top', 'TMP-wffjtxwe', 'H(H-top)', 'number', 198, 199, 200, 201, 202, NULL, 1, true, '', 'H-Top', 'table'),
('C.H-top', 'TMP-wffjtxwe', 'C(H-top)', 'number', 198, 199, 200, 201, 202, NULL, 2, true, '', 'H-Top', 'table'),
('T.H-top', 'TMP-wffjtxwe', 'T(H-top)', 'number', 198, 199, 200, 201, 202, NULL, 3, true, '', 'H-Top', 'table'),

-- H-Bottom (4-6) - Width of Web
('H.H-bottom', 'TMP-wffjtxwe', 'H(H-bottom)', 'number', 198, 199, 200, 201, 202, NULL, 4, true, '', 'H-Bottom', 'table'),
('C.H-bottom', 'TMP-wffjtxwe', 'C(H-bottom)', 'number', 198, 199, 200, 201, 202, NULL, 5, true, '', 'H-Bottom', 'table'),
('T.H-bottom', 'TMP-wffjtxwe', 'T(H-bottom)', 'number', 198, 199, 200, 201, 202, NULL, 6, true, '', 'H-Bottom', 'table'),

-- B1 (7-9) - Height of Flange
('H.B1', 'TMP-wffjtxwe', 'H(B1)', 'number', 97.5, 98.75, 100, 101.25, 102.5, NULL, 7, true, '', 'B1', 'table'),
('C.B1', 'TMP-wffjtxwe', 'C(B1)', 'number', 97.5, 98.75, 100, 101.25, 102.5, NULL, 8, true, '', 'B1', 'table'),
('T.B1', 'TMP-wffjtxwe', 'T(B1)', 'number', 97.5, 98.75, 100, 101.25, 102.5, NULL, 9, true, '', 'B1', 'table'),

-- B2 (10-12) - Height of Flange
('H.B2', 'TMP-wffjtxwe', 'H(B2)', 'number', 97.5, 98.75, 100, 101.25, 102.5, NULL, 10, true, '', 'B2', 'table'),
('C.B2', 'TMP-wffjtxwe', 'C(B2)', 'number', 97.5, 98.75, 100, 101.25, 102.5, NULL, 11, true, '', 'B2', 'table'),
('T.B2', 'TMP-wffjtxwe', 'T(B2)', 'number', 97.5, 98.75, 100, 101.25, 102.5, NULL, 12, true, '', 'B2', 'table'),

-- b1 (13-15) - Web Off Center (dengan tolerance serupa FormRight Web Off Center)
('H.b1', 'TMP-wffjtxwe', 'H(b1)', 'number', -2.5, -1.25, 0, 1.25, 2.5, NULL, 13, true, '', 'b1', 'table'),
('C.b1', 'TMP-wffjtxwe', 'C(b1)', 'number', -2.5, -1.25, 0, 1.25, 2.5, NULL, 14, true, '', 'b1', 'table'),
('T.b1', 'TMP-wffjtxwe', 'T(b1)', 'number', -2.5, -1.25, 0, 1.25, 2.5, NULL, 15, true, '', 'b1', 'table'),

-- b3 (16-18) - Web Off Center (dengan tolerance serupa FormRight Web Off Center)
('H.b3', 'TMP-wffjtxwe', 'H(b3)', 'number', -2.5, -1.25, 0, 1.25, 2.5, NULL, 16, true, '', 'b3', 'table'),
('C.b3', 'TMP-wffjtxwe', 'C(b3)', 'number', -2.5, -1.25, 0, 1.25, 2.5, NULL, 17, true, '', 'b3', 'table'),
('T.b3', 'TMP-wffjtxwe', 'T(b3)', 'number', -2.5, -1.25, 0, 1.25, 2.5, NULL, 18, true, '', 'b3', 'table'),

-- b2 (19-21) - Web Off Center (dengan tolerance serupa FormRight Web Off Center)
('H.b2', 'TMP-wffjtxwe', 'H(b2)', 'number', -2.5, -1.25, 0, 1.25, 2.5, NULL, 19, true, '', 'b2', 'table'),
('C.b2', 'TMP-wffjtxwe', 'C(b2)', 'number', -2.5, -1.25, 0, 1.25, 2.5, NULL, 20, true, '', 'b2', 'table'),
('T.b2', 'TMP-wffjtxwe', 'T(b2)', 'number', -2.5, -1.25, 0, 1.25, 2.5, NULL, 21, true, '', 'b2', 'table'),

-- b4 (22-24) - Web Off Center (dengan tolerance serupa FormRight Web Off Center)
('H.b4', 'TMP-wffjtxwe', 'H(b4)', 'number', -2.5, -1.25, 0, 1.25, 2.5, NULL, 22, true, '', 'b4', 'table'),
('C.b4', 'TMP-wffjtxwe', 'C(b4)', 'number', -2.5, -1.25, 0, 1.25, 2.5, NULL, 23, true, '', 'b4', 'table'),
('T.b4', 'TMP-wffjtxwe', 'T(b4)', 'number', -2.5, -1.25, 0, 1.25, 2.5, NULL, 24, true, '', 'b4', 'table'),

-- b1-b2/2 (25-27) - Web Off Center
('H.b1-b2/2', 'TMP-wffjtxwe', 'H(b1-b2/2)', 'number', -2.5, -1.25, 0, 1.25, 2.5, NULL, 25, true, '', 'b1-b2/2', 'table'),
('C.b1-b2/2', 'TMP-wffjtxwe', 'C(b1-b2/2)', 'number', -2.5, -1.25, 0, 1.25, 2.5, NULL, 26, true, '', 'b1-b2/2', 'table'),
('T.b1-b2/2', 'TMP-wffjtxwe', 'T(b1-b2/2)', 'number', -2.5, -1.25, 0, 1.25, 2.5, NULL, 27, true, '', 'b1-b2/2', 'table'),

-- b3-b4/2 (28-30) - Web Off Center
('H.b3-b4/2', 'TMP-wffjtxwe', 'H(b3-b4/2)', 'number', -2.5, -1.25, 0, 1.25, 2.5, NULL, 28, true, '', 'b3-b4/2', 'table'),
('C.b3-b4/2', 'TMP-wffjtxwe', 'C(b3-b4/2)', 'number', -2.5, -1.25, 0, 1.25, 2.5, NULL, 29, true, '', 'b3-b4/2', 'table'),
('T.b3-b4/2', 'TMP-wffjtxwe', 'T(b3-b4/2)', 'number', -2.5, -1.25, 0, 1.25, 2.5, NULL, 30, true, '', 'b3-b4/2', 'table'),

-- t1 (31-33) - Flange Thickness
('H.t1', 'TMP-wffjtxwe', 'H(t1)', 'number', 6.5, 7.25, 8, 8.75, 9.5, NULL, 31, true, '', 't1', 'table'),
('C.t1', 'TMP-wffjtxwe', 'C(t1)', 'number', 6.5, 7.25, 8, 8.75, 9.5, NULL, 32, true, '', 't1', 'table'),
('T.t1', 'TMP-wffjtxwe', 'T(t1)', 'number', 6.5, 7.25, 8, 8.75, 9.5, NULL, 33, true, '', 't1', 'table'),

-- t3 (34-36) - Flange Thickness
('H.t3', 'TMP-wffjtxwe', 'H(t3)', 'number', 6.5, 7.25, 8, 8.75, 9.5, NULL, 34, true, '', 't3', 'table'),
('C.t3', 'TMP-wffjtxwe', 'C(t3)', 'number', 6.5, 7.25, 8, 8.75, 9.5, NULL, 35, true, '', 't3', 'table'),
('T.t3', 'TMP-wffjtxwe', 'T(t3)', 'number', 6.5, 7.25, 8, 8.75, 9.5, NULL, 36, true, '', 't3', 'table'),

-- t2 (37-39) - Flange Thickness
('H.t2', 'TMP-wffjtxwe', 'H(t2)', 'number', 6.5, 7.25, 8, 8.75, 9.5, NULL, 37, true, '', 't2', 'table'),
('C.t2', 'TMP-wffjtxwe', 'C(t2)', 'number', 6.5, 7.25, 8, 8.75, 9.5, NULL, 38, true, '', 't2', 'table'),
('T.t2', 'TMP-wffjtxwe', 'T(t2)', 'number', 6.5, 7.25, 8, 8.75, 9.5, NULL, 39, true, '', 't2', 'table'),

-- t4 (40-42) - Flange Thickness
('H.t4', 'TMP-wffjtxwe', 'H(t4)', 'number', 6.5, 7.25, 8, 8.75, 9.5, NULL, 40, true, '', 't4', 'table'),
('C.t4', 'TMP-wffjtxwe', 'C(t4)', 'number', 6.5, 7.25, 8, 8.75, 9.5, NULL, 41, true, '', 't4', 'table'),
('T.t4', 'TMP-wffjtxwe', 'T(t4)', 'number', 6.5, 7.25, 8, 8.75, 9.5, NULL, 42, true, '', 't4', 'table'),

-- t5 (43-45) - Web Thickness
('H.t5', 'TMP-wffjtxwe', 'H(t5)', 'number', 4.5, 5.15, 5.8, 6.45, 7.1, NULL, 43, true, '', 't5', 'table'),
('C.t5', 'TMP-wffjtxwe', 'C(t5)', 'number', 4.5, 5.15, 5.8, 6.45, 7.1, NULL, 44, true, '', 't5', 'table'),
('T.t5', 'TMP-wffjtxwe', 'T(t5)', 'number', 4.5, 5.15, 5.8, 6.45, 7.1, NULL, 45, true, '', 't5', 'table'),

-- t6 (NULL) - Web Thickness dengan order_numb NULL
('H.t6', 'TMP-wffjtxwe', 'H(t6)', 'number', 4.5, 5.15, 5.8, 6.45, 7.1, NULL, NULL, true, '', 't6', 'table'),
('C.t6', 'TMP-wffjtxwe', 'C(t6)', 'number', 4.5, 5.15, 5.8, 6.45, 7.1, NULL, NULL, true, '', 't6', 'table'),
('T.t6', 'TMP-wffjtxwe', 'T(t6)', 'number', 4.5, 5.15, 5.8, 6.45, 7.1, NULL, NULL, true, '', 't6', 'table'),

-- t7 (NULL) - Web Thickness dengan order_numb NULL
('H.t7', 'TMP-wffjtxwe', 'H(t7)', 'number', 4.5, 5.15, 5.8, 6.45, 7.1, NULL, NULL, true, '', 't7', 'table'),
('C.t7', 'TMP-wffjtxwe', 'C(t7)', 'number', 4.5, 5.15, 5.8, 6.45, 7.1, NULL, NULL, true, '', 't7', 'table'),
('T.t7', 'TMP-wffjtxwe', 'T(t7)', 'number', 4.5, 5.15, 5.8, 6.45, 7.1, NULL, NULL, true, '', 't7', 'table'),

-- FormRight (46-54)
('height.of.flange', 'TMP-wffjtxwe', 'Height of Flange', 'number', 97.5, 98.75, 100, 101.25, 102.5, 0, 46, true, '', 'FormRight', 'Height of Flange'),
('flange.thickness', 'TMP-wffjtxwe', 'Flange Thickness', 'number', 6.5, 7.25, 8, 8.75, 9.5, 0, 47, true, '', 'FormRight', 'Flange Thickness'),
('width.of.web', 'TMP-wffjtxwe', 'Width of Web', 'number', 198, 199, 200, 201, 202, 0, 48, true, '', 'FormRight', 'Width of Web'),
('web.thickness', 'TMP-wffjtxwe', 'Web Thickness', 'number', 4.5, 5.15, 5.8, 6.45, 7.1, 0, 49, true, '', 'FormRight', 'Web Thickness'),
('unit.weight', 'TMP-wffjtxwe', 'Unit Weight (Kgm)', 'number', 19.7, 20.3, 20.9, 21.5, 22.1, 0, 50, true, '', 'FormRight', 'Unit Weight (Kgm)'),
('radius', 'TMP-wffjtxwe', 'Radius', 'number', 0, 0, 8, 0, 0, 0, 51, true, '', 'FormRight', 'Radius'),
('web.off.center', 'TMP-wffjtxwe', 'Web Off Center', 'number', -2.5, -1.25, 0, 1.25, 2.5, 0, 52, true, '', 'FormRight', 'Web Off Center'),
('os', 'TMP-wffjtxwe', 'OS', 'number', 0, 0, 1.5, 0, 0, 0, 53, true, '', 'FormRight', 'OS'),
('cow', 'TMP-wffjtxwe', 'CoW', 'number', 0, 0, 0, 0, 0, 2, 54, true, '', 'FormRight', 'CoW');

INSERT INTO qc_template_mapping (mapping_id, qc_template_id, group_name, position, order_numb) VALUES
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wffjtxwe', 'Width of Web', 'H-Top', 0),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wffjtxwe', 'Width of Web', 'H-Bottom', 1),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wffjtxwe', 'Height of Flange', 'B1', 0),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wffjtxwe', 'Height of Flange', 'B2', 1),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wffjtxwe', 'Flange Thickness', 't1', 0),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wffjtxwe', 'Flange Thickness', 't2', 1),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wffjtxwe', 'Flange Thickness', 't3', 2),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wffjtxwe', 'Flange Thickness', 't4', 3),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wffjtxwe', 'Web Thickness', 't5', 0),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wffjtxwe', 'Web Thickness', 't6', 1),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wffjtxwe', 'Web Thickness', 't7', 2),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wffjtxwe', 'Web Off Center', 'b1', 3),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wffjtxwe', 'Web Off Center', 'b2', 4),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wffjtxwe', 'Web Off Center', 'b3', 5),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wffjtxwe', 'Web Off Center', 'b4', 6),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wffjtxwe', 'Web Off Center', 'b1-b2/2', 7),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wffjtxwe', 'Web Off Center', 'b3-b4/2', 8),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wffjtxwe', 'Radius', '', 0),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wffjtxwe', 'CoW', '', 0),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wffjtxwe', 'OS', '', 0),
(concat('MAP', LEFT(gen_random_uuid()::text, 8)), 'TMP-wffjtxwe', 'Unit Weight (Kgm)', '', 0);