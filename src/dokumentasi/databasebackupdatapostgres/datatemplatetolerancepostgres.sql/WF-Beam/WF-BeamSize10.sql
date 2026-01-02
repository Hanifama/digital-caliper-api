-- Template wf-beam 
INSERT INTO qc_template (qc_template_id, prodtype_id, size_id, profile, std_dimention, brand_merek, specification, name, status, created_by, created_dt, updated_by, updated_dt) VALUES
('TMP-wfjnxzbi','WF-BEAM','WF 250X125X6X9','WF 250X125X6X9','250X125X6X9','WF-BEAM 250X125X6X9','WF 250X125X6X9','Template WF-BEAM 250X125X6X9','active','Akun Testing Manajer','2025-11-08 13:00:00','Akun Testing Manajer','2025-11-08 13:00:00');

INSERT INTO qc_template_data (input_code, qc_template_id, label, input_type, min_tolerance, t_lt_50_tolerance, nominal_tolerance, t_gt_50_tolerance, max_tolerance, actual_tolerance, order_numb, enabled, sound, position, group_name) VALUES
-- H-Top (1-3) - Width of Web
('H.H-top','TMP-wfjnxzbi','H(H-top)','number',248,249,250,251,252,NULL,1,true,NULL,'H-Top','table'),
('C.H-top','TMP-wfjnxzbi','C(H-top)','number',248,249,250,251,252,NULL,2,true,NULL,'H-Top','table'),
('T.H-top','TMP-wfjnxzbi','T(H-top)','number',248,249,250,251,252,NULL,3,true,NULL,'H-Top','table'),

-- H-Bottom (4-6) - Width of Web
('H.H-bottom','TMP-wfjnxzbi','H(H-bottom)','number',248,249,250,251,252,NULL,4,true,NULL,'H-Bottom','table'),
('C.H-bottom','TMP-wfjnxzbi','C(H-bottom)','number',248,249,250,251,252,NULL,5,true,NULL,'H-Bottom','table'),
('T.H-bottom','TMP-wfjnxzbi','T(H-bottom)','number',248,249,250,251,252,NULL,6,true,NULL,'H-Bottom','table'),

-- B1 (7-9) - Height of Flange
('H.B1','TMP-wfjnxzbi','H(B1)','number',122.5,123.75,125,126.25,127.5,NULL,7,true,NULL,'B1','table'),
('C.B1','TMP-wfjnxzbi','C(B1)','number',122.5,123.75,125,126.25,127.5,NULL,8,true,NULL,'B1','table'),
('T.B1','TMP-wfjnxzbi','T(B1)','number',122.5,123.75,125,126.25,127.5,NULL,9,true,NULL,'B1','table'),

-- B2 (10-12) - Height of Flange
('H.B2','TMP-wfjnxzbi','H(B2)','number',122.5,123.75,125,126.25,127.5,NULL,10,true,NULL,'B2','table'),
('C.B2','TMP-wfjnxzbi','C(B2)','number',122.5,123.75,125,126.25,127.5,NULL,11,true,NULL,'B2','table'),
('T.B2','TMP-wfjnxzbi','T(B2)','number',122.5,123.75,125,126.25,127.5,NULL,12,true,NULL,'B2','table'),

-- b1 (13-15) - Web Off Center (toleransi sama dengan FormRight Web Off Center)
('H.b1','TMP-wfjnxzbi','H(b1)','number',-2.5,-1.25,0,1.25,2.5,NULL,13,true,NULL,'b1','table'),
('C.b1','TMP-wfjnxzbi','C(b1)','number',-2.5,-1.25,0,1.25,2.5,NULL,14,true,NULL,'b1','table'),
('T.b1','TMP-wfjnxzbi','T(b1)','number',-2.5,-1.25,0,1.25,2.5,NULL,15,true,NULL,'b1','table'),

-- b3 (16-18) - Web Off Center
('H.b3','TMP-wfjnxzbi','H(b3)','number',-2.5,-1.25,0,1.25,2.5,NULL,16,true,NULL,'b3','table'),
('C.b3','TMP-wfjnxzbi','C(b3)','number',-2.5,-1.25,0,1.25,2.5,NULL,17,true,NULL,'b3','table'),
('T.b3','TMP-wfjnxzbi','T(b3)','number',-2.5,-1.25,0,1.25,2.5,NULL,18,true,NULL,'b3','table'),

