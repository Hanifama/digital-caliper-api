-- Template wf-beam WF 396X199X7X11
INSERT INTO qc_template (qc_template_id, prodtype_id, size_id, profile, std_dimention, brand_merek, specification, name, status, created_by, created_dt, updated_by, updated_dt) VALUES
('TMP-wfqggeti','WF-BEAM','WF 396X199X7X11','WF 396X199X7X11','396X199X7X11','WF-BEAM 396X199X7X11','WF 396X199X7X11','Template WF-BEAM 396X199X7X11','active','Akun Testing Manajer','2025-11-08 13:00:00','Akun Testing Manajer','2025-11-08 13:00:00');

INSERT INTO qc_template_data (input_code, qc_template_id, label, input_type, min_tolerance, t_lt_50_tolerance, nominal_tolerance, t_gt_50_tolerance, max_tolerance, actual_tolerance, order_numb, enabled, sound, position, group_name) VALUES
-- H-Top (1-3) - Width of Web (Tinggi Web)
('H.H-top','TMP-wfqggeti','H(H-top)','number',394,395,396,397,398,NULL,1,true,'','H-Top','table'),
('C.H-top','TMP-wfqggeti','C(H-top)','number',394,395,396,397,398,NULL,2,true,'','H-Top','table'),
('T.H-top','TMP-wfqggeti','T(H-top)','number',394,395,396,397,398,NULL,3,true,'','H-Top','table'),

-- H-Bottom (4-6) - Width of Web (Tinggi Web)
('H.H-bottom','TMP-wfqggeti','H(H-bottom)','number',394,395,396,397,398,NULL,4,true,'','H-Bottom','table'),
('C.H-bottom','TMP-wfqggeti','C(H-bottom)','number',394,395,396,397,398,NULL,5,true,'','H-Bottom','table'),
('T.H-bottom','TMP-wfqggeti','T(H-bottom)','number',394,395,396,397,398,NULL,6,true,'','H-Bottom','table'),

-- B1 (7-9) - Height of Flange (Lebar Kaki)
('H.B1','TMP-wfqggeti','H(B1)','number',196.5,197.75,199,200.25,201.5,NULL,7,true,'','B1','table'),
('C.B1','TMP-wfqggeti','C(B1)','number',196.5,197.75,199,200.25,201.5,NULL,8,true,'','B1','table'),
('T.B1','TMP-wfqggeti','T(B1)','number',196.5,197.75,199,200.25,201.5,NULL,9,true,'','B1','table'),

-- B2 (10-12) - Height of Flange (Lebar Kaki)
('H.B2','TMP-wfqggeti','H(B2)','number',196.5,197.75,199,200.25,201.5,NULL,10,true,'','B2','table'),
('C.B2','TMP-wfqggeti','C(B2)','number',196.5,197.75,199,200.25,201.5,NULL,11,true,'','B2','table'),
('T.B2','TMP-wfqggeti','T(B2)','number',196.5,197.75,199,200.25,201.5,NULL,12,true,'','B2','table'),

-- b1 (13-15) - SEKARANG: Flange Thickness (dipindah dari Web Off Center)
('H.b1','TMP-wfqggeti','H(b1)','number',10,10.5,11,11.5,12,NULL,13,true,'','b1','table'),
('C.b1','TMP-wfqggeti','C(b1)','number',10,10.5,11,11.5,12,NULL,14,true,'','b1','table'),
('T.b1','TMP-wfqggeti','T(b1)','number',10,10.5,11,11.5,12,NULL,15,true,'','b1','table'),

-- b3 (16-18) - SEKARANG: Flange Thickness (dipindah dari Web Off Center)
('H.b3','TMP-wfqggeti','H(b3)','number',10,10.5,11,11.5,12,NULL,16,true,'','b3','table'),
('C.b3','TMP-wfqggeti','C(b3)','number',10,10.5,11,11.5,12,NULL,17,true,'','b3','table'),
('T.b3','TMP-wfqggeti','T(b3)','number',10,10.5,11,11.5,12,NULL,18,true,'','b3','table'),

