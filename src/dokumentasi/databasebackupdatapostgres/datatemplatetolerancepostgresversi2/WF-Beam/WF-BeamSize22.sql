-- Template wf-beam WF 588X300X12X20
INSERT INTO qc_template (qc_template_id, prodtype_id, size_id, profile, std_dimention, brand_merek, specification, name, status, created_by, created_dt, updated_by, updated_dt) VALUES
('TMP-wfvllibm','WF-BEAM','WF 588X300X12X20','WF 588X300X12X20','588X300X12X20','WF-BEAM 588X300X12X20','WF 588X300X12X20','Template WF-BEAM 588X300X12X20','active','Akun Testing Manajer','2025-11-08 13:00:00','Akun Testing Manajer','2025-11-08 13:00:00');

INSERT INTO qc_template_data (input_code, qc_template_id, label, input_type, min_tolerance, t_lt_50_tolerance, nominal_tolerance, t_gt_50_tolerance, max_tolerance, actual_tolerance, order_numb, enabled, sound, position, group_name) VALUES
-- H-Top (1-3) - Width of Web (Tinggi Web)
('H.H-top','TMP-wfvllibm','H(H-top)','number',585,586.5,588,589.5,591,NULL,1,true,'','H-Top','table'),
('C.H-top','TMP-wfvllibm','C(H-top)','number',585,586.5,588,589.5,591,NULL,2,true,'','H-Top','table'),
('T.H-top','TMP-wfvllibm','T(H-top)','number',585,586.5,588,589.5,591,NULL,3,true,'','H-Top','table'),

-- H-Bottom (4-6) - Width of Web (Tinggi Web)
('H.H-bottom','TMP-wfvllibm','H(H-bottom)','number',585,586.5,588,589.5,591,NULL,4,true,'','H-Bottom','table'),
('C.H-bottom','TMP-wfvllibm','C(H-bottom)','number',585,586.5,588,589.5,591,NULL,5,true,'','H-Bottom','table'),
('T.H-bottom','TMP-wfvllibm','T(H-bottom)','number',585,586.5,588,589.5,591,NULL,6,true,'','H-Bottom','table'),

-- B1 (7-9) - Height of Flange (Lebar Kaki)
('H.B1','TMP-wfvllibm','H(B1)','number',297,298.5,300,301.5,303,NULL,7,true,'','B1','table'),
('C.B1','TMP-wfvllibm','C(B1)','number',297,298.5,300,301.5,303,NULL,8,true,'','B1','table'),
('T.B1','TMP-wfvllibm','T(B1)','number',297,298.5,300,301.5,303,NULL,9,true,'','B1','table'),

-- B2 (10-12) - Height of Flange (Lebar Kaki)
('H.B2','TMP-wfvllibm','H(B2)','number',297,298.5,300,301.5,303,NULL,10,true,'','B2','table'),
('C.B2','TMP-wfvllibm','C(B2)','number',297,298.5,300,301.5,303,NULL,11,true,'','B2','table'),
('T.B2','TMP-wfvllibm','T(B2)','number',297,298.5,300,301.5,303,NULL,12,true,'','B2','table'),

-- b1 (13-15) - SEKARANG: Flange Thickness (dipindah dari Web Off Center)
('H.b1','TMP-wfvllibm','H(b1)','number',18.5,19.25,20,20.75,21.5,NULL,13,true,'','b1','table'),
('C.b1','TMP-wfvllibm','C(b1)','number',18.5,19.25,20,20.75,21.5,NULL,14,true,'','b1','table'),
('T.b1','TMP-wfvllibm','T(b1)','number',18.5,19.25,20,20.75,21.5,NULL,15,true,'','b1','table'),

-- b3 (16-18) - SEKARANG: Flange Thickness (dipindah dari Web Off Center)
('H.b3','TMP-wfvllibm','H(b3)','number',18.5,19.25,20,20.75,21.5,NULL,16,true,'','b3','table'),
('C.b3','TMP-wfvllibm','C(b3)','number',18.5,19.25,20,20.75,21.5,NULL,17,true,'','b3','table'),
('T.b3','TMP-wfvllibm','T(b3)','number',18.5,19.25,20,20.75,21.5,NULL,18,true,'','b3','table'),

