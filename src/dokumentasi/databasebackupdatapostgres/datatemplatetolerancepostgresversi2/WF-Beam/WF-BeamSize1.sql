-- Template wf-beam 
INSERT INTO qc_template (qc_template_id, prodtype_id, size_id, profile, std_dimention, brand_merek, specification, name, status, created_by, created_dt, updated_by, updated_dt) VALUES
('TMP-wfagxqpk','WF-BEAM','WF 100X50X5X7','WF 100X50X5X7','100X50X5X7','WF-BEAM 100X50X5X7','WF 100X50X5X7','Template WF-BEAM 100X50X5X7','active','Akun Testing Manajer','2025-11-08 13:00:00','Akun Testing Manajer','2025-11-08 13:00:00');

INSERT INTO qc_template_data (input_code, qc_template_id, label, input_type, min_tolerance, t_lt_50_tolerance, nominal_tolerance, t_gt_50_tolerance, max_tolerance, actual_tolerance, order_numb, enabled, sound, position, group_name) VALUES
-- H-Top (1-3) - Width of Web
('H.H-top','TMP-wfagxqpk','H(H-top)','number',98,99,100,101,102,NULL,1,true,'','H-Top','table'),
('C.H-top','TMP-wfagxqpk','C(H-top)','number',98,99,100,101,102,NULL,2,true,'','H-Top','table'),
('T.H-top','TMP-wfagxqpk','T(H-top)','number',98,99,100,101,102,NULL,3,true,'','H-Top','table'),

-- H-Bottom (4-6) - Width of Web
('H.H-bottom','TMP-wfagxqpk','H(H-bottom)','number',98,99,100,101,102,NULL,4,true,'','H-Bottom','table'),
('C.H-bottom','TMP-wfagxqpk','C(H-bottom)','number',98,99,100,101,102,NULL,5,true,'','H-Bottom','table'),
('T.H-bottom','TMP-wfagxqpk','T(H-bottom)','number',98,99,100,101,102,NULL,6,true,'','H-Bottom','table'),

-- B1 (7-9) - Height of Flange
('H.B1','TMP-wfagxqpk','H(B1)','number',48,49,50,51,52,NULL,7,true,'','B1','table'),
('C.B1','TMP-wfagxqpk','C(B1)','number',48,49,50,51,52,NULL,8,true,'','B1','table'),
('T.B1','TMP-wfagxqpk','T(B1)','number',48,49,50,51,52,NULL,9,true,'','B1','table'),

-- B2 (10-12) - Height of Flange
('H.B2','TMP-wfagxqpk','H(B2)','number',48,49,50,51,52,NULL,10,true,'','B2','table'),
('C.B2','TMP-wfagxqpk','C(B2)','number',48,49,50,51,52,NULL,11,true,'','B2','table'),
('T.B2','TMP-wfagxqpk','T(B2)','number',48,49,50,51,52,NULL,12,true,'','B2','table'),

-- b1 (13-15) - TOLERANCE DIUBAH: mengikuti Flange Thickness (5.5,6.25,7,7.75,8.5)
('H.b1','TMP-wfagxqpk','H(b1)','number',5.5,6.25,7,7.75,8.5,NULL,13,true,'','b1','table'),
('C.b1','TMP-wfagxqpk','C(b1)','number',5.5,6.25,7,7.75,8.5,NULL,14,true,'','b1','table'),
('T.b1','TMP-wfagxqpk','T(b1)','number',5.5,6.25,7,7.75,8.5,NULL,15,true,'','b1','table'),

-- b3 (16-18) - TOLERANCE DIUBAH: mengikuti Flange Thickness (5.5,6.25,7,7.75,8.5)
('H.b3','TMP-wfagxqpk','H(b3)','number',5.5,6.25,7,7.75,8.5,NULL,16,true,'','b3','table'),
('C.b3','TMP-wfagxqpk','C(b3)','number',5.5,6.25,7,7.75,8.5,NULL,17,true,'','b3','table'),
('T.b3','TMP-wfagxqpk','T(b3)','number',5.5,6.25,7,7.75,8.5,NULL,18,true,'','b3','table'),

-- b2 (19-21) - TOLERANCE DIUBAH: mengikuti Flange Thickness (5.5,6.25,7,7.75,8.5)
('H.b2','TMP-wfagxqpk','H(b2)','number',5.5,6.25,7,7.75,8.5,NULL,19,true,'','b2','table'),
('C.b2','TMP-wfagxqpk','C(b2)','number',5.5,6.25,7,7.75,8.5,NULL,20,true,'','b2','table'),
('T.b2','TMP-wfagxqpk','T(b2)','number',5.5,6.25,7,7.75,8.5,NULL,21,true,'','b2','table'),