-- b2 (19-21) - Web Off Center
('H.b2','TMP-wfjnxzbi','H(b2)','number',-2.5,-1.25,0,1.25,2.5,NULL,19,true,NULL,'b2','table'),
('C.b2','TMP-wfjnxzbi','C(b2)','number',-2.5,-1.25,0,1.25,2.5,NULL,20,true,NULL,'b2','table'),
('T.b2','TMP-wfjnxzbi','T(b2)','number',-2.5,-1.25,0,1.25,2.5,NULL,21,true,NULL,'b2','table'),

-- b4 (22-24) - Web Off Center
('H.b4','TMP-wfjnxzbi','H(b4)','number',-2.5,-1.25,0,1.25,2.5,NULL,22,true,NULL,'b4','table'),
('C.b4','TMP-wfjnxzbi','C(b4)','number',-2.5,-1.25,0,1.25,2.5,NULL,23,true,NULL,'b4','table'),
('T.b4','TMP-wfjnxzbi','T(b4)','number',-2.5,-1.25,0,1.25,2.5,NULL,24,true,NULL,'b4','table'),

-- b1-b2/2 (25-27) - Web Off Center
('H.b1-b2/2','TMP-wfjnxzbi','H(b1-b2/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,25,true,NULL,'b1-b2/2','table'),
('C.b1-b2/2','TMP-wfjnxzbi','C(b1-b2/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,26,true,NULL,'b1-b2/2','table'),
('T.b1-b2/2','TMP-wfjnxzbi','T(b1-b2/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,27,true,NULL,'b1-b2/2','table'),

-- b3-b4/2 (28-30) - Web Off Center
('H.b3-b4/2','TMP-wfjnxzbi','H(b3-b4/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,28,true,NULL,'b3-b4/2','table'),
('C.b3-b4/2','TMP-wfjnxzbi','C(b3-b4/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,29,true,NULL,'b3-b4/2','table'),
('T.b3-b4/2','TMP-wfjnxzbi','T(b3-b4/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,30,true,NULL,'b3-b4/2','table'),

-- t1 (31-33) - Flange Thickness
('H.t1','TMP-wfjnxzbi','H(t1)','number',7.5,8.25,9,9.75,10.5,NULL,31,true,NULL,'t1','table'),
('C.t1','TMP-wfjnxzbi','C(t1)','number',7.5,8.25,9,9.75,10.5,NULL,32,true,NULL,'t1','table'),
('T.t1','TMP-wfjnxzbi','T(t1)','number',7.5,8.25,9,9.75,10.5,NULL,33,true,NULL,'t1','table'),

-- t3 (34-36) - Flange Thickness
('H.t3','TMP-wfjnxzbi','H(t3)','number',7.5,8.25,9,9.75,10.5,NULL,34,true,NULL,'t3','table'),
('C.t3','TMP-wfjnxzbi','C(t3)','number',7.5,8.25,9,9.75,10.5,NULL,35,true,NULL,'t3','table'),
('T.t3','TMP-wfjnxzbi','T(t3)','number',7.5,8.25,9,9.75,10.5,NULL,36,true,NULL,'t3','table'),

-- t2 (37-39) - Flange Thickness
('H.t2','TMP-wfjnxzbi','H(t2)','number',7.5,8.25,9,9.75,10.5,NULL,37,true,NULL,'t2','table'),
('C.t2','TMP-wfjnxzbi','C(t2)','number',7.5,8.25,9,9.75,10.5,NULL,38,true,NULL,'t2','table'),
('T.t2','TMP-wfjnxzbi','T(t2)','number',7.5,8.25,9,9.75,10.5,NULL,39,true,NULL,'t2','table'),

-- t4 (40-42) - Flange Thickness
('H.t4','TMP-wfjnxzbi','H(t4)','number',7.5,8.25,9,9.75,10.5,NULL,40,true,NULL,'t4','table'),
('C.t4','TMP-wfjnxzbi','C(t4)','number',7.5,8.25,9,9.75,10.5,NULL,41,true,NULL,'t4','table'),
('T.t4','TMP-wfjnxzbi','T(t4)','number',7.5,8.25,9,9.75,10.5,NULL,42,true,NULL,'t4','table'),

-- t5 (43-45) - Web Thickness
('H.t5','TMP-wfjnxzbi','H(t5)','number',5,5.65,6.3,6.95,7.6,NULL,43,true,NULL,'t5','table'),
('C.t5','TMP-wfjnxzbi','C(t5)','number',5,5.65,6.3,6.95,7.6,NULL,44,true,NULL,'t5','table'),
('T.t5','TMP-wfjnxzbi','T(t5)','number',5,5.65,6.3,6.95,7.6,NULL,45,true,NULL,'t5','table'),

-- t6 (NULL) - Web Thickness
('H.t6','TMP-wfjnxzbi','H(t6)','number',5,5.65,6.3,6.95,7.6,NULL,NULL,true,NULL,'t6','table'),
('C.t6','TMP-wfjnxzbi','C(t6)','number',5,5.65,6.3,6.95,7.6,NULL,NULL,true,NULL,'t6','table'),
('T.t6','TMP-wfjnxzbi','T(t6)','number',5,5.65,6.3,6.95,7.6,NULL,NULL,true,NULL,'t6','table'),

-- t7 (NULL) - Web Thickness
('H.t7','TMP-wfjnxzbi','H(t7)','number',5,5.65,6.3,6.95,7.6,NULL,NULL,true,NULL,'t7','table'),
('C.t7','TMP-wfjnxzbi','C(t7)','number',5,5.65,6.3,6.95,7.6,NULL,NULL,true,NULL,'t7','table'),
('T.t7','TMP-wfjnxzbi','T(t7)','number',5,5.65,6.3,6.95,7.6,NULL,NULL,true,NULL,'t7','table'),

-- FormRight (46-54)
('height.of.flange','TMP-wfjnxzbi','Height of Flange','number',122.5,123.75,125,126.25,127.5,0,46,true,NULL,'FormRight','Height of Flange'),
('flange.thickness','TMP-wfjnxzbi','Flange Thickness','number',7.5,8.25,9,9.75,10.5,0,47,true,NULL,'FormRight','Flange Thickness'),
('width.of.web','TMP-wfjnxzbi','Width of Web','number',248,249,250,251,252,0,48,true,NULL,'FormRight','Width of Web'),
('web.thickness','TMP-wfjnxzbi','Web Thickness','number',5,5.65,6.3,6.95,7.6,0,49,true,NULL,'FormRight','Web Thickness'),
('unit.weight','TMP-wfjnxzbi','Unit Weight','number',27.4,28.2,29,29.8,30.6,0,50,true,NULL,'FormRight','Unit Weight'),
('radius','TMP-wfjnxzbi','Radius','number',0,0,8,0,0,0,51,true,NULL,'FormRight','Radius'),
('web.off.center','TMP-wfjnxzbi','Web Off Center','number',-2.5,-1.25,0,1.25,2.5,0,52,true,NULL,'FormRight','Web Off Center'),
('os','TMP-wfjnxzbi','OS','number',0,0,1.5,0,0,0,53,true,NULL,'FormRight','OS'),
('cow','TMP-wfjnxzbi','CoW','number',0,0,0,0,0,2,54,true,NULL,'FormRight','CoW');

INSERT INTO qc_template_mapping (mapping_id, qc_template_id, group_name, position, order_numb) VALUES
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfjnxzbi', 'Width of Web', 'H-Top', 0),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfjnxzbi', 'Width of Web', 'H-Bottom', 1),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfjnxzbi', 'Height of Flange', 'B1', 0),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfjnxzbi', 'Height of Flange', 'B2', 1),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfjnxzbi', 'Flange Thickness', 't1', 0),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfjnxzbi', 'Flange Thickness', 't3', 2),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfjnxzbi', 'Flange Thickness', 't2', 1),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfjnxzbi', 'Flange Thickness', 't4', 3),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfjnxzbi', 'Web Thickness', 't5', 5),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfjnxzbi', 'Web Thickness', 't6', 5),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfjnxzbi', 'Web Thickness', 't7', 6),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfjnxzbi', 'Web Off Center', 'b1', 7),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfjnxzbi', 'Web Off Center', 'b3', 8),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfjnxzbi', 'Web Off Center', 'b2', 9),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfjnxzbi', 'Web Off Center', 'b4', 10),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfjnxzbi', 'Web Off Center', 'b1-b2/2', 11),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfjnxzbi', 'Web Off Center', 'b3-b4/2', 12),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfjnxzbi', 'Radius', '', 0),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfjnxzbi', 'CoW', '', 0),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfjnxzbi', 'OS', '', 0),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfjnxzbi', 'Unit Weight', '', 0);