-- Template wf-beam WF 400X200X8X13
INSERT INTO qc_template (qc_template_id, prodtype_id, size_id, profile, std_dimention, brand_merek, specification, name, status, created_by, created_dt, updated_by, updated_dt) VALUES
('TMP-wfrhheuj', 'WF-BEAM', 'WF 400X200X8X13', 'WF 400X200X8X13', '400X200X8X13', 'WF-BEAM 400X200X8X13', 'WF 400X200X8X13', 'Template WF-BEAM 400X200X8X13', 'active', 'Akun Testing Manajer', '2025-11-08 13:00:00', 'Akun Testing Manajer', '2025-11-08 13:00:00');

INSERT INTO qc_template_data (input_code, qc_template_id, label, input_type, min_tolerance, t_lt_50_tolerance, nominal_tolerance, t_gt_50_tolerance, max_tolerance, actual_tolerance, order_numb, enabled, sound, position, group_name) VALUES
-- H-Top (1-3) - Widht of Web = Tinggi Web
('H.H-top', 'TMP-wfrhheuj', 'H(H-top)', 'number', 397, 398.5, 400, 401.5, 403, NULL, 1, true, '', 'H-Top', 'table'),
('C.H-top', 'TMP-wfrhheuj', 'C(H-top)', 'number', 397, 398.5, 400, 401.5, 403, NULL, 2, true, '', 'H-Top', 'table'),
('T.H-top', 'TMP-wfrhheuj', 'T(H-top)', 'number', 397, 398.5, 400, 401.5, 403, NULL, 3, true, '', 'H-Top', 'table'),

-- H-Bottom (4-6) - Widht of Web = Tinggi Web
('H.H-bottom', 'TMP-wfrhheuj', 'H(H-bottom)', 'number', 397, 398.5, 400, 401.5, 403, NULL, 4, true, '', 'H-Bottom', 'table'),
('C.H-bottom', 'TMP-wfrhheuj', 'C(H-bottom)', 'number', 397, 398.5, 400, 401.5, 403, NULL, 5, true, '', 'H-Bottom', 'table'),
('T.H-bottom', 'TMP-wfrhheuj', 'T(H-bottom)', 'number', 397, 398.5, 400, 401.5, 403, NULL, 6, true, '', 'H-Bottom', 'table'),

-- B1 (7-9) - Heigh of Flange = Lebar Kaki
('H.B1', 'TMP-wfrhheuj', 'H(B1)', 'number', 197, 198.5, 200, 201.5, 203, NULL, 7, true, '', 'B1', 'table'),
('C.B1', 'TMP-wfrhheuj', 'C(B1)', 'number', 197, 198.5, 200, 201.5, 203, NULL, 8, true, '', 'B1', 'table'),
('T.B1', 'TMP-wfrhheuj', 'T(B1)', 'number', 197, 198.5, 200, 201.5, 203, NULL, 9, true, '', 'B1', 'table'),

-- B2 (10-12) - Heigh of Flange = Lebar Kaki 
('H.B2', 'TMP-wfrhheuj', 'H(B2)', 'number', 197, 198.5, 200, 201.5, 203, NULL, 10, true, '', 'B2', 'table'),
('C.B2', 'TMP-wfrhheuj', 'C(B2)', 'number', 197, 198.5, 200, 201.5, 203, NULL, 11, true, '', 'B2', 'table'),
('T.B2', 'TMP-wfrhheuj', 'T(B2)', 'number', 197, 198.5, 200, 201.5, 203, NULL, 12, true, '', 'B2', 'table'),

-- b1 (13-15) - Flange Thicknees = Tebal Kaki
('H.b1', 'TMP-wfrhheuj', 'H(b1)', 'number', 12, 12.5, 13, 13.5, 14, NULL, 13, true, '', 'b1', 'table'),
('C.b1', 'TMP-wfrhheuj', 'C(b1)', 'number', 12, 12.5, 13, 13.5, 14, NULL, 14, true, '', 'b1', 'table'),
('T.b1', 'TMP-wfrhheuj', 'T(b1)', 'number', 12, 12.5, 13, 13.5, 14, NULL, 15, true, '', 'b1', 'table'),

-- b3 (16-18) - Flange Thicknees = Tebal Kaki
('H.b3', 'TMP-wfrhheuj', 'H(b3)', 'number', 12, 12.5, 13, 13.5, 14, NULL, 16, true, '', 'b3', 'table'),
('C.b3', 'TMP-wfrhheuj', 'C(b3)', 'number', 12, 12.5, 13, 13.5, 14, NULL, 17, true, '', 'b3', 'table'),
('T.b3', 'TMP-wfrhheuj', 'T(b3)', 'number', 12, 12.5, 13, 13.5, 14, NULL, 18, true, '', 'b3', 'table'),