-- b2 (19-21) - SEKARANG: Flange Thickness (dipindah dari Web Off Center)
('H.b2','TMP-wfqggeti','H(b2)','number',10,10.5,11,11.5,12,NULL,19,true,'','b2','table'),
('C.b2','TMP-wfqggeti','C(b2)','number',10,10.5,11,11.5,12,NULL,20,true,'','b2','table'),
('T.b2','TMP-wfqggeti','T(b2)','number',10,10.5,11,11.5,12,NULL,21,true,'','b2','table'),

-- b4 (22-24) - SEKARANG: Flange Thickness (dipindah dari Web Off Center)
('H.b4','TMP-wfqggeti','H(b4)','number',10,10.5,11,11.5,12,NULL,22,true,'','b4','table'),
('C.b4','TMP-wfqggeti','C(b4)','number',10,10.5,11,11.5,12,NULL,23,true,'','b4','table'),
('T.b4','TMP-wfqggeti','T(b4)','number',10,10.5,11,11.5,12,NULL,24,true,'','b4','table'),

-- b1-b2/2 (25-27) - Tetap di Web Off Center dengan toleransi asli
('H.b1-b2/2','TMP-wfqggeti','H(b1-b2/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,25,true,'','b1-b2/2','table'),
('C.b1-b2/2','TMP-wfqggeti','C(b1-b2/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,26,true,'','b1-b2/2','table'),
('T.b1-b2/2','TMP-wfqggeti','T(b1-b2/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,27,true,'','b1-b2/2','table'),

-- b3-b4/2 (28-30) - Tetap di Web Off Center dengan toleransi asli
('H.b3-b4/2','TMP-wfqggeti','H(b3-b4/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,28,true,'','b3-b4/2','table'),
('C.b3-b4/2','TMP-wfqggeti','C(b3-b4/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,29,true,'','b3-b4/2','table'),
('T.b3-b4/2','TMP-wfqggeti','T(b3-b4/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,30,true,'','b3-b4/2','table'),

-- t1 (31-33) - Flange Thickness
('H.t1','TMP-wfqggeti','H(t1)','number',10,10.5,11,11.5,12,NULL,31,true,'','t1','table'),
('C.t1','TMP-wfqggeti','C(t1)','number',10,10.5,11,11.5,12,NULL,32,true,'','t1','table'),
('T.t1','TMP-wfqggeti','T(t1)','number',10,10.5,11,11.5,12,NULL,33,true,'','t1','table'),

-- t3 (34-36) - Flange Thickness
('H.t3','TMP-wfqggeti','H(t3)','number',10,10.5,11,11.5,12,NULL,34,true,'','t3','table'),
('C.t3','TMP-wfqggeti','C(t3)','number',10,10.5,11,11.5,12,NULL,35,true,'','t3','table'),
('T.t3','TMP-wfqggeti','T(t3)','number',10,10.5,11,11.5,12,NULL,36,true,'','t3','table'),

-- t2 (37-39) - Flange Thickness
('H.t2','TMP-wfqggeti','H(t2)','number',10,10.5,11,11.5,12,NULL,37,true,'','t2','table'),
('C.t2','TMP-wfqggeti','C(t2)','number',10,10.5,11,11.5,12,NULL,38,true,'','t2','table'),
('T.t2','TMP-wfqggeti','T(t2)','number',10,10.5,11,11.5,12,NULL,39,true,'','t2','table'),

-- t4 (40-42) - Flange Thickness
('H.t4','TMP-wfqggeti','H(t4)','number',10,10.5,11,11.5,12,NULL,40,true,'','t4','table'),
('C.t4','TMP-wfqggeti','C(t4)','number',10,10.5,11,11.5,12,NULL,41,true,'','t4','table'),
('T.t4','TMP-wfqggeti','T(t4)','number',10,10.5,11,11.5,12,NULL,42,true,'','t4','table'),

-- t5 (43-45) - Web Thickness (Tebal Web)
('H.t5','TMP-wfqggeti','H(t5)','number',6.3,6.65,7,7.35,7.7,NULL,43,true,'','t5','table'),
('C.t5','TMP-wfqggeti','C(t5)','number',6.3,6.65,7,7.35,7.7,NULL,44,true,'','t5','table'),
('T.t5','TMP-wfqggeti','T(t5)','number',6.3,6.65,7,7.35,7.7,NULL,45,true,'','t5','table'),

-- t6 (NULL) - Web Thickness - order_numb NULL
('H.t6','TMP-wfqggeti','H(t6)','number',6.3,6.65,7,7.35,7.7,NULL,NULL,true,'','t6','table'),
('C.t6','TMP-wfqggeti','C(t6)','number',6.3,6.65,7,7.35,7.7,NULL,NULL,true,'','t6','table'),
('T.t6','TMP-wfqggeti','T(t6)','number',6.3,6.65,7,7.35,7.7,NULL,NULL,true,'','t6','table'),

-- t7 (NULL) - Web Thickness - order_numb NULL
('H.t7','TMP-wfqggeti','H(t7)','number',6.3,6.65,7,7.35,7.7,NULL,NULL,true,'','t7','table'),
('C.t7','TMP-wfqggeti','C(t7)','number',6.3,6.65,7,7.35,7.7,NULL,NULL,true,'','t7','table'),
('T.t7','TMP-wfqggeti','T(t7)','number',6.3,6.65,7,7.35,7.7,NULL,NULL,true,'','t7','table'),

-- FormRight (46-54)
('height.of.flange','TMP-wfqggeti','Height of Flange','number',196.5,197.75,199,200.25,201.5,0,46,true,'','FormRight','Height of Flange'),
('flange.thickness','TMP-wfqggeti','Flange Thickness','number',10,10.5,11,11.5,12,0,47,true,'','FormRight','Flange Thickness'),
('width.of.web','TMP-wfqggeti','Width of Web','number',394,395,396,397,398,0,48,true,'','FormRight','Width of Web'),
('web.thickness','TMP-wfqggeti','Web Thickness','number',6.3,6.65,7,7.35,7.7,0,49,true,'','FormRight','Web Thickness'),
('unit.weight','TMP-wfqggeti','Unit Weight (Kgm)','number',53.9,55.0,56.1,57.2,58.3,0,50,true,'','FormRight','Unit Weight (Kgm)'),
('radius','TMP-wfqggeti','Radius','number',0,0,13,0,0,0,51,true,'','FormRight','Radius'),
('web.off.center','TMP-wfqggeti','Web Off Center','number',-3.5,-1.75,0,1.75,3.5,0,52,true,'','FormRight','Web Off Center'),
('os','TMP-wfqggeti','OS','number',0,0,2.39,0,0,0,53,true,'','FormRight','OS'),
('cow','TMP-wfqggeti','CoW','number',0,0,0,0,0,2,54,true,'','FormRight','CoW');

INSERT INTO qc_template_mapping (mapping_id, qc_template_id, group_name, position, order_numb) VALUES
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfqggeti', 'Width of Web', 'H-Top', 0),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfqggeti', 'Width of Web', 'H-Bottom', 1),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfqggeti', 'Height of Flange', 'B1', 0),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfqggeti', 'Height of Flange', 'B2', 1),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfqggeti', 'Flange Thickness', 't1', 0),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfqggeti', 'Flange Thickness', 't2', 1),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfqggeti', 'Flange Thickness', 't3', 2),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfqggeti', 'Flange Thickness', 't4', 3),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfqggeti', 'Flange Thickness', 'b1', 4),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfqggeti', 'Flange Thickness', 'b2', 5),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfqggeti', 'Flange Thickness', 'b3', 6),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfqggeti', 'Flange Thickness', 'b4', 7),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfqggeti', 'Web Thickness', 't5', 0),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfqggeti', 'Web Thickness', 't6', 1),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfqggeti', 'Web Thickness', 't7', 2),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfqggeti', 'Web Off Center', 'b1-b2/2', 0),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfqggeti', 'Web Off Center', 'b3-b4/2', 1),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfqggeti', 'Radius', '', 0),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfqggeti', 'CoW', '', 0),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfqggeti', 'OS', '', 0),
('MAP' || LEFT(gen_random_uuid()::text, 8), 'TMP-wfqggeti', 'Unit Weight (Kgm)', '', 0);