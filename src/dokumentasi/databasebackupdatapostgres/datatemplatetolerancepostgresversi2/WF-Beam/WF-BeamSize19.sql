-- Template wf-beam WF 450X200X9X14
INSERT INTO qc_template (qc_template_id, prodtype_id, size_id, profile, std_dimention, brand_merek, specification, name, status, created_by, created_dt, updated_by, updated_dt) VALUES
('TMP-wfsiifvk','WF-BEAM','WF 450X200X9X14','WF 450X200X9X14','450X200X9X14','WF-BEAM 450X200X9X14','WF 450X200X9X14','Template WF-BEAM 450X200X9X14','active','Akun Testing Manajer','2025-11-08 13:00:00','Akun Testing Manajer','2025-11-08 13:00:00');

INSERT INTO qc_template_data (input_code, qc_template_id, label, input_type, min_tolerance, t_lt_50_tolerance, nominal_tolerance, t_gt_50_tolerance, max_tolerance, actual_tolerance, order_numb, enabled, sound, position, group_name) VALUES
-- H-Top (1-3) - Widht of Web = Tinggi Web
('H.H-top','TMP-wfsiifvk','H(H-top)','number',447,448.5,450,451.5,453,NULL,1,true,NULL,'H-Top','table'),
('C.H-top','TMP-wfsiifvk','C(H-top)','number',447,448.5,450,451.5,453,NULL,2,true,NULL,'H-Top','table'),
('T.H-top','TMP-wfsiifvk','T(H-top)','number',447,448.5,450,451.5,453,NULL,3,true,NULL,'H-Top','table'),

-- H-Bottom (4-6) - Widht of Web = Tinggi Web 
('H.H-bottom','TMP-wfsiifvk','H(H-bottom)','number',447,448.5,450,451.5,453,NULL,4,true,NULL,'H-Bottom','table'),
('C.H-bottom','TMP-wfsiifvk','C(H-bottom)','number',447,448.5,450,451.5,453,NULL,5,true,NULL,'H-Bottom','table'),
('T.H-bottom','TMP-wfsiifvk','T(H-bottom)','number',447,448.5,450,451.5,453,NULL,6,true,NULL,'H-Bottom','table'),

-- B1 (7-9) - Heigh of Flange = Lebar Kaki
('H.B1','TMP-wfsiifvk','H(B1)','number',197,198.5,200,201.5,203,NULL,7,true,NULL,'B1','table'),
('C.B1','TMP-wfsiifvk','C(B1)','number',197,198.5,200,201.5,203,NULL,8,true,NULL,'B1','table'),
('T.B1','TMP-wfsiifvk','T(B1)','number',197,198.5,200,201.5,203,NULL,9,true,NULL,'B1','table'),

-- B2 (10-12) - Heigh of Flange = Lebar Kaki 
('H.B2','TMP-wfsiifvk','H(B2)','number',197,198.5,200,201.5,203,NULL,10,true,NULL,'B2','table'),
('C.B2','TMP-wfsiifvk','C(B2)','number',197,198.5,200,201.5,203,NULL,11,true,NULL,'B2','table'),
('T.B2','TMP-wfsiifvk','T(B2)','number',197,198.5,200,201.5,203,NULL,12,true,NULL,'B2','table'),

-- b1 (13-15) Flange Thicknees = Tebal Kaki
('H.b1','TMP-wfsiifvk','H(b1)','number',13,13.5,14,14.5,15,NULL,13,true,NULL,'b1','table'),
('C.b1','TMP-wfsiifvk','C(b1)','number',13,13.5,14,14.5,15,NULL,14,true,NULL,'b1','table'),
('T.b1','TMP-wfsiifvk','T(b1)','number',13,13.5,14,14.5,15,NULL,15,true,NULL,'b1','table'),

-- b3 (16-18)  Flange Thicknees = Tebal Kaki
('H.b3','TMP-wfsiifvk','H(b3)','number',13,13.5,14,14.5,15,NULL,16,true,NULL,'b3','table'),
('C.b3','TMP-wfsiifvk','C(b3)','number',13,13.5,14,14.5,15,NULL,17,true,NULL,'b3','table'),
('T.b3','TMP-wfsiifvk','T(b3)','number',13,13.5,14,14.5,15,NULL,18,true,NULL,'b3','table'),

-- b2 (19-21)  Flange Thicknees = Tebal Kaki
('H.b2','TMP-wfsiifvk','H(b2)','number',13,13.5,14,14.5,15,NULL,19,true,NULL,'b2','table'),
('C.b2','TMP-wfsiifvk','C(b2)','number',13,13.5,14,14.5,15,NULL,20,true,NULL,'b2','table'),
('T.b2','TMP-wfsiifvk','T(b2)','number',13,13.5,14,14.5,15,NULL,21,true,NULL,'b2','table'),

