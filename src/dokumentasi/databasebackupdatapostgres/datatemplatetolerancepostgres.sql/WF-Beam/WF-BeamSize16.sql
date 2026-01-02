-- Template wf-beam WF 340X250X9X14
INSERT INTO qc_template (qc_template_id, prodtype_id, size_id, profile, std_dimention, brand_merek, specification, name, status, created_by, created_dt, updated_by, updated_dt) VALUES
('TMP-wfpgfdbh','WF-BEAM','WF 340X250X9X14','WF 340X250X9X14','340X250X9X14','WF-BEAM 340X250X9X14','WF 340X250X9X14','Template WF-BEAM 340X250X9X14','active','Akun Testing Manajer','2025-11-08 13:00:00','Akun Testing Manajer','2025-11-08 13:00:00');

INSERT INTO qc_template_data (input_code, qc_template_id, label, input_type, min_tolerance, t_lt_50_tolerance, nominal_tolerance, t_gt_50_tolerance, max_tolerance, actual_tolerance, order_numb, enabled, sound, position, group_name) VALUES
-- H-Top (1-3) - Width of Web (Tinggi Web)
('H.H-top','TMP-wfpgfdbh','H(H-top)','number',338,339,340,341,342,NULL,1,true,NULL,'H-Top','table'),
('C.H-top','TMP-wfpgfdbh','C(H-top)','number',338,339,340,341,342,NULL,2,true,NULL,'H-Top','table'),
('T.H-top','TMP-wfpgfdbh','T(H-top)','number',338,339,340,341,342,NULL,3,true,NULL,'H-Top','table'),

-- H-Bottom (4-6) - Width of Web (Tinggi Web)
('H.H-bottom','TMP-wfpgfdbh','H(H-bottom)','number',338,339,340,341,342,NULL,4,true,NULL,'H-Bottom','table'),
('C.H-bottom','TMP-wfpgfdbh','C(H-bottom)','number',338,339,340,341,342,NULL,5,true,NULL,'H-Bottom','table'),
('T.H-bottom','TMP-wfpgfdbh','T(H-bottom)','number',338,339,340,341,342,NULL,6,true,NULL,'H-Bottom','table'),

-- B1 (7-9) - Height of Flange (Lebar Kaki)
('H.B1','TMP-wfpgfdbh','H(B1)','number',247,248.5,250,251.5,253,NULL,7,true,NULL,'B1','table'),
('C.B1','TMP-wfpgfdbh','C(B1)','number',247,248.5,250,251.5,253,NULL,8,true,NULL,'B1','table'),
('T.B1','TMP-wfpgfdbh','T(B1)','number',247,248.5,250,251.5,253,NULL,9,true,NULL,'B1','table'),

-- B2 (10-12) - Height of Flange (Lebar Kaki)
('H.B2','TMP-wfpgfdbh','H(B2)','number',247,248.5,250,251.5,253,NULL,10,true,NULL,'B2','table'),
('C.B2','TMP-wfpgfdbh','C(B2)','number',247,248.5,250,251.5,253,NULL,11,true,NULL,'B2','table'),
('T.B2','TMP-wfpgfdbh','T(B2)','number',247,248.5,250,251.5,253,NULL,12,true,NULL,'B2','table'),

-- b1 (13-15) - Web Off Center (toleransi serupa dengan FormRight Web Off Center: -3.5, -1.75, 0, 1.75, 3.5)
('H.b1','TMP-wfpgfdbh','H(b1)','number',-3.5,-1.75,0,1.75,3.5,NULL,13,true,NULL,'b1','table'),
('C.b1','TMP-wfpgfdbh','C(b1)','number',-3.5,-1.75,0,1.75,3.5,NULL,14,true,NULL,'b1','table'),
('T.b1','TMP-wfpgfdbh','T(b1)','number',-3.5,-1.75,0,1.75,3.5,NULL,15,true,NULL,'b1','table'),

-- b3 (16-18) - Web Off Center (toleransi serupa dengan FormRight Web Off Center)
('H.b3','TMP-wfpgfdbh','H(b3)','number',-3.5,-1.75,0,1.75,3.5,NULL,16,true,NULL,'b3','table'),
('C.b3','TMP-wfpgfdbh','C(b3)','number',-3.5,-1.75,0,1.75,3.5,NULL,17,true,NULL,'b3','table'),
('T.b3','TMP-wfpgfdbh','T(b3)','number',-3.5,-1.75,0,1.75,3.5,NULL,18,true,NULL,'b3','table'),