-- b2 (19-21) - SEKARANG: Flange Thickness (dipindah dari Web Off Center)
('H.b2','TMP-wfvllibm','H(b2)','number',18.5,19.25,20,20.75,21.5,NULL,19,true,'','b2','table'),
('C.b2','TMP-wfvllibm','C(b2)','number',18.5,19.25,20,20.75,21.5,NULL,20,true,'','b2','table'),
('T.b2','TMP-wfvllibm','T(b2)','number',18.5,19.25,20,20.75,21.5,NULL,21,true,'','b2','table'),

-- b4 (22-24) - SEKARANG: Flange Thickness (dipindah dari Web Off Center)
('H.b4','TMP-wfvllibm','H(b4)','number',18.5,19.25,20,20.75,21.5,NULL,22,true,'','b4','table'),
('C.b4','TMP-wfvllibm','C(b4)','number',18.5,19.25,20,20.75,21.5,NULL,23,true,'','b4','table'),
('T.b4','TMP-wfvllibm','T(b4)','number',18.5,19.25,20,20.75,21.5,NULL,24,true,'','b4','table'),

-- b1-b2/2 (25-27) - Tetap di Web Off Center dengan toleransi asli
('H.b1-b2/2','TMP-wfvllibm','H(b1-b2/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,25,true,'','b1-b2/2','table'),
('C.b1-b2/2','TMP-wfvllibm','C(b1-b2/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,26,true,'','b1-b2/2','table'),
('T.b1-b2/2','TMP-wfvllibm','T(b1-b2/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,27,true,'','b1-b2/2','table'),

-- b3-b4/2 (28-30) - Tetap di Web Off Center dengan toleransi asli
('H.b3-b4/2','TMP-wfvllibm','H(b3-b4/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,28,true,'','b3-b4/2','table'),
('C.b3-b4/2','TMP-wfvllibm','C(b3-b4/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,29,true,'','b3-b4/2','table'),
('T.b3-b4/2','TMP-wfvllibm','T(b3-b4/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,30,true,'','b3-b4/2','table'),

-- t1 (31-33) - Flange Thickness
('H.t1','TMP-wfvllibm','H(t1)','number',18.5,19.25,20,20.75,21.5,NULL,31,true,'','t1','table'),
('C.t1','TMP-wfvllibm','C(t1)','number',18.5,19.25,20,20.75,21.5,NULL,32,true,'','t1','table'),
('T.t1','TMP-wfvllibm','T(t1)','number',18.5,19.25,20,20.75,21.5,NULL,33,true,'','t1','table'),

-- t3 (34-36) - Flange Thickness
('H.t3','TMP-wfvllibm','H(t3)','number',18.5,19.25,20,20.75,21.5,NULL,34,true,'','t3','table'),
('C.t3','TMP-wfvllibm','C(t3)','number',18.5,19.25,20,20.75,21.5,NULL,35,true,'','t3','table'),
('T.t3','TMP-wfvllibm','T(t3)','number',18.5,19.25,20,20.75,21.5,NULL,36,true,'','t3','table'),

-- t2 (37-39) - Flange Thickness
('H.t2','TMP-wfvllibm','H(t2)','number',18.5,19.25,20,20.75,21.5,NULL,37,true,'','t2','table'),
('C.t2','TMP-wfvllibm','C(t2)','number',18.5,19.25,20,20.75,21.5,NULL,38,true,'','t2','table'),
('T.t2','TMP-wfvllibm','T(t2)','number',18.5,19.25,20,20.75,21.5,NULL,39,true,'','t2','table'),

-- t4 (40-42) - Flange Thickness
('H.t4','TMP-wfvllibm','H(t4)','number',18.5,19.25,20,20.75,21.5,NULL,40,true,'','t4','table'),
('C.t4','TMP-wfvllibm','C(t4)','number',18.5,19.25,20,20.75,21.5,NULL,41,true,'','t4','table'),
('T.t4','TMP-wfvllibm','T(t4)','number',18.5,19.25,20,20.75,21.5,NULL,42,true,'','t4','table'),

-- t5 (43-45) - Web Thickness (Tebal Web)
('H.t5','TMP-wfvllibm','H(t5)','number',11.3,11.65,12,12.35,12.7,NULL,43,true,'','t5','table'),
('C.t5','TMP-wfvllibm','C(t5)','number',11.3,11.65,12,12.35,12.7,NULL,44,true,'','t5','table'),
('T.t5','TMP-wfvllibm','T(t5)','number',11.3,11.65,12,12.35,12.7,NULL,45,true,'','t5','table'),

-- t6 (NULL) - Web Thickness (Tebal Web)
('H.t6','TMP-wfvllibm','H(t6)','number',11.3,11.65,12,12.35,12.7,NULL,NULL,true,'','t6','table'),
('C.t6','TMP-wfvllibm','C(t6)','number',11.3,11.65,12,12.35,12.7,NULL,NULL,true,'','t6','table'),
('T.t6','TMP-wfvllibm','T(t6)','number',11.3,11.65,12,12.35,12.7,NULL,NULL,true,'','t6','table'),

-- t7 (NULL) - Web Thickness (Tebal Web)
('H.t7','TMP-wfvllibm','H(t7)','number',11.3,11.65,12,12.35,12.7,NULL,NULL,true,'','t7','table'),
('C.t7','TMP-wfvllibm','C(t7)','number',11.3,11.65,12,12.35,12.7,NULL,NULL,true,'','t7','table'),
('T.t7','TMP-wfvllibm','T(t7)','number',11.3,11.65,12,12.35,12.7,NULL,NULL,true,'','t7','table'),

-- FormRight (46-54)
('height.of.flange','TMP-wfvllibm','Height of Flange','number',297,298.5,300,301.5,303,0,46,true,'','FormRight','Height of Flange'),
('flange.thickness','TMP-wfvllibm','Flange Thickness','number',18.5,19.25,20,20.75,21.5,0,47,true,'','FormRight','Flange Thickness'),
('width.of.web','TMP-wfvllibm','Width of Web','number',585,586.5,588,589.5,591,0,48,true,'','FormRight','Width of Web'),
('web.thickness','TMP-wfvllibm','Web Thickness','number',11.3,11.65,12,12.35,12.7,0,49,true,'','FormRight','Web Thickness'),
('unit.weight','TMP-wfvllibm','Unit Weight (Kgm)','number',141.1,144.05,147,149.95,152.9,0,50,true,'','FormRight','Unit Weight (Kgm)'),
('radius','TMP-wfvllibm','Radius','number',0,0,13,0,0,0,51,true,'','FormRight','Radius'),
('web.off.center','TMP-wfvllibm','Web Off Center','number',-3.5,-1.75,0,1.75,3.5,0,52,true,'','FormRight','Web Off Center'),
('os','TMP-wfvllibm','OS','number',0,0,3.6,0,0,0,53,true,'','FormRight','OS'),
('cow','TMP-wfvllibm','CoW','number',0,0,0,0,0,2.5,54,true,'','FormRight','CoW');

INSERT INTO qc_template_mapping (mapping_id, qc_template_id, group_name, position, order_numb) VALUES
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfvllibm', 'Width of Web', 'H-Top', 0),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfvllibm', 'Width of Web', 'H-Bottom', 1),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfvllibm', 'Height of Flange', 'B1', 0),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfvllibm', 'Height of Flange', 'B2', 1),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfvllibm', 'Flange Thickness', 't1', 0),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfvllibm', 'Flange Thickness', 't2', 1),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfvllibm', 'Flange Thickness', 't3', 2),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfvllibm', 'Flange Thickness', 't4', 3),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfvllibm', 'Flange Thickness', 'b1', 4),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfvllibm', 'Flange Thickness', 'b2', 5),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfvllibm', 'Flange Thickness', 'b3', 6),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfvllibm', 'Flange Thickness', 'b4', 7),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfvllibm', 'Web Thickness', 't5', 0),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfvllibm', 'Web Thickness', 't6', 1),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfvllibm', 'Web Thickness', 't7', 2),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfvllibm', 'Web Off Center', 'b1-b2/2', 0),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfvllibm', 'Web Off Center', 'b3-b4/2', 1),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfvllibm', 'Radius', '', 0),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfvllibm', 'CoW', '', 0),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfvllibm', 'OS', '', 0),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfvllibm', 'Unit Weight (Kgm)', '', 0);