-- b4 (22-24) Flange Thicknees = Tebal Kaki
('H.b4','TMP-wfsiifvk','H(b4)','number',13,13.5,14,14.5,15,NULL,22,true,NULL,'b4','table'),
('C.b4','TMP-wfsiifvk','C(b4)','number',13,13.5,14,14.5,15,NULL,23,true,NULL,'b4','table'),
('T.b4','TMP-wfsiifvk','T(b4)','number',13,13.5,14,14.5,15,NULL,24,true,NULL,'b4','table'),

-- b1-b2/2 (25-27) - Web of Center = WOC
('H.b1-b2/2','TMP-wfsiifvk','H(b1-b2/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,25,true,NULL,'b1-b2/2','table'),
('C.b1-b2/2','TMP-wfsiifvk','C(b1-b2/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,26,true,NULL,'b1-b2/2','table'),
('T.b1-b2/2','TMP-wfsiifvk','T(b1-b2/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,27,true,NULL,'b1-b2/2','table'),

-- b3-b4/2 (28-30) - Web of Center = WOC
('H.b3-b4/2','TMP-wfsiifvk','H(b3-b4/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,28,true,NULL,'b3-b4/2','table'),
('C.b3-b4/2','TMP-wfsiifvk','C(b3-b4/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,29,true,NULL,'b3-b4/2','table'),
('T.b3-b4/2','TMP-wfsiifvk','T(b3-b4/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,30,true,NULL,'b3-b4/2','table'),

-- t1 (31-33) - Flange Thicknees = Tebal Kaki
('H.t1','TMP-wfsiifvk','H(t1)','number',13,13.5,14,14.5,15,NULL,31,true,NULL,'t1','table'),
('C.t1','TMP-wfsiifvk','C(t1)','number',13,13.5,14,14.5,15,NULL,32,true,NULL,'t1','table'),
('T.t1','TMP-wfsiifvk','T(t1)','number',13,13.5,14,14.5,15,NULL,33,true,NULL,'t1','table'),

-- t3 (34-36) - Flange Thicknees = Tebal Kaki
('H.t3','TMP-wfsiifvk','H(t3)','number',13,13.5,14,14.5,15,NULL,34,true,NULL,'t3','table'),
('C.t3','TMP-wfsiifvk','C(t3)','number',13,13.5,14,14.5,15,NULL,35,true,NULL,'t3','table'),
('T.t3','TMP-wfsiifvk','T(t3)','number',13,13.5,14,14.5,15,NULL,36,true,NULL,'t3','table'),

-- t2 (37-39) - Flange Thicknees = Tebal Kaki
('H.t2','TMP-wfsiifvk','H(t2)','number',13,13.5,14,14.5,15,NULL,37,true,NULL,'t2','table'),
('C.t2','TMP-wfsiifvk','C(t2)','number',13,13.5,14,14.5,15,NULL,38,true,NULL,'t2','table'),
('T.t2','TMP-wfsiifvk','T(t2)','number',13,13.5,14,14.5,15,NULL,39,true,NULL,'t2','table'),

-- t4 (40-42) - Flange Thicknees = Tebal Kaki
('H.t4','TMP-wfsiifvk','H(t4)','number',13,13.5,14,14.5,15,NULL,40,true,NULL,'t4','table'),
('C.t4','TMP-wfsiifvk','C(t4)','number',13,13.5,14,14.5,15,NULL,41,true,NULL,'t4','table'),
('T.t4','TMP-wfsiifvk','T(t4)','number',13,13.5,14,14.5,15,NULL,42,true,NULL,'t4','table'),

-- t5 (43-45) - Web Thicknees = Tebal Web
('H.t5','TMP-wfsiifvk','H(t5)','number',8.3,8.65,9,9.35,9.7,NULL,43,true,NULL,'t5','table'),
('C.t5','TMP-wfsiifvk','C(t5)','number',8.3,8.65,9,9.35,9.7,NULL,44,true,NULL,'t5','table'),
('T.t5','TMP-wfsiifvk','T(t5)','number',8.3,8.65,9,9.35,9.7,NULL,45,true,NULL,'t5','table'),

-- t6 (NULL) - Web Thicknees = Tebal Web - order_numb NULL
('H.t6','TMP-wfsiifvk','H(t6)','number',8.3,8.65,9,9.35,9.7,NULL,NULL,true,NULL,'t6','table'),
('C.t6','TMP-wfsiifvk','C(t6)','number',8.3,8.65,9,9.35,9.7,NULL,NULL,true,NULL,'t6','table'),
('T.t6','TMP-wfsiifvk','T(t6)','number',8.3,8.65,9,9.35,9.7,NULL,NULL,true,NULL,'t6','table'),

-- t7 (NULL) - Web Thicknees = Tebal Web - order_numb NULL
('H.t7','TMP-wfsiifvk','H(t7)','number',8.3,8.65,9,9.35,9.7,NULL,NULL,true,NULL,'t7','table'),
('C.t7','TMP-wfsiifvk','C(t7)','number',8.3,8.65,9,9.35,9.7,NULL,NULL,true,NULL,'t7','table'),
('T.t7','TMP-wfsiifvk','T(t7)','number',8.3,8.65,9,9.35,9.7,NULL,NULL,true,NULL,'t7','table'),

-- FormRight (46-54)
('height.of.flange','TMP-wfsiifvk','Height of Flange','number',197,198.5,200,201.5,203,0,46,true,NULL,'FormRight','Height of Flange'),
('flange.thickness','TMP-wfsiifvk','Flange Thickness','number',13,13.5,14,14.5,15,0,47,true,NULL,'FormRight','Flange Thickness'),
('width.of.web','TMP-wfsiifvk','Width of Web','number',447,448.5,450,451.5,453,0,48,true,NULL,'FormRight','Width of Web'),
('web.thickness','TMP-wfsiifvk','Web Thickness','number',8.3,8.65,9,9.35,9.7,0,49,true,NULL,'FormRight','Web Thickness'),
('unit.weight','TMP-wfsiifvk','Unit Weight (Kgm)','number',71.9,73.4,74.9,76.4,77.9,0,50,true,NULL,'FormRight','Unit Weight (Kgm)'),
('radius','TMP-wfsiifvk','Radius','number',0,0,13,0,0,0,51,true,NULL,'FormRight','Radius'),
('web.off.center','TMP-wfsiifvk','Web Off Center','number',-3.5,-1.75,0,1.75,3.5,0,52,true,NULL,'FormRight','Web Off Center'),
('os','TMP-wfsiifvk','OS','number',0,0,2.4,0,0,0,53,true,NULL,'FormRight','OS'),
('cow','TMP-wfsiifvk','CoW','number',0,0,0,0,0,2.5,54,true,NULL,'FormRight','CoW');

INSERT INTO qc_template_mapping (mapping_id, qc_template_id, group_name, position, order_numb) VALUES
('MAP' || LEFT(gen_random_uuid()::text, 8),  'TMP-wfsiifvk', 'Width of Web', 'H-Top', 1),
('MAP' || LEFT(gen_random_uuid()::text, 8),  'TMP-wfsiifvk', 'Width of Web', 'H-Bottom', 2),
('MAP' || LEFT(gen_random_uuid()::text, 8),  'TMP-wfsiifvk', 'Height of Flange', 'B1', 3),
('MAP' || LEFT(gen_random_uuid()::text, 8),  'TMP-wfsiifvk', 'Height of Flange', 'B2', 4),
('MAP' || LEFT(gen_random_uuid()::text, 8),  'TMP-wfsiifvk', 'Flange Thickness', 'b1', 5),
('MAP' || LEFT(gen_random_uuid()::text, 8),  'TMP-wfsiifvk', 'Flange Thickness', 'b3', 6),
('MAP' || LEFT(gen_random_uuid()::text, 8),  'TMP-wfsiifvk', 'Flange Thickness', 'b2', 7),
('MAP' || LEFT(gen_random_uuid()::text, 8),  'TMP-wfsiifvk', 'Flange Thickness', 'b4', 8),
('MAP' || LEFT(gen_random_uuid()::text, 8),  'TMP-wfsiifvk', 'Web Off Center', 'b1-b2/2', 9),
('MAP' || LEFT(gen_random_uuid()::text, 8),  'TMP-wfsiifvk', 'Web Off Center', 'b3-b4/2', 10),
('MAP' || LEFT(gen_random_uuid()::text, 8),  'TMP-wfsiifvk', 'Flange Thickness', 't1', 11),
('MAP' || LEFT(gen_random_uuid()::text, 8),  'TMP-wfsiifvk', 'Flange Thickness', 't3', 12),
('MAP' || LEFT(gen_random_uuid()::text, 8),  'TMP-wfsiifvk', 'Flange Thickness', 't2', 13),
('MAP' || LEFT(gen_random_uuid()::text, 8),  'TMP-wfsiifvk', 'Flange Thickness', 't4', 14),
('MAP' || LEFT(gen_random_uuid()::text, 8),  'TMP-wfsiifvk', 'Web Thickness', 't5', 15),
('MAP' || LEFT(gen_random_uuid()::text, 8),  'TMP-wfsiifvk', 'Web Thickness', 't6', 16),
('MAP' || LEFT(gen_random_uuid()::text, 8),  'TMP-wfsiifvk', 'Web Thickness', 't7', 17),
('MAP' || LEFT(gen_random_uuid()::text, 8),  'TMP-wfsiifvk', 'Radius', '', 18),
('MAP' || LEFT(gen_random_uuid()::text, 8),  'TMP-wfsiifvk', 'CoW', '', 19),
('MAP' || LEFT(gen_random_uuid()::text, 8),  'TMP-wfsiifvk', 'OS', '', 20),
('MAP' || LEFT(gen_random_uuid()::text, 8),  'TMP-wfsiifvk', 'Unit Weight (Kgm)', '', 21);