-- b4 (22-24) - TOLERANCE DIUBAH: mengikuti Flange Thickness (5.5,6.25,7,7.75,8.5)
('H.b4','TMP-wfagxqpk','H(b4)','number',5.5,6.25,7,7.75,8.5,NULL,22,true,'','b4','table'),
('C.b4','TMP-wfagxqpk','C(b4)','number',5.5,6.25,7,7.75,8.5,NULL,23,true,'','b4','table'),
('T.b4','TMP-wfagxqpk','T(b4)','number',5.5,6.25,7,7.75,8.5,NULL,24,true,'','b4','table'),

-- b1-b2/2 (25-27) - tetap menggunakan toleransi Web Off Center karena perhitungan offset
('H.b1-b2/2','TMP-wfagxqpk','H(b1-b2/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,25,true,'','b1-b2/2','table'),
('C.b1-b2/2','TMP-wfagxqpk','C(b1-b2/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,26,true,'','b1-b2/2','table'),
('T.b1-b2/2','TMP-wfagxqpk','T(b1-b2/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,27,true,'','b1-b2/2','table'),

-- b3-b4/2 (28-30) - tetap menggunakan toleransi Web Off Center karena perhitungan offset
('H.b3-b4/2','TMP-wfagxqpk','H(b3-b4/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,28,true,'','b3-b4/2','table'),
('C.b3-b4/2','TMP-wfagxqpk','C(b3-b4/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,29,true,'','b3-b4/2','table'),
('T.b3-b4/2','TMP-wfagxqpk','T(b3-b4/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,30,true,'','b3-b4/2','table'),

-- t1 (31-33) - Flange Thickness
('H.t1','TMP-wfagxqpk','H(t1)','number',5.5,6.25,7,7.75,8.5,NULL,31,true,'','t1','table'),
('C.t1','TMP-wfagxqpk','C(t1)','number',5.5,6.25,7,7.75,8.5,NULL,32,true,'','t1','table'),
('T.t1','TMP-wfagxqpk','T(t1)','number',5.5,6.25,7,7.75,8.5,NULL,33,true,'','t1','table'),

-- t3 (34-36) - Flange Thickness
('H.t3','TMP-wfagxqpk','H(t3)','number',5.5,6.25,7,7.75,8.5,NULL,34,true,'','t3','table'),
('C.t3','TMP-wfagxqpk','C(t3)','number',5.5,6.25,7,7.75,8.5,NULL,35,true,'','t3','table'),
('T.t3','TMP-wfagxqpk','T(t3)','number',5.5,6.25,7,7.75,8.5,NULL,36,true,'','t3','table'),

-- t2 (37-39) - Flange Thickness
('H.t2','TMP-wfagxqpk','H(t2)','number',5.5,6.25,7,7.75,8.5,NULL,37,true,'','t2','table'),
('C.t2','TMP-wfagxqpk','C(t2)','number',5.5,6.25,7,7.75,8.5,NULL,38,true,'','t2','table'),
('T.t2','TMP-wfagxqpk','T(t2)','number',5.5,6.25,7,7.75,8.5,NULL,39,true,'','t2','table'),

-- t4 (40-42) - Flange Thickness
('H.t4','TMP-wfagxqpk','H(t4)','number',5.5,6.25,7,7.75,8.5,NULL,40,true,'','t4','table'),
('C.t4','TMP-wfagxqpk','C(t4)','number',5.5,6.25,7,7.75,8.5,NULL,41,true,'','t4','table'),
('T.t4','TMP-wfagxqpk','T(t4)','number',5.5,6.25,7,7.75,8.5,NULL,42,true,'','t4','table'),

-- t5 (43-45) - Web Thickness
('H.t5','TMP-wfagxqpk','H(t5)','number',4,4.65,5.3,5.95,6.6,NULL,43,true,'','t5','table'),
('C.t5','TMP-wfagxqpk','C(t5)','number',4,4.65,5.3,5.95,6.6,NULL,44,true,'','t5','table'),
('T.t5','TMP-wfagxqpk','T(t5)','number',4,4.65,5.3,5.95,6.6,NULL,45,true,'','t5','table'),

-- t6 (46-48) - order_numb null
('H.t6','TMP-wfagxqpk','H(t6)','number',4,4.65,5.3,5.95,6.6,NULL,NULL,true,'','t6','table'),
('C.t6','TMP-wfagxqpk','C(t6)','number',4,4.65,5.3,5.95,6.6,NULL,47,true,'','t6','table'),
('T.t6','TMP-wfagxqpk','T(t6)','number',4,4.65,5.3,5.95,6.6,NULL,48,true,'','t6','table'),

-- t7 (49-51) - order_numb null
('H.t7','TMP-wfagxqpk','H(t7)','number',4,4.65,5.3,5.95,6.6,NULL,NULL,true,'','t7','table'),
('C.t7','TMP-wfagxqpk','C(t7)','number',4,4.65,5.3,5.95,6.6,NULL,NULL,true,'','t7','table'),
('T.t7','TMP-wfagxqpk','T(t7)','number',4,4.65,5.3,5.95,6.6,NULL,NULL,true,'','t7','table'),

-- FormRight (52-60) 
('height.of.flange','TMP-wfagxqpk','Height of Flange','number',48,49,50,51,52,0,52,true,'','FormRight','Height of Flange'),
('flange.thickness','TMP-wfagxqpk','Flange Thickness','number',5.5,6.25,7,7.75,8.5,0,53,true,'','FormRight','Flange Thickness'),
('width.of.web','TMP-wfagxqpk','Width of Web','number',98,99,100,101,102,0,54,true,'','FormRight','Width of Web'),
('web.thickness','TMP-wfagxqpk','Web Thickness','number',4,4.65,5.3,5.95,6.6,0,55,true,'','FormRight','Web Thickness'),
('unit.weight','TMP-wfagxqpk','Unit Weight (Kgm)','number',8.6,9.05,9.5,9.95,10.4,0,56,true,'','FormRight','Unit Weight (Kgm)'),
('radius','TMP-wfagxqpk','Radius','number',0,0,8,0,0,0,57,true,'','FormRight','Radius'),
('web.off.center','TMP-wfagxqpk','Web Off Center','number',-2.5,-1.25,0,1.25,2.5,0,58,true,'','FormRight','Web Off Center'),
('os','TMP-wfagxqpk','OS','number',0,0,1.5,0,0,0,59,true,'','FormRight','OS'),
('cow','TMP-wfagxqpk','CoW','number',0,0,0,0,0,2,60,true,'','FormRight','CoW');

INSERT INTO qc_template_mapping (mapping_id, qc_template_id, group_name, position, order_numb) VALUES
('MAP' || LEFT(md5(random()::text), 8), 'TMP-wfagxqpk', 'Width of Web', 'H-Top', 0),
('MAP' || LEFT(md5(random()::text), 8), 'TMP-wfagxqpk', 'Width of Web', 'H-Bottom', 1),
('MAP' || LEFT(md5(random()::text), 8), 'TMP-wfagxqpk', 'Height of Flange', 'B1', 0),
('MAP' || LEFT(md5(random()::text), 8), 'TMP-wfagxqpk', 'Height of Flange', 'B2', 1),
('MAP' || LEFT(md5(random()::text), 8), 'TMP-wfagxqpk', 'Flange Thickness', 't1', 0),
('MAP' || LEFT(md5(random()::text), 8), 'TMP-wfagxqpk', 'Flange Thickness', 't2', 1),
('MAP' || LEFT(md5(random()::text), 8), 'TMP-wfagxqpk', 'Flange Thickness', 't3', 2),
('MAP' || LEFT(md5(random()::text), 8), 'TMP-wfagxqpk', 'Flange Thickness', 't4', 3),
('MAP' || LEFT(md5(random()::text), 8), 'TMP-wfagxqpk', 'Flange Thickness', 'b1', 4),  -- DIUBAH: b1 mapping ke Flange Thickness
('MAP' || LEFT(md5(random()::text), 8), 'TMP-wfagxqpk', 'Flange Thickness', 'b2', 5),  -- DIUBAH: b2 mapping ke Flange Thickness
('MAP' || LEFT(md5(random()::text), 8), 'TMP-wfagxqpk', 'Flange Thickness', 'b3', 6),  -- DIUBAH: b3 mapping ke Flange Thickness
('MAP' || LEFT(md5(random()::text), 8), 'TMP-wfagxqpk', 'Flange Thickness', 'b4', 7),  -- DIUBAH: b4 mapping ke Flange Thickness
('MAP' || LEFT(md5(random()::text), 8), 'TMP-wfagxqpk', 'Web Thickness', 't5', 0),
('MAP' || LEFT(md5(random()::text), 8), 'TMP-wfagxqpk', 'Web Thickness', 't6', 0),
('MAP' || LEFT(md5(random()::text), 8), 'TMP-wfagxqpk', 'Web Thickness', 't7', 0),
('MAP' || LEFT(md5(random()::text), 8), 'TMP-wfagxqpk', 'Web Off Center', 'b1-b2/2', 8),  -- Tetap di Web Off Center karena ini perhitungan offset
('MAP' || LEFT(md5(random()::text), 8), 'TMP-wfagxqpk', 'Web Off Center', 'b3-b4/2', 9),  -- Tetap di Web Off Center karena ini perhitungan offset
('MAP' || LEFT(md5(random()::text), 8), 'TMP-wfagxqpk', 'Radius', '', 0),
('MAP' || LEFT(md5(random()::text), 8), 'TMP-wfagxqpk', 'CoW', '', 0),
('MAP' || LEFT(md5(random()::text), 8), 'TMP-wfagxqpk', 'OS', '', 0),
('MAP' || LEFT(md5(random()::text), 8), 'TMP-wfagxqpk', 'Unit Weight (Kgm)', '', 0);