-- b2 (19-21) - Web Off Center (toleransi serupa dengan FormRight Web Off Center)
('H.b2','TMP-wfpgfdbh','H(b2)','number',-3.5,-1.75,0,1.75,3.5,NULL,19,true,NULL,'b2','table'),
('C.b2','TMP-wfpgfdbh','C(b2)','number',-3.5,-1.75,0,1.75,3.5,NULL,20,true,NULL,'b2','table'),
('T.b2','TMP-wfpgfdbh','T(b2)','number',-3.5,-1.75,0,1.75,3.5,NULL,21,true,NULL,'b2','table'),

-- b4 (22-24) - Web Off Center (toleransi serupa dengan FormRight Web Off Center)
('H.b4','TMP-wfpgfdbh','H(b4)','number',-3.5,-1.75,0,1.75,3.5,NULL,22,true,NULL,'b4','table'),
('C.b4','TMP-wfpgfdbh','C(b4)','number',-3.5,-1.75,0,1.75,3.5,NULL,23,true,NULL,'b4','table'),
('T.b4','TMP-wfpgfdbh','T(b4)','number',-3.5,-1.75,0,1.75,3.5,NULL,24,true,NULL,'b4','table'),

-- b1-b2/2 (25-27) - Web Off Center (WOC)
('H.b1-b2/2','TMP-wfpgfdbh','H(b1-b2/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,25,true,NULL,'b1-b2/2','table'),
('C.b1-b2/2','TMP-wfpgfdbh','C(b1-b2/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,26,true,NULL,'b1-b2/2','table'),
('T.b1-b2/2','TMP-wfpgfdbh','T(b1-b2/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,27,true,NULL,'b1-b2/2','table'),

-- b3-b4/2 (28-30) - Web Off Center (WOC)
('H.b3-b4/2','TMP-wfpgfdbh','H(b3-b4/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,28,true,NULL,'b3-b4/2','table'),
('C.b3-b4/2','TMP-wfpgfdbh','C(b3-b4/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,29,true,NULL,'b3-b4/2','table'),
('T.b3-b4/2','TMP-wfpgfdbh','T(b3-b4/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,30,true,NULL,'b3-b4/2','table'),

-- t1 (31-33) - Flange Thickness
('H.t1','TMP-wfpgfdbh','H(t1)','number',13,13.5,14,14.5,15,NULL,31,true,NULL,'t1','table'),
('C.t1','TMP-wfpgfdbh','C(t1)','number',13,13.5,14,14.5,15,NULL,32,true,NULL,'t1','table'),
('T.t1','TMP-wfpgfdbh','T(t1)','number',13,13.5,14,14.5,15,NULL,33,true,NULL,'t1','table'),

-- t3 (34-36) - Flange Thickness
('H.t3','TMP-wfpgfdbh','H(t3)','number',13,13.5,14,14.5,15,NULL,34,true,NULL,'t3','table'),
('C.t3','TMP-wfpgfdbh','C(t3)','number',13,13.5,14,14.5,15,NULL,35,true,NULL,'t3','table'),
('T.t3','TMP-wfpgfdbh','T(t3)','number',13,13.5,14,14.5,15,NULL,36,true,NULL,'t3','table'),

-- t2 (37-39) - Flange Thickness
('H.t2','TMP-wfpgfdbh','H(t2)','number',13,13.5,14,14.5,15,NULL,37,true,NULL,'t2','table'),
('C.t2','TMP-wfpgfdbh','C(t2)','number',13,13.5,14,14.5,15,NULL,38,true,NULL,'t2','table'),
('T.t2','TMP-wfpgfdbh','T(t2)','number',13,13.5,14,14.5,15,NULL,39,true,NULL,'t2','table'),

-- t4 (40-42) - Flange Thickness
('H.t4','TMP-wfpgfdbh','H(t4)','number',13,13.5,14,14.5,15,NULL,40,true,NULL,'t4','table'),
('C.t4','TMP-wfpgfdbh','C(t4)','number',13,13.5,14,14.5,15,NULL,41,true,NULL,'t4','table'),
('T.t4','TMP-wfpgfdbh','T(t4)','number',13,13.5,14,14.5,15,NULL,42,true,NULL,'t4','table'),

-- t5 (43-45) - Web Thickness (Tebal Web)
('H.t5','TMP-wfpgfdbh','H(t5)','number',8.3,8.65,9,9.35,9.7,NULL,43,true,NULL,'t5','table'),
('C.t5','TMP-wfpgfdbh','C(t5)','number',8.3,8.65,9,9.35,9.7,NULL,44,true,NULL,'t5','table'),
('T.t5','TMP-wfpgfdbh','T(t5)','number',8.3,8.65,9,9.35,9.7,NULL,45,true,NULL,'t5','table'),

-- t6 (NULL) - Web Thickness - order_numb NULL
('H.t6','TMP-wfpgfdbh','H(t6)','number',8.3,8.65,9,9.35,9.7,NULL,NULL,true,NULL,'t6','table'),
('C.t6','TMP-wfpgfdbh','C(t6)','number',8.3,8.65,9,9.35,9.7,NULL,NULL,true,NULL,'t6','table'),
('T.t6','TMP-wfpgfdbh','T(t6)','number',8.3,8.65,9,9.35,9.7,NULL,NULL,true,NULL,'t6','table'),

-- t7 (NULL) - Web Thickness - order_numb NULL
('H.t7','TMP-wfpgfdbh','H(t7)','number',8.3,8.65,9,9.35,9.7,NULL,NULL,true,NULL,'t7','table'),
('C.t7','TMP-wfpgfdbh','C(t7)','number',8.3,8.65,9,9.35,9.7,NULL,NULL,true,NULL,'t7','table'),
('T.t7','TMP-wfpgfdbh','T(t7)','number',8.3,8.65,9,9.35,9.7,NULL,NULL,true,NULL,'t7','table'),

-- FormRight (46-54)
('height.of.flange','TMP-wfpgfdbh','Height of Flange','number',247,248.5,250,251.5,253,0,46,true,NULL,'FormRight','Height of Flange'),
('flange.thickness','TMP-wfpgfdbh','Flange Thickness','number',13,13.5,14,14.5,15,0,47,true,NULL,'FormRight','Flange Thickness'),
('width.of.web','TMP-wfpgfdbh','Width of Web','number',338,339,340,341,342,0,48,true,NULL,'FormRight','Width of Web'),
('web.thickness','TMP-wfpgfdbh','Web Thickness','number',8.3,8.65,9,9.35,9.7,0,49,true,NULL,'FormRight','Web Thickness'),
('unit.weight','TMP-wfpgfdbh','Unit Weight (Kgm)','number',75.0,76.55,78.1,79.65,81.2,0,50,true,NULL,'FormRight','Unit Weight (Kgm)'),
('radius','TMP-wfpgfdbh','Radius','number',0,0,13,0,0,0,51,true,NULL,'FormRight','Radius'),
('web.off.center','TMP-wfpgfdbh','Web Off Center','number',-3.5,-1.75,0,1.75,3.5,0,52,true,NULL,'FormRight','Web Off Center'),
('os','TMP-wfpgfdbh','OS','number',0,0,3,0,0,0,53,true,NULL,'FormRight','OS'),
('cow','TMP-wfpgfdbh','CoW','number',0,0,0,0,0,2,54,true,NULL,'FormRight','CoW');

INSERT INTO qc_template_mapping (mapping_id, qc_template_id, group_name, position, order_numb) VALUES
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfpgfdbh', 'Width of Web', 'H-Top', 0),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfpgfdbh', 'Width of Web', 'H-Bottom', 1),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfpgfdbh', 'Height of Flange', 'B1', 0),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfpgfdbh', 'Height of Flange', 'B2', 1),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfpgfdbh', 'Flange Thickness', 't1', 0),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfpgfdbh', 'Flange Thickness', 't2', 1),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfpgfdbh', 'Flange Thickness', 't3', 2),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfpgfdbh', 'Flange Thickness', 't4', 3),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfpgfdbh', 'Web Thickness', 't5', 0),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfpgfdbh', 'Web Thickness', 't6', 1),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfpgfdbh', 'Web Thickness', 't7', 2),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfpgfdbh', 'Web Off Center', 'b1', 0),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfpgfdbh', 'Web Off Center', 'b2', 1),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfpgfdbh', 'Web Off Center', 'b3', 2),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfpgfdbh', 'Web Off Center', 'b4', 3),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfpgfdbh', 'Web Off Center', 'b1-b2/2', 4),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfpgfdbh', 'Web Off Center', 'b3-b4/2', 5),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfpgfdbh', 'Radius', '', 0),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfpgfdbh', 'CoW', '', 0),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfpgfdbh', 'OS', '', 0),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfpgfdbh', 'Unit Weight (Kgm)', '', 0);