-- b2 (19-21) - Flange Thicknees = Tebal Kaki
('H.b2', 'TMP-wfrhheuj', 'H(b2)', 'number', 12, 12.5, 13, 13.5, 14, NULL, 19, true, '', 'b2', 'table'),
('C.b2', 'TMP-wfrhheuj', 'C(b2)', 'number', 12, 12.5, 13, 13.5, 14, NULL, 20, true, '', 'b2', 'table'),
('T.b2', 'TMP-wfrhheuj', 'T(b2)', 'number', 12, 12.5, 13, 13.5, 14, NULL, 21, true, '', 'b2', 'table'),

-- b4 (22-24) - Flange Thicknees = Tebal Kaki
('H.b4', 'TMP-wfrhheuj', 'H(b4)', 'number', 12, 12.5, 13, 13.5, 14, NULL, 22, true, '', 'b4', 'table'),
('C.b4', 'TMP-wfrhheuj', 'C(b4)', 'number', 12, 12.5, 13, 13.5, 14, NULL, 23, true, '', 'b4', 'table'),
('T.b4', 'TMP-wfrhheuj', 'T(b4)', 'number', 12, 12.5, 13, 13.5, 14, NULL, 24, true, '', 'b4', 'table'),

-- b1-b2/2 (25-27) - Web of Center = WOC
('H.b1-b2/2', 'TMP-wfrhheuj', 'H(b1-b2/2)', 'number', -3.5, -1.75, 0, 1.75, 3.5, NULL, 25, true, '', 'b1-b2/2', 'table'),
('C.b1-b2/2', 'TMP-wfrhheuj', 'C(b1-b2/2)', 'number', -3.5, -1.75, 0, 1.75, 3.5, NULL, 26, true, '', 'b1-b2/2', 'table'),
('T.b1-b2/2', 'TMP-wfrhheuj', 'T(b1-b2/2)', 'number', -3.5, -1.75, 0, 1.75, 3.5, NULL, 27, true, '', 'b1-b2/2', 'table'),

-- b3-b4/2 (28-30) - Web of Center = WOC
('H.b3-b4/2', 'TMP-wfrhheuj', 'H(b3-b4/2)', 'number', -3.5, -1.75, 0, 1.75, 3.5, NULL, 28, true, '', 'b3-b4/2', 'table'),
('C.b3-b4/2', 'TMP-wfrhheuj', 'C(b3-b4/2)', 'number', -3.5, -1.75, 0, 1.75, 3.5, NULL, 29, true, '', 'b3-b4/2', 'table'),
('T.b3-b4/2', 'TMP-wfrhheuj', 'T(b3-b4/2)', 'number', -3.5, -1.75, 0, 1.75, 3.5, NULL, 30, true, '', 'b3-b4/2', 'table'),

-- t1 (31-33) - Flange Thickness
('H.t1', 'TMP-wfrhheuj', 'H(t1)', 'number', 12, 12.5, 13, 13.5, 14, NULL, 31, true, '', 't1', 'table'),
('C.t1', 'TMP-wfrhheuj', 'C(t1)', 'number', 12, 12.5, 13, 13.5, 14, NULL, 32, true, '', 't1', 'table'),
('T.t1', 'TMP-wfrhheuj', 'T(t1)', 'number', 12, 12.5, 13, 13.5, 14, NULL, 33, true, '', 't1', 'table'),

-- t3 (34-36) - Flange Thicknees = Tebal Kaki
('H.t3', 'TMP-wfrhheuj', 'H(t3)', 'number', 12, 12.5, 13, 13.5, 14, NULL, 34, true, '', 't3', 'table'),
('C.t3', 'TMP-wfrhheuj', 'C(t3)', 'number', 12, 12.5, 13, 13.5, 14, NULL, 35, true, '', 't3', 'table'),
('T.t3', 'TMP-wfrhheuj', 'T(t3)', 'number', 12, 12.5, 13, 13.5, 14, NULL, 36, true, '', 't3', 'table'),

-- t2 (37-39) - Flange Thicknees = Tebal Kaki
('H.t2', 'TMP-wfrhheuj', 'H(t2)', 'number', 12, 12.5, 13, 13.5, 14, NULL, 37, true, '', 't2', 'table'),
('C.t2', 'TMP-wfrhheuj', 'C(t2)', 'number', 12, 12.5, 13, 13.5, 14, NULL, 38, true, '', 't2', 'table'),
('T.t2', 'TMP-wfrhheuj', 'T(t2)', 'number', 12, 12.5, 13, 13.5, 14, NULL, 39, true, '', 't2', 'table'),

-- t4 (40-42) - Flange Thicknees = Tebal Kaki
('H.t4', 'TMP-wfrhheuj', 'H(t4)', 'number', 12, 12.5, 13, 13.5, 14, NULL, 40, true, '', 't4', 'table'),
('C.t4', 'TMP-wfrhheuj', 'C(t4)', 'number', 12, 12.5, 13, 13.5, 14, NULL, 41, true, '', 't4', 'table'),
('T.t4', 'TMP-wfrhheuj', 'T(t4)', 'number', 12, 12.5, 13, 13.5, 14, NULL, 42, true, '', 't4', 'table'),

-- t5 (43-45) - Web Thicknees = Tebal Web
('H.t5', 'TMP-wfrhheuj', 'H(t5)', 'number', 7.3, 7.65, 8, 8.35, 8.7, NULL, 43, true, '', 't5', 'table'),
('C.t5', 'TMP-wfrhheuj', 'C(t5)', 'number', 7.3, 7.65, 8, 8.35, 8.7, NULL, 44, true, '', 't5', 'table'),
('T.t5', 'TMP-wfrhheuj', 'T(t5)', 'number', 7.3, 7.65, 8, 8.35, 8.7, NULL, 45, true, '', 't5', 'table'),

-- t6 (NULL) - Web Thicknees = Tebal Web - order_numb NULL
('H.t6', 'TMP-wfrhheuj', 'H(t6)', 'number', 7.3, 7.65, 8, 8.35, 8.7, NULL, NULL, true, '', 't6', 'table'),
('C.t6', 'TMP-wfrhheuj', 'C(t6)', 'number', 7.3, 7.65, 8, 8.35, 8.7, NULL, NULL, true, '', 't6', 'table'),
('T.t6', 'TMP-wfrhheuj', 'T(t6)', 'number', 7.3, 7.65, 8, 8.35, 8.7, NULL, NULL, true, '', 't6', 'table'),

-- t7 (NULL) - Web Thicknees = Tebal Web - order_numb NULL
('H.t7', 'TMP-wfrhheuj', 'H(t7)', 'number', 7.3, 7.65, 8, 8.35, 8.7, NULL, NULL, true, '', 't7', 'table'),
('C.t7', 'TMP-wfrhheuj', 'C(t7)', 'number', 7.3, 7.65, 8, 8.35, 8.7, NULL, NULL, true, '', 't7', 'table'),
('T.t7', 'TMP-wfrhheuj', 'T(t7)', 'number', 7.3, 7.65, 8, 8.35, 8.7, NULL, NULL, true, '', 't7', 'table'),

-- FormRight (46-54)
('height.of.flange', 'TMP-wfrhheuj', 'Height of Flange', 'number', 197, 198.5, 200, 201.5, 203, 0, 46, true, '', 'FormRight', 'Height of Flange'),
('flange.thickness', 'TMP-wfrhheuj', 'Flange Thickness', 'number', 12, 12.5, 13, 13.5, 14, 0, 47, true, '', 'FormRight', 'Flange Thickness'),
('width.of.web', 'TMP-wfrhheuj', 'Width of Web', 'number', 397, 398.5, 400, 401.5, 403, 0, 48, true, '', 'FormRight', 'Width of Web'),
('web.thickness', 'TMP-wfrhheuj', 'Web Thickness', 'number', 7.3, 7.65, 8, 8.35, 8.7, 0, 49, true, '', 'FormRight', 'Web Thickness'),
('unit.weight', 'TMP-wfrhheuj', 'Unit Weight (Kgm)', 'number', 62.8, 64.1, 65.4, 66.7, 68.0, 0, 50, true, '', 'FormRight', 'Unit Weight (Kgm)'),
('radius', 'TMP-wfrhheuj', 'Radius', 'number', 0, 0, 13, 0, 0, 0, 51, true, '', 'FormRight', 'Radius'),
('web.off.center', 'TMP-wfrhheuj', 'Web Off Center', 'number', -3.5, -1.75, 0, 1.75, 3.5, 0, 52, true, '', 'FormRight', 'Web Off Center'),
('os', 'TMP-wfrhheuj', 'OS', 'number', 0, 0, 2.4, 0, 0, 0, 53, true, '', 'FormRight', 'OS'),
('cow', 'TMP-wfrhheuj', 'CoW', 'number', 0, 0, 0, 0, 0, 2.5, 54, true, '', 'FormRight', 'CoW');

INSERT INTO qc_template_mapping (mapping_id, qc_template_id, group_name, position, order_numb) VALUES
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfrhheuj', 'Width of Web', 'H-Top', 0),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfrhheuj', 'Width of Web', 'H-Bottom', 1),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfrhheuj', 'Height of Flange', 'B1', 0),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfrhheuj', 'Height of Flange', 'B2', 1),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfrhheuj', 'Flange Thickness', 't1', 0),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfrhheuj', 'Flange Thickness', 't2', 1),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfrhheuj', 'Flange Thickness', 't3', 2),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfrhheuj', 'Flange Thickness', 't4', 3),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfrhheuj', 'Flange Thickness', 'b1', 4),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfrhheuj', 'Flange Thickness', 'b2', 5),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfrhheuj', 'Flange Thickness', 'b3', 6),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfrhheuj', 'Flange Thickness', 'b4', 7),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfrhheuj', 'Web Thickness', 't5', 0),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfrhheuj', 'Web Thickness', 't6', 1),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfrhheuj', 'Web Thickness', 't7', 2),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfrhheuj', 'Web Off Center', 'b1-b2/2', 0),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfrhheuj', 'Web Off Center', 'b3-b4/2', 1),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfrhheuj', 'Radius', '', 0),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfrhheuj', 'CoW', '', 0),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfrhheuj', 'OS', '', 0),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfrhheuj', 'Unit Weight (Kgm)', '', 0);